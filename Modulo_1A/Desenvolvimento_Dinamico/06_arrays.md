
# Arrays em JavaScript

---

## 1. Criação e Manipulação de Arrays

### O que é um Array

Um **array** é uma estrutura de dados utilizada para armazenar vários valores numa única variável.

Em vez de criar uma variável para cada informação, podemos agrupar os valores numa lista organizada.

**Exemplo sem array:**

```js
const fruta1 = "Maçã";
const fruta2 = "Banana";
const fruta3 = "Morango";
```

**Exemplo com array:**

```js
const frutas = ["Maçã", "Banana", "Morango"];

console.log(frutas);

// ["Maçã", "Banana", "Morango"]
```

Os arrays são especialmente úteis para armazenar:

- Listas de utilizadores.
- Produtos de uma loja.
- Notas de estudantes.
- Resultados de pesquisas.
- Informações recebidas de APIs.
- Coleções de objetos.

### Criando um Array

A forma mais comum é utilizar **colchetes (`[]`)**.

```js
const numeros = [10, 20, 30, 40];

const nomes = ["Ana", "Maria", "João"];

const vazio = [];
```

Também podemos utilizar o construtor `Array()`:

```js
const linguagens = new Array("JavaScript", "Python", "Java");

console.log(linguagens);
```

**Boa prática:** preferir a sintaxe `[]`, por ser mais simples e evitar comportamentos inesperados como `new Array(5)`, que cria um array com cinco posições vazias.

### Arrays podem armazenar diferentes tipos

Em JavaScript, os elementos de um array não precisam possuir o mesmo tipo de dado.

```js
const dados = [
    "Dani",
    25,
    true,
    null,
    { curso: "ADS" }
];

console.log(dados);
```

Apesar disso, é recomendável manter arrays com elementos de estrutura consistente quando representam uma coleção de dados semelhantes.

### Índices dos Arrays

Cada elemento possui uma posição, chamada de **índice (Index)**.

Os índices começam em `0`.

```js
const frutas = ["Maçã", "Banana", "Morango"];

console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Morango
```

Representação:

```text
ARRAY:    ["Maçã", "Banana", "Morango"]

ÍNDICE:      0        1         2
```

Se tentarmos aceder a uma posição inexistente, normalmente recebemos `undefined`.

```js
console.log(frutas[5]); // undefined
```

### Propriedade `length`

A propriedade **`length`** indica o comprimento do array.

```js
const frutas = ["Maçã", "Banana", "Morango"];

console.log(frutas.length); // 3
```

Também podemos utilizar `length` para aceder ao último elemento.

```js
const numeros = [10, 20, 30, 40];

console.log(numeros[numeros.length - 1]); // 40
```

Em JavaScript moderno, também podemos utilizar `at()`:

```js
console.log(numeros.at(-1)); // 40
```

### Alterando elementos

Os arrays são mutáveis, ou seja, podemos alterar os seus elementos.

```js
const frutas = ["Maçã", "Banana", "Morango"];

frutas[1] = "Uva";

console.log(frutas);

// ["Maçã", "Uva", "Morango"]
```

### Arrays e `const`

Uma variável declarada com `const` não pode receber uma nova referência, mas o conteúdo do array pode ser alterado.

```js
const numeros = [1, 2, 3];

numeros.push(4);

console.log(numeros);

// [1, 2, 3, 4]
```

O que não podemos fazer é reatribuir a constante:

```js
const numeros = [1, 2, 3];

// numeros = [4, 5, 6];
// TypeError: Assignment to constant variable.
```

### Arrays multidimensionais

Um **array multidimensional** é um array que contém outros arrays.

Uma aplicação comum é representar matrizes.

```js
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
console.log(matriz[2][1]); // 8
```

O primeiro índice identifica a linha e o segundo identifica a posição dentro dessa linha.

### Verificando se um valor é um Array

Podemos utilizar o método **`Array.isArray()`**.

