
# Trabalhando com Strings em JavaScript

---

## 1. Tipo de Dado String

### O que é uma String

Uma **string** é um tipo de dado primitivo utilizado para representar textos em JavaScript.

Uma string pode conter letras, números, espaços, símbolos e outros caracteres.

É utilizada frequentemente para armazenar:

- Nomes de utilizadores.
- Endereços de e-mail.
- Mensagens.
- Palavras-passe.
- Descrições de produtos.
- Informações recebidas de formulários.

**Exemplo:**

```js
const nome = "Dani";
const linguagem = "JavaScript";
const mensagem = "Estou aprendendo programação!";

console.log(nome);
console.log(linguagem);
console.log(mensagem);
```

### Como identificar uma String

Podemos utilizar o operador `typeof`, estudado em `02_operadores_operacoes.md`, para verificar o tipo de um dado.

```js
const nome = "Dani";
const idade = 25;

console.log(typeof nome);  // string
console.log(typeof idade); // number
```

É importante compreender que números colocados entre aspas são interpretados como strings.

```js
const numero1 = 10;
const numero2 = "10";

console.log(typeof numero1); // number
console.log(typeof numero2); // string
```

### Strings são imutáveis

Em JavaScript, as strings são **imutáveis (Immutable)**.

Isso significa que não podemos modificar diretamente os caracteres de uma string existente.

```js
let palavra = "Casa";

palavra[0] = "M";

console.log(palavra); // Casa
```

A tentativa de alterar o primeiro caractere não modifica a string. Em modo estrito, essa atribuição pode gerar um erro.

Entretanto, podemos atribuir uma nova string à variável.

```js
let palavra = "Casa";

palavra = "Masa";

console.log(palavra); // Masa
```

> Os métodos de manipulação de strings geralmente devolvem uma nova string, sem alterar a original.

---

## 2. Iniciando em Strings — declaração, concatenação e comprimento

### Declaração de Strings

Em JavaScript, podemos declarar strings utilizando três tipos de delimitadores.

**Aspas duplas (`" "`):**

```js
const nome = "Dani";
```

**Aspas simples (`' '`):**

```js
const linguagem = 'JavaScript';
```

**Crases ou backticks (`` ` ` ``):**

```js
const mensagem = `Olá, mundo!`;
```

As três formas permitem representar textos, mas os backticks também oferecem funcionalidades adicionais.

### Template Literals

Os **Template Literals** permitem incluir expressões e variáveis diretamente dentro de uma string.

Para isso, utilizamos `${}`.

```js
const nome = "Dani";
const idade = 25;

const mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`;

console.log(mensagem);

// Meu nome é Dani e tenho 25 anos.
```

Também podemos realizar operações:

```js
const preco = 50;
const quantidade = 3;

console.log(`O total da compra é R$ ${preco * quantidade}.`);

// O total da compra é R$ 150.
```

### Concatenação de Strings

A **concatenação (Concatenation)** consiste em juntar duas ou mais strings.

Uma das formas mais comuns é utilizar o operador `+`.

```js
const nome = "Dani";
const sobrenome = "Toledo";

const nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

// Dani Toledo
```

O operador `+=` também pode ser utilizado para acrescentar conteúdo.

```js
let mensagem = "Olá";

mensagem += ", Dani!";

console.log(mensagem); // Olá, Dani!
```

### Comprimento de uma String — `length`

A propriedade **`length`** permite obter o comprimento de uma string.

```js
const palavra = "JavaScript";

console.log(palavra.length); // 10
```

Os espaços também são contabilizados.

```js
const frase = "Olá mundo";

console.log(frase.length); // 9
```

**Importante:** `length` é uma propriedade, não um método. Por isso, não utilizamos parênteses.

```js
const nome = "Dani";

console.log(nome.length);   // Correto
// console.log(nome.length()); // Incorreto
```

### Aceder a caracteres pelo índice

Podemos consultar caracteres individuais de uma string utilizando índices.

Os índices começam em `0`.

```js
const palavra = "JavaScript";

console.log(palavra[0]); // J
console.log(palavra[1]); // a
console.log(palavra[4]); // S
```

Representação dos índices:

```text
String:  J  a  v  a  S  c  r  i  p  t

Índice:  0  1  2  3  4  5  6  7  8  9
```

Também podemos obter o último caractere:

```js
const palavra = "JavaScript";

