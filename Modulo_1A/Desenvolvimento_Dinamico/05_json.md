
# JSON — JavaScript Object Notation

---

## 1. O que é JSON?

### Definição de JSON

O **JSON (JavaScript Object Notation)** é um formato de texto utilizado para representar, armazenar e transmitir dados estruturados.

Apesar de ter origem na sintaxe de objetos JavaScript, o JSON é independente de linguagem e pode ser utilizado com Python, Java, PHP, C# e outras tecnologias.

É muito utilizado na comunicação entre sistemas, especialmente em **APIs REST**.

### Estrutura básica de um JSON

Um documento JSON pode representar um objeto contendo pares de **chave e valor (Key-Value)**.

```json
{
    "nome": "Dani",
    "idade": 25,
    "curso": "Análise e Desenvolvimento de Sistemas",
    "matriculada": true
}
```

Neste exemplo:

- `"nome"` é uma chave.
- `"Dani"` é o valor associado.
- `"idade"` possui um valor numérico.
- `"matriculada"` possui um valor booleano.

### Tipos de dados aceites pelo JSON

O JSON permite representar os seguintes tipos de valores:

| Tipo | Exemplo |
|---|---|
| String | `"JavaScript"` |
| Number | `25`, `3.14` |
| Boolean | `true`, `false` |
| Null | `null` |
| Object | `{"nome": "Dani"}` |
| Array | `["HTML", "CSS", "JS"]` |

**Exemplo:**

```json
{
    "nome": "Dani",
    "idade": 25,
    "altura": 1.60,
    "estudante": true,
    "telefone": null,
    "linguagens": ["JavaScript", "Python", "Java"],
    "endereco": {
        "cidade": "Faro",
        "pais": "Portugal"
    }
}
```

### Regras importantes do JSON

Para que um documento seja considerado JSON válido, é necessário respeitar algumas regras:

1. As chaves dos objetos devem utilizar aspas duplas.
2. Strings devem utilizar aspas duplas.
3. Os pares de chave e valor são separados por dois-pontos (`:`).
4. Os elementos são separados por vírgulas.
5. Não são permitidas vírgulas após o último elemento.
6. JSON não permite comentários.
7. Não são permitidos valores como `undefined`, funções ou `NaN`.

**Exemplo válido:**

```json
{
    "nome": "Maria",
    "idade": 22
}
```

**Exemplo inválido:**

```js
{
    nome: 'Maria',
    idade: 22,
}
```

Esse segundo exemplo pode representar um objeto JavaScript válido, mas não é JSON válido, porque não utiliza aspas duplas nas chaves e possui uma vírgula final.

### JSON vs. Objeto JavaScript

Embora sejam semelhantes, JSON e objetos JavaScript não são exatamente a mesma coisa.

| JSON | Objeto JavaScript |
|---|---|
| Formato de texto | Estrutura de dados em memória |
| Chaves obrigatoriamente entre aspas duplas | Chaves podem ser escritas sem aspas |
| Não permite funções | Pode armazenar funções |
| Não permite `undefined` | Permite `undefined` |
| Utilizado para intercâmbio de dados | Utilizado durante a execução do programa |

**Objeto JavaScript:**

```js
const usuario = {
    nome: "Dani",
    idade: 25,
    saudacao: function() {
        return "Olá!";
    }
};
```

**Representação JSON:**

```json
{
    "nome": "Dani",
    "idade": 25
}
```

### JSON não é uma linguagem de programação

O JSON não possui instruções condicionais, laços ou funções executáveis.

A sua finalidade é representar dados.

---

## 2. Utilização do JSON

### Para que serve o JSON?

O JSON é utilizado principalmente para transmitir e armazenar informações de forma estruturada.

Algumas aplicações comuns são:

- Comunicação entre frontend e backend.
- Respostas de APIs.
- Ficheiros de configuração.
- Armazenamento de dados.
- Integração entre sistemas.
- Transferência de informações entre diferentes linguagens.

### JSON na comunicação entre aplicações

Imagine uma aplicação web que consulta informações de utilizadores numa API.

```text
        FRONTEND
     HTML / CSS / JS
            |
            | Requisição HTTP
            v
          BACKEND
            |
            | Consulta os dados
            v
       BASE DE DADOS
            |
            v
          BACKEND
            |
            | Resposta JSON
            v
         FRONTEND
            |
            v
      EXIBE OS DADOS
```

O backend pode devolver uma resposta JSON como:

```json
{
    "id": 1,
    "nome": "Dani",
    "email": "dani@exemplo.com",
    "ativo": true
}
```

O frontend recebe os dados e utiliza JavaScript para apresentar as informações na interface.