```js
const frutas = ["Maçã", "Banana"];
const nome = "Dani";

console.log(Array.isArray(frutas)); // true
console.log(Array.isArray(nome));   // false
```

Essa verificação é mais adequada do que `typeof` para distinguir arrays de outros objetos.

```js
console.log(typeof frutas); // object
```

---

## 2. Uso de Arrays na Prática

### Percorrendo Arrays com `for`

Os arrays são frequentemente utilizados em conjunto com estruturas de repetição, estudadas em `03_instrucoes_repeticao.md`.

```js
const linguagens = ["JavaScript", "Python", "Java"];

for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagens[i]);
}

// JavaScript
// Python
// Java
```

Neste exemplo:

- `i = 0`: inicia no primeiro índice.
- `i < linguagens.length`: continua enquanto existirem posições válidas.
- `i++`: avança para o próximo índice.

### Percorrendo Arrays com `for...of`

O **`for...of`** permite percorrer diretamente os valores de um array.

```js
const frutas = ["Maçã", "Banana", "Morango"];

for (const fruta of frutas) {
    console.log(fruta);
}
```

É uma alternativa mais simples quando não precisamos utilizar os índices.

### Percorrendo Arrays com `forEach()`

O método **`forEach()`** executa uma função para cada elemento.

```js
const nomes = ["Ana", "Maria", "João"];

nomes.forEach(function(nome) {
    console.log(nome);
});
```

Também podemos utilizar uma Arrow Function, estudada em `01_funcoes_javascript.md`.

```js
nomes.forEach(nome => console.log(nome));
```

### Exemplo — calcular a média de notas

```js
/**
 * Calcula a média de uma lista de notas.
 * @param {number[]} notas - Array de notas.
 * @returns {number} Média calculada.
 */
function calcularMedia(notas) {
    if (notas.length === 0) {
        return 0;
    }

    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}

const notas = [8, 7, 9, 6];

console.log(calcularMedia(notas)); // 7.5
```

A função percorre o array, soma os elementos e divide o resultado pela quantidade de notas.

### Exemplo — lista de produtos

Um array pode armazenar objetos, permitindo organizar dados mais complexos.

```js
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Teclado", preco: 150 }
];

for (const produto of produtos) {
    console.log(`${produto.nome}: R$ ${produto.preco}`);
}
```

**Resultado:**

```text
Notebook: R$ 3500
Mouse: R$ 80
Teclado: R$ 150
```

### Exemplo — procurar um produto

Podemos utilizar `find()` para localizar um objeto através de uma propriedade.

```js
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Teclado", preco: 150 }
];

const produto = produtos.find(item => item.id === 2);

console.log(produto);

// { id: 2, nome: "Mouse", preco: 80 }
```

Se nenhum elemento satisfizer a condição, `find()` devolve `undefined`.

### Arrays e JSON

Os arrays estão diretamente relacionados com o conteúdo estudado em `05_json.md`.

É comum que APIs devolvam listas de objetos no formato JSON.

```json
{
    "usuarios": [
        {
            "id": 1,
            "nome": "Ana"
        },
        {
            "id": 2,
            "nome": "Maria"
        }
    ]
}
```

Depois de converter a resposta JSON para um objeto JavaScript, podemos aceder ao array normalmente.

```js
const resposta = `{
    "usuarios": [
        {"id": 1, "nome": "Ana"},
        {"id": 2, "nome": "Maria"}
    ]
}`;

const dados = JSON.parse(resposta);

console.log(dados.usuarios[0].nome); // Ana
console.log(dados.usuarios[1].nome); // Maria
```

---

## 3. Métodos Básicos de Arrays

### O que são métodos de Arrays

Os **métodos de arrays (Array Methods)** são funções disponibilizadas pelo JavaScript para manipular, pesquisar, organizar e transformar elementos.

Alguns métodos modificam o array original, enquanto outros devolvem novos arrays ou valores.

### `push()` — adicionar ao final

O método **`push()`** adiciona elementos ao final do array.

