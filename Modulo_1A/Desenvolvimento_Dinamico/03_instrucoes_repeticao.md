
# Instruções e Repetição em JavaScript

---

## 1. Definição de Instruções e Repetição

### O que são instruções

Uma **instrução (Statement)** é uma unidade de código que determina uma ação a ser realizada pelo programa.

Em JavaScript, as instruções podem ser utilizadas para:

- Declarar variáveis.
- Executar funções.
- Tomar decisões.
- Repetir operações.
- Controlar a execução do código.

**Exemplo:**

```js
const nome = "Dani";

console.log(nome);

const idade = 20;
```

Cada linha representa uma instrução ou contém uma declaração que participa da execução do programa.

### O que é fluxo de controlo

O **fluxo de controlo (Control Flow)** determina a ordem em que as instruções são executadas.

Por padrão, o JavaScript executa as instruções sequencialmente, de cima para baixo.

Entretanto, podemos alterar esse comportamento utilizando:

- **Condicionais:** `if`, `else`, `switch`.
- **Laços de repetição:** `for`, `while`, `do...while`.
- **Instruções de controlo:** `break`, `continue`, `return`.

### Fluxo sequencial vs. condicional vs. repetitivo

```text
          FLUXO SEQUENCIAL

              INÍCIO
                |
                v
            Instrução A
                |
                v
            Instrução B
                |
                v
                FIM


          FLUXO CONDICIONAL

              CONDIÇÃO
              /      \
            true     false
             |         |
             v         v
           Ação A    Ação B
              \       /
               \     /
                 FIM


          FLUXO REPETITIVO

              CONDIÇÃO
              /      \
            true     false
             |         |
             v         v
            AÇÃO      FIM
             |
             +----> Volta à condição
```

### O que são estruturas de repetição

As **estruturas de repetição (Loops)** permitem executar um bloco de código várias vezes, enquanto uma condição for satisfeita ou durante uma quantidade determinada de iterações.

**Exemplo sem repetição:**

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

**Exemplo com repetição:**

```js
for (let numero = 1; numero <= 5; numero++) {
    console.log(numero);
}
```

O resultado é o mesmo, mas a segunda abordagem é mais organizada e escalável.

---

## 2. Instruções Condicionais If-Else

### O que é uma instrução condicional

Uma **instrução condicional (Conditional Statement)** permite executar diferentes blocos de código conforme o resultado de uma condição.

Em JavaScript, as estruturas condicionais utilizam frequentemente expressões que produzem valores booleanos: `true` ou `false`.

### Estrutura `if`

A instrução `if` executa um bloco quando a condição é verdadeira.

**Sintaxe:**

```js
if (condicao) {
    // Executado quando a condição é verdadeira
}
```

**Exemplo:**

```js
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade.");
}
```

Como `idade >= 18` é verdadeiro, a mensagem será apresentada.

### Estrutura `if-else`

A instrução `else` permite executar um bloco alternativo quando a condição do `if` é falsa.

```js
const idade = 16;

if (idade >= 18) {
    console.log("Maior de idade.");
} else {
    console.log("Menor de idade.");
}

// Output: Menor de idade.
```

### Fluxograma do `if-else`

```text
               INÍCIO
                 |
                 v
            idade >= 18?
              /      \
            SIM       NÃO
             |         |
             v         v
        Maior de     Menor de
         idade        idade
              \       /
               \     /
                 FIM
```

### Estrutura `else if`

Quando existem várias condições, podemos utilizar `else if`.

```js
const nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// Output: Aprovado
```

As condições são avaliadas pela ordem em que aparecem.

Assim que uma condição verdadeira é encontrada, o respetivo bloco é executado e os restantes ramos da estrutura são ignorados.

### Condições com operadores lógicos

Podemos combinar condições utilizando os operadores estudados em `02_operadores_operacoes.md`.

```js
const idade = 21;
const possuiIngresso = true;

if (idade >= 18 && possuiIngresso) {
    console.log("Entrada permitida.");
} else {
    console.log("Entrada negada.");
}
```

Neste exemplo, ambas as condições precisam de ser verdadeiras.

### Condicionais aninhadas

Uma **condicional aninhada (Nested Conditional)** é uma estrutura `if` dentro de outra.

```js
const usuarioAutenticado = true;
const administrador = false;

if (usuarioAutenticado) {
    if (administrador) {
        console.log("Acesso administrativo.");
    } else {
        console.log("Acesso de utilizador.");
    }
} else {
    console.log("Faça login.");
}
```

