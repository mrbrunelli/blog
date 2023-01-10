---
slug: como-validar-dados-de-uma-forma-elegante
title: Como validar dados de uma forma elegante
description: Hoje vou ensinar uma maneira bem elegante de validar dados no Javascript. E o mais legal, usando somente os recursos nativos da linguagem!
keywords: [validator, javascript, array]
image: /img/every.png
tags: [validador, javascript, every]
authors: brunelli
---

Salve galera, tudo bem com vocês?
Hoje vou ensinar uma maneira bem elegante de validar dados no Javascript. E o mais legal, usando somente os recursos nativos da linguagem.

## Entendendo o cenário

Imagine o seguinte cenário, você precisa construir uma API que irá receber os dados de pessoas que querem receber notificações regulares sobre seu catálogo de produtos.

<!-- truncate -->

### Requisitos

Para sua regra de negócios funcionar, você irá precisar dos seguintes requisitos:

- Sua API deve ser construída da forma mais simples possível, se possível uma [Lambda](https://aws.amazon.com/pt/lambda/).
- A rota deve ser do tipo POST.
- Receber do cliente nome, sobrenome, email e o cep.
- Todos os dados são obrigatórios.

## Implementação do endpoint

Vamos pular toda a parte da construção da API. Vamos prosseguir como se toda a infraestrutura já estivesse montada. Algo mais ou menos assim:

```js title="subscribers.js"
exports.subscribers = async (req, res) => {
  try {
    const { first_name, last_name, email, cep } = red.body;

    await subscribersRepository.insert({
      first_name,
      last_name,
      email,
      cep,
    });

    return res.status(200).json({
      message:
        "Obrigado por assinar nosso catálogo! Em breve enviaremos a edição desse mês por e-mail.",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
```

Lembra que eu disse que os dados do cliente devem ser obrigatórios? Em nenhum momento nós estamos validando isso. Da maneira como os dados estão vindo, estou repassando para meu repository.

## Possibilidades

### Condicionais: `if else`

A maneira mais simples de satisfazer nossa validação é criar um `if` para cada campo e lançar uma exceção caso algum retorne `false`.

### Loops padrões: `for`

Outra maneira é criar um `for` e percorrer o `req.body` com o `Object.keys` e verificar campo a campo.

### Conhecendo o `every`

Mas nosso querido Javascript já possuí um maravilhoso recurso que fará todo trabalho pesado para nós, e tudo isso de forma nativa, sem precisarmos instalar um pacote externo.

O [every](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every) é um método que itera nosso array e retorna `true` somente se todos os índices retornarem `true`. Com ele é possível percorrer nosso `req.body`, e caso não tenha um determinado campo, automagicamente retornará `false`, interrompendo dessa forma a iteração.

Vamos ver como ficará:

```js title="subscribersValidator.js"
class SubscriberValidator {
  static isValid(data = {}) {
    const requiredFields = ["first_name", "last_name", "email", "cep"];
    return requiredFields.every((field) => data.hasOwnProperty(field));
  }
}
```

Note que para cada campo iterado do nosso `requiredFields`, testamos com o [hasOwnProperty](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty) se `field` está presente no objeto `data`.

## Implementando o nosso validador

Voltemos ao código do nosso endpoint, agora com nosso `SubscriberValidator`.

```js title="subscribers.js"
const SubscriberValidator = require("./validators/subscriber-validator");

exports.subscribers = async (req, res) => {
  try {
    if (!SubscriberValidator.isValid(req.body)) {
      throw new Error("Favor preencher todos os campos.");
    }

    const { first_name, last_name, email, cep } = red.body;

    await subscribersRepository.insert({
      first_name,
      last_name,
      email,
      cep,
    });

    return res.status(200).json({
      message:
        "Obrigado por assinar nosso catálogo! Em breve enviaremos a edição desse mês por e-mail.",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
```

Veja como ficou enxuta nossa feature. E o melhor é que o `every` interrompe imediatamente o loop e retorna `false` caso algum campo não esteja lá no `req.body`.

### Bônus

Podemos refatorar nosso `SubscriberValidator` e retornar o campo que o usuário esqueceu de informar:

```js title="subscribersValidator.js"
class SubscriberValidator {
  static isValid(data = {}) {
    const requiredFields = ["first_name", "last_name", "email", "cep", "phone"];
    let missingField;

    const isValid = requiredFields.every((field) => {
      const hasField = data.hasOwnProperty(field);
      if (!hasField) missingField = field;
      return hasField;
    });

    return {
      isValid,
      missingField,
    };
  }
}
```

Podemos refatorar nosso endpoint e retornar o campo que está faltando na `response`. Dessa forma o usuário saberá onde errou:

```js title="subscribers.js"
const SubscriberValidator = require("./validators/subscriber-validator");

exports.subscribers = async (req, res) => {
  try {
    const { isValid, missingField } = SubscriberValidator.isValid(req.body);

    if (!isValid) {
      throw new Error(`O campo '${missingField}' é obrigatório!`);
    }

    const { first_name, last_name, email, cep } = red.body;

    await subscribersRepository.insert({
      first_name,
      last_name,
      email,
      cep,
    });

    return res.status(200).json({
      message:
        "Obrigado por assinar nosso catálogo! Em breve enviaremos a edição desse mês por e-mail.",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
```

## Conclusão

Utilizamos somente recursos nativos da nossa linguagem e evitamos pacotes externos desnecessários.

Caso sua API precisasse de muitas validações, gravação de logs, mensagens super refinadas, ai sim seria melhor utilizar um pacote para fazer esse trabalho.

Mas aqui era algo extremamente simples.

Espero que tenha gostado! Compartilhe essa postagem com seus amigos e colegas de trabalho! Vou ficando por aqui, até a próxima!
