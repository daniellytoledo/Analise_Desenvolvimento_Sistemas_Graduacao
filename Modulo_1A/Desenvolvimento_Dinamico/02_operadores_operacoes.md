
# Operadores e Operações em JavaScript

---

## 1. Definição de Operadores em Programação

### O que são operadores

Os **operadores (Operators)** são símbolos ou palavras-chave utilizados para realizar operações sobre valores e variáveis.

Esses valores são chamados de **operandos (Operands)**.

Os operadores permitem executar cálculos, comparar valores, combinar condições lógicas e atribuir resultados a variáveis.

**Exemplo:**

```js
const a = 10;
const b = 5;

const resultado = a + b;

console.log(resultado); // 15
```

Neste exemplo:

- `a` e `b` são os operandos.
- `+` é o operador de adição.
- `a + b` é uma expressão.
- `=` é o operador de atribuição.
- `resultado` armazena o valor calculado.

### O que é uma expressão

Uma **expressão (Expression)** é uma combinação de valores, variáveis e operadores que pode ser avaliada e produzir um resultado.

```js
10 + 5           // 15
20 > 10          // true
5 === "5"        // false
true && false    // false
```

As expressões podem ser utilizadas em atribuições, condições, funções e outras estruturas da linguagem.

### Classificação dos operadores

Em JavaScript, existem diferentes categorias de operadores.

| Categoria | Finalidade | Exemplos |
|---|---|---|
| Aritméticos | Realizar cálculos matemáticos | `+`, `-`, `*`, `/` |
| Comparação | Comparar valores | `===`, `!==`, `>`, `<` |
| Lógicos | Combinar ou inverter condições | `&&`, `\|\|`, `!` |
| Atribuição | Atribuir e atualizar valores | `=`, `+=`, `-=` |
| Incremento e decremento | Aumentar ou diminuir uma unidade | `++`, `--` |
| Condicional | Escolher um valor com base numa condição | `? :` |
| Coalescência nula | Utilizar alternativa para valores nulos | `??` |
| Tipo | Verificar o tipo de um valor | `typeof` |

### Operadores unários, binários e ternários

Os operadores também podem ser classificados conforme a quantidade de operandos.

**Unários:** utilizam um operando.

```js
let numero = 10;

numero++;

console.log(numero); // 11

console.log(!true); // false
```

**Binários:** utilizam dois operandos.

```js
const soma = 10 + 5;

console.log(soma); // 15
```

**Ternário:** utiliza três expressões operandas.

```js
const idade = 20;

const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(mensagem); // Maior de idade
```

O operador condicional ternário será aprofundado na última secção.

---

## 2. Operadores Aritméticos

### O que são operadores aritméticos

Os **operadores aritméticos (Arithmetic Operators)** permitem executar operações matemáticas utilizando valores numéricos.

São frequentemente utilizados em:

- Cálculos financeiros.
- Médias.
- Contadores.
- Sistemas de pontuação.
- Processamento de dados.
- Cálculo de preços e descontos.

### Principais operadores aritméticos

| Operador | Operação | Exemplo | Resultado |
|---|---|---|---|
| `+` | Adição | `10 + 5` | `15` |
| `-` | Subtração | `10 - 5` | `5` |
| `*` | Multiplicação | `10 * 5` | `50` |
| `/` | Divisão | `10 / 5` | `2` |
| `%` | Resto da divisão | `10 % 3` | `1` |
| `**` | Exponenciação | `2 ** 3` | `8` |
| `++` | Incremento | `numero++` | Aumenta uma unidade |
| `--` | Decremento | `numero--` | Diminui uma unidade |

### Adição (`+`)

O operador `+` realiza a soma de valores numéricos.

```js
const numero1 = 15;
const numero2 = 10;

const soma = numero1 + numero2;

console.log(soma); // 25
```

O operador `+` também pode concatenar strings.

```js
const nome = "Dani";
const sobrenome = "Toledo";

console.log(nome + " " + sobrenome);

// Dani Toledo
```

**Atenção:** quando existe uma string, o JavaScript pode realizar concatenação em vez de adição.

```js
console.log(10 + "5"); // "105"
```