Embora úteis, condicionais muito profundas podem dificultar a leitura do código.

### Exemplo prático — verificação de aprovação

```js
/**
 * Verifica a situação de um aluno.
 * @param {number} media - Média final.
 * @returns {string} Situação do aluno.
 */
function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log(verificarSituacao(8)); // Aprovado
console.log(verificarSituacao(6)); // Recuperação
console.log(verificarSituacao(3)); // Reprovado
```

### Boas práticas com `if-else`

- Utilizar condições claras.
- Preferir `===` e `!==` para comparações de igualdade.
- Evitar aninhamentos desnecessários.
- Utilizar nomes descritivos para variáveis.
- Validar entradas quando necessário.
- Organizar condições por prioridade.

---

## 3. Instruções Condicionais Switch

### O que é `switch`

A instrução **`switch`** permite selecionar diferentes blocos de código com base no valor de uma expressão.

É especialmente útil quando uma variável pode assumir vários valores específicos.

### Sintaxe básica

```js
switch (expressao) {
    case valor1:
        // Instruções
        break;

    case valor2:
        // Instruções
        break;

    default:
        // Instruções alternativas
}
```

**Elementos:**

- `switch`: inicia a estrutura.
- `case`: representa um valor possível.
- `break`: encerra a execução do `switch`.
- `default`: executa uma alternativa quando nenhum `case` corresponde.

### Exemplo — dias da semana

```js
const dia = 3;

switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;

    case 2:
        console.log("Terça-feira");
        break;

    case 3:
        console.log("Quarta-feira");
        break;

    case 4:
        console.log("Quinta-feira");
        break;

    case 5:
        console.log("Sexta-feira");
        break;

    default:
        console.log("Outro dia");
}

// Output: Quarta-feira
```

O `switch` procura um `case` correspondente ao valor da expressão.

### O papel do `break`

O comando **`break`** interrompe a execução do `switch`.

Sem ele, o JavaScript continua a executar as instruções dos casos seguintes, comportamento conhecido como **fall-through**.

```js
const numero = 1;

switch (numero) {
    case 1:
        console.log("Um");

    case 2:
        console.log("Dois");

    default:
        console.log("Outro");
}

// Output:
// Um
// Dois
// Outro
```

Isso acontece porque não foram utilizados comandos `break`.

### Agrupamento de casos

Podemos agrupar diferentes valores que devem executar o mesmo bloco.

```js
const dia = "sábado";

switch (dia) {
    case "sábado":
    case "domingo":
        console.log("Fim de semana");
        break;

    default:
        console.log("Dia útil");
}
```

### Comparação no `switch`

O `switch` utiliza correspondência baseada em igualdade estrita, sem conversão implícita de tipos entre a expressão e os valores dos `case`.

```js
const numero = "1";

switch (numero) {
    case 1:
        console.log("Número 1");
        break;

    case "1":
        console.log("String 1");
        break;
}

// Output: String 1
```

### `if-else` vs. `switch`

| Característica | `if-else` | `switch` |
|---|---|---|
| Avalia diferentes condições | Sim | Principalmente correspondência de valores |
| Permite intervalos com facilidade | Sim | Exige condições adicionais |
| Adequado para múltiplos valores específicos | Sim | Sim |
| Utiliza `case` | Não | Sim |
| Necessita de `break` | Não | Frequentemente |
| Exemplo | Nota maior ou igual a 7 | Opção de menu |

### Exemplo prático — menu de aplicação

```js
function executarOpcao(opcao) {
    switch (opcao) {
        case 1:
            return "Cadastrar cliente";

        case 2:
            return "Consultar clientes";

        case 3:
            return "Atualizar cliente";

        case 4:
            return "Excluir cliente";

        default:
            return "Opção inválida";
    }
}

console.log(executarOpcao(2));
// Consultar clientes
```

Neste exemplo, o `return` também encerra a execução da função, tornando desnecessário utilizar `break` depois dele.

---

## 4. Laço e Repetição

### O que são laços de repetição

Os **laços de repetição (Loops)** permitem executar instruções repetidamente.

Cada execução do corpo de um laço é chamada de **iteração (Iteration)**.

As principais estruturas de repetição em JavaScript são:

- `for`
- `while`
- `do...while`
- `for...of`
- `for...in`

### Laço `for`

O laço `for` é frequentemente utilizado quando existe um contador ou quando a quantidade de repetições pode ser determinada.

**Sintaxe:**

```js
for (inicializacao; condicao; atualizacao) {
    // Código repetido
}
```

