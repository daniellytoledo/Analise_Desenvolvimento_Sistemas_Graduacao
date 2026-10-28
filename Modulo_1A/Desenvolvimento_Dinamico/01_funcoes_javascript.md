
# Funções em JavaScript

---

## 1. O que são Funções

Uma **função (Function)** é um bloco de código reutilizável, criado para executar uma tarefa específica. Em vez de escrever as mesmas instruções várias vezes, podemos agrupá-las numa função e executá-las sempre que necessário.

As funções são fundamentais em JavaScript porque permitem organizar o código em unidades menores, facilitando a leitura, manutenção e reutilização.

### Estrutura básica de uma função

```js
function saudacao() {
    console.log("Olá! Bem-vindo ao JavaScript.");
}

// Chamando a função
saudacao();

// Output: Olá! Bem-vindo ao JavaScript.
```

Neste exemplo:

- **`function`** — palavra-chave utilizada para declarar uma função.
- **`saudacao`** — nome atribuído à função.
- **`()`** — parênteses que podem receber parâmetros.
- **`{}`** — bloco que contém as instruções da função.
- **`saudacao()`** — chamada que executa a função.

**Importante:** declarar uma função não significa executá-la. Para que o código dentro dela seja executado, normalmente precisamos chamá-la.

### Parâmetros e Argumentos

As funções podem receber valores externos para executar operações.

**Parâmetros (Parameters)** são as variáveis definidas na declaração da função.

**Argumentos (Arguments)** são os valores fornecidos quando a função é chamada.

```js
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao("Dani");
saudacao("Maria");

// Output:
// Olá, Dani!
// Olá, Maria!
```

Neste exemplo:

- `nome` é o parâmetro.
- `"Dani"` e `"Maria"` são argumentos.

Também podemos utilizar múltiplos parâmetros:

```js
function somar(a, b) {
    console.log(a + b);
}

somar(10, 5); // 15
somar(8, 2);  // 10
```

### O comando `return`

O comando **`return`** permite devolver um valor para o local onde a função foi chamada.

Além disso, encerra a execução daquela chamada da função.

```js
function multiplicar(a, b) {
    return a * b;
}

const resultado = multiplicar(5, 4);

console.log(resultado); // 20
```

**Diferença entre `console.log()` e `return`:**

| `console.log()` | `return` |
|---|---|
| Apresenta informação na consola | Devolve um valor |
| Não define o resultado da função | Define o resultado da chamada |
| Útil para depuração | Útil para reutilizar resultados |
| Não encerra a função | Encerra a execução da função |

```js
function calcularDobro(numero) {
    return numero * 2;
}

const resultado = calcularDobro(10);

console.log(resultado + 5); // 25
```

Se uma função não executar um `return` com valor, o resultado da chamada será `undefined`.

### Parâmetros com valores por defeito

O JavaScript permite definir valores padrão para os parâmetros.

```js
function saudacao(nome = "Visitante") {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Dani"));
// Olá, Dani!

console.log(saudacao());
// Olá, Visitante!
```

O valor padrão é utilizado quando o argumento é omitido ou recebe `undefined`.

---

## 2. Importância de Usar Funções

As funções são uma das principais ferramentas para produzir código organizado, reutilizável e de fácil manutenção.

### Reutilização de código

Sem funções, precisamos repetir as mesmas instruções em diferentes partes do programa.

**Exemplo sem função:**

```js
const preco1 = 100;
const desconto1 = preco1 * 0.10;
console.log(preco1 - desconto1);

const preco2 = 200;
const desconto2 = preco2 * 0.10;
console.log(preco2 - desconto2);
```

**Exemplo com função:**

```js
function aplicarDesconto(preco) {
    return preco - (preco * 0.10);
}

console.log(aplicarDesconto(100)); // 90
console.log(aplicarDesconto(200)); // 180
```

A segunda abordagem evita duplicação e facilita alterações futuras.

### Organização e legibilidade

As funções permitem dividir problemas complexos em operações menores.

```js
function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}

function calcularDesconto(subtotal, percentual) {
    return subtotal * (percentual / 100);
}

function calcularTotal(preco, quantidade, percentual) {
    const subtotal = calcularSubtotal(preco, quantidade);
    const desconto = calcularDesconto(subtotal, percentual);

    return subtotal - desconto;
}

console.log(calcularTotal(50, 3, 10));
// Output: 135
```

Cada função possui uma responsabilidade específica.

Isso facilita a compreensão e a manutenção do código.

### Facilidade de manutenção

Imagine que uma loja altera a política de descontos.

Se o cálculo estiver repetido em diferentes partes do programa, será necessário modificar vários trechos.

Com uma função, a regra pode ser alterada num único local.