Por isso, é importante compreender os tipos de dados envolvidos.

### Subtração (`-`)

```js
const saldo = 100;
const compra = 35;

const saldoRestante = saldo - compra;

console.log(saldoRestante); // 65
```

### Multiplicação (`*`)

```js
const preco = 25;
const quantidade = 4;

const total = preco * quantidade;

console.log(total); // 100
```

### Divisão (`/`)

```js
const valorTotal = 100;
const pessoas = 4;

const valorPorPessoa = valorTotal / pessoas;

console.log(valorPorPessoa); // 25
```

Em JavaScript, a divisão de dois números pode produzir um resultado decimal.

```js
console.log(10 / 3); // 3.3333333333333335
```

### Resto da divisão (`%`)

O operador `%` devolve o **resto de uma divisão**, sendo frequentemente chamado de operador módulo em conteúdos introdutórios.

```js
console.log(10 % 3); // 1
console.log(20 % 5); // 0
console.log(7 % 2);  // 1
```

Uma aplicação comum consiste em verificar se um número é par ou ímpar.

```js
function verificarPar(numero) {
    return numero % 2 === 0;
}

console.log(verificarPar(10)); // true
console.log(verificarPar(7));  // false
```

Se o resto da divisão por 2 for igual a zero, o número inteiro é par.

**Nota:** em JavaScript, `%` é tecnicamente o operador de resto (*remainder*), cujo comportamento com números negativos pode diferir do módulo matemático.

### Exponenciação (`**`)

O operador `**` calcula uma potência.

```js
console.log(2 ** 3); // 8
console.log(5 ** 2); // 25
console.log(10 ** 3); // 1000
```

É equivalente, nesses exemplos, à utilização de `Math.pow()`.

```js
console.log(Math.pow(2, 3)); // 8
```

### Incremento (`++`)

O operador `++` aumenta o valor de uma variável em uma unidade.

```js
let contador = 0;

contador++;

console.log(contador); // 1
```

### Decremento (`--`)

O operador `--` diminui o valor de uma variável em uma unidade.

```js
let vidas = 3;

vidas--;

console.log(vidas); // 2
```

### Prefixo vs. sufixo

Os operadores de incremento e decremento podem ser utilizados antes ou depois da variável.

**Prefixo (`++numero`)**

Incrementa primeiro e devolve o novo valor.

```js
let numero = 5;

console.log(++numero); // 6
console.log(numero);   // 6
```

**Sufixo (`numero++`)**

Devolve o valor anterior e depois incrementa a variável.

```js
let numero = 5;

console.log(numero++); // 5
console.log(numero);   // 6
```

### Exemplo prático — cálculo de desconto

```js
/**
 * Calcula o preço de um produto após aplicar um desconto.
 * @param {number} preco - Preço original.
 * @param {number} percentual - Percentagem de desconto.
 * @returns {number} Preço com desconto.
 */
function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);

    return preco - desconto;
}

console.log(calcularDesconto(200, 15));

// Output: 170
```

---

## 3. Operadores Lógicos e Tabela Verdade

### O que são operadores lógicos

Os **operadores lógicos (Logical Operators)** são utilizados para combinar, avaliar ou inverter condições.

São fundamentais em:

- Estruturas condicionais.
- Validação de formulários.
- Autenticação.
- Controlo de permissões.
- Regras de negócio.
- Filtros.

Os três operadores lógicos principais são:

| Operador | Nome | Significado |
|---|---|---|
| `&&` | AND | E lógico |
| `\|\|` | OR | OU lógico |
| `!` | NOT | Negação lógica |

### Operador AND (`&&`)

O operador **AND** representa a condição lógica "E".

Numa avaliação booleana, o resultado só será verdadeiro quando **ambas as condições forem verdadeiras**.

```js
const idade = 20;
const possuiDocumento = true;

const podeEntrar = idade >= 18 && possuiDocumento;

console.log(podeEntrar); // true
```

### Tabela verdade — AND

| A | B | A `&&` B |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `false` |
| `false` | `true` | `false` |
| `false` | `false` | `false` |

**Exemplo:**

```js
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false
```

### Operador OR (`||`)

O operador **OR** representa a condição lógica "OU".

