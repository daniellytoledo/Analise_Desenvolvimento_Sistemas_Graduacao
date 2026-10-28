
# Exceções em JavaScript

---

## 1. Definição de Exceções

### O que são exceções

Uma **exceção (Exception)** é uma situação que interrompe o fluxo normal de execução de um programa, geralmente devido à ocorrência de um erro ou de uma condição inesperada.

Em JavaScript, as exceções podem ser lançadas automaticamente pela linguagem ou manualmente pelo programador.

São comuns em situações como:

- Tentativa de aceder a uma variável inexistente.
- Utilização incorreta de um tipo de dado.
- Conversão de JSON inválido.
- Parâmetros inválidos numa função.
- Falhas durante o processamento de informações.
- Erros em operações assíncronas.

### Exemplo de exceção

```js
const usuario = null;

console.log(usuario.nome);

// TypeError:
// Cannot read properties of null
```

Neste exemplo, o JavaScript lança uma exceção porque não é possível aceder diretamente à propriedade `nome` de `null`.

Se a exceção não for tratada, a execução normal daquele fluxo é interrompida.

### Erros vs. Exceções

Embora frequentemente utilizados como sinónimos, os conceitos possuem diferenças.

**Erro (Error)**

Representa um problema ou condição de falha durante a execução.

**Exceção (Exception)**

É um valor lançado que altera o fluxo de execução, podendo representar um erro.

Nem toda exceção precisa ser uma instância de `Error`, embora essa seja a prática recomendada.

### O que é tratamento de exceções

O **tratamento de exceções (Exception Handling)** consiste em identificar e lidar com situações inesperadas, evitando que provoquem falhas descontroladas.

Em JavaScript, utilizamos principalmente:

- `try`
- `catch`
- `finally`
- `throw`

### Estrutura `try...catch`

A instrução `try` define um bloco de código que será executado.

Se ocorrer uma exceção nesse bloco, o `catch` poderá capturá-la.

```js
try {
    const usuario = null;

    console.log(usuario.nome);

} catch (erro) {
    console.log("Ocorreu um erro!");
}
```

**Resultado:**

```text
Ocorreu um erro!
```

A exceção foi capturada e o programa pôde continuar a execução após o `catch`.

### Estrutura `try...catch...finally`

O bloco **`finally`** permite executar instruções após o `try` e o eventual `catch`, independentemente de ter ocorrido uma exceção.

```js
try {
    console.log("Iniciando operação...");

    const resultado = 10 / 2;

    console.log(resultado);

} catch (erro) {
    console.log("Ocorreu um erro.");

} finally {
    console.log("Operação finalizada.");
}
```

**Resultado:**

```text
Iniciando operação...
5
Operação finalizada.
```

O `finally` é frequentemente utilizado para libertar recursos ou realizar operações de limpeza.

### Estrutura do tratamento de exceções

```text
           INÍCIO
              |
              v
          BLOCO TRY
              |
       +------+------+
       |             |
       v             v
   SEM ERRO       EXCEÇÃO
       |             |
       |             v
       |          CATCH
       |             |
       +------+------+
              |
              v
           FINALLY
              |
              v
             FIM
```

### O comando `throw`

O comando **`throw`** permite lançar manualmente uma exceção.

É utilizado quando o programador identifica uma situação que não deve ser aceite.

**Exemplo:**

```js
function verificarIdade(idade) {
    if (idade < 0) {
        throw new Error("A idade não pode ser negativa.");
    }

    return `Idade informada: ${idade}`;
}

try {
    console.log(verificarIdade(-5));

} catch (erro) {
    console.log(erro.message);
}

// A idade não pode ser negativa.
```

Neste exemplo, a própria função estabelece uma regra de validação.

### Quando utilizar exceções

As exceções são apropriadas para situações em que uma operação não consegue continuar normalmente.

Exemplos:

- Dados obrigatórios inválidos.
- Falhas de acesso a recursos.
- Respostas inesperadas de serviços.
- Problemas na conversão de dados.
- Operações incompatíveis com o estado atual do sistema.

