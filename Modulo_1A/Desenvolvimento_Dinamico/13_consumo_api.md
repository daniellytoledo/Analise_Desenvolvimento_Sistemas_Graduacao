
# Consumo de API em JavaScript

---

## 1. Conceito de Consumo de API

### O que é uma API?

Uma **API (Application Programming Interface)** é uma interface que permite a comunicação entre diferentes aplicações ou sistemas.

As APIs estabelecem formas padronizadas de solicitar informações ou executar operações, sem que seja necessário conhecer todos os detalhes internos do sistema responsável pelo processamento.

Exemplos de utilização:

- Consultar informações meteorológicas.
- Obter produtos de uma loja virtual.
- Realizar autenticação.
- Consultar informações de utilizadores.
- Processar pagamentos.
- Enviar dados de formulários.
- Integrar aplicações frontend e backend.

### O que significa consumir uma API?

O **consumo de API (API Consumption)** consiste em realizar solicitações a uma interface disponibilizada por outro sistema e utilizar as respostas recebidas.

Numa aplicação web, geralmente o JavaScript envia uma requisição HTTP para um servidor.

O servidor processa a solicitação e devolve uma resposta, frequentemente no formato JSON.

### Comunicação entre frontend e backend

```text
             UTILIZADOR
                 |
                 v
               FRONTEND
          HTML / CSS / JavaScript
                 |
                 | Requisição HTTP
                 v
                API
                 |
                 v
               BACKEND
                 |
                 v
            BASE DE DADOS
                 |
                 | Resposta
                 v
                API
                 |
                 | JSON
                 v
               FRONTEND
                 |
                 v
          APRESENTA OS DADOS
```

A API funciona como uma interface de comunicação entre os sistemas. Nem todas as APIs precisam de consultar uma base de dados.

### O que é um Endpoint?

Um **endpoint** é um endereço disponibilizado por uma API para aceder a determinado recurso ou operação.

**Exemplo:**

```text
https://jsonplaceholder.typicode.com/users
```

Esse endpoint permite consultar uma lista de utilizadores fictícios.

Para consultar um utilizador específico:

```text
https://jsonplaceholder.typicode.com/users/1
```

O número `1` identifica o recurso solicitado.

### Métodos HTTP

As APIs web utilizam frequentemente métodos HTTP para indicar a operação pretendida.

| Método | Finalidade | Exemplo |
|---|---|---|
| `GET` | Consultar dados | Obter utilizadores |
| `POST` | Enviar dados para processamento ou criação | Criar utilizador |
| `PUT` | Substituir a representação de um recurso | Atualizar produto |
| `PATCH` | Aplicar alterações parciais | Alterar o preço |
| `DELETE` | Solicitar a remoção de um recurso | Excluir produto |

Esses métodos são frequentemente utilizados em **APIs REST**.

### Códigos de resposta HTTP

Quando uma API recebe uma requisição, o servidor devolve um código de estado.

| Código | Significado |
|---|---|
| `200` | Requisição bem-sucedida |
| `201` | Recurso criado |
| `204` | Operação bem-sucedida sem corpo de resposta |
| `400` | Requisição inválida |
| `401` | Autenticação necessária ou inválida |
| `403` | Acesso proibido |
| `404` | Recurso não encontrado |
| `500` | Erro interno do servidor |

### JSON e APIs

O **JSON (JavaScript Object Notation)**, estudado em `05_json.md`, é um dos formatos mais utilizados para a transmissão de dados em APIs.

**Exemplo de resposta JSON:**

```json
{
    "id": 1,
    "nome": "Dani",
    "email": "dani@exemplo.com",
    "ativo": true
}
```

Depois de receber a resposta, o JavaScript pode interpretar os dados e utilizá-los na aplicação.

---

## 2. Formas de Consumir API

Existem diferentes maneiras de realizar requisições HTTP com JavaScript.

As principais são:

- Fetch API.
- Async/Await.
- XMLHttpRequest.
- Bibliotecas externas, como Axios.

### Fetch API

A **Fetch API** é uma interface nativa do JavaScript moderno utilizada para realizar requisições HTTP.

A função `fetch()` devolve uma Promise.

**Exemplo:**

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
        console.log(usuario.email);
    })
    .catch(erro => {
        console.error("Erro:", erro.message);
    });
