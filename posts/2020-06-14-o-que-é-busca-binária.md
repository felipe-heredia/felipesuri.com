---
title: O que é busca binária?
description: Explicando um pouco sobre busca binária
date: 2020-06-15 10:07:55
image: assets/img/favicon.png
category: projetos, buscas
---
[1]: https://github.com/felipesuri/binary-search
[2]: https://pt.wikipedia.org/wiki/Pesquisa_bin%C3%A1ria

Recentemente desenvolvi um [projeto sobre busca binária][1] e decidi compartilhar como ela funciona e o motivo para ser utilizada.

__Busca binária__ é um algoritmo de busca em vetores que segue o paradigma de divisão e conquista. Ela parte do pressuposto de que o vetor está ordenado e realiza sucessivas divisões do espaço de busca comparando o elemento buscado (chave) com o elemento no meio do vetor. Se o elemento do meio do vetor for a chave, a busca termina com sucesso. Caso contrário, se o  do meio vier antes do elemento buscado, então a busca continua na metade posterior do vetor. E finalmente, se o  do meio vier depois da chave, a busca continua na metade anterior do vetor. - [Wikipedia][2]

Essa explicação ficou bastante complexa, então vamos explicar de uma melhor forma e com código (em JavaScript, claro 🥰).

Para a busca binária funcionar, __precisamos ter um Array ordenado__, pois, dependendo do número procurado (target) será feita uma busca na direita ou esquerda, veja o exemplo:

```js

const elements = [1, 3, 77, 5, 9, 10]
const target = 9
```

Neste exemplo teríamos um erro, pois o objeto do meio seria o 77 que é maior que o `target` que é 9, portanto a nossa função faria uma busca na esquerda porém não encontraria já que o target 9 está depois do 77.

```js
const elements = [1, 2, 3, 4, 5]
const target = 3
```

Neste exemplo, receberíamos como retorno o número 2, visto que o `target = 3` está nessa posição (lembrando que array inicia com a posição 0, ou seja nesse exemplo a posição do número um equivale a 0);

Nesse exemplo a elemento do meio já caiu no target procurado, portanto não foi preciso dividir o array em duas partes, então vamos para um exemplo que será necessário dividir.



```js
const elements = [0, 2, 5, 9]
const target = 9
```

Nesse último exemplo, o array será divido até encontrar o target. Utilizando o método: `Math.floor(left + right / 2)` o meio será arredondado para baixo, ou seja o meio seria na posição 1 ao invés de 1,5.

Já que o nosso target é maior do que a posição do meio então dividiremos novamente, porém agora,, na direita e será feito um novo array `[5, 9]` e assim encontraremos nosso target.

## Binary Search na sua máquina

Voltando a falar sobre o meu projeto feito, você pode fazer alguns testes  da seguinte forma:

__Siga os passos:__

```bash
git clone https://github.com/felipesuri/binary-search.git && cd binary-search
```

```bash
yarn && yarn test
```

Rodando o comando `yarn test` serão feitos os testes, você pode implementar mais testes na pasta `__test__`, também pode ver a função `binarySearch` na pasta `utils`.

---

Enfim pessoal, por essa semana é isso, uma postagem bem básica explicando sobre busca binária. Espero que tenham gostado❤️.

