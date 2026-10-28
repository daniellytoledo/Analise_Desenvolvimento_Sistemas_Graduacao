
# Elementos DOM em JavaScript

---

## 1. Conceito de DOM

### O que é DOM?

O **DOM (Document Object Model)** é uma interface de programação que representa um documento HTML através de uma estrutura de objetos organizada em árvore.

Quando o navegador carrega uma página HTML, cria uma representação do documento que pode ser consultada e manipulada por JavaScript.

Através do DOM, podemos:

- Aceder aos elementos HTML.
- Modificar textos e conteúdos.
- Alterar estilos CSS.
- Criar novos elementos.
- Adicionar e remover elementos.
- Manipular atributos.
- Responder a eventos dos utilizadores.

### Estrutura do DOM

Considere o seguinte HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Minha Página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Aprendendo DOM com JavaScript.</p>
</body>
</html>
```

O navegador representa os elementos numa estrutura hierárquica:

```text
                  document
                      |
                     html
                    /    \
                 head    body
                  |      /  \
                title   h1   p
                  |      |   |
               Minha   Olá, Aprendendo
               Página  mundo!   DOM
```

Cada elemento da estrutura é representado por um **nó (Node)**.

### O que são nós?

Um nó é uma unidade da estrutura do DOM.

Existem diferentes tipos:

| Tipo de nó | Descrição |
|---|---|
| Document | Representa o documento |
| Element | Representa elementos HTML |
| Text | Representa conteúdo textual |
| Comment | Representa comentários |
| DocumentType | Representa a declaração do tipo de documento |

**Importante:** nem todos os nós são elementos HTML. Um texto dentro de um parágrafo, por exemplo, também é representado por um nó.

### O objeto `document`

O objeto **`document`** é o principal ponto de acesso ao DOM de uma página.

```js
console.log(document);
```

Podemos utilizar as suas propriedades e métodos para consultar e modificar elementos.

```js
console.log(document.title);
console.log(document.body);
```

### DOM e JavaScript

O JavaScript utiliza o DOM para tornar páginas HTML dinâmicas.

**Exemplo HTML:**

```html
<h1 id="titulo">Título original</h1>
```

**Exemplo JavaScript:**

```js
const titulo = document.getElementById("titulo");

titulo.textContent = "Título alterado com JavaScript";
```

O conteúdo do elemento `<h1>` é atualizado sem a necessidade de recarregar a página.

---

## 2. Como Encontrar Elementos no DOM?

Para manipular um elemento HTML, normalmente precisamos primeiro localizá-lo no documento.

JavaScript disponibiliza diferentes métodos de seleção.

### `getElementById()`

O método **`getElementById()`** procura um elemento através do atributo `id`.

**HTML:**

```html
<h1 id="titulo">Minha Página</h1>
```

**JavaScript:**

```js
const titulo = document.getElementById("titulo");

console.log(titulo);
```

O método devolve o elemento encontrado ou `null` quando não existe correspondência.

### `getElementsByClassName()`

O método **`getElementsByClassName()`** seleciona elementos que possuem uma determinada classe.

**HTML:**

```html
<p class="mensagem">Primeira mensagem</p>
<p class="mensagem">Segunda mensagem</p>
```

**JavaScript:**

```js
const mensagens = document.getElementsByClassName("mensagem");

console.log(mensagens);
console.log(mensagens[0].textContent);
```

O resultado é uma **HTMLCollection**, uma coleção semelhante a um array, mas que não possui todos os métodos de arrays.

Essa coleção é atualizada automaticamente quando os elementos correspondentes são adicionados ou removidos.

### `getElementsByTagName()`

O método **`getElementsByTagName()`** seleciona elementos através do nome da tag.

```html
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>
<p>Parágrafo 3</p>
```

```js
const paragrafos = document.getElementsByTagName("p");

console.log(paragrafos.length); // 3
```

Também devolve uma HTMLCollection.

### `querySelector()`

O método **`querySelector()`** seleciona o primeiro elemento que corresponde a um seletor CSS.

```html
<h1 id="titulo">Título</h1>
<p class="descricao">Descrição da página</p>
```

```js
const titulo = document.querySelector("#titulo");
const descricao = document.querySelector(".descricao");

