
# Promessas (Promises) em JavaScript

---

## 1. O que são Promessas?

### O que é uma Promise

Uma **Promise (Promessa)** é um objeto JavaScript que representa o resultado eventual de uma operação assíncrona.

Uma promessa pode representar:

- Uma operação concluída com sucesso.
- Uma operação que falhou.
- Uma operação que ainda não terminou.

As Promises são utilizadas principalmente quando precisamos trabalhar com operações que podem demorar algum tempo, como:

- Requisições a APIs.
- Consultas a bases de dados.
- Leitura de ficheiros.
- Comunicação com servidores.
- Operações de rede.

### Programação síncrona vs. assíncrona

**Programação Síncrona (Synchronous)**

As instruções são executadas sequencialmente, e uma operação síncrona demorada pode impedir o avanço da execução naquele fluxo.

```js
console.log("Primeiro");
console.log("Segundo");
console.log("Terceiro");

// Primeiro
// Segundo
// Terceiro
```

**Programação Assíncrona (Asynchronous)**

Permite iniciar determinadas operações e continuar a executar outras instruções enquanto se aguarda o resultado.

```js
console.log("Primeiro");

setTimeout(() => {
    console.log("Segundo");
}, 2000);

console.log("Terceiro");

// Primeiro
// Terceiro
// Segundo (aproximadamente 2 segundos depois)
```

O JavaScript não precisa ficar parado à espera da execução do callback agendado pelo `setTimeout()`.

### Os três estados de uma Promise

Uma promessa possui três estados possíveis:

| Estado | Significado |
|---|---|
| `pending` | Operação pendente |
| `fulfilled` | Operação concluída com sucesso |
| `rejected` | Operação rejeitada devido a uma falha |

Uma Promise começa pendente e, quando é resolvida ou rejeitada, passa para um estado definitivo.

```text
                 PROMISE
                    |
                    v
                 PENDING
                    |
            +-------+-------+
            |               |
            v               v
         FULFILLED       REJECTED
         (Sucesso)        (Falha)
            |               |
            v               v
         .then()          .catch()
            |               |
            +-------+-------+
                    |
                    v
                .finally()
```

**Importante:** uma Promise não muda novamente de estado depois de ser concluída.

### Criando uma Promise

Podemos criar uma promessa utilizando o construtor `Promise`.

```js
const promessa = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve("Operação concluída!");
    } else {
        reject(new Error("A operação falhou."));
    }
});
```

Neste exemplo:

- `new Promise()` cria a promessa.
- `resolve()` sinaliza a conclusão bem-sucedida.
- `reject()` sinaliza uma falha.
- `sucesso` representa a condição utilizada no exemplo.

A função passada ao construtor é executada imediatamente. São os resultados e os callbacks associados à Promise que seguem as regras de execução assíncrona.

---

## 2. Desafios na Utilização de Promessas

### Por que as Promises são necessárias?

Antes da popularização das Promises, era comum utilizar funções de callback para controlar operações assíncronas.

Um problema dessa abordagem é o **Callback Hell**, que ocorre quando vários callbacks ficam profundamente aninhados.

### Callback Hell

```js
function executarEtapa(nome, callback) {
    setTimeout(() => {
        console.log(nome);
        callback();
    }, 500);
}

executarEtapa("Etapa 1", () => {
    executarEtapa("Etapa 2", () => {
        executarEtapa("Etapa 3", () => {
            console.log("Processo finalizado.");
        });
    });
});
```

À medida que o número de operações aumenta, o código pode tornar-se difícil de ler e manter.

As Promises ajudam a organizar essas dependências através do encadeamento.

### Tratamento de erros

Uma operação assíncrona pode falhar por diferentes razões:

- Servidor indisponível.
- Falha de rede.
- Dados inválidos.
- Tempo de resposta excessivo.
- Ausência de permissões.

É importante tratar as rejeições para evitar erros não tratados.

```js
const promessa = Promise.reject(
    new Error("Falha na operação.")
);

promessa.catch(erro => {
    console.error(erro.message);
});
```

O método `.catch()` permite tratar a rejeição.

### Não confundir Promise com resultado imediato

Uma Promise representa um resultado futuro, e não necessariamente o valor final.

```js
const promessa = Promise.resolve(100);

console.log(promessa);

// Promise { 100 } (representação depende do ambiente)
```

Para utilizar o valor resolvido:

```js
promessa.then(valor => {
    console.log(valor); // 100
});
```

### A ordem de execução

Mesmo uma Promise já resolvida executa os callbacks de `.then()` de forma assíncrona, através da fila de microtasks.

```js
console.log("Início");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Fim");

// Início
// Fim
// Promise
```

Isso é importante para compreender a ordem de execução em aplicações JavaScript.

### Principais cuidados

- Tratar rejeições com `.catch()` ou mecanismos equivalentes.
- Evitar aninhamentos desnecessários.
- Devolver Promises nos encadeamentos.
- Não assumir que operações assíncronas terminam na ordem em que foram iniciadas.
- Evitar executar operações dependentes antes de receber os resultados necessários.

---