Numa avaliação booleana, o resultado será verdadeiro quando **pelo menos uma das condições for verdadeira**.

```js
const possuiCartao = false;
const possuiDinheiro = true;

const podePagar = possuiCartao || possuiDinheiro;

console.log(podePagar); // true
```

### Tabela verdade — OR

| A | B | A `\|\|` B |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `true` |
| `false` | `true` | `true` |
| `false` | `false` | `false` |

**Exemplo:**

```js
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
```

### Operador NOT (`!`)

O operador **NOT** representa a negação lógica.

Inverte o valor booleano de uma condição.

```js
const usuarioBloqueado = false;

console.log(!usuarioBloqueado); // true
```

### Tabela verdade — NOT

| A | `!A` |
|---|---|
| `true` | `false` |
| `false` | `true` |

### Tabela verdade completa

| A | B | AND `&&` | OR `\|\|` | NOT A `!A` |
|---|---|---|---|---|
| `true` | `true` | `true` | `true` | `false` |
| `true` | `false` | `false` | `true` | `false` |
| `false` | `true` | `false` | `true` | `true` |
| `false` | `false` | `false` | `false` | `true` |

### Exemplo prático — validação de acesso

```js
function verificarAcesso(idade, possuiAutorizacao) {
    if (idade >= 18 || possuiAutorizacao) {
        return "Acesso permitido";
    }

    return "Acesso negado";
}

console.log(verificarAcesso(20, false));
// Acesso permitido

console.log(verificarAcesso(16, true));
// Acesso permitido

console.log(verificarAcesso(16, false));
// Acesso negado
```

### Operadores lógicos e valores Truthy/Falsy

Em JavaScript, os operadores `&&` e `||` **não devolvem necessariamente valores booleanos**.

Eles podem devolver os próprios operandos.

Isso acontece porque JavaScript utiliza a conversão de valores para booleanos, conhecida como **truthy** e **falsy**.

Alguns valores falsy são:

- `false`
- `0`
- `-0`
- `0n`
- `""` — string vazia
- `null`
- `undefined`
- `NaN`

Os restantes valores são geralmente considerados truthy, incluindo arrays e objetos vazios.

**Exemplo com OR:**

```js
const nome = "";

const nomeExibido = nome || "Visitante";

console.log(nomeExibido); // Visitante
```

Como a string vazia é falsy, o operador devolve o segundo valor.

**Exemplo com AND:**

```js
const usuario = "Dani";

const mensagem = usuario && "Utilizador identificado";

console.log(mensagem);

// Utilizador identificado
```

### Curto-circuito (Short-Circuit Evaluation)

Os operadores `&&` e `||` podem interromper a avaliação assim que conseguem determinar o resultado.

```js
const autenticado = false;

autenticado && console.log("Acesso autorizado");
```

Como `autenticado` é `false`, o segundo operando não é executado.

Esse comportamento é conhecido como **avaliação de curto-circuito**.

---

## 4. Operadores de Atribuição

### O que são operadores de atribuição

Os **operadores de atribuição (Assignment Operators)** são utilizados para atribuir ou atualizar valores de variáveis.

O operador mais simples é `=`.

```js
let numero = 10;
```

Neste exemplo, o valor `10` é atribuído à variável `numero`.

### Principais operadores de atribuição

| Operador | Exemplo | Equivalente |
|---|---|---|
| `=` | `x = 10` | Atribuição |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |
| `%=` | `x %= 5` | `x = x % 5` |
| `**=` | `x **= 2` | `x = x ** 2` |

### Atribuição simples (`=`)

```js
let nome = "Dani";

console.log(nome); // Dani
```

### Atribuição com adição (`+=`)

```js
let saldo = 100;

saldo += 50;

console.log(saldo); // 150
```

É equivalente a:

```js
saldo = saldo + 50;
```

### Atribuição com subtração (`-=`)

```js
let saldo = 100;

saldo -= 30;

console.log(saldo); // 70
```

### Atribuição com multiplicação (`*=`)

```js
let numero = 5;

numero *= 3;

console.log(numero); // 15
```

### Atribuição com divisão (`/=`)

