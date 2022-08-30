---
slug: criando-projeto-node-do-zero-pt1
title: Criando projeto Node.js do zero - Parte 1
description: Como iniciar um projeto utilizando Node.js?
keywords: [node, tutorial, projeto]
image: /img/node.jpg
tags: [node, tutorial, projeto]
authors: brunelli
---

A ideia dessa série de posts é clarear o caminho para quem está começando na programação, mais especificamente na linguagem Javascript, mas não tem muita noção de onde deve começar. Irei reunir alguns passos básicos para começar a desenvolver um backend com Node.js.

Durante essa série de posts iremos entender e aprender esses pontos (não necessariamente nessa ordem):

<!-- truncate -->

- Iniciar um projeto com Node.js.
- Fazer o setup básico, configurando linters, automações e variáveis de ambiente.
- Criar uma API totalmente funcional, se conectando a um banco de dados.
- Configurar o banco de dados utilizando o Docker.
- Entender e configurar testes automatizados.
- Entender e configurar um CI para automatizar alguns passos durante o deploy da aplicação.
- Remover algumas complexidades impostas pela comunidade, e que dificultam no aprendizado.
- Explicar o porquê de cada passo listado acima.

Vou tentar explicar no formato baby steps quando for algo um pouco mais complexo. Quando for algo mais simples irei seguir em frente. Caso algum ponto aqui fique confuso para você, pesquise no Google, utilizando palavras chaves, por exemplo: _Erro ao executar comando npm no terminal powershell windows 10_. Dessa forma você já se habitua a pesquisar pelo conhecimento. Caso você fique travado e desanimado, me mande uma mensagem em alguma das minhas redes sociais e irei te ajudar na medida do possível. Aqui no rodapé do blog você consegue encontrar o link delas.

## Por que vamos utilizar Node.js?

Alguns pontos devem ser levados em consideração durante a escolha de uma tecnologia, entre eles a facilidade de aprender, utilização no mercado, desempenho e adoção por parte da comunidade, sendo este último um dos mais importantes. Quanto mais pessoas utilizarem uma determinada tecnologia, mais conteúdo relacionado a ela será criado e compartilhado.

Node.js é um interpretador da linguagem Javascript, ou seja, iremos desenvolver 100% em Javascript, uma das linguagens mais utilizadas no mundo. Por se tratar de uma linguagem dinâmica, muitas das complexidades existentes em outras linguagens não existirão aqui, o que torna o caminho do estudande mais fácil e menos frustrante.

## Iniciar um projeto com Node.js (baby steps)

Vejo que grande parte dos estudantes, independente da linguagem tem uma dúvida em comum: _como começar a codar na minha linguagem?_ Por esse motivo irei fazer esse tópico em baby steps, para que fique claro o suficiente o que você irá precisar para deixar o projeto "no jeito" para codar.

### Instalação

Acesse o [Site Oficial do Node](https://nodejs.org/pt-br/download/) e faça o download da versão LTS para o sistema operacional do seu computador. Aqui no meu notebook estou utilizando o Ubuntu 20.04, que é uma ótima distribuição Linux para desenvolvedores.

Depois de instalado, abra seu terminal e digite `node -v` e `npm -v` posteriormente. O primeiro comando exibirá a versão do Node.js instalado, e o segundo mostrará a versão do gerenciador de pacotes do Node.js, o NPM. Esses dois são importantes para começarmos.

Aqui as versões instaladas foram 16.15.0 e 8.5.5 respectivamente.

### Setup inicial

Com seu Node.js e NPM instalados, acesse pelo terminal a sua pasta recém criada e execute `npm init -y`.
Crie uma pasta com um nome qualquer, em seguida abra essa pasta com seu editor de códigos favorito. Aqui estou utilizando o [Visual Studio Code](https://code.visualstudio.com/).

Após executar o comando será criado um arquivo chamado **package.json** com o seguinte conteúdo:

```json
{
  "name": "projeto-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

É nesse arquivo que ficam algumas informações como: nome do projeto, o que o projeto faz, quem é o autor, o que tem instalado nesse projeto (banco de dados, bibliotecas etc). Além disso ele nos possibilita criar alguns scripts para automatizar algumas tarefas como: executar o projeto, executar testes automatizados, arrumar identação do código e gerar alguma configuração extra etc.
Não se preocupe, iremos apredender como usá-lo ao longo desse projeto

### Executando nosso primeiro código

Crie na raiz do projeto um arquivo chamado **index.js**. Por padrão o Node.js executa o primeiro arquivo com nome **index.js** que ele encontrar na pasta.

Com o arquivo criado, digite o seguinte código:

```js title=index.js
console.log("Olá mundo!", "Este é meu primeiro código em Javascript!");
```

Para executar esse código rode no seu terminal `node index.js` ou `node .`. Deverá ter a seguinte saída: `$ Olá mundo! Este é meu primeiro código Javascript!`.

Agora vamos criar um script para executar nosso arquivo index.js. Abra o package.json e adicione essa linha em **scripts**:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

Para executar esse script, digite no terminal: `npm start`. O NPM irá ler o arquivo package.json e procurar no campo scripts o comando **start** e executar o que contém nele.

### Observações

Iniciar um projeto Node.js é algo muito trivial, e você deve conseguir fazê-lo sem grandes esforços. Veja que o comando `npm init -y` fez quase tudo por nós, ele criou o package.json com uma estrutura bem básica, porém suficiente para começarmos a desenvolver.

## Instalando bibliotecas externas

Bibliotecas são códigos que outros desenvolvedores criaram e disponibilizaram de forma pública para que todos possam utilizar. O [NPM tem um site](https://www.npmjs.com/) onde podemos consultar todos os pacotes públicos que podemos utilizar em nosso projeto.

Nosso objetivo é criar um sistema que se comunique via API's e banco de dados, então vamos precisar de bibliotecas que nos auxiliem nesse processo.
A biblioteca mais utilizada para criar API's em Node.js é o [Express](https://www.npmjs.com/package/express). Com ele é possivel criar um servidor web que aceita requisições HTTP de forma fácil e intuitiva.

[Aqui na página do Express no npmjs.com](https://www.npmjs.com/package/express) tem um bocado de informações sobre o framework, o que ele faz, como instalar, como implementar etc. Dê uma lida, e habitue-se com esse formato de documentação, pois o npmjs.com será muito visitado por nós.