```js
const frutas = ["Maçã", "Banana"];

frutas.push("Morango");

console.log(frutas);

// ["Maçã", "Banana", "Morango"]
```

O `push()` modifica o array original e devolve o novo comprimento.

### `pop()` — remover do final

O método **`pop()`** remove o último elemento do array.

```js
const frutas = ["Maçã", "Banana", "Morango"];

const removida = frutas.pop();

console.log(frutas);
// ["Maçã", "Banana"]

console.log(removida);
// Morango
```

### `unshift()` — adicionar ao início

O método **`unshift()`** adiciona elementos ao início do array.

```js
const numeros = [20, 30];

numeros.unshift(10);

console.log(numeros);

// [10, 20, 30]
```

### `shift()` — remover do início

O método **`shift()`** remove o primeiro elemento.

```js
const numeros = [10, 20, 30];

numeros.shift();

console.log(numeros);

// [20, 30]
```

### Comparativo dos métodos de inserção e remoção

| Método | Operação | Modifica o original? |
|---|---|---|
| `push()` | Adiciona ao final | Sim |
| `pop()` | Remove do final | Sim |
| `unshift()` | Adiciona ao início | Sim |
| `shift()` | Remove do início | Sim |

### `includes()` — verificar existência

O método **`includes()`** verifica se um determinado valor está presente no array.

Devolve `true` ou `false`.

```js
const linguagens = ["JavaScript", "Python", "Java"];

console.log(linguagens.includes("Python")); // true
console.log(linguagens.includes("PHP"));    // false
```

### `indexOf()` — procurar o índice

O método **`indexOf()`** devolve o índice da primeira ocorrência de um elemento.

```js
const frutas = ["Maçã", "Banana", "Morango"];

console.log(frutas.indexOf("Banana")); // 1
console.log(frutas.indexOf("Uva"));    // -1
```

O valor `-1` indica que o elemento não foi encontrado.

### `slice()` — extrair elementos

Assim como nas strings, o método **`slice()`** permite extrair parte de um array.

Não modifica o array original.

```js
const numeros = [10, 20, 30, 40, 50];

const parte = numeros.slice(1, 4);

console.log(parte);

// [20, 30, 40]

console.log(numeros);

// [10, 20, 30, 40, 50]
```

O índice inicial é incluído e o final é excluído.

### `splice()` — adicionar, remover ou substituir

O método **`splice()`** permite modificar elementos do array original.

**Sintaxe:**

```js
array.splice(inicio, quantidadeRemover, novoElemento);
```

**Exemplo — remover elemento:**

```js
const frutas = ["Maçã", "Banana", "Morango"];

frutas.splice(1, 1);

console.log(frutas);

// ["Maçã", "Morango"]
```

**Exemplo — substituir elemento:**

```js
const frutas = ["Maçã", "Banana", "Morango"];

frutas.splice(1, 1, "Uva");

console.log(frutas);

// ["Maçã", "Uva", "Morango"]
```

### `slice()` vs. `splice()`

| Característica | `slice()` | `splice()` |
|---|---|---|
| Extrai elementos | Sim | Pode remover elementos |
| Modifica o original | Não | Sim |
| Pode adicionar elementos | Não | Sim |
| Retorno | Novo array com os elementos extraídos | Array com elementos removidos |

### `concat()` — juntar arrays

O método **`concat()`** permite combinar arrays.

```js
const frontend = ["HTML", "CSS"];
const linguagens = ["JavaScript", "Python"];

const tecnologias = frontend.concat(linguagens);

console.log(tecnologias);

// ["HTML", "CSS", "JavaScript", "Python"]
```

O método devolve um novo array.

Também podemos utilizar o operador spread (`...`).

```js
const tecnologias = [...frontend, ...linguagens];

console.log(tecnologias);
```

### `join()` — transformar array em string

O método **`join()`** combina os elementos do array numa string, utilizando um separador.

```js
const nomes = ["Ana", "Maria", "João"];

const resultado = nomes.join(", ");

console.log(resultado);

// Ana, Maria, João
```