console.log(titulo.textContent);
console.log(descricao.textContent);
```

Seletores comuns:

- `#titulo` — seleciona por ID.
- `.descricao` — seleciona por classe.
- `p` — seleciona pela tag.
- `main p` — seleciona um parágrafo dentro de `main`.

### `querySelectorAll()`

O método **`querySelectorAll()`** seleciona todos os elementos correspondentes a um seletor CSS.

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

```js
const itens = document.querySelectorAll("li");

itens.forEach(item => {
    console.log(item.textContent);
});
```

O método devolve uma **NodeList estática**, ou seja, a seleção não é atualizada automaticamente quando novos elementos são inseridos no documento.

### Comparativo dos métodos de seleção

| Método | Seleciona por | Retorno |
|---|---|---|
| `getElementById()` | ID | Elemento ou `null` |
| `getElementsByClassName()` | Classe | HTMLCollection |
| `getElementsByTagName()` | Tag | HTMLCollection |
| `querySelector()` | Seletor CSS | Primeiro elemento ou `null` |
| `querySelectorAll()` | Seletor CSS | NodeList estática |

### Quando utilizar cada método?

Para selecionar um elemento específico pelo ID, `getElementById()` é simples e direto.

Para seletores CSS mais complexos, `querySelector()` e `querySelectorAll()` oferecem maior flexibilidade.

**Boa prática:** verificar se o elemento existe antes de o manipular, especialmente quando pode não estar presente em todas as páginas.

```js
const titulo = document.querySelector("#titulo");

if (titulo) {
    titulo.textContent = "Novo título";
}
```

---

## 3. Criação de Novos Elementos

Uma das principais funcionalidades do DOM é permitir a criação dinâmica de elementos HTML.

### `createElement()`

O método **`document.createElement()`** cria um novo elemento.

```js
const paragrafo = document.createElement("p");

paragrafo.textContent = "Parágrafo criado com JavaScript";

console.log(paragrafo);
```

Neste momento, o elemento existe em memória, mas ainda não aparece na página.

Para apresentá-lo, precisamos inseri-lo no documento.

### `appendChild()`

O método **`appendChild()`** adiciona um nó como último filho de outro nó.

**HTML:**

```html
<div id="container"></div>
```

**JavaScript:**

```js
const container = document.getElementById("container");

const paragrafo = document.createElement("p");

paragrafo.textContent = "Novo conteúdo";

container.appendChild(paragrafo);
```

O resultado no HTML será equivalente a:

```html
<div id="container">
    <p>Novo conteúdo</p>
</div>
```

### `append()`

O método **`append()`** também permite adicionar conteúdo ao final de um elemento.

Uma diferença é que aceita vários nós ou strings.

```js
const container = document.querySelector("#container");

const titulo = document.createElement("h2");
titulo.textContent = "Novo título";

const paragrafo = document.createElement("p");
paragrafo.textContent = "Descrição do conteúdo.";

container.append(titulo, paragrafo);
```

### `prepend()`

O método **`prepend()`** adiciona elementos ao início do conteúdo de um elemento.

```js
const lista = document.querySelector("#lista");

const item = document.createElement("li");
item.textContent = "Primeiro item";

lista.prepend(item);
```

### `before()` e `after()`

Esses métodos permitem inserir elementos antes ou depois de outro elemento.

```js
const titulo = document.querySelector("#titulo");

const paragrafo = document.createElement("p");
paragrafo.textContent = "Texto inserido depois do título.";

titulo.after(paragrafo);
```

### Exemplo prático — criar uma lista

**HTML:**

```html
<ul id="lista"></ul>

<script src="script.js" defer></script>
```

**JavaScript:**

```js
const tecnologias = ["HTML", "CSS", "JavaScript"];

const lista = document.getElementById("lista");

tecnologias.forEach(tecnologia => {
    const item = document.createElement("li");

    item.textContent = tecnologia;

    lista.appendChild(item);
});
```

O código cria automaticamente três elementos `<li>` dentro da lista.

### Criar elementos com atributos

Também podemos configurar propriedades e atributos antes de inserir um elemento na página.

```js
const link = document.createElement("a");

link.textContent = "Visitar GitHub";
link.href = "https://github.com/";
link.target = "_blank";
link.rel = "noopener noreferrer";

document.body.appendChild(link);
```

---

## 4. Explorando o Uso de Elementos

