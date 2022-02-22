---
slug: criando-atalhos-para-o-git
title: Criando atalhos para o git
description: Hoje vou ensinar como criar atalhos para o git que vão aumentar tua produtividade. Sem muita enrolação, vamos direto para a prática...
keywords: [git, aliases, shortcut]
image: /img/git.jpg
tags: [git, aliases]
authors: brunelli
---

![Git Logo](/img/git.jpg)

Olá, tudo bem?

Hoje vou ensinar como criar atalhos para o **git** que vão aumentar tua produtividade.
Sem muita enrolação, vamos direto para a prática.

## Escolher o editor de textos padrão

Antes de começar, é bom configurar o editor de texto de sua preferência. Eu vou utilizar o [Vim](https://www.vim.org/), mas você pode utilizar o Code, Nano etc.

<!-- truncate -->

### Configurar editor

Subistitua o **"vim"** pelo editor de sua preferencia. Segue a lista dos mais utilizados:

- vim
- nano
- code
- gedit

```bash title="Definir editor padrão"
git config --global core.editor vim
```

## Prontos para começar

### Abrir arquivo de configurações do git

Isso abritá seu arquivo de configurações do git em seu editor de texto.

```bash title="Abrindo meu arquivo de configurações"
git config --global --edit
```

### Adicionar usuário

É importante adicionar um usuário ao seu git config, pois ele será utilizado em seus commits.

```bash title="Configurando meu git"
[user]
    email = meu_email@mail.com
    name = nome_que_aparecera_nos_commits
```

## Atalhos

### git status

Vamos definir nosso primeiro atalho, o `git status -s`. Esse comando exibe o status atual da sua **stage area**, quais arquivos estão commitados, e quais foram modificados.

```bash title="Configurando meu git"
[user]
    email = meu_email@mail.com
    name = nome_que_aparecera_nos_commits

[alias]
    s = !git status -s
```

Agora o status dos seus commits ficarão mais clean.

### git add && git commit

Esses dois são muito utilizados, que tal torná-los em um único comando?

```bash title="Configurando meu git"
[user]
    email = meu_email@mail.com
    name = nome_que_aparecera_nos_commits

[alias]
    s = !git status -s
    c = !git add --all && git commit -m
```

Agora quando digitarmos `git c` em nosso terminal, nosso **alias** irá adicionar e commitar ao mesmo tempo, só vamos precisar informar a mensagem. Exemplo:

```bash title="Configurando meu git"
git c 'feat: agora ficou mais fácil!'
```

### git pull/push origin HEAD

Outro comando muito utilizado. Vamos simplificá-lo.

```bash title="Configurando meu git"
[user]
    email = meu_email@mail.com
    name = nome_que_aparecera_nos_commits

[alias]
    s = !git status -s
    c = !git add --all && git commit -m
    pullo = !git pull origin HEAD
    pusho = !git push origin HEAD
```

Agora podemos usar essa combinação:

```bash
git c 'feat: adicionar simplicidade' && git pusho
```

### git log

Quem nunca se perdeu ao utilizar um `git log`? São muitas informações de uma vez. Vamos simplificar:

```bash title="Configurando meu git"
[user]
    email = meu_email@mail.com
    name = nome_que_aparecera_nos_commits

[alias]
    s = !git status -s
    c = !git add --all && git commit -m
    pullo = !git pull origin HEAD
    pusho = !git push origin HEAD
    l = !git log --pretty=format:'%h %s %cn %cr'
```

#### Vamos entender o que fizemos

- **%h**: id do commit (hash)
- **%s**: mensagem do commit
- **%cn**: autor do commit
- **%cr**: quanto tempo desde o commit

Agora seu `git l` retornará os dados do commit de uma forma bem resumida. Também dá pra mudar a cor, vou deixar a documentação logo abaixo pra você consultar.

## Links úteis

- [Pretty format](https://git-scm.com/docs/pretty-formats)
- [Git config](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

## Conclusão

Não existe limites, podemos combinar vários comandos e simplificar nossa rotina. Agora você pode brincar e criar seus próprios atalhos!

Espero que tenha gostado! Se te ajudou de alguma maneira, compartilhe com seus amigos e colegas de trabalho!

Até a próxima!