console.log(palavra[palavra.length - 1]); // t
```

**Observação:** a propriedade `length` conta unidades de código UTF-16. Alguns caracteres Unicode, como determinados emojis, podem ocupar mais de uma unidade.

---

## 3. Operações com String — `slice()`, `trim()` e `split()`

### Método `slice()`

O método **`slice()`** permite extrair uma parte de uma string.

**Sintaxe:**

```js
string.slice(inicio, fim);
```

Onde:

- `inicio`: índice inicial, incluído na extração.
- `fim`: índice final, não incluído na extração.

### Exemplo com `slice()`

```js
const linguagem = "JavaScript";

const resultado = linguagem.slice(0, 4);

console.log(resultado); // Java
```

Neste exemplo, são extraídos os caracteres dos índices `0` até `3`.

Também podemos omitir o índice final.

```js
const linguagem = "JavaScript";

console.log(linguagem.slice(4)); // Script
```

### Índices negativos com `slice()`

O método permite utilizar índices negativos, que representam posições contadas a partir do final.

```js
const palavra = "JavaScript";

console.log(palavra.slice(-6)); // Script
console.log(palavra.slice(-3)); // ipt
```

**Aplicação prática:**

```js
const arquivo = "documento.pdf";

const extensao = arquivo.slice(-3);

console.log(extensao); // pdf
```

### Método `trim()`

O método **`trim()`** remove espaços em branco e outros caracteres de espaço definidos pela linguagem que estejam no início e no final da string.

É muito utilizado para tratar dados recebidos de formulários.

```js
const nome = "   Dani Toledo   ";

const nomeTratado = nome.trim();

console.log(nomeTratado); // Dani Toledo
```

O método não remove os espaços existentes entre as palavras.

```js
const frase = "   Olá   mundo   ";

console.log(frase.trim());

// "Olá   mundo"
```

Também existem:

| Método | Funcionalidade |
|---|---|
| `trim()` | Remove espaços das extremidades |
| `trimStart()` | Remove espaços do início |
| `trimEnd()` | Remove espaços do final |

**Exemplo:**

```js
const texto = "   JavaScript   ";

console.log(texto.trimStart()); // "JavaScript   "
console.log(texto.trimEnd());   // "   JavaScript"
```

### Método `split()`

O método **`split()`** divide uma string em partes, utilizando um separador.

O resultado é um **array**.

**Sintaxe:**

```js
string.split(separador);
```

### Exemplo com `split()`

```js
const frutas = "Maçã,Banana,Morango";

const lista = frutas.split(",");

console.log(lista);

// ["Maçã", "Banana", "Morango"]
```

O separador utilizado foi a vírgula.

Podemos também separar uma frase pelos espaços.

```js
const frase = "Aprendendo JavaScript hoje";

const palavras = frase.split(" ");

console.log(palavras);

// ["Aprendendo", "JavaScript", "hoje"]
```

### Separando caracteres

Ao utilizar uma string vazia como separador, cada unidade de código UTF-16 é separada num elemento.

```js
const palavra = "Java";

console.log(palavra.split(""));

// ["J", "a", "v", "a"]
```

Para textos com caracteres Unicode mais complexos, `split("")` pode não corresponder exatamente aos caracteres visíveis.

### Exemplo prático — separar nome completo

```js
const nomeCompleto = "Dani Toledo";

const partes = nomeCompleto.trim().split(" ");

const primeiroNome = partes[0];
const sobrenome = partes[1];

console.log(primeiroNome); // Dani
console.log(sobrenome);    // Toledo
```

Este exemplo considera um nome composto por duas palavras. Nomes completos reais podem exigir tratamento adicional.

---

## 4. Operações com String — `substring()`, `replace()` e `concat()`

### Método `substring()`

O método **`substring()`** permite extrair uma parte de uma string com base nos índices inicial e final.

É semelhante ao `slice()`.

**Sintaxe:**

```js
string.substring(inicio, fim);
```

### Exemplo com `substring()`

```js
const linguagem = "JavaScript";

console.log(linguagem.substring(0, 4)); // Java
console.log(linguagem.substring(4));    // Script
```

Assim como no `slice()`, o índice final não é incluído.

### Diferença entre `slice()` e `substring()`

A principal diferença está no tratamento de índices negativos e da ordem dos índices.

| Característica | `slice()` | `substring()` |
|---|---|---|
| Extrai parte da string | Sim | Sim |
| Índice final é exclusivo | Sim | Sim |
| Aceita índices negativos relativos ao fim | Sim | Não |
| Inverte índices quando início é maior que fim | Não | Sim |

**Exemplo:**

```js
const texto = "JavaScript";