## 3. Como Utilizar Promessas?

### Método `.then()`

O método **`.then()`** regista uma função que será executada quando a Promise for concluída com sucesso.

```js
const promessa = Promise.resolve("Dados carregados!");

promessa.then(resultado => {
    console.log(resultado);
});

// Dados carregados!
```

O valor recebido pelo callback corresponde ao resultado da promessa.

### Método `.catch()`

O método **`.catch()`** permite tratar rejeições.

```js
const promessa = Promise.reject(
    new Error("Não foi possível carregar os dados.")
);

promessa.catch(erro => {
    console.log(erro.message);
});
```

É equivalente a tratar o caso de rejeição com `.then(undefined, callback)`.

### Método `.finally()`

O método **`.finally()`** regista uma função executada quando a Promise é concluída, independentemente do sucesso ou da falha.

```js
const promessa = Promise.resolve("Sucesso!");

promessa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.error(erro.message);
    })
    .finally(() => {
        console.log("Operação finalizada.");
    });
```

É frequentemente utilizado para:

- Finalizar indicadores de carregamento.
- Executar operações de limpeza.
- Atualizar estados da interface.

O `.finally()` normalmente preserva o resultado ou a rejeição anterior, a menos que o próprio callback lance um erro ou devolva uma promessa rejeitada.

### Exemplo prático — simulação de carregamento

```js
function carregarDados() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nome: "Dani",
                curso: "ADS"
            });
        }, 1000);
    });
}

carregarDados()
    .then(usuario => {
        console.log("Utilizador carregado:");
        console.log(usuario);
    })
    .catch(erro => {
        console.error(erro.message);
    })
    .finally(() => {
        console.log("Processo concluído.");
    });
```

Neste exemplo, utilizámos:

- `Promise` para representar a operação.
- `setTimeout()` para simular uma demora.
- `resolve()` para devolver os dados.
- `.then()` para processar o resultado.
- `.catch()` para tratar eventuais erros.
- `.finally()` para finalizar o fluxo.

### Promises e Fetch API

Uma das utilizações mais comuns das Promises é a comunicação com APIs.

A função **`fetch()`** devolve uma Promise que representa a resposta a uma requisição HTTP.

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        return resposta.json();
    })
    .then(usuario => {
        console.log(usuario.name);
    })
    .catch(erro => {
        console.error("Erro:", erro.message);
    });
```

**Importante:** o `fetch()` não rejeita automaticamente a Promise para códigos HTTP como 404 ou 500. Por isso, verificamos `resposta.ok`.

O método `resposta.json()` também devolve uma Promise, pois a leitura e interpretação do corpo da resposta fazem parte de uma operação assíncrona.

### `async/await` — alternativa moderna

O JavaScript permite trabalhar com Promises através de **`async/await`**, oferecendo uma sintaxe mais próxima do código sequencial.

```js
async function carregarUsuario() {
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!resposta.ok) {
            throw new Error("Falha na requisição.");
        }

        const usuario = await resposta.json();

        console.log(usuario.name);

    } catch (erro) {
        console.error(erro.message);
    }
}

carregarUsuario();
```

Neste exemplo:

- `async` declara uma função assíncrona.
- `await` aguarda o resultado da Promise dentro da função.
- `try...catch` permite tratar falhas.

Uma função declarada com `async` devolve sempre uma Promise.

O `await` suspende a continuação daquela função assíncrona, sem bloquear toda a execução do JavaScript.

---

## 4. Encadeamento de Promessas

### O que é Promise Chaining?

O **encadeamento de Promessas (Promise Chaining)** consiste em ligar várias operações através de métodos `.then()`.

Cada chamada de `.then()` devolve uma nova Promise, permitindo construir uma sequência de processamento.

### Exemplo de encadeamento

```js
Promise.resolve(10)
    .then(numero => {
        return numero * 2;
    })
    .then(resultado => {
        return resultado + 5;
    })
    .then(resultadoFinal => {
        console.log(resultadoFinal);
    });

// 25
```

O processo funciona da seguinte forma:

```text
          PROMISE INICIAL
                 |
                 v
                10
                 |
                 v
           Multiplicar × 2
                 |
                 v
                20
                 |
                 v
             Somar + 5
                 |
                 v
                25
                 |
                 v
            RESULTADO
```

### Encadeamento com operações assíncronas

Quando uma etapa depende de outra operação assíncrona, devemos devolver a Promise correspondente.

```js
function buscarUsuario() {
    return Promise.resolve({
        id: 1,
        nome: "Dani"
    });
}

function buscarPedidos(usuario) {
    return Promise.resolve({
        usuario: usuario.nome,
        pedidos: ["Notebook", "Mouse"]
    });
}

buscarUsuario()
    .then(usuario => {
        return buscarPedidos(usuario);
    })
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.error(erro.message);
    });
```

**Resultado:**

```js
{
    usuario: "Dani",
    pedidos: ["Notebook", "Mouse"]
}
```

A segunda operação só é processada depois de a primeira fornecer o utilizador.

### A importância do `return`

Um erro comum é esquecer de devolver uma Promise dentro de `.then()`.

**Exemplo incorreto:**

```js
buscarUsuario()
    .then(usuario => {
        buscarPedidos(usuario);
    })
    .then(resultado => {
        console.log(resultado); // undefined
    });
