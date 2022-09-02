---
slug: criando-projeto-node-do-zero-pt2
title: Criando projeto Node.js do zero - Parte 2
description: Como iniciar um projeto utilizando Node.js?
keywords: [node, tutorial, projeto]
image: /img/node.jpg
tags: [node, tutorial, projeto]
authors: brunelli
---

No post enterior vimos coisas básicas como instalar o Node.js, iniciar um projeto básico com o npm e até criamos nosso primeiro servidor http. No post de hoje vamos dar continuidade ao nosso servidor, e integrá-lo com o MongoDB, utilizando o Docker.

<!-- truncate -->

Lembrando que todo o código criado aqui estará disponível nesse [Repositório do GitHub](https://github.com/mrbrunelli/post-criando-projeto-node-do-zero/).

## Organizando a casa

Agora que tivemos uma demonstração de como o Express funciona, iremos prosseguir, mas desde já é bom dar uma organizada na casa. A princípio temos apenas um arquivo index.js que contém todo nosso código. Com o passar do tempo esse código tende a aumentar, tornando a legibilidade mais difícil.

Pensei na seguinte estrutura:

```sh title=projeto
├── index.js
├── package.json
└── src
    ├── app.js
    ├── models/
    ├── routes.js
    └── usecases/
```

O arquivo index.js continua sendo nosso _entrypoint_, e todo o resto que iremos construir ficará dentro de uma pasta _src_, isolando algumas responsabilidade.

### Habilitando importações de módulos

Com essa separação, nossos módulos vão se comunicar através de importações e exportações. Abra seu package.json e altere seu script start:

```json title=package.json
{
  "scripts": {
    "start": "node --experimental-specifier-resolution=node index.js"
  }
}
```

## Definindo o negócio

### Objetivo

Nós iremos criar um sistema simples de cadastro de cãezinhos abandonados para adoção, e para isso precisamos traduzir algumas coisas do mundo real para nosso código.

Vamos precisar de algumas informações, como nome, raça, sexo, idade e se ainda está disponível para adoção.

## Criando nossa primeira Model

Como podemos transferir dados reais de um cãozinho para nosso código? Através de uma Model. Model é uma representação no código de algo real. Como nós vamos utilizar o MongoDB para salvar nossos cachorros, vamos começar instalando uma biblioteca externa que irá nos auxiliar na criação dessas models.

Execute no seu terminal `npm install mongoose` e aguarde a instalação. Conforme combinamos, iremos precisar criar essas pastas **src/models**. Agora crie dentro da pasta models o arquivo dog.js, ficando dessa forma **models/dog.js**.

Agora vamos criar nossa model de cachorro com os atributos necessários:

```js title=dog.js
import mongoose from "mongoose";

const DogSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    breed: String,
    birthDate: Date,
    isAvailable: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Dog = mongoose.model("dog", DogSchema);
```

O Mongoose nos oferece um auxiliador para criar uma model, que é o Schema. Através dele nos podemos criar os atributos e os tipos. Ele também gera automaticamente o id do nosso cachorro e a data de criação e atualização, pois informamos a opção timestamps como true.

Veja que estamos exportando desse módulo apenas a constante Dog, que é uma model pronta baseada em DogSchema. O schema do mongoose possuí muitas outras funcionalidades como validadores, valores padrões e definição de campos obrigatórios. Você pode consultar isso na documentação da biblioteca. Aqui iremos utilizar apenas o básico que ela oferece.

## Casos de uso

Se a model contém as características do nosso cachorro, os casos de uso terão o comportamento do nosso sistema para com ele. Através do nosso caso de uso iremos pedir que o sistema grave um cachorro no banco de dados com as informações da model.

Então vamos precisar de uma pasta usecases dentro de src, ficando assim **src/usecases**. Vamos dar o nome desse arquivo de save-new-dog.js, ficando dessa forma **usecases/save-new-dog.js**

Abra o arquivo e adicione esse código:

```js title=save-new-dog.js
import { Dog } from "../models/dog";

export const saveNewdog = async (params) => {
  const { name, breed, genre, birthDate, isAvailable } = params;

  const dog = new Dog({ name, breed, genre, birthDate, isAvailable });
  await dog.save();

  return dog._id;
};
```

Primeiro começamos importando nossa Model de Dog do módulo models, e depois criamos uma função com o nome saveNewDog, que é assíncrona, e que recebe apenas um parâmetro. Logo abaixo nós desestruturamos params para obter alguns valores que iremos receber (da rota que iremos criar).

Em seguida criamos um new Dog com os valores extraídos de params. Com isso temos uma model, e podemos invocar a função save e retornar o id. Veja que em nenhum ponto configuramos nosso banco de dados, ou nossa rota, que receberá esses dados. Nós começamos pela camada mais importante, que é o modelo e a ação. Depois partimos para a implementação de infraestrutura desse código.

Até o momento nossa estrutura do projeto está assim:

```sh title=projeto
├── index.js
├── package.json
└── src
    ├── models
    │   └── dog.js
    └── usecases
        └── save-new-dog.js

```

## Configurando rotas

Agora que temos nossa model e nosso caso de uso criados, podemos criar a rota que receberá os dados do cliente, e retornará o id do cãozinho salvo.

Vamos criar um novo arquivo dentro de src chamado routes.js, ficando dessa forma **src/routes.js**. Aqui iremos agrupar todas as rotas que o express irá ler e disponibilizar online. Com o arquivo aberto, digite esse código:

```js title=routes.js
import express, { Router } from "express";
import { saveNewdog } from "./usecases/save-new-dog";

const router = express.Router();

router.post("/dogs", async (req, res) => {
  const id = await saveNewdog(req.body);
  res.send(id);
});

export { router };
```

Veja que estamos importanto o express e o Router do express, que nos possibilita criar rotas de qualquer lugar, basta exportá-lo e importá-lo onde o servidor está sendo instanciado.

A seguir estamos criando uma nova rota do tipo POST, que recebe uma arrow function assíncrona, com os parâmetros req de request e res de response. Em seguida invoco nosso caso de uso que salva um novo cão, passando como parâmetro um tal de req.body. Logo em seguida estou capturando o id retornado e respondendo ao nosso cliente.

Body é o corpo da requisição, e é de lá que irão vir os dados que precisamos. O cliente nos enviará esses dados. Essa é a grande diferença do POST para o GET. Usamos o POST quando queremos enviar um recurso para o servidor, e o GET para buscar um recurso existente.

## Configurando o MongoDB + Docker

Como eu disse no primeiro post, essa série de posts tem o intuito de ajudar a quem está estudando programação e a quem está na faculdade estudando mais especificamente Node.js, mas que estão confusos em alguns pontos. Portanto eu imagino que você já tenha o Docker instalado na sua máquina. Caso não tenha, [aqui na documentação do Docker](https://docs.docker.com/engine/install/) possuí alguns tutoriais para a instalação e configuração.

Nós poderiamos instalar o MongoDB diretamente no nosso sistema operacional, igual fizemos com o Node, porém isso dificultaria nosso gerenciamento dos banco de dados presentes no nosso computador. Com o Docker nós podemos criar e destruir muito facilmente uma instância de um banco, e com a mesma imagem podemos criar uma infinidade de instâncias de MongoDB no nosso computador.

### Utilizando o docker compose

Existem duas formas de criamos um container com MongoDB. A forma difícil utilizando Dockerfile, ou a forma fácil utilizando Docker Compose. Aqui irei ensinar a forma fácil, pois para o que precisamos ela atenderá.

Crie um arquivo na raíz do projeto, chamado **docker-compose.yml**, pois o Docker irá interpretar ele para saber o que construir. Com o arquivo aberto, insira esse código:

```yml title=docker-compose.yml
version: "3.1"

services:
  mongo:
    image: mongo
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: root
```

Abaixo de services é informado os serviços que iremos utilizar, que no caso é somente um, o MongoDB. Aqui no [hub do Docker](https://hub.docker.com/_/mongo/) possuí uma lista de versões disponíveis para o MongoDB. Iremos utilizar a última versão, por isso só passamos **mongo** ali em image.

Também configuramos qual porta o MongoDB irá utilizar, e de acordo com o Hub do Docker, a indicada é a 27017. Veja que eu repito duas vezes a porta, dessa forma **"27017:27017"**, isso porque eu quero que a porta 27017 do meu computador aponte para a porta 27017 do container do MongoDB.

Environment é onde configuramos algumas variáveis de ambiente dessa imagem do MongoDB, e nesse caso estamos configurando apenas duas, que é o usuário e senha. Quando conectartmos ao nosso banco, precisaremos informar essas credenciais.

### Criando container

Confira se o seu Docker está devidamente instalado, execute esse comando no terminal `docker --version` e `docker compose version`. Aqui estou utilizando as versões 20.10.17 e v2.6.0 respectivamente.

Dentro da pasta do seu projeto, execute no terminal `docker compose up -d` para criar seu container do MongoDB em background. Aguarde a criação do container e depois veja se ele realmente foi criado, execute `docker container ls`, deverá aparecer algo assim `$ 709fd8af3e72 mongo "docker-entrypoint.s…" 6 seconds ago Up 5 seconds 0.0.0.0:27017->27017/tcp, :::27017->27017/tcp projeto-node-mongo-1`

Veja que meu host está apontando a porta 27017 para a porta 27017 do container `0.0.0.0:27017->27017/tcp`, e isso garante que nossa aplicação conseguirá se comunicar com o banco de dados.

## Plugando o banco de dados da aplicação

Agora que nosso banco de dados existe, podemos apontar nossa aplicação para ele. Para isso, crie um novo arquivo **app.js** dentro de **src**, ficando dessa forma **src/app.js**.

Abra app.js e digite esse código:

```js title=app.js
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";

const app = express();

mongoose.connect("mongodb://root:root@localhost:27017/?authMechanism=DEFAULT", {
  dbName: "dogAdoption",
});

app.use(express.json());
app.use(router);

export { app };
```

Aqui estamos importando o express como feito antes, e agora temos algumas novidades. Temos a importação do mongoose para efetuar a conexão com nosso banco recem criado, também temos a importação das nossas rotas em routes.js.

Em `mongoose.connect()` passamos a uri do banco, seguido do nome. Veja que na própria uri informamos usuário, senha e porta. Qualquer um pode ver nossa conexão, e isso não é uma boa prática. Mais adiante nós vamos trabalhar com variáveis de ambiente, evitando colocar a uri marretada no código.

Veja que o express trabalha no formato de plugins, nós criamos o app e vamos adicionando funcionalidades conforme nossas necessidades. `app.use(express.json())` significa que estou habilitando o funcionamento de comunicação por json na nossa API. A partir de agora nosso cliente pode nos enviar dados por JSON.

`app.use(router)` significa que estamos pegando aquele conjunto de rotas e injetando em um único lugar de uma vez. Poderíamos repetir essa linha várias vezes, com rotas vindo de lugares diferentes. No final o express as torna públicas.

E por fim extamos exportando nosso `app`, sem iniciar o servidor com `app.listen()`. O motivo dessa abordagem é isolar nosso app de nosso servidor, dessa forma podemos testar nosso app sem precisar necessariamente do servidor ligado. Outro ponto é que podemos subir um ou vários servidores com o mesmo app, um na porta 3333, outro na 5000 e outro na 8080 por exemplo.

### Conectando o app ao servidor

Agora abra aquele arquivo index.js na raíz do projeto, e digite esse código:

```js title=index.js
import { app } from "./src/app";

app.listen(3333, () => {
  console.log("Servidor iniciado em http://localhost:3333");
});
```

Agora sim, nossa aplicação está pronta para executar, pois importamos nosso app, e estamos subindo o servidor na porta 3333. Lembrando que a porta pode ser outra, desde que não esteja em uso.

Até o momento nossa aplicação está com essa estrutura:

```sh title=projeto
├── docker-compose.yml
├── index.js
├── package.json
├── package-lock.json
└── src
    ├── app.js
    ├── models
    │   └── dog.js
    ├── routes.js
    └── usecases
        └── save-new-dog.js
```

## Adicionando variáveis de ambiente

Antes de iniciarmos a aplicação, vamos mover aquela uri de conexão para uma env. Vamos precisar de uma biblioteca para nos auxiliar, instale a dotenv `npm install dotenv`.

Após a instalação, crie um arquivo .env na raíz do projeto. O arquivo tem um ponto antes mesmo `.env`, pois ele será oculto pelo sistema operacional. Abra o arquivo e adicione essas duas linhas:

```sh title=.env
DB_URI=mongodb://root:root@localhost:27017/?authMechanism=DEFAULT
DB_NAME=dogAdoption
```

Agora vá até o app.js dentro de src, abra ele e faça essa modificação:

```js title=app.js
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";

dotenv.config();
const app = express();

mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });

app.use(express.json());
app.use(router);

export { app };
```

As modificações ocorretam na importação da dotenv e inicialização dela `dotenv.config()`, e depois em `mongoose.connect()`, ao invés de passarmos diretamente a string de conexão e nome do banco, estamos acessando por variável de ambiente `process.env`.

## Iniciando a aplicação

Agora que tudo está no seu devido lugar, execute `npm start` no seu terminal. Se a mensagem _"Servidor iniciado em http://localhost:3333"_ aparecer é porque deu tudo certo. Caso ainda não funcione, confira no link do GitHub que deixei no começo do post, e compare com seu código.

### Cadastrando um cãozinho para adoção

Agora que o servidor está executando, ele já pode receber uma request com os dados do cãozinho em **http://localhost:3333/dogs**. Para isso nós iremos precisar de uma ferramenta REST para enviar esses dados via POST em JSON.

Eu recomendo o [Insomnia REST](https://insomnia.rest/download), pois ele é muito fácil de usar, e é gratuito. Siga os passos no próprio site e instale ele.