**Exemplo:**

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5
```

Neste exemplo:

- `let i = 1`: inicializa o contador.
- `i <= 5`: determina se o laço continua.
- `i++`: incrementa o contador.
- `console.log(i)`: executa a instrução a cada iteração.

### Funcionamento do `for`

```text
             INÍCIO
                |
                v
          Inicialização
                |
                v
          Verificar condição
             /      \
           TRUE     FALSE
            |         |
            v         v
        Executar      FIM
         bloco
            |
            v
       Atualizar contador
            |
            +----> Verificar condição
```

### Exemplo — tabuada

```js
const numero = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} × ${i} = ${numero * i}`);
}
```

A função `console.log()` apresenta os resultados de 5 × 1 até 5 × 10.

### Laço `while`

O laço **`while`** executa um bloco enquanto uma condição for verdadeira.

É útil quando não sabemos antecipadamente quantas iterações serão necessárias.

```js
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

A condição é verificada **antes** de cada execução do bloco.

Se for falsa desde o início, o bloco não será executado.

### Laço `do...while`

O **`do...while`** é semelhante ao `while`, mas verifica a condição **depois** de executar o bloco.

Por isso, o corpo é executado pelo menos uma vez.

```js
let numero = 10;

do {
    console.log(numero);
    numero++;
} while (numero < 5);

// Output: 10
```

Mesmo com a condição falsa, o código executou uma vez.

### Comparativo dos principais laços

| Estrutura | Quando utilizar | Verificação |
|---|---|---|
| `for` | Repetições com contador | Antes do corpo |
| `while` | Repetir enquanto uma condição for verdadeira | Antes do corpo |
| `do...while` | Executar pelo menos uma vez | Depois do corpo |
| `for...of` | Percorrer valores iteráveis | A cada elemento |
| `for...in` | Percorrer chaves enumeráveis de objetos | A cada propriedade |

### Laço `for...of`

O **`for...of`** é utilizado para percorrer valores de objetos iteráveis, como arrays e strings.

```js
const frutas = ["Maçã", "Banana", "Morango"];

for (const fruta of frutas) {
    console.log(fruta);
}

// Maçã
// Banana
// Morango
```

Também funciona com strings:

```js
const palavra = "JS";

for (const letra of palavra) {
    console.log(letra);
}

// J
// S
```

### Laço `for...in`

O **`for...in`** percorre as chaves das propriedades enumeráveis de um objeto.

```js
const usuario = {
    nome: "Dani",
    idade: 25,
    ativo: true
};

for (const propriedade in usuario) {
    console.log(`${propriedade}: ${usuario[propriedade]}`);
}
```

**Resultado:**

```text
nome: Dani
idade: 25
ativo: true
```

O `for...in` também pode percorrer propriedades herdadas enumeráveis. Para trabalhar apenas com propriedades próprias de um objeto, uma alternativa é `Object.keys()`.

Em arrays, normalmente é preferível utilizar `for...of`.

### `break` — interromper um laço

O comando **`break`** interrompe a execução do laço mais interno em que está inserido, salvo quando é utilizado com um rótulo.

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
```

A execução é interrompida quando `i` é igual a 5.

### `continue` — avançar para a próxima iteração

O comando **`continue`** interrompe a iteração atual e permite prosseguir com a seguinte.

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5
```

O número 3 não é apresentado porque a iteração correspondente foi ignorada.

### Laços aninhados

Um **laço aninhado (Nested Loop)** é um laço dentro de outro.

```js
for (let linha = 1; linha <= 3; linha++) {
    for (let coluna = 1; coluna <= 3; coluna++) {
        console.log(`Linha ${linha}, Coluna ${coluna}`);
    }
}
```

Esse tipo de estrutura é útil para trabalhar com matrizes e combinações.

Entretanto, laços aninhados podem aumentar o número de operações.

Neste exemplo, o bloco interno é executado 3 × 3 = 9 vezes.

### Cuidado com loops infinitos

Um **loop infinito (Infinite Loop)** ocorre quando a condição de saída nunca deixa de ser verdadeira.

```js
let contador = 0;

// Não executar sem um mecanismo de saída:
// while (contador < 5) {
//     console.log(contador);
// }
```

Nesse exemplo, `contador` nunca seria incrementado, fazendo a condição permanecer verdadeira.

A versão correta seria:

```js
let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
}
```

---

## 5. Blocos de Código e Rótulos

### O que são blocos de código

Um **bloco de código (Block Statement)** é um conjunto de instruções delimitado por chaves `{}`.

É utilizado para agrupar instruções em estruturas como:

- `if`
- `else`
- `for`
- `while`
- `switch` (que utiliza chaves para delimitar a estrutura)
- Funções

**Exemplo:**

```js
const idade = 20;