### 4.1 Manipulação de Estilos e Conteúdo

### Alterando o conteúdo com `textContent`

A propriedade **`textContent`** permite consultar ou modificar o conteúdo textual de um elemento.

**HTML:**

```html
<p id="mensagem">Mensagem original</p>
```

**JavaScript:**

```js
const mensagem = document.getElementById("mensagem");

mensagem.textContent = "Mensagem atualizada!";
```

### Alterando o conteúdo com `innerHTML`

A propriedade **`innerHTML`** permite definir ou consultar conteúdo HTML dentro de um elemento.

```js
const container = document.querySelector("#container");

container.innerHTML = `
    <h2>Bem-vindo!</h2>
    <p>Conteúdo inserido dinamicamente.</p>
`;
```

**Atenção:** não devemos inserir diretamente dados não confiáveis em `innerHTML`, pois isso pode permitir ataques de **Cross-Site Scripting (XSS)**.

Para apresentar textos recebidos de utilizadores, normalmente é mais seguro utilizar `textContent`.

### Alterando estilos com `style`

A propriedade **`style`** permite modificar estilos CSS diretamente.

```html
<h1 id="titulo">Meu Título</h1>
```

```js
const titulo = document.getElementById("titulo");

titulo.style.color = "blue";
titulo.style.backgroundColor = "lightgray";
titulo.style.fontSize = "30px";
```

Observe que propriedades CSS como `background-color` passam a ser escritas como `backgroundColor` em JavaScript.

### Manipulação de classes com `classList`

A propriedade **`classList`** permite adicionar, remover ou alternar classes CSS.

**HTML:**

```html
<p id="mensagem">Mensagem importante</p>
```

**CSS:**

```css
.destaque {
    background-color: yellow;
    font-weight: bold;
}
```

**JavaScript:**

```js
const mensagem = document.getElementById("mensagem");

mensagem.classList.add("destaque");
```

Principais métodos:

| Método | Função |
|---|---|
| `add()` | Adiciona uma classe |
| `remove()` | Remove uma classe |
| `toggle()` | Alterna a presença de uma classe |
| `contains()` | Verifica se possui uma classe |
| `replace()` | Substitui uma classe por outra |

**Exemplo:**

```js
mensagem.classList.remove("destaque");

mensagem.classList.toggle("destaque");

console.log(mensagem.classList.contains("destaque"));
```

Em projetos maiores, é geralmente preferível utilizar classes CSS em vez de modificar muitas propriedades diretamente com `style`.

---

### 4.2 Manipulação de Atributos e Eventos

### Manipulação de atributos

Os atributos HTML podem ser consultados e modificados através de JavaScript.

**HTML:**

```html
<img id="imagem" src="foto1.jpg" alt="Primeira imagem">
```

**JavaScript:**

```js
const imagem = document.getElementById("imagem");

imagem.setAttribute("src", "foto2.jpg");

console.log(imagem.getAttribute("src"));
```

Principais métodos:

| Método | Função |
|---|---|
| `getAttribute()` | Obtém o valor de um atributo |
| `setAttribute()` | Define ou altera um atributo |
| `removeAttribute()` | Remove um atributo |
| `hasAttribute()` | Verifica se o atributo existe |

### Manipulação de eventos

Um **evento (Event)** representa uma ocorrência associada a um elemento ou ao documento.

Exemplos:

- Clique num botão.
- Digitação num campo.
- Envio de formulário.
- Movimento do rato.
- Alteração de um valor.

### `addEventListener()`

O método **`addEventListener()`** permite registar uma função para responder a um evento.

**HTML:**

```html
<button id="botao">Clique aqui</button>

<p id="resultado"></p>
```

**JavaScript:**

```js
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
    resultado.textContent = "Botão clicado!";
});
```

Quando o botão é clicado, a função é executada.

### Principais eventos

| Evento | Quando ocorre |
|---|---|
| `click` | Clique num elemento |
| `input` | Alteração do valor de um campo |
| `change` | Confirmação de alteração do valor |
| `submit` | Envio de formulário |
| `keydown` | Pressionar uma tecla |
| `mouseover` | Entrada do ponteiro sobre um elemento |
| `mouseout` | Saída do ponteiro de um elemento |

### Exemplo — formulário

**HTML:**