É o processo inverso de muitos usos de `split()`, estudado no módulo de strings.

### `reverse()` — inverter a ordem

O método **`reverse()`** inverte a ordem dos elementos e modifica o array original.

```js
const numeros = [1, 2, 3, 4];

numeros.reverse();

console.log(numeros);

// [4, 3, 2, 1]
```

### `sort()` — ordenar elementos

O método **`sort()`** ordena os elementos do array.

Por padrão, compara os elementos convertidos em strings.

```js
const frutas = ["Morango", "Banana", "Maçã"];

frutas.sort();

console.log(frutas);
```

Para ordenar números corretamente, normalmente precisamos de uma função de comparação.

```js
const numeros = [100, 5, 20, 3];

numeros.sort((a, b) => a - b);

console.log(numeros);

// [3, 5, 20, 100]
```

Para ordem decrescente:

```js
numeros.sort((a, b) => b - a);

console.log(numeros);

// [100, 20, 5, 3]
```

**Importante:** `sort()` modifica o array original. Para preservar a lista, podemos utilizar uma cópia, como `[...numeros].sort(...)`, ou o método moderno `toSorted()`.

### `map()` — transformar elementos

O método **`map()`** cria um novo array com os resultados de uma função aplicada a cada elemento.

```js
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados);

// [2, 4, 6, 8]
```

O array original permanece inalterado.

### `filter()` — filtrar elementos

O método **`filter()`** cria um novo array contendo apenas os elementos que satisfazem uma condição.

```js
const idades = [15, 22, 17, 30, 18];

const adultos = idades.filter(idade => idade >= 18);

console.log(adultos);

// [22, 30, 18]
```

### `find()` — encontrar um elemento

O método **`find()`** devolve o primeiro elemento que satisfaz uma condição.

```js
const numeros = [4, 8, 12, 16];

const encontrado = numeros.find(numero => numero > 10);

console.log(encontrado); // 12
```

### `reduce()` — acumular valores

O método **`reduce()`** executa uma função acumuladora sobre os elementos do array e produz um resultado.

**Exemplo — somar valores:**

```js
const numeros = [10, 20, 30, 40];

const total = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(total); // 100
```

Neste exemplo:

- `acumulador`: armazena o resultado parcial.
- `numero`: representa o elemento atual.
- `0`: é o valor inicial do acumulador.

Uma versão mais curta:

```js
const total = numeros.reduce((soma, numero) => soma + numero, 0);
```

### Comparativo dos métodos de transformação

| Método | Finalidade | Resultado |
|---|---|---|
| `forEach()` | Executar uma ação por elemento | `undefined` |
| `map()` | Transformar elementos | Novo array |
| `filter()` | Selecionar elementos | Novo array |
| `find()` | Encontrar o primeiro correspondente | Elemento ou `undefined` |
| `reduce()` | Acumular resultados | Valor acumulado |

---

## 4. Exemplo Prático — Carrinho de Compras

Vamos utilizar arrays, objetos e funções para criar um exemplo simples de carrinho de compras.

```js
const carrinho = [
    { produto: "Mouse", preco: 80, quantidade: 2 },
    { produto: "Teclado", preco: 150, quantidade: 1 },
    { produto: "Monitor", preco: 900, quantidade: 1 }
];

/**
 * Calcula o valor total dos produtos do carrinho.
 * @param {Array<{produto: string, preco: number, quantidade: number}>} itens
 * @returns {number}
 */
function calcularTotal(itens) {
    return itens.reduce((total, item) => {
        return total + item.preco * item.quantidade;
    }, 0);
}

const total = calcularTotal(carrinho);

console.table(carrinho);
console.log(`Total: R$ ${total.toFixed(2)}`);

// Total: R$ 1210.00
```

### Filtrando produtos por preço

Podemos utilizar `filter()` para selecionar produtos acima de um determinado valor.

