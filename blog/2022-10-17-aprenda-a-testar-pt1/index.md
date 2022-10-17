---
slug: aprenda-a-testar-pt1
title: Aprenda a escrever testes - Parte 1
description: Para que servem os testes? Como faço para escrever um teste?
keywords: [teste, cobertura, qualidade]
image: /img/node.jpg
tags: [teste, cobertura, qualidade]
authors: brunelli
---

Para que servem os testes? Como faço para escrever um teste? Esse tema ainda pode ser muito confuso para quem está começando a programar, e até para quem já possuí mais tempo de estrada.

<!-- truncate -->

## Afinal, para que servem os testes?

Antes de responder essa pergunta, vamos entender de que testes estamos falando. A primeira coisa que me vem a mente quando alguém me pede para testar a aplicação é: **executar a aplicação e fazer alguma ação e ver se o resultado esperado foi alcançado.**

Esse conceito está correto, e de fato isso é "testar a aplicação". Entretanto uma aplicação irá conter muitos recursos, que se forem testadas de forma manual, levará muito tempo e desgastará quem está testando. Também haverá possibilidades de erros humanos durante esse processo.

### Testes automatizados

Para isso existem os **testes automatizados**, que é uma forma de **executar um script que irá testar todas as ações da aplicação**, de forma automática, **simulando a interação humana** e observando se **o resultado esperado foi alcaçado**.

Os benefícios dessa prática são muitos, visto que, se o teste é automatizado, posso executá-lo e assim esperar para ver se todas as funcionalidades do sistema **ainda estão ok e se comportando como deveriam**. Dessa forma é possível simular toda a interação humana em todos os módulos do sistema, **e em poucos segundos.**

### Requisitos para escrever um teste

Primeiramente devemos entender as regras de negócio da aplicação, e saber como devem se comportar em diferentes situações.

Vamos supor que nosso sistema recebe dois números e retorna a soma desses números para o usuário. Para escrever um teste em cima dessa funcionalidade, deveremos prover **dois números de entrada** e observar se o valor retornado **é a soma dos dois números fornecidos**. Se o resultado de fato for a soma dos dois números fornecidos, então o teste passará, do contrário ele reprovará.

### Exemplo 1

```ts title="calculadora.ts"
export class Calculadora {
  somar(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
}
```

```ts title="calculadora.test.ts"
import { Calculadora } from "./calculadora";

test("Deve somar 10 + 10 e retornar 20", () => {
  const calculadora = new Calculadora();
  const resultado = calculadora.somar(10, 10);

  expect(resultado).toBe(20); // true, logo o teste passará.
});
```

### Exemplo 2

Agora, se eu alterar a regra de negócios do método **somar**, e fazê-lo retornar a multiplicação ao invés da soma, **nosso teste irá reprovar**, pois ele espera que o resultado seja **20** e não **100**.

```ts title="calculadora.ts"
export class Calculadora {
  somar(numero1: number, numero2: number) {
    return numero1 * numero2;
  }
}
```

```ts title="calculadora.test.ts"
import { Calculadora } from "./calculadora";

test("Deve somar 10 + 10 e retornar 20", () => {
  const calculadora = new Calculadora();
  const resultado = calculadora.somar(10, 10);

  console.log(resultado); // 100

  expect(resultado).toBe(20); // 100 != 20, logo é false, o teste reprovará.
});
```

## O que eu devo testar?

Posso testar as regras de negócio de uma classe **(unidade)**, a integração de um serviço com o banco de dados **(integração)** e o comportamento geral do sistema **(de ponta a ponta)**.

Logo temos testes de unidade, testes de integração e testes de ponta a ponta.

Para que haja uma excelente cobertura, devemos utilizar todos esses tipos de testes. Alguns desenvolvedores optam por utilizar apenas um desses tipos de testes, o que pode resultar em **uma ou várias lacunas na cobertura do sistema.**

## Resumo

- Testar é executar uma ação no sistema e observar se o resultado obtivo é de fato esperado.
- Testes automatizados excluem a necessidade de testes humanos e manuais.
- Os tipos de testes são: unidade, integração e de ponta a ponta.
- Testar garante que o comportamento do sistema será preservado. Em caso de quebra, os testes avisarão onde ocorreu a quebra.
- Se um sistema não possuí testes automatizados, não há como o desenvolvedor saber se a alteração que ele fez quebrou o sistema. Ele terá que testar manualmente, e em muitos dos casos poderão ocorrer falhas humanas e o sistema poderá ir para produção com defeito **(em muitos casos isso pode significar prejuízo financeiro para a empresa, e até falência da mesma).**