```js
let numero = 100;

numero /= 4;

console.log(numero); // 25
```

### Atribuição com resto (`%=`)

```js
let numero = 17;

numero %= 5;

console.log(numero); // 2
```

### Atribuição com exponenciação (`**=`)

```js
let numero = 3;

numero **= 3;

console.log(numero); // 27
```

### Atribuição lógica

JavaScript também possui operadores modernos de atribuição lógica.

**Atribuição OU (`||=`):**

```js
let nome = "";

nome ||= "Visitante";

console.log(nome); // Visitante
```

A atribuição ocorre quando o valor atual é falsy.

**Atribuição E (`&&=`):**

```js
let mensagem = "Olá";

mensagem &&= "Bem-vindo!";

console.log(mensagem); // Bem-vindo!
```

A atribuição ocorre quando o valor atual é truthy.

**Atribuição nula (`??=`):**

```js
let idade = null;

idade ??= 18;

console.log(idade); // 18
```

A atribuição ocorre apenas quando o valor atual é `null` ou `undefined`.

### Diferença entre `||=` e `??=`

```js
let quantidade = 0;

quantidade ||= 10;

console.log(quantidade); // 10
```

Como `0` é falsy, o valor foi substituído.

```js
let quantidade = 0;

quantidade ??= 10;

console.log(quantidade); // 0
```

Como `0` não é `null` nem `undefined`, o valor foi preservado.

**Boa prática:** utilizar `??=` quando `0`, `false` ou `""` forem valores válidos que não devem ser substituídos.

### Atribuição e `const`

Uma variável declarada com `const` não pode ser reatribuída.

```js
const numero = 10;

// numero += 5;
// TypeError: Assignment to constant variable.
```

Quando o valor precisa de ser atualizado, devemos utilizar `let`.

---

## 5. Operadores e Operações

### Operadores de comparação

Os **operadores de comparação (Comparison Operators)** permitem comparar valores.

O resultado de uma comparação é normalmente um booleano: `true` ou `false`.

| Operador | Significado | Exemplo | Resultado |
|---|---|---|---|
| `==` | Igualdade com conversão de tipos | `5 == "5"` | `true` |
| `===` | Igualdade estrita | `5 === "5"` | `false` |
| `!=` | Desigualdade com conversão | `5 != "5"` | `false` |
| `!==` | Desigualdade estrita | `5 !== "5"` | `true` |
| `>` | Maior que | `10 > 5` | `true` |
| `<` | Menor que | `10 < 5` | `false` |
| `>=` | Maior ou igual | `10 >= 10` | `true` |
| `<=` | Menor ou igual | `5 <= 10` | `true` |

### Igualdade simples vs. igualdade estrita

O operador `==` pode realizar conversão implícita de tipos.

```js
console.log(10 == "10"); // true
```

O operador `===` compara os valores sem realizar essa conversão.

```js
console.log(10 === "10"); // false
```

**Boa prática:** preferir `===` e `!==` para evitar conversões inesperadas.

### Operador ternário

O **operador condicional ternário (`? :`)** permite escolher entre duas expressões com base numa condição.

**Sintaxe:**

```js
condicao ? valorSeVerdadeiro : valorSeFalso;
```

**Exemplo:**

```js
const idade = 20;

const resultado = idade >= 18
    ? "Maior de idade"
    : "Menor de idade";

console.log(resultado); // Maior de idade
```

É uma alternativa concisa para condições simples.

### Operador de coalescência nula (`??`)

O operador `??` devolve o segundo valor apenas quando o primeiro é `null` ou `undefined`.

```js
const nome = null;

const nomeExibido = nome ?? "Visitante";

console.log(nomeExibido); // Visitante
```

É útil para definir valores alternativos sem substituir valores válidos como `0` e `false`.

### Operador `typeof`

O operador `typeof` permite verificar o tipo de um valor.

```js
console.log(typeof "Olá");     // string
console.log(typeof 10);        // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
```

Uma particularidade histórica da linguagem é:

```js
console.log(typeof null); // object
```

Apesar do resultado, `null` é um valor primitivo, não um objeto.

### Precedência de operadores

A **precedência de operadores (Operator Precedence)** determina quais operações são agrupadas primeiro numa expressão.