```

Neste exemplo:

1. `fetch()` realiza uma requisição HTTP.
2. `.then()` recebe a resposta.
3. `resposta.ok` verifica se o estado HTTP indica sucesso.
4. `.json()` interpreta o corpo da resposta.
5. O segundo `.then()` utiliza os dados.
6. `.catch()` trata falhas.

**Importante:** `fetch()` não rejeita automaticamente a Promise quando o servidor devolve respostas como `404` ou `500`. Por isso, devemos verificar `resposta.ok`.

### Fetch API com Async/Await

O **`async/await`**, introduzido no módulo `09_promessas.md`, permite escrever operações assíncronas de forma mais próxima do código sequencial.

```js
async function buscarUsuario() {
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const usuario = await resposta.json();

        console.log(usuario.name);

    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}

buscarUsuario();
```

### Enviando dados com POST

O método `POST` pode ser utilizado para enviar informações a uma API.

```js
async function criarPublicacao() {
    const publicacao = {
        title: "Estudando JavaScript",
        body: "Aprendendo a consumir APIs.",
        userId: 1
    };

    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(publicacao)
            }
        );

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        console.log(dados);

    } catch (erro) {
        console.error(erro.message);
    }
}

criarPublicacao();
```

Neste exemplo:

- `method: "POST"` define o método HTTP.
- `headers` informa o formato do conteúdo enviado.
- `JSON.stringify()` converte o objeto JavaScript numa string JSON.
- `body` contém os dados enviados.

A JSONPlaceholder simula a criação, mas não guarda permanentemente a nova publicação.

### Axios

O **Axios** é uma biblioteca JavaScript utilizada para realizar requisições HTTP.

Oferece funcionalidades como interceptadores e configuração centralizada de requisições.

**Exemplo utilizando Axios já instalado e importado:**

```js
import axios from "axios";

async function buscarUsuarios() {
    try {
        const resposta = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(resposta.data);

    } catch (erro) {
        console.error(erro.message);
    }
}

buscarUsuarios();
```

Diferentemente do `fetch()`, o Axios disponibiliza diretamente os dados interpretados em `resposta.data` para respostas JSON usuais.

### Comparativo

| Característica | Fetch API | Axios |
|---|---|---|
| Nativo do navegador | Sim | Não |
| Necessita instalação | Não | Sim |
| Utiliza Promises | Sim | Sim |
| Suporta Async/Await | Sim | Sim |
| Conversão automática de JSON | Não, usamos `.json()` | Geralmente sim |
| Interceptadores integrados | Não | Sim |

**Boa prática:** para projetos simples e estudos introdutórios, a Fetch API costuma ser suficiente.

---

## 3. Trabalhando com AJAX

### O que é AJAX?

O **AJAX (Asynchronous JavaScript and XML)** é uma técnica que permite realizar requisições ao servidor e atualizar partes de uma página sem a necessidade de recarregar todo o documento.

Apesar do nome mencionar XML, atualmente o JSON é muito utilizado nessas comunicações.

### Funcionamento do AJAX

```text
           PÁGINA WEB
               |
               v
         Ação do utilizador
               |
               v
       Requisição assíncrona
               |
               v
             SERVIDOR
               |
               v
        Resposta JSON
               |
               v
         JAVASCRIPT
               |
               v
       Atualização do DOM
               |
               v
       Página atualizada
       sem recarregamento
```

### AJAX tradicional com XMLHttpRequest

Antes da popularização da Fetch API, era comum utilizar o objeto **`XMLHttpRequest`**.

```js
const requisicao = new XMLHttpRequest();

requisicao.open(
    "GET",
    "https://jsonplaceholder.typicode.com/users/1"
);

requisicao.onload = function() {
    if (requisicao.status >= 200 && requisicao.status < 300) {
        const usuario = JSON.parse(requisicao.responseText);

        console.log(usuario.name);
    } else {
        console.error(`Erro HTTP: ${requisicao.status}`);
    }
};

requisicao.onerror = function() {
    console.error("Falha de rede.");
};