Nem toda condição deve produzir uma exceção.

Por exemplo, um utilizador não encontrado numa pesquisa pode ser um resultado esperado, dependendo das regras da aplicação.

---

## 2. Propriedades de uma Classe de Exceção

### A classe `Error`

Em JavaScript, **`Error`** é o principal construtor utilizado para representar erros.

Podemos criar uma instância utilizando `new Error()`.

```js
const erro = new Error("Ocorreu um problema.");

console.log(erro);
```

O objeto contém informações que ajudam a identificar e investigar a falha.

### Principais propriedades

| Propriedade | Finalidade |
|---|---|
| `name` | Identifica o tipo de erro |
| `message` | Apresenta a mensagem descritiva |
| `stack` | Apresenta informações sobre a pilha de execução, quando disponível |
| `cause` | Permite associar a causa original do erro |

### Propriedade `name`

Identifica o nome do erro.

```js
const erro = new Error("Falha na operação.");

console.log(erro.name);

// Error
```

### Propriedade `message`

Contém a mensagem que descreve o problema.

```js
const erro = new Error("Utilizador não encontrado.");

console.log(erro.message);

// Utilizador não encontrado.
```

É uma das propriedades mais utilizadas no tratamento de exceções.

### Propriedade `stack`

A propriedade **`stack`** pode apresentar a sequência de chamadas que levou à ocorrência de um erro.

```js
function executarOperacao() {
    throw new Error("Falha na operação.");
}

try {
    executarOperacao();

} catch (erro) {
    console.log(erro.stack);
}
```

A informação apresentada depende do ambiente de execução.

**Importante:** `stack` é amplamente suportada, mas os detalhes do formato não são padronizados de maneira uniforme entre todos os ambientes JavaScript.

### Propriedade `cause`

A propriedade **`cause`** permite preservar a causa original quando criamos um novo erro a partir de outro.

```js
try {
    JSON.parse("{json inválido}");

} catch (erroOriginal) {
    const novoErro = new Error(
        "Não foi possível processar os dados.",
        { cause: erroOriginal }
    );

    console.log(novoErro.message);
    console.log(novoErro.cause.message);
}
```

Isso facilita a investigação de erros em aplicações com várias camadas.

### Tipos de erros em JavaScript

JavaScript possui diferentes construtores de erros.

| Tipo | Descrição |
|---|---|
| `Error` | Erro genérico |
| `TypeError` | Operação incompatível com o tipo ou valor |
| `ReferenceError` | Referência inválida, como identificador inexistente |
| `SyntaxError` | Problema de sintaxe |
| `RangeError` | Valor fora do intervalo permitido |
| `URIError` | Utilização inválida de funções de URI |
| `AggregateError` | Agrupa múltiplos erros |

### Exemplo de `TypeError`

```js
const numero = 10;

try {
    numero.toUpperCase();

} catch (erro) {
    console.log(erro.name);
    console.log(erro.message);
}

// TypeError
// Mensagem explicando que toUpperCase não é uma função
```

### Exemplo de `ReferenceError`

```js
try {
    console.log(variavelInexistente);

} catch (erro) {
    console.log(erro.name);
}

// ReferenceError
```

### Exemplo de `SyntaxError`

Um exemplo comum ocorre quando tentamos interpretar um JSON inválido.

```js
const texto = '{"nome": "Dani",}';

try {
    JSON.parse(texto);

} catch (erro) {
    console.log(erro.name);
}

// SyntaxError
```

Neste exemplo, existe uma vírgula final que não é permitida no JSON.

### Exemplo de `RangeError`

```js
try {
    const numero = 10;

    numero.toFixed(101);

} catch (erro) {
    console.log(erro.name);
}

// RangeError
```

O método `toFixed()` não permite uma quantidade de casas decimais superior ao intervalo suportado.

---

## 3. Encapsulamento

### O que é encapsulamento de exceções

O **encapsulamento**, estudado em `07_orientacao_objetos.md`, consiste em controlar o acesso aos dados e organizar comportamentos dentro de classes.