### JSON em APIs REST

As **APIs REST** utilizam frequentemente JSON como formato de troca de dados.

**Exemplo de resposta de uma API:**

```json
{
    "status": "sucesso",
    "dados": [
        {
            "id": 1,
            "produto": "Notebook",
            "preco": 3500
        },
        {
            "id": 2,
            "produto": "Mouse",
            "preco": 80
        }
    ]
}
```

A aplicação pode utilizar essa resposta para apresentar os produtos numa página.

### JSON em ficheiros de configuração

O JSON também é utilizado para guardar configurações.

Um exemplo conhecido no ecossistema JavaScript é o ficheiro `package.json`.

**Exemplo simplificado:**

```json
{
    "name": "meu-projeto",
    "version": "1.0.0",
    "description": "Projeto de estudo em JavaScript",
    "scripts": {
        "start": "node index.js"
    }
}
```

Esse ficheiro é utilizado por ferramentas como o npm para organizar informações e comandos de um projeto Node.js.

### Vantagens do JSON

- Sintaxe relativamente simples.
- Fácil leitura por humanos.
- Compatibilidade com diferentes linguagens.
- Suporte a objetos e arrays.
- Ampla utilização em APIs.
- Integração direta com JavaScript.

### Limitações do JSON

- Não permite comentários.
- Não representa funções.
- Não possui suporte nativo a todos os tipos de dados JavaScript.
- Não preserva automaticamente instâncias de classes.
- Não é adequado para representar referências circulares diretamente.

---

## 3. Visualização de Objetos

### O que são objetos JavaScript?

Um **objeto (Object)** é uma estrutura que permite organizar dados em propriedades.

Cada propriedade possui uma chave e um valor.

```js
const aluno = {
    nome: "Dani",
    idade: 25,
    curso: "ADS"
};
```

Os objetos são fundamentais para trabalhar com dados recebidos em JSON.

### Aceder às propriedades

Existem duas formas principais de aceder às propriedades de um objeto.

**Notação de ponto (Dot Notation):**

```js
const aluno = {
    nome: "Dani",
    idade: 25
};

console.log(aluno.nome);  // Dani
console.log(aluno.idade); // 25
```

**Notação de colchetes (Bracket Notation):**

```js
const aluno = {
    nome: "Dani",
    idade: 25
};

console.log(aluno["nome"]);  // Dani
console.log(aluno["idade"]); // 25
```

A notação de colchetes é especialmente útil quando o nome da propriedade está armazenado numa variável.

```js
const aluno = {
    nome: "Dani",
    curso: "ADS"
};

const propriedade = "curso";

console.log(aluno[propriedade]); // ADS
```

### Visualização com `console.log()`

Podemos apresentar um objeto completo na consola.

```js
const produto = {
    id: 1,
    nome: "Notebook",
    preco: 3500,
    disponivel: true
};

console.log(produto);
```

Nos navegadores, o objeto pode ser apresentado de forma expansível nas ferramentas de desenvolvimento.

### Visualização com `console.table()`

O método `console.table()` permite apresentar arrays e objetos em formato de tabela.

```js
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Teclado", preco: 150 }
];

console.table(produtos);
```

É especialmente útil durante o desenvolvimento e a depuração.

### Visualização de objetos aninhados

Um **objeto aninhado (Nested Object)** é um objeto que contém outro objeto como propriedade.

```js
const usuario = {
    nome: "Dani",
    endereco: {
        cidade: "Faro",
        pais: "Portugal"
    }
};

console.log(usuario.nome);             // Dani
console.log(usuario.endereco.cidade);  // Faro
console.log(usuario.endereco.pais);    // Portugal
```

### Arrays de objetos

É comum que respostas JSON contenham arrays de objetos.

```js
const alunos = [
    { id: 1, nome: "Ana", nota: 8 },
    { id: 2, nome: "Maria", nota: 9 },
    { id: 3, nome: "João", nota: 7 }
];

for (const aluno of alunos) {
    console.log(`${aluno.nome}: ${aluno.nota}`);
}
```

**Resultado:**

```text
Ana: 8
Maria: 9
João: 7
```

Neste exemplo, utilizámos o `for...of`, estudado em `03_instrucoes_repeticao.md`.

### Métodos para explorar objetos

JavaScript disponibiliza métodos úteis para consultar propriedades.

| Método | Finalidade |
|---|---|
| `Object.keys()` | Devolve as chaves próprias enumeráveis |
| `Object.values()` | Devolve os respetivos valores |
| `Object.entries()` | Devolve pares de chave e valor |

**Exemplo:**