requisicao.send();
```

### Explicação

- `new XMLHttpRequest()` cria o objeto de requisição.
- `open()` configura o método e o endereço.
- `onload` define o tratamento quando a resposta é recebida.
- `status` contém o código HTTP.
- `responseText` contém a resposta textual.
- `JSON.parse()` converte o texto JSON.
- `onerror` trata determinados erros de rede.
- `send()` inicia a requisição.

### AJAX com Fetch API

O mesmo objetivo pode ser alcançado através de `fetch()`.

```js
async function carregarUsuario() {
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!resposta.ok) {
            throw new Error("Falha ao carregar o utilizador.");
        }

        const usuario = await resposta.json();

        document.getElementById("nome").textContent = usuario.name;

    } catch (erro) {
        console.error(erro.message);
    }
}
```

Esse código pressupõe que existe um elemento HTML com `id="nome"`.

### AJAX vs. Fetch API

**AJAX é uma técnica**, enquanto a **Fetch API é uma interface de programação** que pode ser utilizada para implementar requisições assíncronas.

| AJAX | Fetch API |
|---|---|
| Técnica de comunicação assíncrona | Interface nativa de requisições HTTP |
| Pode utilizar XMLHttpRequest | Utiliza Promises |
| Permite atualização parcial da página | Pode ser utilizada para implementar AJAX |
| Não depende exclusivamente de XML | Suporta JSON, texto e outros formatos |

---

## 4. APIs Falsas para Consumo

### O que são Fake APIs?

As **Fake APIs (APIs falsas)** são serviços utilizados para simular endpoints e respostas de aplicações reais.

São úteis para estudar e testar a comunicação entre frontend e backend sem precisar desenvolver um servidor completo.

### Para que servem?

- Aprender a realizar requisições HTTP.
- Testar aplicações frontend.
- Desenvolver protótipos.
- Simular respostas de servidores.
- Praticar a manipulação de JSON.
- Exercitar o tratamento de erros.

### Exemplos de APIs para testes

| API | Finalidade | Website |
|---|---|---|
| JSONPlaceholder | Publicações, utilizadores, comentários e tarefas | https://jsonplaceholder.typicode.com |
| DummyJSON | Produtos, utilizadores e dados fictícios | https://dummyjson.com |
| Fake Store API | Produtos de uma loja fictícia | https://fakestoreapi.com |
| ReqRes | Exemplos e simulações de operações de API | https://reqres.in |

A disponibilidade, os requisitos de autenticação e os limites de utilização podem variar entre os serviços.

### JSONPlaceholder

A **JSONPlaceholder** é uma API REST pública que disponibiliza recursos fictícios para estudo e prototipagem.

Principais endpoints:

| Endpoint | Conteúdo |
|---|---|
| `/posts` | Publicações |
| `/users` | Utilizadores |
| `/comments` | Comentários |
| `/albums` | Álbuns |
| `/photos` | Fotografias |
| `/todos` | Tarefas |

**Exemplo:**

```text
https://jsonplaceholder.typicode.com/posts
```

Devolve uma lista de publicações.

```text
https://jsonplaceholder.typicode.com/posts/1
```

Devolve a publicação com ID `1`.

```text
https://jsonplaceholder.typicode.com/posts?userId=1
```

Consulta publicações associadas ao utilizador com ID `1`.

### Vantagens das Fake APIs

- Não é necessário criar um backend.
- Facilitam a aprendizagem.
- Permitem testar diferentes endpoints.
- São úteis para desenvolver interfaces com dados fictícios.

### Limitações

As Fake APIs não substituem completamente um backend real.

Por exemplo, algumas simulam operações `POST`, `PUT`, `PATCH` e `DELETE`, mas não guardam permanentemente as alterações.

Também podem não reproduzir todas as regras de negócio, autenticação ou validação de uma aplicação real.

---

## 5. Consumo de uma API Falsa

Vamos criar uma página que consulta uma API pública e apresenta uma lista de utilizadores.

Neste exemplo, utilizaremos a **JSONPlaceholder**.

### Estrutura do projeto

```text
consumo-api/
├── index.html
├── style.css
└── script.js
```

### HTML — `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Consumo de API</title>

    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

    <main class="container">
        <h1>Lista de Utilizadores</h1>

        <p>
            Dados obtidos através da API JSONPlaceholder.
        </p>

        <button type="button" id="carregar">
            Carregar utilizadores
        </button>

        <p id="mensagem" role="status"></p>

        <ul id="lista-usuarios"></ul>
    </main>

</body>
</html>
```

### CSS — `style.css`

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 700px;
    margin: 0 auto;
    background-color: white;
    padding: 25px;
    border-radius: 10px;
}

button {
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:disabled {
    opacity: 0.6;
    cursor: wait;
}

#lista-usuarios {
    list-style: none;
    padding: 0;
}

#lista-usuarios li {
    background-color: #eeeeee;
    padding: 15px;
    margin-top: 10px;
    border-radius: 5px;
}

#mensagem {
    font-weight: bold;
}
```

