---
title: Como foi o desenvolvimento do meu blog
description: Neste artigo, vou contar um pouco de como foi desenvolver o meu
  blog utilizando GatsbyJS
date: 2020-05-29T11:33:56.000Z
image: ""
category: desenvolvimento, projetos
---
[1]: https://br.wordpress.com/ "Site do WordPress BR"
[2]: https://github.com/facebook/create-react-app "Projeto do create-react-app no GitHub"
[3]: https://www.gatsbyjs.org/ "Site do GatsbyJS"
[4]: https://www.digitalocean.com/ "Site da Digital Ocean"
[5]: https://www.figma.com/ "Site do Figma"
[6]: https://www.mongodb.com/ "Site do MongoDB"
[7]: https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/ "Curso de Gatsby do Willian Justen" 
[8]: https://github.com/felipesuri/gatsby-blog-example "Meu projeto do curso de Gatsby"
[9]: https://willianjusten.com.br/ "Blog do Willian"

Olá pessoal, no artigo de hoje, vou explicar como foi o desenvolvimento do meu blog e quais as dificuldades de desenvolver essa belezinha.

No desenvolvimento do meu blog em si, devo ter ficado cerca de 2 meses, criando e apagando diversos projetos nos quais acabei desistindo. Já criei projeto em [WordPress][1], [`create-react-app`][2] e a última versão utilizando [Gatsby][3].

### Desenvolvimento em WordPress.

No WordPress, fiquei cerca de duas semanas criando e brincando com esse sistema. Percebi que não sairia da forma que eu queria, então apaguei o servidor hospedado na [Digital Ocean][4] e comecei a desenvolver na unha com `create-react-app`.

### Desenvolvendo com `create-react-app`

Já com `create-react-app` foi diferente, comecei um protótipo no [Figma][5] e fiz uma coisa - aos meus olhos - linda. Fiquei cerca de mais duas semanas desenvolvendo e implementando o protótipo.

Desenvolvi algo que até hoje não entendo muito bem. Minha intenção era ter um sistema de login com administradores que poderiam criar, editar e apagar os artigos, criei também um sistema que guardava as postagens em um “html” puro dentro do [MongoDB][6]. Então me encontrei com um problema:

- Como o meu frontend leria esse HTML e implementaria dentro do blog?

Fiquei alguns dias tentando resolver esse problema e não consegui, então deixei o projeto de lado e fui fazer algumas pesquisas. Com essas pesquisar acabei me deparando com o Gatsby e analisando diversos projetos, percebi que essa seria a melhor e mais rápida forma de desenvolver meu site pessoal.

Então, apaguei meus dois projetos (a API e o frontend) e comecei a desenvolver o projeto em Gatsby.

### Desenvolvimento com GatsbyJS.

Ao fazer essas pesquisas, acabei encontrando um [curso de gatsby][7], onde era criado um blog. Fiz esse curso e [aqui está o meu projeto][8], não estou sendo patrocinado (inclusive me patrocina [Willian][9]) mas o curso é muito bom mesmo.

Percebi que seria de fácil escrever meus artigos, pois já estou bem acostumado com Markdown.

Então, fui ao Figma e comecei a desenvolver o protótipo, dessa vez bem básico, pois decidi não encher a tela do meu público-alvo com coisas que não seriam necessárias. __Afinal, você vem ao blog para ler artigos, não é mesmo?__

Ao terminar o protótipo foi para o código e comecei a desenvolver, __cerca de uma semana depois, já estava pronto para ir ao ar__.

O curso, me deu uma base, se não tivesse feito muito provavelmente teria demorado muito mais tempo quebrando a cabeça e tentando entender como funciona o Gatsby.

__A maioria de meus problemas foi resolvido__:

- Eu não preciso mais de uma API, era simplesmente resolvido dentro do próprio projeto do blog.
- Posso escrever em Markdown e simplesmente o meu projeto já transformará meu arquivo em uma postagem.
- Não precisei quebrar a cabeça com um sistema que cria as postagens dentro da API, eu simplesmente utilizo Netlify CMS, que cria uma postagem e já faz o deploy automático no Github.
- O Gatsby já gera automaticamente uma página de erro, ou seja se uma url não existir será mostrado uma página de erro. Então não preciso quebrar a cabeça desenvolvendo essa página 404 dentro do `ceate-react-app`.
- Posso utilizar o TransitionPortal, que cria animações nos links que levam para outras páginas dentro do blog.

Lógico que ainda sim, tive alguns problemas com CSS e acredito que ainda tenham pequenos bugs dentro dos estilos, que com o tempo serão resolvidos.

_Dentro do `create-react-app`, assim como em qualquer outro projeto, seria possível adicionar todas essas funcionalidades,_ mas se o Gatsby já tem isso de uma forma fácil, não há motivos para tentar reinventar a roda.