"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[426],{3905:function(e,o,r){r.d(o,{Zo:function(){return l},kt:function(){return d}});var t=r(7294);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),m=function(e){var o=t.useContext(u),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},l=function(e){var o=m(e.components);return t.createElement(u.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},c=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,g=c["".concat(u,".").concat(d)]||c[d]||p[d]||n;return r?t.createElement(g,s(s({ref:o},l),{},{components:r})):t.createElement(g,s({ref:o},l))}));function d(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=c;var i={};for(var u in o)hasOwnProperty.call(o,u)&&(i[u]=o[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<n;m++)s[m]=r[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3957:function(e,o,r){r.r(o),r.d(o,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return m},assets:function(){return l},toc:function(){return p},default:function(){return d}});var t=r(7462),a=r(3366),n=(r(7294),r(3905)),s=["components"],i={slug:"como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio",title:"Como contornar a dor de escrever um teste unit\xe1rio?",authors:"brunelli",tags:["tdd","testes","teste unit\xe1rio"]},u=void 0,m={permalink:"/en/blog/como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio",editUrl:"https://github.com/mrbrunelli/blog/tree/master/blog/2021-12-16-como-contornar-a-dor-de-escrever-um-teste-unitario/index.md",source:"@site/blog/2021-12-16-como-contornar-a-dor-de-escrever-um-teste-unitario/index.md",title:"Como contornar a dor de escrever um teste unit\xe1rio?",description:"Salve galera, tudo tranquilo? Esse \xe9 meu segundo artigo, e gostaria de compartilhar algo que vem me ajudando muito durante o desenvolvimento de software e na minha pr\xf3pria evolu\xe7\xe3o profissional.",date:"2021-12-16T00:00:00.000Z",formattedDate:"December 16, 2021",tags:[{label:"tdd",permalink:"/en/blog/tags/tdd"},{label:"testes",permalink:"/en/blog/tags/testes"},{label:"teste unit\xe1rio",permalink:"/en/blog/tags/teste-unitario"}],readingTime:3.61,truncated:!1,authors:[{name:"Matheus Ricardo Brunelli",title:"Desenvolvedor de Software S\xeanior",url:"https://github.com/mrbrunelli",imageURL:"https://avatars.githubusercontent.com/u/54479807?v=4",key:"brunelli"}],frontMatter:{slug:"como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio",title:"Como contornar a dor de escrever um teste unit\xe1rio?",authors:"brunelli",tags:["tdd","testes","teste unit\xe1rio"]},nextItem:{title:"O impacto da educa\xe7\xe3o em minha vida",permalink:"/en/blog/o-impacto-da-educa\xe7\xe3o-em-minha-vida"}},l={authorsImageUrls:[void 0]},p=[{value:"Traduzindo",id:"traduzindo",children:[],level:2},{value:"Ent\xe3o vamos l\xe1!",id:"ent\xe3o-vamos-l\xe1",children:[],level:2},{value:"Vamos refatorar, sem medo!",id:"vamos-refatorar-sem-medo",children:[],level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[],level:2}],c={toc:p};function d(e){var o=e.components,r=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Salve galera, tudo tranquilo? Esse \xe9 meu segundo artigo, e gostaria de compartilhar algo que vem me ajudando muito durante o desenvolvimento de software e na minha pr\xf3pria evolu\xe7\xe3o profissional."),(0,n.kt)("p",null,"Estou falando sobre os ",(0,n.kt)("strong",{parentName:"p"},"testes unit\xe1rios"),". Acredito que todo mundo concorda que um c\xf3digo sem testes, \xe9 um c\xf3digo inst\xe1vel e fr\xe1gil \xe0 mudan\xe7as. \xc9 muito ruim programar no escuro, n\xf3s nunca temos certeza que o que estamos desenvolvendo ir\xe1 funcionar em produ\xe7\xe3o, sem conflitar com as features j\xe1 existentes."),(0,n.kt)("p",null,"Por outro lado, escrever testes para uma feature j\xe1 implementada pode ser algo muito doloroso, por isso ",(0,n.kt)("strong",{parentName:"p"},"muita gente prefere correr o risco e deixar o c\xf3digo sem cobertura.")),(0,n.kt)("p",null,"Mas recentemente venho estudando fortemente uma metodologia que abriu minha mente, o ",(0,n.kt)("strong",{parentName:"p"},"TDD"),", ou em portugu\xeas ",(0,n.kt)("strong",{parentName:"p"},'"Desenvolvimento guiado por testes"'),". No TDD n\xf3s criamos o teste primeiro, e s\xf3 depois criamos a implementa\xe7\xe3o de fato, que far\xe1 o teste passar. Isso faz com que nosso c\xf3digo sempre esteja coberto por testes."),(0,n.kt)("h2",{id:"traduzindo"},"Traduzindo"),(0,n.kt)("p",null,"Se eu quisesse criar uma fun\xe7\xe3o que me retornasse o maior n\xfamero de uma lista em Javascript, utilizando o ",(0,n.kt)("strong",{parentName:"p"},"TDD")," (escrevendo o teste primeiro), eu come\xe7aria fazendo algo mais ou menos assim:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// Arquivo: pegueOMaiorNumero.test.js\n// Sintaxe de um framework de testes do Javascript\n\ndescribe("pegueOMaiorNumero", () => {\n  test("deve retornar o maior n\xfamero de uma lista", () => {\n    const maiorNumero = pegueOMaiorNumero([1, 9, 7, 15, 21, 10]);\n    expect(maiorNumero).toBe(21);\n  });\n});\n')),(0,n.kt)("p",null,"Nesse caso, eu forneci uma lista com alguns n\xfameros, onde o 21 \xe9 o maior deles. Mas note que em nenhum momento foi criada a fun\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"pegueOMaiorNumero"),". Estou invocando uma fun\xe7\xe3o que ",(0,n.kt)("strong",{parentName:"p"},"ainda n\xe3o foi criada"),", e ainda estou esperando que o resultado seja 21. Nesse caso o teste ir\xe1 falhar."),(0,n.kt)("p",null,"\xc9 ai que a brincadeira come\xe7a. Quando o teste falha, \xe9 sinal de que precisamos implementar a feature que fa\xe7a esse teste passar."),(0,n.kt)("h2",{id:"ent\xe3o-vamos-l\xe1"},"Ent\xe3o vamos l\xe1!"),(0,n.kt)("p",null,"Vou criar a fun\xe7\xe3o que far\xe1 o teste passar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// Arquivo: pegueOMaiorNumero.test.js\n\nconst pegueOMaiorNumero = (numeros) => {\n  let maior = 0;\n\n  for (let i = 0; i < numeros.length; i++) {\n    if (numeros[i] > maior) {\n      maior = numeros[i];\n    }\n  }\n\n  return maior;\n};\n\ndescribe("pegueOMaiorNumero", () => {\n  test("deve retornar o maior n\xfamero de uma lista", () => {\n    const maiorNumero = pegueOMaiorNumero([1, 9, 7, 15, 21, 10]);\n    expect(maiorNumero).toBe(21);\n  });\n});\n')),(0,n.kt)("p",null,"Agora o teste come\xe7ar\xe1 a passar. Veja que o algoritmo n\xe3o ficou dos melhores, mas conseguiu satisfazer o que o teste pediu. Agora que o teste est\xe1 passando, posso refatorar a fun\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"pegueOMaiorNumero")," sem medo, pois ela est\xe1 coberta por um teste. Caso a fun\xe7\xe3o passe a retornar uma string, null, ou um n\xfamero que n\xe3o seja o maior, ",(0,n.kt)("strong",{parentName:"p"},"o teste ir\xe1 me avisar, reprovando"),"."),(0,n.kt)("h2",{id:"vamos-refatorar-sem-medo"},"Vamos refatorar, sem medo!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// Arquivo: pegueOMaiorNumero.test.js\n\nconst pegueOMaiorNumero = (numeros) => {\n  return Math.max(...numeros);\n};\n\ndescribe("pegueOMaiorNumero", () => {\n  test("deve retornar o maior n\xfamero de uma lista", () => {\n    const maiorNumero = pegueOMaiorNumero([1, 9, 7, 15, 21, 10]);\n    expect(maiorNumero).toBe(21);\n  });\n});\n')),(0,n.kt)("p",null,"Pronto, se a gente rodar esse teste, ele ir\xe1 continuar passando, pois o ",(0,n.kt)("strong",{parentName:"p"},"Math.max")," est\xe1 fazendo o mesmo que o ",(0,n.kt)("strong",{parentName:"p"},"la\xe7o de repeti\xe7\xe3o")," estava fazendo anteriormente, mas de uma maneira mais enxuta. O fato \xe9 que, temos confian\xe7a de alterar um c\xf3digo que nos fale se a nossa regra de neg\xf3cios falhou. ",(0,n.kt)("strong",{parentName:"p"},"\xc9 inadmiss\xedvel")," que nossa fun\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"pegueOMariorNumero")," retorne um n\xfamero que n\xe3o \xe9 o maior."),(0,n.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,n.kt)("p",null,"Nossa simples feature de retornar o maior n\xfamero, ",(0,n.kt)("strong",{parentName:"p"},"esteve durante todo o tempo de desenvolvimento coberta por um teste"),". Se a gente fizesse a feature primeiro ao inv\xe9s do teste, ter\xedamos que test\xe1-la manualmente a cada altera\xe7\xe3o, printando o resultado no console, at\xe9 de fato escrever um teste pra ela. Isso seria ",(0,n.kt)("strong",{parentName:"p"},"cansativo"),". O teste \xe9 automatizado, ou seja, escrevemos uma \xfanica vez, e ele sempre ir\xe1 assegurar o resultado pra gente."),(0,n.kt)("p",null,"Escolhi esse exemplo de algoritmo, pois h\xe1 v\xe1rias formas de implement\xe1-lo. Caso voc\xea descubra alguma forma mais enxuta que essa apresentada, poder\xe1 implementar sem correr o risco de quebrar sua aplica\xe7\xe3o."),(0,n.kt)("p",null,"Como material complementar, recomendo essa live que aconteceu no dia 09/12/2021, e que considero excepcional por ",(0,n.kt)("strong",{parentName:"p"},"dois motivos: n\xe3o tem enrola\xe7\xe3o, e os caras sabem o que est\xe3o ensinando.")," Por hoje \xe9 isso, forte abra\xe7o e at\xe9 a pr\xf3xima!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/sg1zFpNM5Jw"},(0,n.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/sg1zFpNM5Jw/0.jpg",alt:"Live TDD na pr\xe1tica - Diego Fernandes e Rodrigo Manguinho"}))),(0,n.kt)("p",null,"Reposit\xf3rio c\xf3digo fonte: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrbrunelli/tdd-pega-o-maior-numero"},"https://github.com/mrbrunelli/tdd-pega-o-maior-numero")))}d.isMDXComponent=!0}}]);