No tratamento de exceções, podemos aplicar esse conceito criando **classes de erros personalizadas (Custom Error Classes)**.

Essas classes permitem:

- Identificar categorias específicas de erros.
- Padronizar mensagens.
- Acrescentar códigos de erro.
- Armazenar informações relevantes.
- Facilitar o tratamento de diferentes falhas.

### Criando uma classe de erro personalizada

Podemos utilizar a herança com `extends Error`.

```js
class ErroValidacao extends Error {
    constructor(mensagem) {
        super(mensagem);

        this.name = "ErroValidacao";
    }
}
```

Neste exemplo:

- `ErroValidacao` herda de `Error`.
- `super(mensagem)` inicializa a mensagem do erro.
- `this.name` identifica a categoria da exceção.

### Utilizando a classe personalizada

```js
class ErroValidacao extends Error {
    constructor(mensagem) {
        super(mensagem);

        this.name = "ErroValidacao";
    }
}

function validarNome(nome) {
    if (typeof nome !== "string" || nome.trim() === "") {
        throw new ErroValidacao("O nome é obrigatório.");
    }

    return nome.trim();
}

try {
    console.log(validarNome(""));

} catch (erro) {
    console.log(erro.name);
    console.log(erro.message);
}

// ErroValidacao
// O nome é obrigatório.
```

### Adicionando propriedades personalizadas

Podemos acrescentar informações que facilitem o tratamento da falha.

```js
class ErroAplicacao extends Error {
    constructor(mensagem, codigo) {
        super(mensagem);

        this.name = "ErroAplicacao";
        this.codigo = codigo;
    }
}

try {
    throw new ErroAplicacao(
        "Produto não encontrado.",
        "PRODUTO_404"
    );

} catch (erro) {
    console.log(erro.name);
    console.log(erro.codigo);
    console.log(erro.message);
}
```

**Resultado:**

```text
ErroAplicacao
PRODUTO_404
Produto não encontrado.
```

### Encapsulamento com campos privados

Também podemos utilizar campos privados (`#`) para controlar informações internas.

```js
class ErroAplicacao extends Error {
    #codigo;

    constructor(mensagem, codigo) {
        super(mensagem);

        this.name = "ErroAplicacao";
        this.#codigo = codigo;
    }

    get codigo() {
        return this.#codigo;
    }
}

const erro = new ErroAplicacao(
    "Acesso negado.",
    "ACESSO_403"
);

console.log(erro.codigo);

// ACESSO_403
```

O código é armazenado num campo privado e disponibilizado através de um getter.

### Identificando erros com `instanceof`

O operador **`instanceof`** permite verificar se um objeto pertence a determinada classe ou possui essa classe na sua cadeia de protótipos.

```js
class ErroValidacao extends Error {
    constructor(mensagem) {
        super(mensagem);

        this.name = "ErroValidacao";
    }
}

try {
    throw new ErroValidacao("Dados inválidos.");

} catch (erro) {
    if (erro instanceof ErroValidacao) {
        console.log("Foi identificado um erro de validação.");
    }
}
```

Essa prática permite implementar tratamentos específicos para diferentes tipos de exceção.

### Vantagens das exceções personalizadas

- Melhor organização dos erros.
- Identificação rápida de problemas.
- Maior clareza no código.
- Padronização das mensagens.
- Facilidade de manutenção.
- Melhor integração com sistemas de registo e monitorização.

---

## 4. Prática com Uso de Exceções

### Exemplo 1 — Validação de divisão

Vamos criar uma função que realize divisões e lance exceções quando os parâmetros forem inválidos.

```js
/**
 * Divide dois números.
 * @param {number} a - Dividendo.
 * @param {number} b - Divisor.
 * @returns {number} Resultado da divisão.
 */
function dividir(a, b) {
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        !Number.isFinite(a) ||
        !Number.isFinite(b)
    ) {
        throw new TypeError("Os valores devem ser números finitos.");
    }

    if (b === 0) {
        throw new RangeError("Não é permitido dividir por zero.");
    }

    return a / b;
}

try {
    console.log(dividir(10, 2));
    console.log(dividir(10, 0));

} catch (erro) {
    console.log(`Erro: ${erro.message}`);

} finally {
    console.log("Operação de divisão finalizada.");
}
```

