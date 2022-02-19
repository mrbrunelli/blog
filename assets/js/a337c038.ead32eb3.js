"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[905],{3905:function(e,a,o){o.d(a,{Zo:function(){return u},kt:function(){return c}});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=t.createContext({}),l=function(e){var a=t.useContext(m),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},u=function(e){var a=l(e.components);return t.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(o),c=n,g=p["".concat(m,".").concat(c)]||p[c]||d[c]||r;return o?t.createElement(g,s(s({ref:a},u),{},{components:o})):t.createElement(g,s({ref:a},u))}));function c(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7350:function(e,a,o){o.r(a),o.d(a,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return c}});var t=o(7462),n=o(3366),r=(o(7294),o(3905)),s=["components"],i={slug:"como-foi-construir-um-validador-de-objetos",title:"Como foi construir um validador de objetos?",authors:"brunelli",tags:["npm","pacote npm","validator","validador de objetos"]},m=void 0,l={permalink:"/blog/como-foi-construir-um-validador-de-objetos",editUrl:"https://github.com/mrbrunelli/blog/tree/master/blog/2022-02-17-como-foi-construir-um-validador-de-objetos/index.md",source:"@site/blog/2022-02-17-como-foi-construir-um-validador-de-objetos/index.md",title:"Como foi construir um validador de objetos?",description:"Logo NPM",date:"2022-02-17T00:00:00.000Z",formattedDate:"17 de fevereiro de 2022",tags:[{label:"npm",permalink:"/blog/tags/npm"},{label:"pacote npm",permalink:"/blog/tags/pacote-npm"},{label:"validator",permalink:"/blog/tags/validator"},{label:"validador de objetos",permalink:"/blog/tags/validador-de-objetos"}],readingTime:4.89,truncated:!0,authors:[{name:"Matheus Ricardo Brunelli",title:"Desenvolvedor de Software S\xeanior",url:"https://github.com/mrbrunelli",imageURL:"https://avatars.githubusercontent.com/u/54479807?v=4",key:"brunelli"}],frontMatter:{slug:"como-foi-construir-um-validador-de-objetos",title:"Como foi construir um validador de objetos?",authors:"brunelli",tags:["npm","pacote npm","validator","validador de objetos"]},nextItem:{title:"Como contornar a dor de escrever um teste unit\xe1rio?",permalink:"/blog/como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio"}},u={authorsImageUrls:[void 0]},d=[{value:"Vamos \xe0s motiva\xe7\xf5es",id:"vamos-\xe0s-motiva\xe7\xf5es",children:[],level:3},{value:"Resposta de outro endpoint do mesmo ERP",id:"resposta-de-outro-endpoint-do-mesmo-erp",children:[],level:3},{value:"Ficar toda hora fazendo as mesmas valida\xe7\xf5es fez com que eu me sentisse um perfeito idiota",id:"ficar-toda-hora-fazendo-as-mesmas-valida\xe7\xf5es-fez-com-que-eu-me-sentisse-um-perfeito-idiota",children:[],level:3},{value:"Etapas",id:"etapas",children:[],level:3},{value:"Mas nunca desisto f\xe1cil de algo",id:"mas-nunca-desisto-f\xe1cil-de-algo",children:[],level:3},{value:"TDD me ensinou a resolver um problema por vez",id:"tdd-me-ensinou-a-resolver-um-problema-por-vez",children:[],level:3},{value:"Para minha surpresa",id:"para-minha-surpresa",children:[],level:3},{value:"T\xe1, mas como ficou a implementa\xe7\xe3o?",id:"t\xe1-mas-como-ficou-a-implementa\xe7\xe3o",children:[],level:3}],p={toc:d};function c(e){var a=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logo NPM",src:o(5667).Z,width:"540",height:"210"})),(0,r.kt)("p",null,"Eai galera, tudo bem com voc\xeas? Espero que sim.\nHoje gostaria de compartilhar como ",(0,r.kt)("strong",{parentName:"p"},"criei meu primeiro pacote npm"),", quais foram minhas motiva\xe7\xf5es e as etapas desde a ideia at\xe9 o publish."),(0,r.kt)("p",null,"Primeiramente, por que contru\xed um pacote de ",(0,r.kt)("strong",{parentName:"p"},"validar objetos"),", sendo que o npm ",(0,r.kt)("strong",{parentName:"p"},"est\xe1 cheio deles?"),"\nBem, essa decis\xe3o foi um pouco dif\xedcil, visto que j\xe1 existe um validador de schemas muito famoso na comunidade, o famigerado ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/yup"},(0,r.kt)("strong",{parentName:"a"},"Yup")),"."),(0,r.kt)("h3",{id:"vamos-\xe0s-motiva\xe7\xf5es"},"Vamos \xe0s motiva\xe7\xf5es"),(0,r.kt)("p",null,"A primeira motiva\xe7\xe3o foi que, eu sempre quis ",(0,r.kt)("strong",{parentName:"p"},"criar um pacote npm que n\xe3o fosse in\xfatil"),", mas nunca tinha a oportunidade ou ",(0,r.kt)("strong",{parentName:"p"},"criatividade")," para tal.\nAcontece que, durante o trabalho surgiu uma dificuldade de validar alguns campos que a API de um ERP retornava, devido a sua volatilidade."),(0,r.kt)("p",null,"Algo mais ou menos assim:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response do ERP"',title:'"Response',do:!0,'ERP"':!0},'{\n  "serviceName": "CRUDServiceProvider.loadRecords",\n  "status": "1",\n  "pendingPrinting": "false",\n  "transactionId": "6BB89D3B72BEDCE69E51C5698DF3BB23",\n  "responseBody": {\n    "entities": {\n      "total": "0",\n      "hasMoreResult": "false",\n      "offsetPage": "0",\n      "offset": "0",\n      "metadata": {\n        "fields": {\n          "field": {\n            "name": "NUNOTA"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"T\xe1, qual o problema desse retorno? Parece um retorno normal de uma API normal, mas n\xe3o! A API n\xe3o retorna status code 40x quando alguma request falha por algum motivo. Ela sempre retorna 200, mas com alguns campos diferentes. Por exemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quando a a\xe7\xe3o n\xe3o \xe9 executada por completo, ",(0,r.kt)("strong",{parentName:"li"},'o campo "status" retorna "0"'),"."),(0,r.kt)("li",{parentName:"ul"},"Quando a a\xe7\xe3o \xe9 executada mas n\xe3o retorna dados, ",(0,r.kt)("strong",{parentName:"li"},'o campo "status" retorna "1"'),", mas ",(0,r.kt)("strong",{parentName:"li"},'o campo "total" retorna "0"'),"."),(0,r.kt)("li",{parentName:"ul"},"Alguns endpoints retornam ",(0,r.kt)("strong",{parentName:"li"},'o campo "responseBody.entities'),'", outros "',(0,r.kt)("strong",{parentName:"li"},'responseBody.fieldsMetaData"'),", e consequentemente, toda a \xe1rvore de objetos \xe9 alterada.")),(0,r.kt)("h3",{id:"resposta-de-outro-endpoint-do-mesmo-erp"},"Resposta de outro endpoint do mesmo ERP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response do ERP"',title:'"Response',do:!0,'ERP"':!0},'{\n  "serviceName": "DbExplorerSP.executeQuery",\n  "status": "0",\n  "pendingPrinting": "false",\n  "transactionId": "1BFB4FBFB934D9BE62BD06D5412C5A19",\n  "tsError": {\n    "tsErrorCode": "CORE_E03690",\n    "tsErrorLevel": "ERROR"\n  },\n  "statusMessage": "Permitido apenas a execu\ufffd\ufffdo de consultas, a instru\ufffd\ufffdo possui \'UPDATE\', \'DELETE\' ou \'INSERT\' e tais comandos n\ufffdo s\ufffdo permitidos."\n}\n')),(0,r.kt)("p",null,"Veja que n\xe3o tem um padr\xe3o, ",(0,r.kt)("strong",{parentName:"p"},'pois dessa vez retornou "status" "0" com um campo novo "statusMessage"'),", por\xe9m o status code da requisi\xe7\xe3o \xe9 200, de sucesso."),(0,r.kt)("p",null,"Como o servidor onde o c\xf3digo fonte estava s\xf3 suportava Node vers\xe3o 12, algumas features como ",(0,r.kt)("strong",{parentName:"p"},"optional chaining")," n\xe3o estavam dispon\xedveis. Dessa forma tive que validar o retorno da API de uma forma muito verbosa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Valida\xe7\xe3o da response"',title:'"Valida\xe7\xe3o',da:!0,'response"':!0},'const hasERPSuccessResponse =\n  response &&\n  response.status === 200 &&\n  response.data &&\n  response.data.status === "1" &&\n  response.data.responseBody &&\n  response.data.responseBody.entities &&\n  response.data.responseBody.entities.total !== "0";\n\nif (hasERPSuccessResponse) {\n  // prossegue...\n}\n')),(0,r.kt)("h3",{id:"ficar-toda-hora-fazendo-as-mesmas-valida\xe7\xf5es-fez-com-que-eu-me-sentisse-um-perfeito-idiota"},"Ficar toda hora fazendo as mesmas valida\xe7\xf5es fez com que eu me sentisse um perfeito idiota"),(0,r.kt)("p",null,'Ent\xe3o comecei a pensar em como eu poderia abstrair esse tipo de valida\xe7\xe3o, mas sem precisar ficar mapeando todas as combina\xe7\xf5es poss\xedveis da resposta.\nEu queria continuar fazendo o "if", da maneira como faria com o ',(0,r.kt)("strong",{parentName:"p"},"optional chaining"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Como seria a valida\xe7\xe3o no Node 14+"',title:'"Como',seria:!0,a:!0,"valida\xe7\xe3o":!0,no:!0,Node:!0,'14+"':!0},'const hasERPSuccessResponse =\n  response?.status === 200 &&\n  response?.data?.status === "1" &&\n  response?.data?.responseBody?.entities?.total !== "0";\n')),(0,r.kt)("h3",{id:"etapas"},"Etapas"),(0,r.kt)("p",null,"Pensei, preciso criar uma fun\xe7\xe3o que:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Receba o objeto a ser validado."),(0,r.kt)("li",{parentName:"ul"},"Receba os campos a serem procurados no objeto."),(0,r.kt)("li",{parentName:"ul"},"Deve validar independente do formato de objeto fornecido."),(0,r.kt)("li",{parentName:"ul"},"Deve validar chave e valor."),(0,r.kt)("li",{parentName:"ul"},"Deve permitir validar campos com nomes iguais, mas em localiza\xe7\xf5es diferentes."),(0,r.kt)("li",{parentName:"ul"},"Deve retornar apenas booleano, nada de exce\xe7\xf5es ou mensagens.")),(0,r.kt)("p",null,"Imaginei algo mais ou menos com esse design:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Validador de objetos"',title:'"Validador',de:!0,'objetos"':!0},'const isValid = objectValidator(response, [\n  "status",\n  "response.data.status",\n  "response.data.responseBody.entities",\n]);\n\nif (isValid) {\n  // prossegue...\n}\n')),(0,r.kt)("p",null,"Do jeito que montei j\xe1 estava legal, mas eu precisava validar os valores dos campos tamb\xe9m, e ent\xe3o come\xe7ou a ficar complexo. Comecei a imaginar v\xe1rios cen\xe1rios onde minha fun\xe7\xe3o quebraria, e comecei a desanimar."),(0,r.kt)("h3",{id:"mas-nunca-desisto-f\xe1cil-de-algo"},"Mas nunca desisto f\xe1cil de algo"),(0,r.kt)("p",null,"Como estou estudando muito sobre ",(0,r.kt)("strong",{parentName:"p"},"TDD"),", resolvi escrever todos os cen\xe1rios poss\xedveis no teste, antes mesmo de come\xe7ar a programar uma linha de c\xf3digo.\nMe lembro que quando comecei, o arquivo de testes estava mais ou menos assim:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="objectValidator.test.js"',title:'"objectValidator.test.js"'},'describe("objectValidator", () => {\n  test.todo("deve chamar a fun\xe7\xe3o com um objeto no primeiro par\xe2metro");\n  test.todo("deve chamar a fun\xe7\xe3o com um array de campos no segundo par\xe2metro");\n  test.todo("deve retornar falso se algum campo for fornecido incorretamente");\n  test.todo(\n    "deve retornar falso se um dos campos fornecidos n\xe3o forem encontrado no objeto"\n  );\n  // ...\n});\n')),(0,r.kt)("h3",{id:"tdd-me-ensinou-a-resolver-um-problema-por-vez"},"TDD me ensinou a resolver um problema por vez"),(0,r.kt)("p",null,"Seguindo esse modelo, coloquei todos os poss\xedveis cen\xe1rios em ",(0,r.kt)("strong",{parentName:"p"},"TODOS"),", e fui implementando um a um.\nJ\xe1 era de noite quando completei meus ",(0,r.kt)("strong",{parentName:"p"},"TODOS"),", e minha fun\xe7\xe3o estava totalmente funcional, e muito perform\xe1tica."),(0,r.kt)("p",null,"Comecei a criar cen\xe1rios totalmente ca\xf3ticos, fornecendo v\xe1rias vezes os mesmos campos, deixando de informar valores em alguns, e BOOM! ",(0,r.kt)("strong",{parentName:"p"},"O algoritmo continuou funcionando perfeitamente!")),(0,r.kt)("p",null,"Nem acreditei que consegui criar algo t\xe3o \xfatil em t\xe3o pouco tempo. Na manh\xe3 seguinte, um s\xe1bado muito agrad\xe1vel, resolvi criar uma conta no NPM e publicar a primeira vers\xe3o funcional. Utilizei o CI do GitHub para garantir que tudo que chegasse \xe0 branch ",(0,r.kt)("strong",{parentName:"p"},"main")," estivesse de fato testado."),(0,r.kt)("h3",{id:"para-minha-surpresa"},"Para minha surpresa"),(0,r.kt)("p",null,"Domingo de manh\xe3 meu pacote j\xe1 estava com mais de 100 downloads, senti uma euforia t\xe3o grande! Meu reposit\xf3rio no GitHub havia sido clonado mais de 50x e visitado por dezenas de pessoas diferentes.\nAlgo t\xe3o simples, passou a ajudar um punhado de pessoas, que ",(0,r.kt)("strong",{parentName:"p"},"preferiram utilizar meu pacote de 6kb")," ao inv\xe9s do Yup, que cont\xe9m ",(0,r.kt)("strong",{parentName:"p"},"in\xfameras funcionalidades"),"."),(0,r.kt)("p",null,"Essa foi uma grande experi\xeancia pra mim, e de agora em diante, sempre que eu criar algo \xfatil, irei publicar para que outras pessoas tamb\xe9m possam utilizar."),(0,r.kt)("h3",{id:"t\xe1-mas-como-ficou-a-implementa\xe7\xe3o"},"T\xe1, mas como ficou a implementa\xe7\xe3o?"),(0,r.kt)("p",null,"Vou deixar o repo aqui em baixo. Migrei tudo pra Typescript quando tive mais tempo e gerei os arquivos d.ts, pra garantir tipagens para quem est\xe1 utilizando no Javascript."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mrbrunelli/object-validator"},(0,r.kt)("strong",{parentName:"a"},"Repo GitHub"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@mrbrunelli/object-validator"},(0,r.kt)("strong",{parentName:"a"},"Link do NPM")))),(0,r.kt)("p",null,"Por hoje \xe9 isso, espero que tenha gostado da pequena hist\xf3ria, at\xe9 a pr\xf3xima!"))}c.isMDXComponent=!0},5667:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAADSAgMAAAB87fECAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAADLODf///8EXxL6AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfhCAkCAi0o2YxVAAAAwElEQVR42u3asRGAIAxAURr3s7FxPxumtLHihMt5QS3er0PyBqBs/6hwcHBwcHBwcHBwcHBwcHCkO/Y66rimhkM1tKqzmYODg4ODg4ODg4ODg4ODY7qjOdxxNG+frOLg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OCY7Aj9M+Dg4ODg4ODg4ODg4ODg4PjKEev+cEYcHBwcHBwcHBwcHBwcHByJjlDLcMda3oqDg4ODg4ODg4ODg4ODgyPSCV7wh+HNgMmcAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA4LTA5VDAyOjAyOjQ0KzAwOjAw39Y9SwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOC0wOVQwMjowMjo0NCswMDowMK6LhfcAAAAASUVORK5CYII="}}]);