### JavaScript — `script.js`

```js
const botao = document.getElementById("carregar");
const lista = document.getElementById("lista-usuarios");
const mensagem = document.getElementById("mensagem");

const URL_API = "https://jsonplaceholder.typicode.com/users";

/**
 * Consulta a API e apresenta os utilizadores no HTML.
 * @returns {Promise<void>}
 */
async function carregarUsuarios() {
    botao.disabled = true;
    mensagem.textContent = "Carregando utilizadores...";
    lista.replaceChildren();

    try {
        // Realizar a requisição HTTP
        const resposta = await fetch(URL_API);

        // Verificar o estado da resposta
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        // Converter a resposta JSON em dados JavaScript
        const usuarios = await resposta.json();

        if (!Array.isArray(usuarios)) {
            throw new Error("Formato de dados inesperado.");
        }

        // Percorrer os dados recebidos
        usuarios.forEach(usuario => {
            // Criar o elemento de lista
            const item = document.createElement("li");

            // Criar o nome
            const nome = document.createElement("h2");
            nome.textContent = usuario.name;

            // Criar o e-mail
            const email = document.createElement("p");
            email.textContent = `E-mail: ${usuario.email}`;

            // Criar a cidade
            const cidade = document.createElement("p");
            cidade.textContent = `Cidade: ${usuario.address.city}`;

            // Adicionar informações ao item
            item.append(nome, email, cidade);

            // Inserir o item no HTML
            lista.appendChild(item);
        });

        mensagem.textContent = `${usuarios.length} utilizadores carregados.`;

    } catch (erro) {
        console.error(erro);

        mensagem.textContent =
            "Não foi possível carregar os utilizadores.";

    } finally {
        botao.disabled = false;
    }
}

// Executar quando o botão for clicado
botao.addEventListener("click", carregarUsuarios);
```

### Como executar o projeto

1. Abrir a pasta no VS Code.
2. Criar os três ficheiros.
3. Copiar os respetivos códigos.
4. Iniciar um servidor local, por exemplo através da extensão Live Server.
5. Abrir a página no navegador.
6. Clicar em **Carregar utilizadores**.

A aplicação realizará a requisição à API e apresentará os nomes, e-mails e cidades dos utilizadores fictícios.

### Funcionamento do código

```text
         CLICAR NO BOTÃO
                |
                v
        carregarUsuarios()
                |
                v
        fetch(URL_API)
                |
                v
        Verificar resposta
                |
          +-----+-----+
          |           |
          v           v
       SUCESSO       ERRO
          |           |
          v           v
    resposta.json()  catch()
          |           |
          v           v
    Percorrer dados  Mensagem
          |           de erro
          v
     Criar elementos
          |
          v
     Atualizar DOM
          |
          +-----+-----+
                |
                v
             finally
                |
                v
       Reativar botão
```

### Conceitos aplicados

| Conceito | Aplicação |
|---|---|
| `fetch()` | Realizar a requisição |
| `async/await` | Aguardar operações assíncronas |
| `response.ok` | Verificar o sucesso HTTP |
| `response.json()` | Interpretar dados JSON |
| `try...catch` | Tratar falhas |
| `finally` | Reativar o botão |
| `forEach()` | Percorrer utilizadores |
| `createElement()` | Criar elementos HTML |
| `textContent` | Apresentar dados de forma segura |
| `appendChild()` | Inserir elementos no DOM |
| `addEventListener()` | Responder ao clique |

### Como visualizar a requisição no navegador

Podemos utilizar as ferramentas de desenvolvimento para inspecionar a comunicação com a API.

No Google Chrome ou Microsoft Edge:

1. Abrir a página.
2. Pressionar `F12`.
3. Selecionar a aba **Network**.
4. Clicar no botão para carregar os utilizadores.
5. Selecionar a requisição correspondente a `/users`.

É possível consultar informações como:

- URL solicitada.
- Método HTTP.
- Código de estado.
- Cabeçalhos HTTP.
- Corpo da resposta.
- Tempo da requisição.

Essa ferramenta é muito útil para desenvolvimento e testes de software.

---

## 6. Boas Práticas no Consumo de APIs

### Tratar erros

As requisições podem falhar por problemas de rede, indisponibilidade ou respostas inesperadas.

Utilizar `try...catch` e verificar `response.ok`.