```js
const aluno = {
    nome: "Dani",
    idade: 25,
    curso: "ADS"
};

console.log(Object.keys(aluno));
// ["nome", "idade", "curso"]

console.log(Object.values(aluno));
// ["Dani", 25, "ADS"]

console.log(Object.entries(aluno));
// [["nome", "Dani"], ["idade", 25], ["curso", "ADS"]]
```

Esses métodos facilitam a inspeção e manipulação de dados estruturados.

---

## 4. Manipulação de Dados

### Converter JSON em objeto — `JSON.parse()`

O método **`JSON.parse()`** converte um texto JSON válido num valor JavaScript.

É muito utilizado para interpretar dados recebidos de APIs ou ficheiros.

**Sintaxe:**

```js
JSON.parse(textoJSON);
```

**Exemplo:**

```js
const textoJSON = '{"nome":"Dani","idade":25}';

const usuario = JSON.parse(textoJSON);

console.log(usuario.nome);  // Dani
console.log(usuario.idade); // 25
```

Antes da conversão, `textoJSON` é uma string.

Depois da conversão, `usuario` é um objeto JavaScript.

```js
console.log(typeof textoJSON); // string
console.log(typeof usuario);   // object
```

### Converter objeto em JSON — `JSON.stringify()`

O método **`JSON.stringify()`** converte valores JavaScript compatíveis com JSON para uma string JSON.

**Sintaxe:**

```js
JSON.stringify(valor);
```

**Exemplo:**

```js
const usuario = {
    nome: "Dani",
    idade: 25,
    curso: "ADS"
};

const textoJSON = JSON.stringify(usuario);

console.log(textoJSON);

// {"nome":"Dani","idade":25,"curso":"ADS"}
```

### Comparativo: `parse()` vs. `stringify()`

| Método | Conversão | Utilização |
|---|---|---|
| `JSON.parse()` | Texto JSON → Valor JavaScript | Ler dados recebidos |
| `JSON.stringify()` | Valor JavaScript → Texto JSON | Enviar ou armazenar dados |

```text
         JSON.parse()

STRING JSON --------------> OBJETO JS


        JSON.stringify()

OBJETO JS ----------------> STRING JSON
```

### Formatar JSON para visualização

O método `JSON.stringify()` também pode ser utilizado para formatar objetos com indentação.

```js
const usuario = {
    nome: "Dani",
    idade: 25,
    curso: "ADS"
};

const jsonFormatado = JSON.stringify(usuario, null, 2);

console.log(jsonFormatado);
```

**Resultado:**

```json
{
  "nome": "Dani",
  "idade": 25,
  "curso": "ADS"
}
```

O terceiro argumento define a quantidade de espaços utilizados para indentação.

### Alterar propriedades de um objeto

Depois de converter o JSON, podemos modificar o objeto normalmente.

```js
const usuario = {
    nome: "Dani",
    idade: 25
};

usuario.idade = 26;

console.log(usuario);

// { nome: "Dani", idade: 26 }
```

### Adicionar propriedades

```js
const usuario = {
    nome: "Dani"
};

usuario.curso = "ADS";

console.log(usuario);

// { nome: "Dani", curso: "ADS" }
```

### Remover propriedades

Podemos utilizar o operador `delete`.

```js
const usuario = {
    nome: "Dani",
    idade: 25,
    senhaTemporaria: "exemplo"
};

delete usuario.senhaTemporaria;

console.log(usuario);

// { nome: "Dani", idade: 25 }
```

**Nota:** remover uma propriedade de um objeto não elimina cópias do dado que já tenham sido armazenadas ou transmitidas.

### Filtrar dados com `filter()`

É comum utilizar arrays de objetos recebidos de APIs.

```js
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Teclado", preco: 150 }
];

const produtosBaratos = produtos.filter(
    produto => produto.preco < 200
);

console.log(produtosBaratos);

// [
//   { id: 2, nome: "Mouse", preco: 80 },
//   { id: 3, nome: "Teclado", preco: 150 }
// ]
```

### Transformar dados com `map()`

O método `map()` permite criar um novo array a partir dos elementos existentes.

```js
const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
];

const nomes = produtos.map(produto => produto.nome);

console.log(nomes);

// ["Mouse", "Teclado"]
```

### Cuidados com `JSON.parse()`

Se o texto não contiver JSON válido, `JSON.parse()` lança um erro.

```js
const texto = "{nome: Dani}";

// JSON.parse(texto);
// SyntaxError
```

Podemos utilizar `try...catch` para tratar esse problema.

```js
const texto = '{"nome":"Dani"}';

try {
    const usuario = JSON.parse(texto);

    console.log(usuario.nome);
} catch (erro) {
    console.error("O JSON recebido é inválido.");
}
```

