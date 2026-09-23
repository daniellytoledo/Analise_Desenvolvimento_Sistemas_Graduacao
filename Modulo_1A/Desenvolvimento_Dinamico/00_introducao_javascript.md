# Introdução a JavaScript

---

## 1. O que é JavaScript

**JavaScript** é uma linguagem de programação de alto nível, interpretada, dinâmica e orientada a eventos — criada originalmente para tornar páginas web interativas, e que hoje é usada tanto no front-end (no navegador) quanto no back-end (com Node.js), além de aplicações mobile, desktop, e muito mais.

### Um pouco de história
JavaScript foi criada em **1995** por **Brendan Eich**, engenheiro da Netscape, em apenas 10 dias. O nome inicial era *Mocha*, depois passou a *LiveScript*, e finalmente foi renomeada para **JavaScript** — numa jogada de marketing para aproveitar a popularidade do Java na época. Apesar do nome, JavaScript e Java são linguagens completamente diferentes, com filosofias e casos de uso distintos.

Em 1997, o JavaScript foi padronizado pela **ECMA International** sob o nome **ECMAScript (ES)** — daí os termos ES5, ES6 (ES2015), ES2020, etc., que se referem a versões da especificação da linguagem. O ES6 (2015) foi a actualização mais significativa da história da linguagem, introduzindo `let`, `const`, arrow functions, classes, módulos, e muitas outras funcionalidades que moldam o JavaScript moderno.

### Onde o JavaScript é executado
- **No navegador**: cada browser moderno (Chrome, Firefox, Safari, Edge) tem um motor JavaScript embutido — o mais famoso é o **V8** do Chrome, também usado no Node.js
- **No servidor**: com **Node.js**, é possível executar JavaScript fora do navegador, criando APIs, servidores web, e scripts de automação
- **Em aplicações mobile**: com frameworks como **React Native** e **Ionic**
- **Em aplicações desktop**: com **Electron** (VS Code, por exemplo, é construído com Electron)

### O papel do JavaScript na web
O desenvolvimento web moderno assenta em três tecnologias complementares:

```
HTML  → Estrutura    ("o esqueleto")
CSS   → Apresentação ("a aparência")
JS    → Comportamento ("o que se mexe e responde")
```

HTML define *o quê* existe na página; CSS define *como parece*; JavaScript define *o que acontece* quando o usuário interage.

---

## 2. Fundamentos do JavaScript

### Como executar JavaScript

**No navegador (DevTools)**
Qualquer navegador moderno tem uma consola de JavaScript acessível com `F12` (ou `Cmd+Option+J` no Mac) → aba **Console**. É o ambiente mais imediato para testar fragmentos de código.

**Em ficheiros `.js`**
O mais comum em projecto reais — criar um ficheiro `.js` e ligá-lo a um HTML com a tag `<script>`:

```html
<!-- No final do <body>, antes de fechar -->
<script src="meuScript.js"></script>
```

Ou directamente inline:
```html
<script>
  console.log("Olá, mundo!");
</script>
```

**Com Node.js**
No terminal, depois de instalar o Node.js:
```
node meuScript.js
```

### Saída de dados — `console.log()`
A forma mais básica de ver o resultado de um código JavaScript é o `console.log()` — escreve o valor passado na consola do navegador ou no terminal:

```js
console.log("Olá, mundo!");      // texto
console.log(42);                  // número
console.log(true);                // booleano
console.log([1, 2, 3]);          // array
```

### Tipos de dados primitivos
JavaScript tem seis tipos de dados primitivos principais:

| Tipo | Descrição | Exemplo |
|---|---|---|
| `string` | Texto — entre aspas simples, duplas, ou backticks | `"Olá"`, `'mundo'`, `` `nome` `` |
| `number` | Números inteiros e decimais | `42`, `3.14`, `-7` |
| `boolean` | Verdadeiro ou falso | `true`, `false` |
| `null` | Ausência intencional de valor | `null` |
| `undefined` | Variável declarada mas sem valor atribuído | `undefined` |
| `bigint` | Números inteiros muito grandes | `9007199254740991n` |

```js
let nome = "Dani";          // string
let idade = 25;              // number
let activo = true;           // boolean
let vazio = null;            // null
let indefinido;              // undefined (nenhum valor atribuído)
```

### Operadores básicos

**Aritméticos:**
```js
console.log(10 + 3);  // 13  (adição)
console.log(10 - 3);  // 7   (subtracção)
console.log(10 * 3);  // 30  (multiplicação)
console.log(10 / 3);  // 3.3333... (divisão)
console.log(10 % 3);  // 1   (resto da divisão — módulo)
console.log(10 ** 3); // 1000 (exponenciação)
```

**Comparação:**
```js
console.log(5 == "5");   // true  (compara valor, ignora tipo)
console.log(5 === "5");  // false (compara valor E tipo — preferível)
console.log(5 !== 3);    // true
console.log(10 > 5);     // true
console.log(10 <= 10);   // true
```

