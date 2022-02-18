---
slug: por-que-construí-um-validador-de-objetos
title: Por que construí um validador de objetos?
authors: brunelli
tags: [npm, pacote npm]
---

![Logo NPM](npm.png)

Eai galera, tudo bem com vocês? Espero que sim.
Hoje gostaria de compartilhar como **criei meu primeiro pacote npm**, quais foram minhas motivações e as etapas desde a ideia até o publish.

Primeiramente, por que contruí um pacote de validar objetos, sendo que o npm **está cheio deles?**
Bem, essa decisão foi um pouco difícil, visto que já existe um validador de schemas muito famoso na comunidade, o famigerado [**Yup**](https://www.npmjs.com/package/yup).

<!-- truncate -->

### Vamos às motivações

A primeira motivação foi que, eu sempre quis **criar um pacote npm que não fosse inútil**, mas nunca tinha a oportunidade ou **criatividade** para tal. Acontece que, durante o trabalho surgiu uma dificuldade de validar alguns campos que a API de um ERP retornava.
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

Tá, qual o problema desse retorno? Muitos! A API não retorna status code 40x quando alguma request falha por algum motivo. Ela sempre retorna 200, mas com alguns campos diferentes. Por exemplo:

- Quando a ação não é executada, o campo "status" retorna "0"
- Quando a ação é executada mas não retorna dados, o campo "status" retorna "1", mas o campo "total" retorna "0"
- Alguns endpoints retornam o campo "responseBody.entities", outros "responseBody.fieldsMetaData". E o payload todo muda.

### Outro endpoint

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

Veja que não tem um padrão, pois dessa vez retornou "status" "0" com um campo novo "statusMessage", porém o status code é 200.

Como o servidor onde o código fonte estava só suportava Node versão 12, algumas features como **optional chaining** não estavam disponíveis. Dessa forma tive que validar o retorno da API de uma forma muito verbosa:

```js title="Trecho da validação"
const hasERPSuccessResponse =
  response &&
  response.status === 200 &&
  response.data &&
  response.data.status === "1" &&
  response.data.responseBody &&
  response.data.responseBody.entities &&
  response.data.responseBody.entities.total > "0";

if (hasERPSuccessResponse) {
  // prossegue...
}
```