if (idade >= 18) {
    const mensagem = "Acesso autorizado";

    console.log(mensagem);
}
```

As chaves delimitam o bloco executado quando a condição é verdadeira.

### Escopo de bloco

As variáveis declaradas com `let` e `const` possuem **escopo de bloco (Block Scope)**.

Isso significa que só podem ser acedidas dentro do bloco em que foram declaradas.

```js
if (true) {
    const nome = "Dani";
    let idade = 25;

    console.log(nome);
    console.log(idade);
}

// console.log(nome);  // ReferenceError
// console.log(idade); // ReferenceError
```

Este comportamento foi introduzido em `00_introducao_javascript.md`.

### Diferença entre `var`, `let` e `const` em blocos

```js
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10

// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
```

A variável declarada com `var` possui escopo de função ou de script, não de bloco.

Já `let` e `const` respeitam o bloco em que foram declaradas.

### O que são rótulos (Labels)

Um **rótulo (Label)** permite atribuir um identificador a uma instrução.

É utilizado principalmente com `break` e `continue` para controlar estruturas de repetição aninhadas.

**Sintaxe:**

```js
nomeDoRotulo:
    instrucao;
```

### Rótulos com `break`

Considere dois laços aninhados.

Sem rótulo, o `break` interrompe apenas o laço mais interno.

Com um rótulo, podemos indicar uma estrutura externa que deverá ser interrompida.

```js
externo:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break externo;
        }

        console.log(`i=${i}, j=${j}`);
    }
}
```

**Resultado:**

```text
i=1, j=1
i=1, j=2
i=1, j=3
i=2, j=1
```

Quando `i === 2` e `j === 2`, o comando `break externo` encerra o laço identificado pelo rótulo `externo`.

### Rótulos com `continue`

O `continue` com rótulo permite avançar para a próxima iteração de um laço externo identificado.

```js
externo:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue externo;
        }

        console.log(`i=${i}, j=${j}`);
    }
}
```

**Resultado:**

```text
i=1, j=1
i=2, j=1
i=3, j=1
```

Quando `j === 2`, a execução avança para a próxima iteração do laço externo.

**Importante:** um `continue` com rótulo deve referir-se a um laço de repetição envolvente.

### Quando utilizar rótulos

Rótulos podem ser úteis em situações específicas, como:

- Pesquisa em matrizes.
- Laços profundamente aninhados.
- Interrupção de múltiplos níveis de repetição.

Contudo, devem ser utilizados com moderação.

Em muitos casos, é possível melhorar a legibilidade utilizando funções e `return`.

### Exemplo sem rótulos

```js
function encontrarNumero(matriz, procurado) {
    for (const linha of matriz) {
        for (const numero of linha) {
            if (numero === procurado) {
                return true;
            }
        }
    }

    return false;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(encontrarNumero(matriz, 5));  // true
console.log(encontrarNumero(matriz, 10)); // false
```

Neste exemplo, o `return` permite encerrar a função assim que o número é encontrado, sem precisar utilizar rótulos.

---

## Resumo em uma frase

> As instruções e estruturas de repetição em JavaScript permitem controlar a execução dos programas através de decisões com `if`, `else` e `switch`, repetições com `for`, `while`, `do...while`, `for...of` e `for...in`, além de comandos como `break` e `continue`, enquanto os blocos de código organizam instruções e delimitam o escopo de variáveis, e os rótulos permitem controlar a saída ou continuidade de laços aninhados em situações específicas.

---

## Conceitos relacionados para estudar a seguir

- **Arrays em JavaScript** — aprender a armazenar e manipular coleções de valores.

- **Métodos de Arrays** — aprofundar `forEach()`, `map()`, `filter()`, `find()` e `reduce()`.

- **Objetos em JavaScript** — compreender propriedades, métodos e estruturas de dados.

- **Escopo e Closures** — estudar como variáveis são acedidas dentro de funções e blocos.

- **Tratamento de Exceções** — utilizar `try`, `catch`, `finally` e `throw` para lidar com erros.

- **Manipulação do DOM** — combinar condicionais, funções e loops para modificar páginas HTML.

- **Recursividade** — compreender funções que chamam a si próprias como alternativa a determinados processos repetitivos.

- **Complexidade de Algoritmos** — conhecer conceitos introdutórios de eficiência e notação Big O.
