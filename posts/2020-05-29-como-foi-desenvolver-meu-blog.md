---
title: Como foi desenvolver meu blog
description: Neste artigo, vou contar um pouco de como foi desenvolver o meu
  blog utilizando GatsbyJS
date: 2020-05-29 11:11:57
image: assets/img/favicon.png
category: desenvolvimento, produção
---
Olá pessoal, no artigo de hoje, vou explicar como foi o desenvolvimento do meu blog e quais as dificuldades de desenvolver essa belezinha.

No desenvolvimento do meu blog em si, devo ter ficado cerca de 2 meses, criando e apagando diversos projetos nos quais acabei desistindo. Já criei projeto em WordPress, `create-react-app` e a última versão utilizando Gatsby.

### Desenvolvimento em WordPress.

No WordPress, fiquei cerca de duas semanas criando e brincando com esse sistema. Percebi que não sairia da forma que eu queria, então apaguei o servidor hospedado na Digital Ocean e comecei a desenvolver na unha com `create-react-app`.

### Desenvolvendo com `create-react-app`

Já com `create-react-app` foi diferente, comecei um protótipo no Figma e fiz uma coisa - aos meus olhos - linda. Fiquei cerca de mais duas semanas desenvolvendo e implementando o protótipo. 

Desenvolvi algo que até hoje não entendo muito bem o que eu queria fazer. Minha intenção era ter um sistema de login com administradores que poderiam criar, editar e apagar os artigos, criei também um sistema que guardava as postagens em um “html” puro dentro do MongoDB. Então me encontrei com um problema:

Como o meu frontend leria esse HTML e implementaria dentro do blog?

Fiquei alguns dias tentando resolver esse problema e não consegui, então deixei o projeto de lado e fui fazer algumas pesquisas. Com essas pesquisar acabei me deparando com o Gatsby e analisando diversos projetos, percebi que essa seria a melhor e mais rápida forma de desenvolver meu site pessoal.

Então, apaguei meus dois projetos (a API e o frontend) e comecei a desenvolver o projeto em Gatsby.

### Desenvolvimento com GatsbyJS.

Ao fazer essas pesquisas, acabei encontrando um curso de gatsby, onde era criado um blog, fiz esse curso e aqui está o meu projeto, não estou sendo patrocínado (inclusive me patrocina Willian) mas o curso é muito bom mesmo.

Percebi que seria de fácil escrever meus artigos, pois já estou bem acostumado com Markdown.

Então, fui ao figma e comecei a desenvolver o protótipo, dessa vez bem básico, pois decedi não encher a tela do meu público-alvo com coisas que não seriam necessárias. Afinal, você vem ao blog para ler artigos, não é mesmo?

Ao terminar o protótipo foi para o código e comecei a desenvolver, cerca de uma semana depois, já estava pronto para ir ao ar.

O curso, me deu uma base, se não tivesse feito muito provavelmente teria demorado muito mais tempo quebrando a cabeça e tentando entender como funciona o Gatsby.

A maioria de meus problemas foi resolvido:

 Eu não preciso mais de uma API, era simplesmente resolvido dentro do próprio projeto do blog.
Posso escrever em Markdown e simplesmente o meu projeto já transformará meu arquivo em uma postagem.
Não precisei quebrar a cabeça com um sistema que cria as postagens dentro da API, eu simplesmente utilizo Netlify CMS, que cria uma postagem e já faz o deploy automático no Github.
O Gatsby já gera automaticamente uma página de erro, ou seja se uma url não existir será mostrado uma página de erro. Então não preciso quebrar a cabeça desenvolvendo essa página 404 dentro do `ceate-react-app`.
Posso utilizar o TransitionPortal, que cria animações nos links que levam para outras páginas dentro do blog.

Lógico que ainda sim, tive alguns problemas com CSS e acredito que ainda tenham pequenos bugs dentro dos estilos, que com o tempo serão resolvidos.

Dentro do `create-react-app`, assim como em qualquer outro projeto, seria possível adicionar todas essas funcionalidades, mas se o Gatsby já tem isso de uma forma fácil, não há motivos para tentar reinventar a roda.