**Resultado:**

```text
5
Erro: Não é permitido dividir por zero.
Operação de divisão finalizada.
```

Em JavaScript, a operação numérica `10 / 0` normalmente devolve `Infinity`. Neste exemplo, decidimos lançar uma exceção porque a regra da aplicação não permite dividir por zero.

### Exemplo 2 — Validação de cadastro

Vamos utilizar uma função que verifica as informações recebidas.

```js
function cadastrarUsuario(nome, idade) {
    if (typeof nome !== "string" || nome.trim() === "") {
        throw new Error("O nome é obrigatório.");
    }

    if (!Number.isInteger(idade) || idade < 0) {
        throw new Error("A idade deve ser um inteiro não negativo.");
    }

    return {
        nome: nome.trim(),
        idade: idade
    };
}

try {
    const usuario = cadastrarUsuario("Dani", 25);

    console.log("Utilizador cadastrado:");
    console.log(usuario);

} catch (erro) {
    console.error(erro.message);
}
```

### Exemplo 3 — Tratamento de JSON inválido

Conforme estudado em `05_json.md`, o método `JSON.parse()` converte texto JSON para valores JavaScript.

Entretanto, se o texto estiver incorreto, será lançada uma exceção.

```js
function converterJSON(texto) {
    try {
        return JSON.parse(texto);

    } catch (erro) {
        console.error("Não foi possível converter o JSON.");

        return null;
    }
}

const dadosValidos = '{"nome":"Dani","idade":25}';
const dadosInvalidos = '{"nome":"Dani",}';

console.log(converterJSON(dadosValidos));
// { nome: "Dani", idade: 25 }

console.log(converterJSON(dadosInvalidos));
// null
```

Neste exemplo, a função devolve `null` quando a conversão falha.

Em aplicações maiores, pode ser mais adequado propagar a exceção para que outra camada decida como tratar o problema.

### Exemplo 4 — Relançando exceções

Em determinadas situações, queremos identificar um erro, registar informações e permitir que outra parte do programa continue o tratamento.

Para isso, podemos utilizar novamente `throw`.

```js
function processarDados(texto) {
    try {
        return JSON.parse(texto);

    } catch (erro) {
        console.error("Falha ao processar os dados.");

        throw erro;
    }
}

try {
    processarDados("{json inválido}");

} catch (erro) {
    console.log("A aplicação identificou o problema.");
}
```

Esse processo é conhecido como **relançamento de exceção (Rethrowing)**.

### Exemplo 5 — Exceções em funções assíncronas

O tratamento de exceções também é importante em operações assíncronas.

Podemos utilizar `try...catch` com `async/await`.

```js
async function carregarUsuario() {
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!resposta.ok) {
            throw new Error(
                `Erro HTTP: ${resposta.status}`
            );
        }

        const usuario = await resposta.json();

        console.log(usuario.name);

    } catch (erro) {
        console.error(
            "Não foi possível carregar o utilizador:",
            erro.message
        );
    }
}

carregarUsuario();
```

**Observação:** `fetch()` não lança automaticamente uma exceção para todos os códigos HTTP de erro, como 404 ou 500. Por isso, verificamos a propriedade `resposta.ok`.

Esse exemplo exige um ambiente com `fetch()` disponível e acesso à internet.

### Exemplo 6 — Sistema bancário com exceções personalizadas

Vamos combinar os conceitos de POO e tratamento de exceções.