```html
<form id="formulario">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" required>

    <button type="submit">Enviar</button>
</form>

<p id="resultado"></p>
```

**JavaScript:**

```js
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const nome = campoNome.value.trim();

    resultado.textContent = `Olá, ${nome}!`;
});
```

O método **`preventDefault()`** impede a ação padrão de envio do formulário neste exemplo.

### O objeto `event`

Quando um evento ocorre, o navegador disponibiliza um objeto com informações sobre ele.

```js
const botao = document.querySelector("#botao");

botao.addEventListener("click", evento => {
    console.log(evento.type);
    console.log(evento.target);
});
```

- `event.type`: identifica o tipo do evento.
- `event.target`: identifica o elemento que originou o evento.

---

### 4.3 Navegação no DOM

A **navegação no DOM (DOM Traversal)** permite percorrer a estrutura do documento através das relações entre elementos.

Podemos aceder a:

- Elemento pai.
- Elementos filhos.
- Elementos irmãos.

### `parentElement`

Permite aceder ao elemento pai.

**HTML:**

```html
<div id="container">
    <p id="texto">Olá!</p>
</div>
```

**JavaScript:**

```js
const texto = document.getElementById("texto");

console.log(texto.parentElement);
```

O resultado será o elemento `<div id="container">`.

### `children`

Permite consultar os elementos filhos diretos.

```js
const container = document.getElementById("container");

console.log(container.children);
```

A propriedade devolve uma HTMLCollection.

### `firstElementChild` e `lastElementChild`

Permitem aceder ao primeiro e ao último elemento filho.

```html
<ul id="lista">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

```js
const lista = document.getElementById("lista");

console.log(lista.firstElementChild.textContent);
// HTML

console.log(lista.lastElementChild.textContent);
// JavaScript
```

### `nextElementSibling` e `previousElementSibling`

Permitem navegar entre elementos irmãos.

```js
const lista = document.getElementById("lista");

const primeiro = lista.firstElementChild;

console.log(primeiro.nextElementSibling.textContent);
// CSS
```

### `closest()`

O método **`closest()`** procura o elemento mais próximo que corresponda a um seletor CSS, começando pelo próprio elemento e seguindo pelos seus ancestrais.

```html
<div class="cartao">
    <button class="remover">Remover</button>
</div>
```

```js
const botao = document.querySelector(".remover");

const cartao = botao.closest(".cartao");

console.log(cartao);
```

É bastante útil quando precisamos encontrar o elemento que contém um botão ou outro controlo.

---

### 4.4 Remoção de Elementos

### Método `remove()`

O método **`remove()`** remove um elemento do DOM.

**HTML:**

```html
<p id="mensagem">Este texto será removido.</p>
```

**JavaScript:**

```js
const mensagem = document.getElementById("mensagem");

mensagem.remove();
```

Após a execução, o parágrafo deixa de fazer parte do documento.

### Método `removeChild()`

O método **`removeChild()`** remove um nó filho de um determinado nó pai.

```html
<ul id="lista">
    <li>HTML</li>
    <li>CSS</li>
</ul>
```

```js
const lista = document.getElementById("lista");

const primeiroItem = lista.firstElementChild;

lista.removeChild(primeiroItem);
```

### Remoção dinâmica com evento

Podemos combinar eventos e remoção de elementos.

**HTML:**

```html
<div id="cartao">
    <p>Conteúdo do cartão</p>
    <button id="remover">Remover cartão</button>
</div>
```

**JavaScript:**

```js
const botaoRemover = document.getElementById("remover");

botaoRemover.addEventListener("click", () => {
    const cartao = document.getElementById("cartao");

    cartao.remove();
});
```

Quando o utilizador clicar no botão, todo o cartão será removido da página.

---

## 5. Exemplo Prático — Lista de Tarefas Dinâmica

Vamos combinar seleção, criação, eventos e remoção de elementos numa aplicação simples.

### Estrutura do projeto

```text
lista-tarefas/
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
    <title>Lista de Tarefas</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

    <main class="container">
        <h1>Minha Lista de Tarefas</h1>

        <form id="formulario">
            <label for="tarefa">Nova tarefa:</label>

            <input
                type="text"
                id="tarefa"
                placeholder="Digite uma tarefa"
                required
            >

            <button type="submit">Adicionar</button>
        </form>

        <ul id="lista"></ul>
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
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    padding: 24px;
    border-radius: 10px;
}