> **Boa prática**: usar sempre `===` (igualdade estrita) em vez de `==` (igualdade solta) — o `==` faz conversão implícita de tipo que pode gerar comportamentos inesperados.

**Lógicos:**
```js
console.log(true && false);  // false (E — ambos precisam ser true)
console.log(true || false);  // true  (OU — pelo menos um precisa ser true)
console.log(!true);           // false (NÃO — inverte o booleano)
```

### Template literals (strings com variáveis)
Usando backticks (`` ` ``), é possível interpolar variáveis directamente dentro de uma string — muito mais legível do que concatenação com `+`:

```js
const nome = "Dani";
const linguagem = "JavaScript";

// Concatenação tradicional (menos legível):
console.log("Olá, " + nome + "! Estás a aprender " + linguagem + ".");

// Template literal (mais legível):
console.log(`Olá, ${nome}! Estás a aprender ${linguagem}.`);
// Output: "Olá, Dani! Estás a aprender JavaScript."
```

---

## 3. Constantes e Variáveis

Em JavaScript, existem três formas de declarar variáveis: `var`, `let`, e `const`. Cada uma tem regras diferentes de escopo e mutabilidade.

### `var` — a forma antiga (evitar em código moderno)

`var` foi a única forma de declarar variáveis em JavaScript até o ES6 (2015). Tem um comportamento de **escopo de função** — ou seja, existe em qualquer parte da função onde foi declarada, independentemente de estar dentro de um bloco `if`, `for`, etc.

```js
function exemploVar() {
    if (true) {
        var mensagem = "Olá! Eu sou uma var."
    }
    console.log(mensagem); // funciona! var "escapa" do bloco if
}
exemploVar();
```

**Por que evitar `var`:**
- O escopo de função (em vez de bloco) é contraintuitivo e causa bugs difíceis de detectar
- `var` sofre de **hoisting** — é "elevada" para o topo da função antes da execução, o que pode fazer uma variável parecer existir antes de ser declarada
- Permite redeclaração acidental no mesmo escopo

### `let` — variável de escopo de bloco

Introduzida no ES6, `let` tem **escopo de bloco** — existe apenas dentro do bloco `{}` onde foi declarada (função, if, for, while, etc.). É a forma recomendada para declarar variáveis que precisam de mudar de valor.

```js
function exemploLet() {
    if (true) {
        let mensagem = "Olá! Eu sou um let."
        console.log(mensagem); // funciona aqui dentro
    }
    // console.log(mensagem); // ❌ erro! let não existe fora do bloco if
}
exemploLet();

let mensagem = "Olá! Eu sou um let externo";
console.log(mensagem); // funciona no escopo global
```

**Características do `let`:**
- Escopo de bloco (mais previsível que `var`)
- Pode ter o valor alterado depois de declarado
- Não pode ser redeclarado no mesmo escopo

### `const` — constante de valor fixo

Também introduzida no ES6, `const` declara uma **constante** — uma referência cujo valor não pode ser reatribuído depois de definido. É a forma recomendada sempre que o valor não precisa de mudar.

```js
const externo = "Olá! Eu sou uma constante global.";
console.log(externo); // funciona

externo = "Nova mensagem."; // ❌ TypeError: Assignment to constant variable.
```

**Características do `const`:**
- Escopo de bloco (igual ao `let`)
- **Não pode ser reatribuída** — tentar mudar o valor gera erro
- Deve ser inicializada no momento da declaração (`const x;` é inválido)
- Objectos e arrays declarados com `const` ainda podem ter as suas propriedades/elementos alterados (a referência é constante, não o conteúdo)

```js
const cores = ["vermelho", "verde", "azul"];
cores.push("amarelo"); // funciona — altera o conteúdo do array
console.log(cores);    // ["vermelho", "verde", "azul", "amarelo"]

cores = ["branco"];    // ❌ erro — não pode reatribuir a constante
```

### Comparativo: `var` vs `let` vs `const`

| Característica | `var` | `let` | `const` |
|---|---|---|---|
| **Escopo** | Função | Bloco | Bloco |
| **Pode ser reatribuída?** | Sim | Sim | Não |
| **Pode ser redeclarada?** | Sim | Não | Não |
| **Hoisting** | Sim (com `undefined`) | Sim (mas sem inicializar — TDZ) | Sim (mas sem inicializar — TDZ) |
| **Recomendado em código moderno?** | ❌ Evitar | ✅ Sim | ✅ Preferir |

> **Regra prática:** usar `const` por padrão; usar `let` quando o valor precisar de mudar; nunca usar `var` em código moderno.

### Arquivo de prática

O ficheiro **`exemplosVariaveis.js`**, criado como prática desta aula, demonstra o comportamento de `var`, `let` e `const` em diferentes escopos — incluindo exemplos de uso correcto, erros intencionais (como tentar reatribuir uma constante), e a função `subtrair` com documentação JSDoc:

📄 [`exemplosVariaveis.js`](./exemplosVariaveis.js)

---

## 4. Como Usar Anotações no Código

Anotações (comentários) são trechos de texto no código que são **ignorados pelo interpretador JavaScript** — existem apenas para comunicação humana: explicar a lógica, documentar funções, deixar notas para outros desenvolvedores (ou para o futuro eu), e desactivar temporariamente linhas de código durante o desenvolvimento.

### Comentário de linha única — `//`

Tudo a partir de `//` até o final da linha é ignorado:

```js
// Isto é um comentário de linha — o JS ignora completamente
let nome = "Dani"; // comentário inline — explicando a linha ao lado

// console.log("Esta linha está desactivada temporariamente");
```

### Comentário de múltiplas linhas — `/* */`

Tudo entre `/*` e `*/` é ignorado, independentemente de quantas linhas ocupa:

```js
/*
  Este bloco inteiro é um comentário.
  Pode ter quantas linhas forem necessárias.
  Útil para desactivar blocos de código ou explicações longas.
*/

let resultado = 10 + 5; /* também funciona inline */
```

### JSDoc — documentação de funções

O padrão **JSDoc** usa comentários de bloco com `/**` (dois asteriscos) para documentar funções de forma estruturada — descrevendo o que a função faz, os seus parâmetros, o valor de retorno, e exemplos de uso. Esta documentação pode ser lida por editores de código (como o VS Code) para gerar sugestões automáticas e tooltips enquanto se escreve código.

```js
/**
 * Subtrai o segundo número do primeiro.
 * @param {number} a - O número do qual subtrair.
 * @param {number} b - O número a ser subtraído.
 * @return {number} O resultado da subtração.
 * @example
 * // exemplo de uso:
 * let resultado = subtrair(10, 4);
 * console.log(resultado); // 6
 */
function subtrair(a, b) {
    return a - b;
}
```

**Tags JSDoc mais usadas:**

| Tag | O que documenta |
|---|---|
| `@param {tipo} nome` | Um parâmetro da função (com tipo e nome) |
| `@return {tipo}` | O valor que a função retorna |
| `@example` | Exemplo de uso da função |
| `@description` | Descrição detalhada (opcional — o texto antes das tags já serve) |
| `@throws {tipo}` | Excepção que a função pode lançar |
| `@deprecated` | Indica que a função está obsoleta |
| `@see` | Referência a outra função ou recurso relacionado |

### Boas práticas de comentários

**Comentar o *porquê*, não o *o quê***
O código já descreve *o quê* está a fazer — o comentário deve explicar *porquê* foi feito dessa forma, especialmente quando a decisão não é óbvia.

```js
// ❌ Comentário desnecessário — o código já diz isso
let total = preco * quantidade; // multiplica preço pela quantidade

// ✅ Comentário útil — explica o porquê da decisão
// Arredondamos para 2 casas decimais para evitar problemas de
// precisão de ponto flutuante em cálculos financeiros
let total = Math.round(preco * quantidade * 100) / 100;
```

**Não comentar código desnecessário — apagar é melhor que comentar**
Manter código comentado por "segurança" polui o ficheiro e confunde quem lê. O Git guarda o histórico — se precisar de recuperar código apagado, está lá.

**Manter comentários actualizados**
Um comentário desactualizado (que descreve o que o código fazia antes, não o que faz agora) é pior do que nenhum comentário — engana quem lê. Se o código muda, o comentário muda também.

**Documentar sempre com JSDoc funções reutilizáveis**
Qualquer função que será usada em mais do que um lugar — ou por mais do que uma pessoa — merece documentação JSDoc. O VS Code e outros editores usam essa documentação para mostrar tooltips com a assinatura da função enquanto se escreve código.

---

## Resumo em uma frase

> JavaScript é a linguagem que dá comportamento à web — interpretada, dinâmica e ubíqua tanto no browser como no servidor — e os seus fundamentos incluem tipos de dados, operadores, e a declaração de variáveis com `const` (valor fixo, preferível), `let` (valor mutável), e `var` (escopo de função, evitar em código moderno), todos documentáveis com comentários de linha (`//`), de bloco (`/* */`), ou com JSDoc (`/** */`) para funções reutilizáveis.

---

## Conceitos relacionados para estudar a seguir

- **Estruturas de controlo** — `if/else`, `switch`, operador ternário: como tomar decisões no código
- **Loops e iteração** — `for`, `while`, `forEach`, `for...of`: como repetir acções
- **Funções em profundidade** — declaração vs. expressão de função, arrow functions (`=>`), parâmetros por defeito, e o conceito de escopo e closures
- **Arrays e Objectos** — as duas estruturas de dados centrais do JavaScript e os seus métodos mais usados
- **DOM Manipulation** — como usar JavaScript para seleccionar e modificar elementos HTML numa página web, o caso de uso original da linguagem