```js
const produtosCaros = carrinho.filter(
    item => item.preco > 100
);

console.table(produtosCaros);
```

### Obtendo apenas os nomes

```js
const nomes = carrinho.map(item => item.produto);

console.log(nomes);

// ["Mouse", "Teclado", "Monitor"]
```

### Procurando um produto específico

```js
const produto = carrinho.find(
    item => item.produto === "Teclado"
);

console.log(produto);

// { produto: "Teclado", preco: 150, quantidade: 1 }
```

Este exemplo demonstra como os arrays são utilizados para representar coleções de dados em aplicações reais.

---

## 5. Exercícios para Praticar

### Exercício 1 — Criar um Array

Crie um array com cinco linguagens de programação.

Depois:

1. Apresente o primeiro elemento.
2. Apresente o último elemento.
3. Mostre a quantidade de elementos.

### Exercício 2 — Adicionar e remover elementos

Crie o array:

```js
const frutas = ["Maçã", "Banana"];
```

Utilize:

- `push()` para adicionar `"Morango"`.
- `unshift()` para adicionar `"Uva"` no início.
- `pop()` para remover o último elemento.
- `shift()` para remover o primeiro elemento.

Apresente o resultado após cada operação.

### Exercício 3 — Percorrer um Array

Crie um array com os números de 1 a 10.

Utilize `for...of` para apresentar todos os elementos.

### Exercício 4 — Filtrar números pares

Utilize o array:

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

Utilize `filter()` para obter apenas os números pares.

**Resultado esperado:**

```js
[2, 4, 6, 8, 10]
```

### Exercício 5 — Dobrar valores

Utilize `map()` para multiplicar todos os elementos do array por 2.

```js
const numeros = [5, 10, 15];
```

**Resultado esperado:**

```js
[10, 20, 30]
```

### Exercício 6 — Calcular a soma

Utilize `reduce()` para somar os valores:

```js
const valores = [100, 200, 300, 400];
```

**Resultado esperado:** `1000`.

### Exercício 7 — Ordenar números

Crie um array:

```js
const numeros = [50, 10, 100, 5, 25];
```

Ordene os valores:

1. Em ordem crescente.
2. Em ordem decrescente.

### Exercício 8 — Lista de alunos

Crie um array com três objetos contendo:

- Nome.
- Idade.
- Nota.

Depois:

1. Utilize `console.table()` para apresentar os alunos.
2. Utilize `filter()` para obter alunos com nota maior ou igual a 7.
3. Utilize `map()` para criar um array contendo apenas os nomes.
4. Utilize `find()` para localizar um aluno pelo nome.

---

## Resumo em uma frase

> Os arrays em JavaScript são estruturas utilizadas para armazenar coleções de valores, permitindo aceder a elementos através de índices, percorrer listas com estruturas de repetição e utilizar métodos como `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `map()`, `filter()`, `find()`, `reduce()` e `sort()` para adicionar, remover, pesquisar, transformar e organizar dados, sendo fundamentais para o desenvolvimento de aplicações web e para a manipulação de informações recebidas de APIs.

---

## Conceitos relacionados para estudar a seguir

- **Objetos em JavaScript** — aprofundar propriedades, métodos e estruturas de dados.

- **Destructuring de Arrays** — aprender a extrair elementos utilizando a sintaxe de desestruturação.

- **Spread Operator (`...`)** — copiar, combinar e expandir arrays.

- **Rest Parameters (`...args`)** — compreender como funções recebem quantidades variáveis de argumentos.

- **Set e Map** — conhecer outras estruturas de dados disponíveis em JavaScript.

- **Arrays Multidimensionais** — trabalhar com matrizes e estruturas aninhadas.

- **Complexidade de Algoritmos** — compreender o impacto dos métodos de arrays no desempenho.

- **Manipulação do DOM** — utilizar arrays para criar e atualizar elementos HTML dinamicamente.

- **Fetch API e JSON** — receber arrays de objetos de APIs e apresentar os dados numa aplicação.
