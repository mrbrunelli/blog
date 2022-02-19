"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[403],{637:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"como-foi-construir-um-validador-de-objetos","metadata":{"permalink":"/blog/en/como-foi-construir-um-validador-de-objetos","editUrl":"https://github.com/mrbrunelli/blog/tree/master/blog/2022-02-17-como-foi-construir-um-validador-de-objetos/index.md","source":"@site/blog/2022-02-17-como-foi-construir-um-validador-de-objetos/index.md","title":"Como foi construir um validador de objetos?","description":"Primeiramente, por que contru\xed um pacote de validar objetos, sendo que o npm est\xe1 cheio deles...","date":"2022-02-17T00:00:00.000Z","formattedDate":"February 17, 2022","tags":[{"label":"npm","permalink":"/blog/en/tags/npm"},{"label":"pacote npm","permalink":"/blog/en/tags/pacote-npm"},{"label":"validator","permalink":"/blog/en/tags/validator"},{"label":"validador de objetos","permalink":"/blog/en/tags/validador-de-objetos"}],"readingTime":4.89,"truncated":true,"authors":[{"name":"Matheus Ricardo Brunelli","title":"Desenvolvedor de Software S\xeanior","url":"https://github.com/mrbrunelli","imageURL":"https://avatars.githubusercontent.com/u/54479807?v=4","key":"brunelli"}],"frontMatter":{"slug":"como-foi-construir-um-validador-de-objetos","title":"Como foi construir um validador de objetos?","description":"Primeiramente, por que contru\xed um pacote de validar objetos, sendo que o npm est\xe1 cheio deles...","keywords":["validator","object validator","schema validator","npm"],"image":"/img/npm.png","authors":"brunelli","tags":["npm","pacote npm","validator","validador de objetos"]},"nextItem":{"title":"Como contornar a dor de escrever um teste unit\xe1rio?","permalink":"/blog/en/como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio"}},"content":"![Logo NPM](/img/npm.png)\\n\\nEai galera, tudo bem com voc\xeas? Espero que sim.\\nHoje gostaria de compartilhar como **criei meu primeiro pacote npm**, quais foram minhas motiva\xe7\xf5es e as etapas desde a ideia at\xe9 o publish.\\n\\nPrimeiramente, por que contru\xed um pacote de **validar objetos**, sendo que o npm **est\xe1 cheio deles?**\\nBem, essa decis\xe3o foi um pouco dif\xedcil, visto que j\xe1 existe um validador de schemas muito famoso na comunidade, o famigerado [**Yup**](https://www.npmjs.com/package/yup).\\n\\n\x3c!-- truncate --\x3e\\n\\n## Vamos \xe0s motiva\xe7\xf5es\\n\\n### Primeira\\n\\nEu sempre quis **criar um pacote npm que n\xe3o fosse in\xfatil**, mas nunca tinha a oportunidade ou **criatividade** para tal.\\n\\n### Segunda\\n\\nAcontece que, durante o trabalho surgiu uma dificuldade de validar alguns campos que a API de um ERP retornava, devido a sua volatilidade.\\nAlgo mais ou menos assim:\\n\\n```json title=\\"Response do ERP\\"\\n{\\n  \\"serviceName\\": \\"CRUDServiceProvider.loadRecords\\",\\n  \\"status\\": \\"1\\",\\n  \\"pendingPrinting\\": \\"false\\",\\n  \\"transactionId\\": \\"6BB89D3B72BEDCE69E51C5698DF3BB23\\",\\n  \\"responseBody\\": {\\n    \\"entities\\": {\\n      \\"total\\": \\"0\\",\\n      \\"hasMoreResult\\": \\"false\\",\\n      \\"offsetPage\\": \\"0\\",\\n      \\"offset\\": \\"0\\",\\n      \\"metadata\\": {\\n        \\"fields\\": {\\n          \\"field\\": {\\n            \\"name\\": \\"NUNOTA\\"\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n```\\n\\nT\xe1, qual o problema desse retorno? Parece um retorno normal de uma API normal, mas n\xe3o! A API n\xe3o retorna status code 40x quando alguma request falha por algum motivo. Ela sempre retorna 200, mas com alguns campos diferentes. Por exemplo:\\n\\n- Quando a a\xe7\xe3o n\xe3o \xe9 executada por completo, **o campo \\"status\\" retorna \\"0\\"**.\\n- Quando a a\xe7\xe3o \xe9 executada mas n\xe3o retorna dados, **o campo \\"status\\" retorna \\"1\\"**, mas **o campo \\"total\\" retorna \\"0\\"**.\\n- Alguns endpoints retornam **o campo \\"responseBody.entities**\\", outros \\"**responseBody.fieldsMetaData\\"**, e consequentemente, toda a \xe1rvore de objetos \xe9 alterada.\\n\\n```json title=\\"Response de outro endpoint do mesmo ERP\\"\\n{\\n  \\"serviceName\\": \\"DbExplorerSP.executeQuery\\",\\n  \\"status\\": \\"0\\",\\n  \\"pendingPrinting\\": \\"false\\",\\n  \\"transactionId\\": \\"1BFB4FBFB934D9BE62BD06D5412C5A19\\",\\n  \\"tsError\\": {\\n    \\"tsErrorCode\\": \\"CORE_E03690\\",\\n    \\"tsErrorLevel\\": \\"ERROR\\"\\n  },\\n  \\"statusMessage\\": \\"Permitido apenas a execu\ufffd\ufffdo de consultas, a instru\ufffd\ufffdo possui \'UPDATE\', \'DELETE\' ou \'INSERT\' e tais comandos n\ufffdo s\ufffdo permitidos.\\"\\n}\\n```\\n\\nVeja que n\xe3o tem um padr\xe3o, **pois dessa vez retornou \\"status\\" \\"0\\" com um campo novo \\"statusMessage\\"**, por\xe9m o status code da requisi\xe7\xe3o \xe9 200, de sucesso.\\n\\n### Terceira\\n\\nComo o servidor onde o c\xf3digo fonte estava s\xf3 suportava Node vers\xe3o 12, algumas features como **optional chaining** n\xe3o estavam dispon\xedveis. Dessa forma tive que validar o retorno da API de uma forma muito verbosa:\\n\\n```js title=\\"Valida\xe7\xe3o da response\\"\\nconst hasERPSuccessResponse =\\n  response &&\\n  response.status === 200 &&\\n  response.data &&\\n  response.data.status === \\"1\\" &&\\n  response.data.responseBody &&\\n  response.data.responseBody.entities &&\\n  response.data.responseBody.entities.total !== \\"0\\";\\n\\nif (hasERPSuccessResponse) {\\n  // prossegue...\\n}\\n```\\n\\n### Quarta\\n\\nFicar toda hora fazendo as mesmas valida\xe7\xf5es fez com que eu me sentisse um perfeito idiota\\n\\nEnt\xe3o comecei a pensar em como eu poderia abstrair esse tipo de valida\xe7\xe3o, mas sem precisar ficar mapeando todas as combina\xe7\xf5es poss\xedveis da resposta.\\nEu queria continuar fazendo o \\"if\\", da maneira como faria com o **optional chaining**.\\n\\n```js title=\\"Como seria a valida\xe7\xe3o no Node 14+\\"\\nconst hasERPSuccessResponse =\\n  response?.status === 200 &&\\n  response?.data?.status === \\"1\\" &&\\n  response?.data?.responseBody?.entities?.total !== \\"0\\";\\n```\\n\\n## Arquitetando a solu\xe7\xe3o em etapas\\n\\n### Primeira\\n\\nPensei, preciso criar uma fun\xe7\xe3o que:\\n\\n- Receba o objeto a ser validado.\\n- Receba os campos a serem procurados no objeto.\\n- Deve validar independente do formato de objeto fornecido.\\n- Deve validar chave e valor.\\n- Deve permitir validar campos com nomes iguais, mas em localiza\xe7\xf5es diferentes.\\n- Deve retornar apenas booleano, nada de exce\xe7\xf5es ou mensagens.\\n\\nImaginei algo mais ou menos com esse design:\\n\\n```js title=\\"Validador de objetos\\"\\nconst isValid = objectValidator(response, [\\n  \\"status\\",\\n  \\"response.data.status\\",\\n  \\"response.data.responseBody.entities\\",\\n]);\\n\\nif (isValid) {\\n  // prossegue...\\n}\\n```\\n\\nDo jeito que montei j\xe1 estava legal, mas eu precisava validar os valores dos campos tamb\xe9m, e ent\xe3o come\xe7ou a ficar complexo. Comecei a imaginar v\xe1rios cen\xe1rios onde minha fun\xe7\xe3o quebraria, e comecei a desanimar.\\n\\n### Segunda\\n\\nComo estou estudando muito sobre **TDD**, resolvi escrever todos os cen\xe1rios poss\xedveis no teste, antes mesmo de come\xe7ar a programar uma linha de c\xf3digo.\\nMe lembro que quando comecei, o arquivo de testes estava mais ou menos assim:\\n\\n```js title=\\"objectValidator.test.js\\"\\ndescribe(\\"objectValidator\\", () => {\\n  test.todo(\\"deve chamar a fun\xe7\xe3o com um objeto no primeiro par\xe2metro\\");\\n  test.todo(\\"deve chamar a fun\xe7\xe3o com um array de campos no segundo par\xe2metro\\");\\n  test.todo(\\"deve retornar falso se algum campo for fornecido incorretamente\\");\\n  test.todo(\\n    \\"deve retornar falso se um dos campos fornecidos n\xe3o forem encontrado no objeto\\"\\n  );\\n  // ...\\n});\\n```\\n\\n### Terceira\\n\\nO TDD me ensinou a resolver um problema por vez\\n\\nSeguindo esse modelo, coloquei todos os poss\xedveis cen\xe1rios em **TODOS**, e fui implementando um a um.\\nJ\xe1 era de noite quando completei meus **TODOS**, e minha fun\xe7\xe3o estava totalmente funcional, e muito perform\xe1tica.\\n\\nComecei a criar cen\xe1rios totalmente ca\xf3ticos, fornecendo v\xe1rias vezes os mesmos campos, deixando de informar valores em alguns, e BOOM! **O algoritmo continuou funcionando perfeitamente!**\\n\\nNem acreditei que consegui criar algo t\xe3o \xfatil em t\xe3o pouco tempo. Na manh\xe3 seguinte, um s\xe1bado muito agrad\xe1vel, resolvi criar uma conta no NPM e publicar a primeira vers\xe3o funcional. Utilizei o CI do GitHub para garantir que tudo que chegasse \xe0 branch **main** estivesse de fato testado.\\n\\n## Surpresa total\\n\\nDomingo de manh\xe3 meu pacote j\xe1 estava com mais de 100 downloads, senti uma euforia t\xe3o grande! Meu reposit\xf3rio no GitHub havia sido clonado mais de 50x e visitado por dezenas de pessoas diferentes.\\nAlgo t\xe3o simples, passou a ajudar um punhado de pessoas, que **preferiram utilizar meu pacote de 6kb** ao inv\xe9s do Yup, que cont\xe9m **in\xfameras funcionalidades**.\\n\\nEssa foi uma grande experi\xeancia pra mim, e de agora em diante, sempre que eu criar algo \xfatil, irei publicar para que outras pessoas tamb\xe9m possam utilizar.\\n\\n## T\xe1, mas como ficou a implementa\xe7\xe3o?\\n\\nVou deixar o repo aqui em baixo. Migrei tudo pra Typescript quando tive mais tempo e gerei os arquivos d.ts, pra garantir tipagens para quem est\xe1 utilizando no Javascript.\\n\\n- [**Repo GitHub**](https://github.com/mrbrunelli/object-validator)\\n- [**Link do NPM**](https://www.npmjs.com/package/@mrbrunelli/object-validator)\\n\\nPor hoje \xe9 isso, espero que tenha gostado da pequena hist\xf3ria, at\xe9 a pr\xf3xima!"},{"id":"como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio","metadata":{"permalink":"/blog/en/como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio","editUrl":"https://github.com/mrbrunelli/blog/tree/master/blog/2021-12-16-como-contornar-a-dor-de-escrever-um-teste-unitario/index.md","source":"@site/blog/2021-12-16-como-contornar-a-dor-de-escrever-um-teste-unitario/index.md","title":"Como contornar a dor de escrever um teste unit\xe1rio?","description":"Acredito que todo mundo concorda que um c\xf3digo sem testes, \xe9 um c\xf3digo inst\xe1vel e fr\xe1gil \xe0 mudan\xe7as...","date":"2021-12-16T00:00:00.000Z","formattedDate":"December 16, 2021","tags":[{"label":"tdd","permalink":"/blog/en/tags/tdd"},{"label":"testes","permalink":"/blog/en/tags/testes"},{"label":"teste unit\xe1rio","permalink":"/blog/en/tags/teste-unitario"}],"readingTime":3.63,"truncated":true,"authors":[{"name":"Matheus Ricardo Brunelli","title":"Desenvolvedor de Software S\xeanior","url":"https://github.com/mrbrunelli","imageURL":"https://avatars.githubusercontent.com/u/54479807?v=4","key":"brunelli"}],"frontMatter":{"slug":"como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio","title":"Como contornar a dor de escrever um teste unit\xe1rio?","description":"Acredito que todo mundo concorda que um c\xf3digo sem testes, \xe9 um c\xf3digo inst\xe1vel e fr\xe1gil \xe0 mudan\xe7as...","keywords":["tdd","tests","tdd example","tdd javascript"],"image":"/img/tdd.jpeg","authors":"brunelli","tags":["tdd","testes","teste unit\xe1rio"]},"prevItem":{"title":"Como foi construir um validador de objetos?","permalink":"/blog/en/como-foi-construir-um-validador-de-objetos"},"nextItem":{"title":"O impacto da educa\xe7\xe3o em minha vida","permalink":"/blog/en/o-impacto-da-educa\xe7\xe3o-em-minha-vida"}},"content":"![TDD Banner](/img/tdd.jpeg)\\n\\nSalve galera, tudo tranquilo? Esse \xe9 meu segundo artigo, e gostaria de compartilhar algo que vem me ajudando muito durante o desenvolvimento de software e na minha pr\xf3pria evolu\xe7\xe3o profissional.\\n\\nEstou falando sobre os **testes unit\xe1rios**. Acredito que todo mundo concorda que um c\xf3digo sem testes, \xe9 um c\xf3digo inst\xe1vel e fr\xe1gil \xe0 mudan\xe7as. \xc9 muito ruim programar no escuro, n\xf3s nunca temos certeza que o que estamos desenvolvendo ir\xe1 funcionar em produ\xe7\xe3o, sem conflitar com as features j\xe1 existentes.\\n\\nPor outro lado, escrever testes para uma feature j\xe1 implementada pode ser algo muito doloroso, por isso **muita gente prefere correr o risco e deixar o c\xf3digo sem cobertura.**\\n\\n\x3c!--truncate--\x3e\\n\\nMas recentemente venho estudando fortemente uma metodologia que abriu minha mente, o **TDD**, ou em portugu\xeas **\\"Desenvolvimento guiado por testes\\"**. No TDD n\xf3s criamos o teste primeiro, e s\xf3 depois criamos a implementa\xe7\xe3o de fato, que far\xe1 o teste passar. Isso faz com que nosso c\xf3digo sempre esteja coberto por testes.\\n\\n## Traduzindo\\n\\nSe eu quisesse criar uma fun\xe7\xe3o que me retornasse o maior n\xfamero de uma lista em Javascript, utilizando o **TDD** (escrevendo o teste primeiro), eu come\xe7aria fazendo algo mais ou menos assim:\\n\\n```js\\n// Arquivo: pegueOMaiorNumero.test.js\\n// Sintaxe de um framework de testes do Javascript\\n\\ndescribe(\\"pegueOMaiorNumero\\", () => {\\n  test(\\"deve retornar o maior n\xfamero de uma lista\\", () => {\\n    const maiorNumero = pegueOMaiorNumero([1, 9, 7, 15, 21, 10]);\\n    expect(maiorNumero).toBe(21);\\n  });\\n});\\n```\\n\\nNesse caso, eu forneci uma lista com alguns n\xfameros, onde o 21 \xe9 o maior deles. Mas note que em nenhum momento foi criada a fun\xe7\xe3o **pegueOMaiorNumero**. Estou invocando uma fun\xe7\xe3o que **ainda n\xe3o foi criada**, e ainda estou esperando que o resultado seja 21. Nesse caso o teste ir\xe1 falhar.\\n\\n\xc9 ai que a brincadeira come\xe7a. Quando o teste falha, \xe9 sinal de que precisamos implementar a feature que fa\xe7a esse teste passar.\\n\\n## Ent\xe3o vamos l\xe1!\\n\\nVou criar a fun\xe7\xe3o que far\xe1 o teste passar:\\n\\n```js\\n// Arquivo: pegueOMaiorNumero.test.js\\n\\nconst pegueOMaiorNumero = (numeros) => {\\n  let maior = 0;\\n\\n  for (let i = 0; i < numeros.length; i++) {\\n    if (numeros[i] > maior) {\\n      maior = numeros[i];\\n    }\\n  }\\n\\n  return maior;\\n};\\n\\ndescribe(\\"pegueOMaiorNumero\\", () => {\\n  test(\\"deve retornar o maior n\xfamero de uma lista\\", () => {\\n    const maiorNumero = pegueOMaiorNumero([1, 9, 7, 15, 21, 10]);\\n    expect(maiorNumero).toBe(21);\\n  });\\n});\\n```\\n\\nAgora o teste come\xe7ar\xe1 a passar. Veja que o algoritmo n\xe3o ficou dos melhores, mas conseguiu satisfazer o que o teste pediu. Agora que o teste est\xe1 passando, posso refatorar a fun\xe7\xe3o **pegueOMaiorNumero** sem medo, pois ela est\xe1 coberta por um teste. Caso a fun\xe7\xe3o passe a retornar uma string, null, ou um n\xfamero que n\xe3o seja o maior, **o teste ir\xe1 me avisar, reprovando**.\\n\\n## Vamos refatorar, sem medo!\\n\\n```js\\n// Arquivo: pegueOMaiorNumero.test.js\\n\\nconst pegueOMaiorNumero = (numeros) => {\\n  return Math.max(...numeros);\\n};\\n\\ndescribe(\\"pegueOMaiorNumero\\", () => {\\n  test(\\"deve retornar o maior n\xfamero de uma lista\\", () => {\\n    const maiorNumero = pegueOMaiorNumero([1, 9, 7, 15, 21, 10]);\\n    expect(maiorNumero).toBe(21);\\n  });\\n});\\n```\\n\\nPronto, se a gente rodar esse teste, ele ir\xe1 continuar passando, pois o **Math.max** est\xe1 fazendo o mesmo que o **la\xe7o de repeti\xe7\xe3o** estava fazendo anteriormente, mas de uma maneira mais enxuta. O fato \xe9 que, temos confian\xe7a de alterar um c\xf3digo que nos fale se a nossa regra de neg\xf3cios falhou. **\xc9 inadmiss\xedvel** que nossa fun\xe7\xe3o **pegueOMariorNumero** retorne um n\xfamero que n\xe3o \xe9 o maior.\\n\\n## Conclus\xe3o\\n\\nNossa simples feature de retornar o maior n\xfamero, **esteve durante todo o tempo de desenvolvimento coberta por um teste**. Se a gente fizesse a feature primeiro ao inv\xe9s do teste, ter\xedamos que test\xe1-la manualmente a cada altera\xe7\xe3o, printando o resultado no console, at\xe9 de fato escrever um teste pra ela. Isso seria **cansativo**. O teste \xe9 automatizado, ou seja, escrevemos uma \xfanica vez, e ele sempre ir\xe1 assegurar o resultado pra gente.\\n\\nEscolhi esse exemplo de algoritmo, pois h\xe1 v\xe1rias formas de implement\xe1-lo. Caso voc\xea descubra alguma forma mais enxuta que essa apresentada, poder\xe1 implementar sem correr o risco de quebrar sua aplica\xe7\xe3o.\\n\\nComo material complementar, recomendo essa live que aconteceu no dia 09/12/2021, e que considero excepcional por **dois motivos: n\xe3o tem enrola\xe7\xe3o, e os caras sabem o que est\xe3o ensinando.** Por hoje \xe9 isso, forte abra\xe7o e at\xe9 a pr\xf3xima!\\n\\n[![Live TDD na pr\xe1tica - Diego Fernandes e Rodrigo Manguinho](https://img.youtube.com/vi/sg1zFpNM5Jw/0.jpg)](https://youtu.be/sg1zFpNM5Jw)\\n\\n- Reposit\xf3rio c\xf3digo fonte: [https://github.com/mrbrunelli/tdd-pega-o-maior-numero](https://github.com/mrbrunelli/tdd-pega-o-maior-numero)"},{"id":"o-impacto-da-educa\xe7\xe3o-em-minha-vida","metadata":{"permalink":"/blog/en/o-impacto-da-educa\xe7\xe3o-em-minha-vida","editUrl":"https://github.com/mrbrunelli/blog/tree/master/blog/2021-05-07-o-impacto-da-educacao-em-minha-vida/index.md","source":"@site/blog/2021-05-07-o-impacto-da-educacao-em-minha-vida/index.md","title":"O impacto da educa\xe7\xe3o em minha vida","description":"Meu \xfaltimo emprego antes de me tornar Desenvolvedor em 2019 era de Auxiliar de Produ\xe7\xe3o em uma f\xe1brica aqui da cidade...","date":"2021-05-07T00:00:00.000Z","formattedDate":"May 7, 2021","tags":[{"label":"educa\xe7\xe3o","permalink":"/blog/en/tags/educacao"},{"label":"a import\xe2ncia da educa\xe7\xe3o","permalink":"/blog/en/tags/a-importancia-da-educacao"},{"label":"aprendizado","permalink":"/blog/en/tags/aprendizado"}],"readingTime":2.82,"truncated":true,"authors":[{"name":"Matheus Ricardo Brunelli","title":"Desenvolvedor de Software S\xeanior","url":"https://github.com/mrbrunelli","imageURL":"https://avatars.githubusercontent.com/u/54479807?v=4","key":"brunelli"}],"frontMatter":{"slug":"o-impacto-da-educa\xe7\xe3o-em-minha-vida","title":"O impacto da educa\xe7\xe3o em minha vida","description":"Meu \xfaltimo emprego antes de me tornar Desenvolvedor em 2019 era de Auxiliar de Produ\xe7\xe3o em uma f\xe1brica aqui da cidade...","keywords":["a import\xe2ncia da educa\xe7\xe3o","educa\xe7\xe3o","conhecimento","transi\xe7\xe3o de carreira"],"image":"/img/education.jpeg","authors":"brunelli","tags":["educa\xe7\xe3o","a import\xe2ncia da educa\xe7\xe3o","aprendizado"]},"prevItem":{"title":"Como contornar a dor de escrever um teste unit\xe1rio?","permalink":"/blog/en/como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio"}},"content":"![Education Banner](/img/education.jpeg)\\n\\nOntem enquanto organizava minha gaveta, me deparei com minha certid\xe3o de casamento, onde estava escrito na primeira linha:\\n\\n> MATHEUS RICARDO BRUNELLI, brasileiro, de profiss\xe3o: Auxiliar de Produ\xe7\xe3o. Ano 2018.\\n\\nMeu \xfaltimo emprego antes de me tornar Desenvolvedor em 2019 era de Auxiliar de Produ\xe7\xe3o em uma f\xe1brica aqui da cidade. O trabalho era muito simples, porem muito desgastante, Dorflex e Torsilax (n\xe3o \xe9 propaganda) faziam parte da minha intensa semana.\\n\\n\x3c!--truncate--\x3e\\n\\n### Tecnologia, uma realidade crescente\\n\\nCerto dia a f\xe1brica inteira parou para ouvir o an\xfancio dos coordenadores das faculdades da regi\xe3o, e foi anunciado dentre os demais cursos o curso de Sistemas para Internet, e a fala do coordenador [Anderson Burnes](https://www.linkedin.com/in/profburnes) (que eu j\xe1 conhecia) foi muito convincente, pois naquele ano v\xe1rias empresas estavam passando por transforma\xe7\xf5es digitais, e estavam precisando de desenvolvedores qualificados, e os sal\xe1rios eram bem diferentes da minha realidade.\\n\\nEu trabalhava muito para conseguir sustentar a minha fam\xedlia (eu, esposa e os doguinhos) e mesmo assim n\xe3o era suficiente, um pneu furado ou uma gripe eram suficientes para acabar com nossas economias do m\xeas rsrs.\\n\\n### Educa\xe7\xe3o, um investimento muito rent\xe1vel\\n\\nEu sabia que o \xfanico caminho para uma mudan\xe7a de vida, era atrav\xe9s da educa\xe7\xe3o. E naquele ano estudei muito para o Enem, e consegui uma Bolsa ProUni para o curso de Sistemas para Internet na [UniAlfa](https://www.alfaumuarama.edu.br/fau).\\n\\nMe lembro que dessa vez eu n\xe3o estava apenas fazendo um curso por fazer, eu estava colocando todas minhas energias em algo que eu acreditava poder mudar minha vida.\\n\\n### Esfor\xe7o no lugar certo\\n\\nDurante os primeiros semestres, percebi que existiam muitos caminhos para seguir profiss\xe3o, alguns bem confusos, e eu precisaria ter foco em algo para poder me destacar. Comecei a pesquisar por tecnologias que me ajudariam a entrar no mercado mais r\xe1pido, pois essa era minha maior motiva\xe7\xe3o.\\n\\nQuando obtive um m\xednimo de confian\xe7a nessas tecnologias, pedi demiss\xe3o do meu emprego na f\xe1brica, para que eu pudesse me dedicar aos estudos de forma integral. Minha fam\xedlia ficou com muito medo da minha decis\xe3o, afinal, n\xe3o haviam garantias que eu conseguiria entrar na \xe1rea, antes da nossa min\xfascula reserva financeira acabar.\\n\\n### F\xe9, foco e medo\\n\\nForam esses tr\xeas elementos que me acompanharam nessa transi\xe7\xe3o. F\xe9 porque n\xf3s n\xe3o enxergamos o amanh\xe3. Foco porque o tempo \xe9 escasso. Medo porque ele funciona como uma balan\xe7a, quanto mais arriscado, mais sentimos medo.\\n\\nComo todo trabalhado duro traz recompensas, a minha chegou aos 45 do segundo tempo, quando s\xf3 restavam algumas moedinhas no cofre. Consegui meu primeiro emprego na \xe1rea, gra\xe7as ao networking (vou escrever um artigo s\xf3 desse cara) e ao meu esfor\xe7o \xe9 claro.\\n\\n### Mercado aquecido\\n\\nSe eu pudesse deixar um conselho para quem est\xe1 come\xe7ando, seria:\\n\\n> Estude, e fa\xe7a de tudo para tentar entrar no mercado. Tenha foco, e invista seu tempo estudando o que te dar\xe1 retorno.\\n\\nNem s\xf3 de teoria vive o programador. Essa \xe9 uma profiss\xe3o muito pr\xe1tica, quanto mais se exercita, mais se aprende. Os melhores exerc\xedcios s\xe3o os problemas reais de uma empresa. Mesmo que ganhando pouco no come\xe7o, trabalhar com problemas reais n\xe3o tem pre\xe7o, essa experi\xeancia n\xe3o pode ser adquirida de outra forma.\\n\\n### Considera\xe7\xf5es finais\\n\\nEsse foi meu primeiro artigo, fiquei muito empolgado ao escrev\xea-lo. Se voc\xea chegou at\xe9 aqui, meus agradecimentos. Espero que tenha sido \xfatil para voc\xea.\\n\\nForte abra\xe7o, e at\xe9 o pr\xf3ximo artigo!"}]}')}}]);