### Apresentar estados de carregamento

Informar ao utilizador quando os dados estão a ser carregados.

```js
mensagem.textContent = "Carregando...";
```

### Não expor informações sensíveis

Nunca guardar senhas ou chaves privadas de APIs diretamente no código JavaScript enviado ao navegador.

### Validar os dados recebidos

Mesmo que uma API normalmente devolva determinada estrutura, devemos considerar a possibilidade de dados ausentes ou inválidos.

### Compreender CORS

O **CORS (Cross-Origin Resource Sharing)** é um mecanismo de segurança dos navegadores que controla o acesso de páginas a respostas de servidores de outras origens.

O servidor precisa disponibilizar as permissões adequadas quando são necessárias requisições entre origens diferentes.

### Não utilizar `innerHTML` com dados não confiáveis

Preferir `textContent` para apresentar informações externas como texto.

Isso ajuda a prevenir vulnerabilidades de Cross-Site Scripting (XSS).

### Separar responsabilidades

Em projetos maiores, organizar o código em funções específicas para:

- Consultar a API.
- Validar os dados.
- Manipular os resultados.
- Atualizar a interface.
- Tratar os erros.

---

## 7. Exercícios para Praticar

### Exercício 1 — Primeira requisição

Utilize `fetch()` para consultar:

```text
https://jsonplaceholder.typicode.com/posts/1
```

Apresente o título e o conteúdo da publicação no console.

### Exercício 2 — Async/Await

Reescreva o exercício anterior utilizando uma função `async`.

Utilize `try...catch` para tratar possíveis erros.

### Exercício 3 — Listar publicações

Consulte o endpoint:

```text
https://jsonplaceholder.typicode.com/posts
```

Utilize `slice()` para obter as primeiras cinco publicações e apresente os títulos numa lista HTML.

### Exercício 4 — Consultar utilizador por ID

Crie um campo de entrada que permita informar o ID de um utilizador.

Ao clicar num botão, consulte:

```text
https://jsonplaceholder.typicode.com/users/1
```

Substitua o número `1` pelo ID informado.

### Exercício 5 — Simular criação de publicação

Utilize o método `POST` para enviar um objeto contendo:

- `title`
- `body`
- `userId`

Apresente a resposta devolvida pela API.

### Exercício 6 — Tratamento de erros

Crie uma função que consulte um endpoint inexistente.

Verifique `response.ok` e apresente uma mensagem de erro adequada.

### Exercício 7 — Aplicação completa

Crie uma página que:

1. Consuma uma Fake API.
2. Apresente os dados numa lista.
3. Possua um botão para atualizar os resultados.
4. Mostre uma mensagem durante o carregamento.
5. Trate falhas de comunicação.

---

## Resumo em uma frase

> O consumo de APIs em JavaScript permite que aplicações comuniquem com servidores através de requisições HTTP, utilizando métodos como GET, POST, PUT, PATCH e DELETE, formatos como JSON e tecnologias como AJAX, Fetch API e Async/Await, enquanto APIs falsas, como JSONPlaceholder, permitem praticar a obtenção, o processamento e a apresentação de dados no DOM, incluindo o tratamento de erros e a atualização dinâmica das interfaces.

---

## Conceitos relacionados para estudar a seguir

- **APIs REST** — aprofundar recursos, endpoints e métodos HTTP.

- **Fetch API Avançada** — trabalhar com cabeçalhos, parâmetros e diferentes formatos de resposta.

- **Async/Await e Promises** — compreender a execução e o encadeamento de operações assíncronas.

- **CORS** — estudar a política de mesma origem e permissões entre servidores.

- **Autenticação de APIs** — conhecer tokens, sessões, JWT e OAuth.

- **Postman e Insomnia** — aprender a testar APIs sem depender de uma interface web.

- **Tratamento de Erros HTTP** — compreender códigos de resposta e estratégias de recuperação.

- **Paginação e Filtros** — consultar grandes conjuntos de dados de forma eficiente.

- **Integração Frontend e Backend** — compreender a comunicação entre aplicações JavaScript e servidores.

- **Testes de API** — validar respostas, códigos HTTP, formatos JSON e comportamentos esperados.

---

## Referências para Estudo

- [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN — Requisições de rede com JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JSONPlaceholder — API de Testes](https://jsonplaceholder.typicode.com)
- [JSONPlaceholder — Guia de Utilização](https://jsonplaceholder.typicode.com/guide/)