### Limitações de `JSON.stringify()`

Nem todos os valores JavaScript são representados diretamente em JSON.

Por exemplo, propriedades de objetos com valores `undefined` ou funções são omitidas.

```js
const dados = {
    nome: "Dani",
    idade: undefined,
    saudacao: function() {
        return "Olá";
    }
};

console.log(JSON.stringify(dados));

// {"nome":"Dani"}
```

O JSON resultante não contém `idade` nem `saudacao`.

Além disso, referências circulares não podem ser convertidas diretamente com `JSON.stringify()`.

### Exemplo prático — simulação de resposta de uma API

```js
// Simulação de uma resposta recebida de uma API
const respostaAPI = `
{
    "status": "sucesso",
    "usuarios": [
        {
            "id": 1,
            "nome": "Ana",
            "ativo": true
        },
        {
            "id": 2,
            "nome": "Dani",
            "ativo": false
        },
        {
            "id": 3,
            "nome": "Maria",
            "ativo": true
        }
    ]
}
`;

// Converter o JSON em objeto
const dados = JSON.parse(respostaAPI);

// Filtrar utilizadores ativos
const usuariosAtivos = dados.usuarios.filter(
    usuario => usuario.ativo
);

// Apresentar os resultados
console.table(usuariosAtivos);

// Converter novamente para JSON
const jsonFinal = JSON.stringify(usuariosAtivos, null, 2);

console.log(jsonFinal);
```

Neste exemplo, utilizámos:

- `JSON.parse()` para interpretar os dados.
- Acesso a propriedades de objetos.
- `filter()` para selecionar utilizadores.
- `console.table()` para visualizar informações.
- `JSON.stringify()` para gerar uma string JSON.

---

## 5. Exercícios para Praticar

### Exercício 1 — Criar um JSON

Crie um documento JSON contendo:

- Nome.
- Idade.
- Curso.
- Cidade.
- Lista de linguagens de programação.

### Exercício 2 — Converter JSON em objeto

Crie uma string JSON:

```js
const dados = '{"nome":"Maria","idade":22,"curso":"ADS"}';
```

Utilize `JSON.parse()` para converter o texto num objeto.

Apresente as propriedades `nome` e `curso` na consola.

### Exercício 3 — Converter objeto em JSON

Crie um objeto JavaScript contendo informações de um produto.

Utilize `JSON.stringify()` para convertê-lo numa string JSON.

### Exercício 4 — Visualizar objetos

Crie um array com três objetos representando estudantes.

Cada objeto deve possuir:

- `nome`
- `idade`
- `nota`

Utilize `console.table()` para apresentar os dados.

### Exercício 5 — Filtrar dados

Utilize o array:

```js
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Maria", nota: 6 },
    { nome: "João", nota: 9 }
];
```

Utilize `filter()` para obter apenas os estudantes com nota maior ou igual a 7.

### Exercício 6 — Manipular propriedades

Crie o seguinte objeto:

```js
const produto = {
    nome: "Notebook",
    preco: 3500
};
```

Depois:

1. Atualize o preço para `3200`.
2. Adicione a propriedade `disponivel` com valor `true`.
3. Apresente o objeto atualizado.
4. Converta-o para JSON utilizando `JSON.stringify()`.

---

## Resumo em uma frase

> O JSON (JavaScript Object Notation) é um formato de texto utilizado para armazenar e transmitir dados estruturados, muito comum na comunicação entre frontend e backend através de APIs, permitindo representar objetos, arrays, strings, números e valores booleanos, enquanto os métodos `JSON.parse()` e `JSON.stringify()` possibilitam converter dados entre texto JSON e valores JavaScript para facilitar a visualização, manipulação e integração de informações em aplicações.

---

## Conceitos relacionados para estudar a seguir

- **Objetos em JavaScript** — aprofundar propriedades, métodos e objetos aninhados.

- **Arrays e seus Métodos** — estudar `map()`, `filter()`, `find()`, `reduce()` e `forEach()`.

- **Fetch API** — aprender a realizar requisições HTTP e receber dados JSON de APIs.

- **Promises e Async/Await** — compreender operações assíncronas utilizadas na comunicação com servidores.

- **APIs REST** — estudar endpoints, métodos HTTP e códigos de resposta.

- **LocalStorage** — armazenar dados no navegador utilizando strings JSON.

- **Tratamento de Exceções** — aprofundar `try`, `catch` e `finally` para lidar com erros.

- **Validação de Dados** — verificar se as informações recebidas possuem a estrutura e os tipos esperados.