form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

input {
    flex: 1;
    min-width: 180px;
    padding: 10px;
}

button {
    padding: 10px;
    cursor: pointer;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    padding: 10px;
    background-color: #eeeeee;
    border-radius: 5px;
}
```

### JavaScript — `script.js`

```js
const formulario = document.getElementById("formulario");
const campoTarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const texto = campoTarefa.value.trim();

    if (texto === "") {
        return;
    }

    // Criar um novo item
    const item = document.createElement("li");

    // Criar o texto da tarefa
    const descricao = document.createElement("span");
    descricao.textContent = texto;

    // Criar botão para remover
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.type = "button";

    // Adicionar evento ao botão
    botaoRemover.addEventListener("click", () => {
        item.remove();
    });

    // Organizar os elementos
    item.append(descricao, botaoRemover);

    // Adicionar à lista
    lista.appendChild(item);

    // Limpar o campo
    campoTarefa.value = "";
    campoTarefa.focus();
});
```

### Conceitos utilizados

| Conceito | Aplicação |
|---|---|
| `getElementById()` | Selecionar elementos |
| `addEventListener()` | Capturar eventos |
| `preventDefault()` | Impedir envio tradicional |
| `createElement()` | Criar elementos HTML |
| `textContent` | Definir conteúdo textual |
| `append()` | Agrupar elementos |
| `appendChild()` | Inserir o item na lista |
| `remove()` | Excluir tarefas |
| `value` | Ler e alterar o campo |
| `trim()` | Remover espaços desnecessários |

**Nota:** as tarefas existem apenas na página enquanto ela estiver carregada. Para guardar os dados entre visitas, podemos utilizar `localStorage` ou uma base de dados.

---

## 6. Boas Práticas na Manipulação do DOM

### Preferir `textContent` para dados externos

Evitar inserir dados fornecidos por utilizadores diretamente em `innerHTML`.

### Utilizar classes CSS

Para alterações visuais complexas, preferir `classList` em vez de modificar muitas propriedades com `style`.

### Evitar seleções repetidas

Quando um elemento é utilizado várias vezes, podemos guardar a referência numa variável.

```js
const titulo = document.getElementById("titulo");

titulo.textContent = "Novo título";
titulo.classList.add("destaque");
```

### Utilizar `defer` nos scripts externos

```html
<script src="script.js" defer></script>
```

Isso ajuda a garantir que o documento HTML tenha sido analisado antes da execução do script.

### Utilizar eventos de forma organizada

Preferir `addEventListener()` em vez de atributos HTML como `onclick`.

### Criar elementos semanticamente adequados

Para ações, utilizar `<button>`.

Para navegação, utilizar `<a>`.

Para listas, utilizar `<ul>`, `<ol>` e `<li>`.

---

## Resumo em uma frase

> O DOM (Document Object Model) representa os documentos HTML como uma estrutura de objetos que pode ser manipulada por JavaScript, permitindo selecionar elementos através de métodos como `getElementById()` e `querySelector()`, criar novos conteúdos com `createElement()`, modificar textos, estilos e atributos, responder a eventos com `addEventListener()`, navegar entre elementos relacionados e remover componentes dinamicamente, sendo fundamental para desenvolver interfaces web interativas.

---

## Conceitos relacionados para estudar a seguir

- **Eventos JavaScript** — aprofundar os eventos de clique, teclado, formulários e interação.

- **Event Bubbling e Capturing** — compreender como os eventos se propagam na estrutura do DOM.

- **Event Delegation** — aprender a tratar eventos de vários elementos através de um elemento pai.

- **LocalStorage** — armazenar dados no navegador para preservar informações entre visitas.

- **Fetch API** — obter dados de servidores e apresentar os resultados dinamicamente no HTML.

- **Formulários Dinâmicos** — validar campos e apresentar mensagens de erro ou sucesso.

- **Manipulação Segura do DOM** — prevenir vulnerabilidades como XSS.

- **Acessibilidade Web** — garantir que elementos dinâmicos possam ser utilizados através do teclado e de tecnologias de apoio.

- **Web Components** — conhecer uma abordagem nativa para criar componentes reutilizáveis.