**Exemplo:**

```js
const resultado = 10 + 5 * 2;

console.log(resultado); // 20
```

A multiplicação possui precedência superior à adição.

Por isso, a expressão é avaliada como:

```js
10 + (5 * 2)
```

Podemos utilizar parênteses para alterar a ordem:

```js
const resultado = (10 + 5) * 2;

console.log(resultado); // 30
```

### Ordem simplificada de precedência

| Prioridade | Operadores | Exemplos |
|---|---|---|
| Mais alta | Parênteses | `(a + b)` |
| Alta | Exponenciação | `**` |
| Alta | Multiplicação, divisão e resto | `*`, `/`, `%` |
| Média | Adição e subtração | `+`, `-` |
| Média | Comparações relacionais | `>`, `<`, `>=`, `<=` |
| Média | Igualdade | `===`, `!==` |
| Baixa | AND lógico | `&&` |
| Mais baixa | OR lógico | `\|\|` |
| Muito baixa | Atribuição | `=`, `+=`, `-=` |

Esta tabela é simplificada. O JavaScript possui outros níveis e regras de associatividade; operadores como `!` também têm precedência própria.

**Recomendação:** utilizar parênteses quando uma expressão possuir múltiplas condições e a ordem de avaliação não for imediatamente clara.

### Exemplo com operadores combinados

```js
const idade = 22;
const possuiConta = true;
const contaBloqueada = false;

const podeAceder =
    idade >= 18 &&
    possuiConta &&
    !contaBloqueada;

console.log(podeAceder); // true
```

O acesso só será permitido quando todas as condições necessárias forem satisfeitas.

### Exemplo prático — sistema de compras

```js
/**
 * Calcula o valor final de uma compra.
 * @param {number} preco - Preço unitário.
 * @param {number} quantidade - Quantidade comprada.
 * @param {number} desconto - Percentual de desconto.
 * @returns {number} Total final.
 */
function calcularCompra(preco, quantidade, desconto = 0) {
    const subtotal = preco * quantidade;

    const valorDesconto = subtotal * (desconto / 100);

    return subtotal - valorDesconto;
}

const total = calcularCompra(50, 3, 10);

const freteGratis = total >= 100;

console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Frete grátis: ${freteGratis}`);

// Total: R$ 135.00
// Frete grátis: true
```

Neste exemplo, utilizámos:

- Operadores aritméticos para calcular o valor.
- Operadores de atribuição para armazenar resultados.
- Operador de comparação para verificar o frete.
- Uma função para organizar a lógica.
- Template literals para apresentar a mensagem.

---

## Resumo em uma frase

> Os operadores em JavaScript permitem realizar cálculos, comparar valores, combinar condições e atualizar variáveis, incluindo operadores aritméticos (`+`, `-`, `*`, `/`, `%`, `**`), lógicos (`&&`, `||`, `!`), de atribuição (`=`, `+=`, `-=`), comparação (`===`, `!==`, `>`, `<`) e condicionais (`? :`), sendo essencial compreender as tabelas verdade, os tipos de dados e a precedência das operações para desenvolver expressões corretas e evitar comportamentos inesperados.

---

## Conceitos relacionados para estudar a seguir

- **Estruturas Condicionais** — aprofundar `if`, `else if`, `else` e `switch` para controlar decisões no código.

- **Estruturas de Repetição** — estudar `for`, `while` e `do...while`, utilizando operadores lógicos e aritméticos.

- **Truthy e Falsy** — compreender como o JavaScript converte diferentes valores para booleanos.

- **Conversão de Tipos (Type Coercion)** — estudar conversões implícitas e explícitas entre strings, números e booleanos.

- **Short-Circuit Evaluation** — aprofundar o funcionamento de `&&`, `||` e `??`.

- **Optional Chaining (`?.`)** — aprender a aceder a propriedades de forma segura quando objetos podem ser nulos.

- **Operadores Bitwise** — conhecer operações bit a bit, como `&`, `|`, `^`, `<<` e `>>`.

- **Expressões e Precedência** — compreender a ordem de avaliação e as regras de associatividade dos operadores em JavaScript.