### Facilidade de testes

Funções com entradas e saídas bem definidas são mais fáceis de testar.

```js
function somar(a, b) {
    return a + b;
}

console.assert(somar(2, 3) === 5);
console.assert(somar(-2, 2) === 0);
console.assert(somar(0, 0) === 0);
```

O `console.assert()` apresenta uma mensagem quando a condição testada é falsa.

Em projetos maiores, podemos utilizar frameworks de testes como Jest ou Vitest.

### O princípio DRY

O princípio **DRY (Don't Repeat Yourself)** significa evitar a duplicação desnecessária de conhecimento e lógica no código.

As funções ajudam a aplicar esse princípio porque permitem centralizar operações reutilizáveis.

**Benefícios principais:**

- Menos repetição.
- Código mais legível.
- Manutenção simplificada.
- Maior facilidade de testes.
- Melhor organização.
- Redução de inconsistências.

---

## 3. O que são Funções Regulares

As **funções regulares**, também chamadas de **funções tradicionais**, são funções declaradas utilizando a palavra-chave `function`.

Uma das formas mais comuns é a **Function Declaration (Declaração de Função)**.

### Sintaxe

```js
function nomeDaFuncao(parametro1, parametro2) {
    // Instruções
    return resultado;
}
```

### Exemplo prático

```js
function calcularMedia(nota1, nota2, nota3) {
    const soma = nota1 + nota2 + nota3;
    return soma / 3;
}

const media = calcularMedia(8, 7, 9);

console.log(media); // 8
```

A função recebe três notas, calcula a média e devolve o resultado.

### Hoisting em funções regulares

As declarações de funções possuem um comportamento chamado **hoisting**.

Isso permite chamar uma função declarada com `function` antes da sua posição no código, dentro do escopo apropriado.

```js
mostrarMensagem();

function mostrarMensagem() {
    console.log("Esta função foi chamada antes da declaração!");
}
```

Esse código funciona porque a declaração da função fica disponível durante a inicialização do escopo.

**Atenção:** esse comportamento não deve ser confundido com o de expressões de função atribuídas a `const` ou `let`.

### Escopo das funções

Uma função pode possuir variáveis locais, que não ficam disponíveis fora do seu escopo.

```js
function exemploEscopo() {
    const mensagem = "Estou dentro da função!";

    console.log(mensagem);
}

exemploEscopo();

// console.log(mensagem);
// ReferenceError: mensagem is not defined
```

Isso ajuda a evitar conflitos entre variáveis de diferentes partes do programa.

### Documentação com JSDoc

Conforme estudado em `00_introducao_javascript.md`, podemos documentar funções utilizando JSDoc.

```js
/**
 * Calcula a área de um retângulo.
 * @param {number} largura - Largura do retângulo.
 * @param {number} altura - Altura do retângulo.
 * @returns {number} Área calculada.
 * @example
 * calcularArea(5, 4); // 20
 */
function calcularArea(largura, altura) {
    return largura * altura;
}

console.log(calcularArea(5, 4)); // 20
```

O VS Code pode utilizar essa documentação para apresentar informações sobre os parâmetros e o retorno da função.

---

## 4. O que são Funções Anônimas

Uma **função anônima (Anonymous Function)** é uma função que não possui um nome próprio na sua expressão.

É frequentemente utilizada quando queremos armazenar uma função numa variável ou passá-la como argumento para outra função.

### Sintaxe básica

```js
const saudacao = function() {
    console.log("Olá! Sou uma função anônima.");
};

saudacao();
```

Neste exemplo:

- `function()` cria uma função sem nome explícito.
- A função é atribuída à constante `saudacao`.
- `saudacao()` executa a função.

Esse tipo de construção é conhecido como **Function Expression (Expressão de Função)**.

### Funções anônimas com parâmetros

```js
const somar = function(a, b) {
    return a + b;
};

console.log(somar(10, 20)); // 30
```

Embora não tenha um nome declarado na expressão, a função pode ser chamada através da variável que a referencia.

### Funções como valores

Em JavaScript, as funções são consideradas **first-class functions**, ou seja, podem ser tratadas como valores.

Isso significa que podem:

- Ser atribuídas a variáveis.
- Ser passadas como argumentos.
- Ser devolvidas por outras funções.
- Ser armazenadas em arrays ou objetos.

### Funções anônimas como callbacks

Um **callback** é uma função passada como argumento para outra função, para ser executada conforme a lógica dessa função.

```js
function executarOperacao(operacao) {
    operacao();
}

executarOperacao(function() {
    console.log("Operação executada!");
});
```

Neste exemplo, a função anônima é passada diretamente para `executarOperacao()`.

### Exemplo com `setTimeout()`

```js
setTimeout(function() {
    console.log("Mensagem exibida após 2 segundos.");
}, 2000);
```

O `setTimeout()` agenda a execução da função depois de aproximadamente 2.000 milissegundos.

### Exemplo com arrays

```js
const numeros = [1, 2, 3, 4];

numeros.forEach(function(numero) {
    console.log(numero * 2);
});

// Output:
// 2
// 4
// 6
// 8
```

O método `forEach()` executa a função recebida para cada elemento do array.

### Hoisting em expressões de função

Diferentemente das declarações regulares, uma expressão de função atribuída a `const` não pode ser utilizada antes da inicialização da constante.

```js
// saudacao(); // ReferenceError

const saudacao = function() {
    console.log("Olá!");
};

saudacao(); // Funciona
```

Isso acontece porque a variável declarada com `const` permanece na **Temporal Dead Zone (TDZ)** até à sua inicialização.

---

## 5. O que são Funções Arrow

As **Arrow Functions**, também conhecidas como **funções de seta**, foram introduzidas no ECMAScript 2015 (ES6).

Oferecem uma sintaxe mais curta para escrever expressões de função.

Utilizam o operador:

```js
=>
```

### Sintaxe básica

**Função tradicional:**

```js
const somar = function(a, b) {
    return a + b;
};
```

**Arrow Function:**

```js
const somar = (a, b) => {
    return a + b;
};
```

As duas funções executam o mesmo cálculo, embora existam diferenças importantes no comportamento de `this` e de outros recursos da linguagem.

### Retorno implícito

Quando uma Arrow Function possui apenas uma expressão, podemos omitir as chaves e a palavra-chave `return`.

```js
const somar = (a, b) => a + b;

console.log(somar(10, 5)); // 15
```

Esse comportamento é chamado de **retorno implícito (Implicit Return)**.

### Arrow Function com um parâmetro

Quando existe apenas um parâmetro simples, os parênteses são opcionais.

```js
const dobro = numero => numero * 2;

console.log(dobro(5)); // 10
```

### Arrow Function sem parâmetros

Quando não existem parâmetros, os parênteses são obrigatórios.

```js
const saudacao = () => "Olá, mundo!";

console.log(saudacao());
```

### Arrow Function com várias instruções

Quando a função possui um bloco com várias instruções, precisamos utilizar `return` explicitamente para devolver um resultado.

```js
const calcularMedia = (a, b, c) => {
    const soma = a + b + c;
    const media = soma / 3;

    return media;
};

console.log(calcularMedia(8, 7, 9)); // 8
```

### Arrow Functions com arrays

São frequentemente utilizadas com métodos como:

- `map()`
- `filter()`
- `find()`
- `forEach()`

**Exemplo com `map()`:**

```js
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados);

// [2, 4, 6, 8, 10]
```

O método `map()` cria um novo array com os resultados da função aplicada a cada elemento.

**Exemplo com `filter()`:**

```js
const idades = [15, 22, 17, 30, 18];

const maioresDeIdade = idades.filter(idade => idade >= 18);

console.log(maioresDeIdade);

// [22, 30, 18]
```

O método `filter()` devolve um novo array contendo apenas os elementos que satisfazem a condição.

**Exemplo com `find()`:**

```js
const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Dani" },
    { id: 3, nome: "Maria" }
];

const usuario = usuarios.find(pessoa => pessoa.id === 2);

console.log(usuario);

// { id: 2, nome: "Dani" }
```

O método `find()` devolve o primeiro elemento que satisfaz a condição ou `undefined` quando não encontra nenhum.

### Diferença importante: `this`

Uma das principais diferenças entre funções tradicionais e Arrow Functions é o comportamento de **`this`**.

As funções tradicionais possuem um `this` que depende da forma como são chamadas.

As Arrow Functions não criam o seu próprio `this`: utilizam o `this` do contexto envolvente, conhecido como **lexical this**.

**Exemplo com função tradicional:**

```js
const pessoa = {
    nome: "Dani",

    apresentar: function() {
        console.log(`Olá, sou ${this.nome}`);
    }
};

pessoa.apresentar();

// Olá, sou Dani
```

**Exemplo com Arrow Function dentro de um método:**

```js
const pessoa = {
    nome: "Dani",

    apresentar: function() {
        const mostrarNome = () => {
            console.log(`Olá, sou ${this.nome}`);
        };

        mostrarNome();
    }
};

pessoa.apresentar();

// Olá, sou Dani
```

A Arrow Function utiliza o `this` herdado da função `apresentar()`.

**Boa prática:** evitar utilizar Arrow Functions diretamente como métodos de objetos quando o método precisa de aceder ao próprio objeto através de `this`.

### Arrow Functions e construtores

Arrow Functions não podem ser utilizadas como funções construtoras através de `new`.

```js
const Pessoa = (nome) => {
    this.nome = nome;
};

// new Pessoa("Dani");
// TypeError: Pessoa is not a constructor
```

Para criar objetos através de construtores, podemos utilizar funções tradicionais ou classes.

---

## 6. Comparativo — Funções Regulares, Anônimas e Arrow

| Característica | Regular (Declaration) | Anônima (Expression) | Arrow Function |
|---|---|---|---|
| Sintaxe | `function nome() {}` | `const fn = function() {}` | `const fn = () => {}` |
| Nome explícito | Sim | Não necessariamente | Não necessariamente |
| Hoisting para chamada antecipada | Sim | Não com `const` antes da inicialização | Não com `const` antes da inicialização |
| Possui próprio `this` | Sim | Sim | Não |
| Pode ser construtora com `new` | Sim | Sim | Não |
| Possui objeto `arguments` próprio | Sim | Sim | Não |
| Retorno implícito | Não | Não | Sim, sem bloco |
| Uso comum | Funções nomeadas reutilizáveis | Callbacks e expressões | Callbacks e operações concisas |

**Importante:** regular, anônima e arrow não são categorias completamente exclusivas. Uma função tradicional pode ser anônima, e uma arrow function também pode não ter nome explícito.

### Exemplo das três formas

**1. Função regular:**

```js
function quadrado(numero) {
    return numero * numero;
}
```

**2. Função anônima:**

```js
const quadrado = function(numero) {
    return numero * numero;
};
```

**3. Arrow Function:**

```js
const quadrado = numero => numero * numero;
```

As três formas podem calcular o quadrado de um número.

A escolha depende da legibilidade, da necessidade de `this` e da organização do código.

---

## 7. Boas Práticas ao Criar Funções

### Utilizar nomes descritivos

Os nomes devem indicar claramente o objetivo.

```js
// ❌ Pouco descritivo
function calc(a, b) {
    return a * b;
}

// ✅ Mais claro
function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}
```

### Criar funções com responsabilidades específicas

Uma função deve, preferencialmente, realizar uma tarefa bem definida.

Isso torna o código mais fácil de compreender, testar e reutilizar.

### Evitar funções excessivamente longas

Funções muito extensas podem dificultar a manutenção.

Quando necessário, divida a lógica em funções menores.

### Utilizar `const` para armazenar funções

```js
const calcularTriplo = numero => numero * 3;
```

Conforme estudado em `00_introducao_javascript.md`, `const` deve ser preferido quando não precisamos reatribuir uma variável.

### Documentar funções importantes

Utilize JSDoc para explicar parâmetros, valores de retorno e comportamentos relevantes.

```js
/**
 * Verifica se uma pessoa é maior de idade.
 * @param {number} idade - Idade da pessoa.
 * @returns {boolean} true se possuir 18 anos ou mais.
 */
const maiorDeIdade = idade => idade >= 18;

console.log(maiorDeIdade(20)); // true
console.log(maiorDeIdade(16)); // false
```

### Preferir código legível

Uma Arrow Function extremamente curta nem sempre é a melhor opção.

Se a lógica for complexa, uma função com bloco e instruções explícitas pode ser mais compreensível.

---

## Resumo em uma frase

> As funções em JavaScript permitem organizar e reutilizar blocos de código, receber parâmetros e devolver resultados através de `return`, podendo ser declaradas como funções regulares com `function`, escritas como expressões anônimas ou utilizando a sintaxe moderna de Arrow Functions (`=>`), sendo essenciais para aplicar o princípio DRY, melhorar a legibilidade, facilitar testes e desenvolver aplicações mais organizadas e fáceis de manter.

---

## Conceitos relacionados para estudar a seguir

- **Escopo de Funções (Function Scope)** — compreender variáveis locais, globais e o comportamento de `let`, `const` e `var` dentro de funções.

- **Closures** — estudar como uma função pode preservar o acesso a variáveis do contexto em que foi criada.

- **Callbacks e Higher-Order Functions** — compreender funções que recebem ou devolvem outras funções.

- **Rest Parameters (`...args`)** — aprender a receber uma quantidade variável de argumentos.

- **Destructuring em Parâmetros** — utilizar desestruturação de objetos e arrays na definição de funções.

- **Métodos de Arrays** — aprofundar `map()`, `filter()`, `reduce()`, `find()` e `forEach()`.

- **Funções Assíncronas (Async/Await)** — compreender funções que trabalham com operações assíncronas e Promises.

- **Manipulação do DOM** — utilizar funções para responder a eventos e modificar elementos HTML.