console.log(texto.slice(4, 0));     // ""
console.log(texto.substring(4, 0)); // "Java"
```

Com `substring()`, os índices são trocados quando o inicial é maior do que o final.

Valores negativos são tratados como zero.

### Método `replace()`

O método **`replace()`** permite substituir parte de uma string por outro conteúdo.

**Sintaxe:**

```js
string.replace(valorProcurado, novoValor);
```

### Exemplo com `replace()`

```js
const frase = "Estou aprendendo Java";

const novaFrase = frase.replace("Java", "JavaScript");

console.log(novaFrase);

// Estou aprendendo JavaScript
```

A string original permanece inalterada.

### Substituição da primeira ocorrência

Quando utilizamos uma string como valor procurado, `replace()` substitui apenas a primeira ocorrência.

```js
const frase = "Java é uma linguagem. Java é popular.";

console.log(frase.replace("Java", "JavaScript"));

// JavaScript é uma linguagem. Java é popular.
```

### Substituindo todas as ocorrências

Podemos utilizar o método **`replaceAll()`**.

```js
const frase = "Java é uma linguagem. Java é popular.";

console.log(frase.replaceAll("Java", "JavaScript"));

// JavaScript é uma linguagem. JavaScript é popular.
```

Outra alternativa é utilizar uma expressão regular com a flag `g`.

```js
const texto = "Olá, Olá, Olá!";

console.log(texto.replace(/Olá/g, "Oi"));

// Oi, Oi, Oi!
```

### Método `concat()`

O método **`concat()`** permite juntar strings.

```js
const nome = "Dani";
const sobrenome = "Toledo";

const nomeCompleto = nome.concat(" ", sobrenome);

console.log(nomeCompleto);

// Dani Toledo
```

Podemos concatenar vários valores.

```js
const frase1 = "Estou ";
const frase2 = "aprendendo ";
const frase3 = "JavaScript.";

const resultado = frase1.concat(frase2, frase3);

console.log(resultado);

// Estou aprendendo JavaScript.
```

### `concat()` vs. operador `+` vs. Template Literals

As três abordagens podem produzir o mesmo resultado.

```js
const nome = "Dani";
const curso = "ADS";

// Operador +
console.log(nome + " estuda " + curso);

// concat()
console.log(nome.concat(" estuda ", curso));

// Template Literal
console.log(`${nome} estuda ${curso}`);
```

**Boa prática:** para textos que incluem variáveis e expressões, os Template Literals costumam oferecer maior legibilidade.

---

## 5. Operações com String — `toLowerCase()` e `toUpperCase()`

### Método `toLowerCase()`

O método **`toLowerCase()`** converte os caracteres da string que possuem representação minúscula para letras minúsculas.

```js
const texto = "JAVASCRIPT";

console.log(texto.toLowerCase());

// javascript
```

É útil para padronizar dados e facilitar determinadas comparações.

### Método `toUpperCase()`

O método **`toUpperCase()`** converte os caracteres da string que possuem representação maiúscula para letras maiúsculas.

```js
const texto = "javascript";

console.log(texto.toUpperCase());

// JAVASCRIPT
```

### Comparação de strings ignorando maiúsculas e minúsculas

Podemos normalizar duas strings antes de comparar.

```js
const resposta = "SIM";

if (resposta.toLowerCase() === "sim") {
    console.log("Resposta confirmada!");
}
```

A comparação funciona mesmo que a entrada esteja em maiúsculas.

### Combinando `trim()` com `toLowerCase()`

É comum que os utilizadores preencham formulários com espaços extras ou diferentes combinações de maiúsculas e minúsculas.

Podemos utilizar os métodos em sequência.

```js
const resposta = "   SIM   ";

const respostaTratada = resposta.trim().toLowerCase();

console.log(respostaTratada); // sim
```

Isso é conhecido como **encadeamento de métodos (Method Chaining)**.

### Exemplo prático — validação de resposta

```js
/**
 * Verifica se a resposta corresponde a "sim".
 * @param {string} resposta - Texto recebido.
 * @returns {boolean} true quando a resposta for "sim".
 */
