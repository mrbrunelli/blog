---
slug: como-foi-construir-um-validador-de-objetos
title: Como foi construir um validador de objetos?
description: Primeiramente, por que contruí um pacote de validar objetos, sendo que o npm está cheio deles...
keywords: [validator, object validator, schema validator, npm]
image: ./npm.png
authors: brunelli
tags: [npm, pacote npm, validator, validador de objetos]
---

![Logo NPM](npm.png)

Eai galera, tudo bem com vocês? Espero que sim.
Hoje gostaria de compartilhar como **criei meu primeiro pacote npm**, quais foram minhas motivações e as etapas desde a ideia até o publish.

Primeiramente, por que contruí um pacote de **validar objetos**, sendo que o npm **está cheio deles?**
Bem, essa decisão foi um pouco difícil, visto que já existe um validador de schemas muito famoso na comunidade, o famigerado [**Yup**](https://www.npmjs.com/package/yup).

<!-- truncate -->

### Vamos às motivações

A primeira motivação foi que, eu sempre quis **criar um pacote npm que não fosse inútil**, mas nunca tinha a oportunidade ou **criatividade** para tal.
Acontece que, durante o trabalho surgiu uma dificuldade de validar alguns campos que a API de um ERP retornava, devido a sua volatilidade.

Algo mais ou menos assim:

```json title="Response do ERP"
{
  "serviceName": "CRUDServiceProvider.loadRecords",
  "status": "1",
  "pendingPrinting": "false",
  "transactionId": "6BB89D3B72BEDCE69E51C5698DF3BB23",
  "responseBody": {
    "entities": {
      "total": "0",
      "hasMoreResult": "false",
      "offsetPage": "0",
      "offset": "0",
      "metadata": {
        "fields": {
          "field": {
            "name": "NUNOTA"
          }
        }
      }
    }
  }
}
```

Tá, qual o problema desse retorno? Parece um retorno normal de uma API normal, mas não! A API não retorna status code 40x quando alguma request falha por algum motivo. Ela sempre retorna 200, mas com alguns campos diferentes. Por exemplo:

- Quando a ação não é executada por completo, **o campo "status" retorna "0"**.
- Quando a ação é executada mas não retorna dados, **o campo "status" retorna "1"**, mas **o campo "total" retorna "0"**.
- Alguns endpoints retornam **o campo "responseBody.entities**", outros "**responseBody.fieldsMetaData"**, e consequentemente, toda a árvore de objetos é alterada.

### Resposta de outro endpoint do mesmo ERP

```json title="Response do ERP"
{
  "serviceName": "DbExplorerSP.executeQuery",
  "status": "0",
  "pendingPrinting": "false",
  "transactionId": "1BFB4FBFB934D9BE62BD06D5412C5A19",
  "tsError": {
    "tsErrorCode": "CORE_E03690",
    "tsErrorLevel": "ERROR"
  },
  "statusMessage": "Permitido apenas a execu��o de consultas, a instru��o possui 'UPDATE', 'DELETE' ou 'INSERT' e tais comandos n�o s�o permitidos."
}
```

Veja que não tem um padrão, **pois dessa vez retornou "status" "0" com um campo novo "statusMessage"**, porém o status code da requisição é 200, de sucesso.

Como o servidor onde o código fonte estava só suportava Node versão 12, algumas features como **optional chaining** não estavam disponíveis. Dessa forma tive que validar o retorno da API de uma forma muito verbosa:

```js title="Validação da response"
const hasERPSuccessResponse =
  response &&
  response.status === 200 &&
  response.data &&
  response.data.status === "1" &&
  response.data.responseBody &&
  response.data.responseBody.entities &&
  response.data.responseBody.entities.total !== "0";

if (hasERPSuccessResponse) {
  // prossegue...
}
```

### Ficar toda hora fazendo as mesmas validações fez com que eu me sentisse um perfeito idiota

Então comecei a pensar em como eu poderia abstrair esse tipo de validação, mas sem precisar ficar mapeando todas as combinações possíveis da resposta.
Eu queria continuar fazendo o "if", da maneira como faria com o **optional chaining**.

```js title="Como seria a validação no Node 14+"
const hasERPSuccessResponse =
  response?.status === 200 &&
  response?.data?.status === "1" &&
  response?.data?.responseBody?.entities?.total !== "0";
```

### Etapas

Pensei, preciso criar uma função que:

- Receba o objeto a ser validado.
- Receba os campos a serem procurados no objeto.
- Deve validar independente do formato de objeto fornecido.
- Deve validar chave e valor.
- Deve permitir validar campos com nomes iguais, mas em localizações diferentes.
- Deve retornar apenas booleano, nada de exceções ou mensagens.

Imaginei algo mais ou menos com esse design:

```js title="Validador de objetos"
const isValid = objectValidator(response, [
  "status",
  "response.data.status",
  "response.data.responseBody.entities",
]);

if (isValid) {
  // prossegue...
}
```

Do jeito que montei já estava legal, mas eu precisava validar os valores dos campos também, e então começou a ficar complexo. Comecei a imaginar vários cenários onde minha função quebraria, e comecei a desanimar.

### Mas nunca desisto fácil de algo

Como estou estudando muito sobre **TDD**, resolvi escrever todos os cenários possíveis no teste, antes mesmo de começar a programar uma linha de código.
Me lembro que quando comecei, o arquivo de testes estava mais ou menos assim:

```js title="objectValidator.test.js"
describe("objectValidator", () => {
  test.todo("deve chamar a função com um objeto no primeiro parâmetro");
  test.todo("deve chamar a função com um array de campos no segundo parâmetro");
  test.todo("deve retornar falso se algum campo for fornecido incorretamente");
  test.todo(
    "deve retornar falso se um dos campos fornecidos não forem encontrado no objeto"
  );
  // ...
});
```

### TDD me ensinou a resolver um problema por vez

Seguindo esse modelo, coloquei todos os possíveis cenários em **TODOS**, e fui implementando um a um.
Já era de noite quando completei meus **TODOS**, e minha função estava totalmente funcional, e muito performática.

Comecei a criar cenários totalmente caóticos, fornecendo várias vezes os mesmos campos, deixando de informar valores em alguns, e BOOM! **O algoritmo continuou funcionando perfeitamente!**

Nem acreditei que consegui criar algo tão útil em tão pouco tempo. Na manhã seguinte, um sábado muito agradável, resolvi criar uma conta no NPM e publicar a primeira versão funcional. Utilizei o CI do GitHub para garantir que tudo que chegasse à branch **main** estivesse de fato testado.

### Para minha surpresa

Domingo de manhã meu pacote já estava com mais de 100 downloads, senti uma euforia tão grande! Meu repositório no GitHub havia sido clonado mais de 50x e visitado por dezenas de pessoas diferentes.
Algo tão simples, passou a ajudar um punhado de pessoas, que **preferiram utilizar meu pacote de 6kb** ao invés do Yup, que contém **inúmeras funcionalidades**.

Essa foi uma grande experiência pra mim, e de agora em diante, sempre que eu criar algo útil, irei publicar para que outras pessoas também possam utilizar.

### Tá, mas como ficou a implementação?

Vou deixar o repo aqui em baixo. Migrei tudo pra Typescript quando tive mais tempo e gerei os arquivos d.ts, pra garantir tipagens para quem está utilizando no Javascript.

- [**Repo GitHub**](https://github.com/mrbrunelli/object-validator)
- [**Link do NPM**](https://www.npmjs.com/package/@mrbrunelli/object-validator)

Por hoje é isso, espero que tenha gostado da pequena história, até a próxima!