```

O segundo `.then()` não recebe o resultado de `buscarPedidos()`, porque a Promise não foi devolvida.

**Exemplo correto:**

```js
buscarUsuario()
    .then(usuario => {
        return buscarPedidos(usuario);
    })
    .then(resultado => {
        console.log(resultado);
    });
```

### Tratamento de erros no encadeamento

Uma rejeição ou uma exceção lançada dentro de `.then()` pode ser propagada para o próximo tratamento de erro disponível.

```js
Promise.resolve(10)
    .then(numero => {
        if (numero < 20) {
            throw new Error("Número inferior a 20.");
        }

        return numero;
    })
    .then(numero => {
        console.log(numero);
    })
    .catch(erro => {
        console.error(erro.message);
    });

// Número inferior a 20.
```

O segundo `.then()` é ignorado porque ocorreu uma falha na etapa anterior.

### `Promise.all()` — executar várias operações

O método **`Promise.all()`** permite aguardar várias Promises.

```js
const usuarios = Promise.resolve(["Ana", "Dani"]);
const produtos = Promise.resolve(["Mouse", "Teclado"]);

Promise.all([usuarios, produtos])
    .then(([listaUsuarios, listaProdutos]) => {
        console.log(listaUsuarios);
        console.log(listaProdutos);
    })
    .catch(erro => {
        console.error(erro.message);
    });
```

A Promise resultante é concluída com sucesso quando todas as Promises de entrada são concluídas com sucesso.

Se uma delas for rejeitada, `Promise.all()` também será rejeitada, sem necessariamente cancelar as outras operações em andamento.

### Outros métodos úteis

| Método | Comportamento |
|---|---|
| `Promise.all()` | Aguarda todas; rejeita se alguma rejeitar |
| `Promise.allSettled()` | Aguarda todas, independentemente dos resultados |
| `Promise.race()` | Adota o resultado da primeira que se concluir |
| `Promise.any()` | Resolve com a primeira que cumprir; rejeita se todas rejeitarem |

**Exemplo com `Promise.allSettled()`:**

```js
const tarefas = [
    Promise.resolve("Tarefa 1 concluída"),
    Promise.reject(new Error("Tarefa 2 falhou")),
    Promise.resolve("Tarefa 3 concluída")
];

Promise.allSettled(tarefas)
    .then(resultados => {
        console.log(resultados);
    });
```

Esse método é útil quando precisamos conhecer o resultado de todas as operações, mesmo que algumas falhem.

---

## 5. Boas Práticas com Promises

### Tratar erros adequadamente

Utilizar `.catch()` ou `try...catch` com `async/await`.

### Evitar encadeamentos desnecessariamente complexos

Dividir operações extensas em funções menores.

### Devolver Promises corretamente

Dentro de `.then()`, utilizar `return` quando a próxima etapa precisa aguardar uma operação assíncrona.

### Utilizar `Promise.all()` quando apropriado

Operações independentes podem ser iniciadas em conjunto, reduzindo o tempo total de espera.

### Evitar criar Promises desnecessárias

Quando uma função já devolve uma Promise, normalmente não precisamos envolvê-la em `new Promise()`.

```js
// Desnecessário
function buscarDados() {
    return new Promise((resolve, reject) => {
        fetch("/api/dados").then(resolve).catch(reject);
    });
}

// Mais simples
function buscarDados() {
    return fetch("/api/dados");
}
```

### Preferir `async/await` quando melhorar a legibilidade

O `async/await` é especialmente útil em fluxos com várias operações dependentes.

Entretanto, `.then()` continua a ser válido e importante para compreender o funcionamento das Promises.

---

## Resumo em uma frase

> As Promises em JavaScript representam resultados futuros de operações assíncronas e possuem os estados `pending`, `fulfilled` e `rejected`, permitindo processar resultados com `.then()`, tratar falhas com `.catch()`, executar ações finais com `.finally()` e encadear operações dependentes, além de utilizar recursos como `Promise.all()` e `async/await` para organizar a comunicação com APIs, operações de rede e outras atividades assíncronas de forma mais clara e controlada.

---

## Conceitos relacionados para estudar a seguir

- **Event Loop** — compreender como o JavaScript organiza a execução de tarefas assíncronas.

- **Microtasks e Macrotasks** — estudar a ordem de execução de callbacks, Promises e temporizadores.

- **Async/Await em Profundidade** — aprofundar funções assíncronas e tratamento de exceções.

- **Fetch API** — realizar requisições HTTP e receber dados JSON de servidores.

- **AbortController** — aprender a cancelar requisições e outras operações compatíveis.

- **Promise.allSettled(), Promise.race() e Promise.any()** — trabalhar com múltiplas operações assíncronas.

- **Tratamento de Erros Assíncronos** — compreender propagação de rejeições e erros não tratados.

- **APIs REST** — integrar aplicações frontend com serviços backend.