function verificarResposta(resposta) {
    return resposta.trim().toLowerCase() === "sim";
}

console.log(verificarResposta("SIM"));       // true
console.log(verificarResposta("  Sim  "));   // true
console.log(verificarResposta("não"));       // false
```

### Normalização de dados

A combinação desses métodos ajuda a manter informações mais consistentes.

**Exemplo — Cadastro de utilizador:**

```js
function prepararCadastro(nome, email) {
    const nomeTratado = nome.trim();
    const emailTratado = email.trim().toLowerCase();

    return {
        nome: nomeTratado,
        email: emailTratado
    };
}

const usuario = prepararCadastro(
    "  Dani Toledo  ",
    "  DANI@EXEMPLO.COM  "
);

console.log(usuario);

// {
//   nome: "Dani Toledo",
//   email: "dani@exemplo.com"
// }
```

**Observação:** o tratamento de endereços de e-mail reais deve respeitar as regras do sistema. Converter todo o endereço para minúsculas é uma política comum em aplicações, mas não deve ser assumida como universal para todos os serviços.

### Métodos sensíveis ao idioma

JavaScript também disponibiliza:

- `toLocaleLowerCase()`
- `toLocaleUpperCase()`

Esses métodos permitem aplicar regras de conversão específicas de determinados idiomas quando necessário.

---

## 6. Comparativo dos Principais Métodos de String

| Método / Propriedade | Finalidade | Exemplo | Resultado |
|---|---|---|---|
| `length` | Obtém o comprimento | `"Java".length` | `4` |
| `slice()` | Extrai uma parte | `"JavaScript".slice(0, 4)` | `"Java"` |
| `trim()` | Remove espaços das extremidades | `" Olá ".trim()` | `"Olá"` |
| `split()` | Divide em array | `"a,b".split(",")` | `["a", "b"]` |
| `substring()` | Extrai pelos índices | `"Java".substring(0, 2)` | `"Ja"` |
| `replace()` | Substitui a primeira correspondência | `"Olá".replace("Olá", "Oi")` | `"Oi"` |
| `replaceAll()` | Substitui todas as correspondências | `"a-a".replaceAll("a", "b")` | `"b-b"` |
| `concat()` | Junta strings | `"Olá".concat(" mundo")` | `"Olá mundo"` |
| `toLowerCase()` | Converte para minúsculas | `"OI".toLowerCase()` | `"oi"` |
| `toUpperCase()` | Converte para maiúsculas | `"oi".toUpperCase()` | `"OI"` |

### Imutabilidade dos métodos

Os métodos apresentados não alteram a string original.

```js
const texto = "  JAVASCRIPT  ";

const textoTratado = texto.trim().toLowerCase();

console.log(texto);        // "  JAVASCRIPT  "
console.log(textoTratado); // "javascript"
```

Para guardar o resultado da transformação, devemos atribuí-lo a uma variável.

---

## Resumo em uma frase

> As strings em JavaScript são valores primitivos e imutáveis utilizados para representar textos, podendo ser declaradas com aspas simples, duplas ou backticks, concatenadas com `+`, `concat()` ou Template Literals, consultadas através da propriedade `length` e manipuladas com métodos como `slice()`, `trim()`, `split()`, `substring()`, `replace()`, `toLowerCase()` e `toUpperCase()`, permitindo extrair, dividir, substituir, padronizar e preparar informações textuais para utilização em aplicações.

---

## Conceitos relacionados para estudar a seguir

- **Arrays em JavaScript** — compreender como armazenar e manipular coleções de dados.

- **Métodos de Arrays** — estudar `map()`, `filter()`, `find()`, `join()` e `reduce()`.

- **Expressões Regulares (RegExp)** — realizar pesquisas, validações e substituições avançadas em textos.

- **Métodos de Pesquisa em Strings** — aprofundar `includes()`, `indexOf()`, `startsWith()` e `endsWith()`.

- **Template Literals Avançados** — utilizar interpolação de expressões e strings multilinha.

- **Validação de Formulários** — aplicar métodos de strings na verificação de dados introduzidos pelos utilizadores.

- **Unicode e Codificação de Caracteres** — compreender UTF-16, caracteres especiais e as particularidades do tratamento de textos.

- **Manipulação do DOM** — utilizar strings para modificar conteúdos e elementos HTML dinamicamente.