```js
class SaldoInsuficienteError extends Error {
    constructor() {
        super("Saldo insuficiente para realizar o saque.");

        this.name = "SaldoInsuficienteError";
    }
}

class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        if (!Number.isFinite(saldoInicial) || saldoInicial < 0) {
            throw new RangeError("Saldo inicial inválido.");
        }

        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (!Number.isFinite(valor) || valor <= 0) {
            throw new RangeError("O depósito deve ser positivo.");
        }

        this.#saldo += valor;
    }

    sacar(valor) {
        if (!Number.isFinite(valor) || valor <= 0) {
            throw new RangeError("O saque deve ser positivo.");
        }

        if (valor > this.#saldo) {
            throw new SaldoInsuficienteError();
        }

        this.#saldo -= valor;
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria(500);

try {
    conta.depositar(200);

    console.log(`Saldo: R$ ${conta.consultarSaldo()}`);

    conta.sacar(1000);

} catch (erro) {
    if (erro instanceof SaldoInsuficienteError) {
        console.log("Operação recusada: saldo insuficiente.");
    } else {
        console.log(`Erro: ${erro.message}`);
    }

} finally {
    console.log("Processamento finalizado.");
}
```

**Resultado:**

```text
Saldo: R$ 700
Operação recusada: saldo insuficiente.
Processamento finalizado.
```

### Conceitos utilizados neste exemplo

**Encapsulamento**

O saldo é armazenado num campo privado `#saldo`.

**Herança**

A classe `SaldoInsuficienteError` herda da classe `Error`.

**Exceções personalizadas**

O erro possui uma identidade específica.

**Tratamento de exceções**

O `try...catch` permite tratar a tentativa de saque inválida.

**Finalização**

O `finally` executa a mensagem final.

---

## 5. Boas Práticas no Tratamento de Exceções

### Utilizar mensagens claras

Uma mensagem de erro deve explicar o problema de forma compreensível.

```js
// Pouco descritivo
throw new Error("Erro.");

// Mais descritivo
throw new Error("O e-mail informado é inválido.");
```

### Utilizar erros específicos

Quando possível, utilizar classes adequadas.

```js
throw new TypeError("O nome deve ser uma string.");

throw new RangeError("A idade não pode ser negativa.");
```

### Evitar esconder erros

Capturar uma exceção sem realizar qualquer tratamento pode dificultar a identificação de problemas.

```js
// Evitar quando não existe uma razão específica
try {
    executarOperacao();
} catch (erro) {
    // Erro ignorado
}
```

### Não utilizar exceções para qualquer condição

As exceções são especialmente úteis para condições que impedem a execução normal de uma operação.

Situações esperadas podem ser tratadas através de valores de retorno e estruturas condicionais.

### Não expor informações sensíveis

Mensagens de erro apresentadas aos utilizadores não devem revelar:

- Palavras-passe.
- Tokens.
- Dados privados.
- Detalhes internos sensíveis.
- Informações de configuração que possam comprometer a segurança.

### Registar informações úteis para depuração

Durante o desenvolvimento, podemos utilizar:

```js
console.error(erro);
```

Em aplicações maiores, é comum utilizar sistemas de logging e monitorização para registar falhas de forma estruturada.

---

## Resumo em uma frase

> As exceções em JavaScript representam situações que interrompem o fluxo normal do programa e podem ser tratadas através de `try`, `catch`, `finally` e `throw`, utilizando objetos da classe `Error` com propriedades como `name`, `message`, `stack` e `cause`, além de classes personalizadas que aplicam herança e encapsulamento para organizar falhas específicas, permitindo validar informações, identificar problemas e desenvolver aplicações mais confiáveis e fáceis de manter.

---

## Conceitos relacionados para estudar a seguir

- **Tratamento de Erros Assíncronos** — aprofundar exceções em `async/await` e Promises.

- **Promises** — compreender estados de operações assíncronas e o método `.catch()`.

- **Fetch API** — tratar erros de rede, respostas HTTP e falhas na interpretação de JSON.

- **Logging** — estudar técnicas para registar erros e eventos de aplicações.

- **Validação de Dados** — implementar verificações de tipos e regras de negócio.

- **Debugging** — utilizar o depurador do VS Code e as ferramentas de desenvolvimento do navegador.

- **Testes Unitários** — verificar se funções lançam as exceções esperadas.

- **Erros Personalizados** — aprofundar a criação de classes específicas para diferentes categorias de falhas.

- **Observabilidade** — compreender como logs, métricas e traces ajudam a identificar problemas em aplicações.
