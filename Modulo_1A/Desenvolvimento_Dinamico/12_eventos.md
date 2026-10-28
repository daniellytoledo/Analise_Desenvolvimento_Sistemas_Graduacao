
# Eventos em JavaScript

---

## 1. Conceitos e Tipos de Eventos

### O que são eventos?

Um **evento (Event)** é uma ocorrência que pode ser identificada pelo navegador e utilizada pelo JavaScript para executar uma determinada ação.

Os eventos permitem que páginas web respondam às interações dos utilizadores e a alterações no próprio documento.

Exemplos de eventos:

- Clicar num botão.
- Movimentar o mouse.
- Pressionar uma tecla.
- Preencher um formulário.
- Alterar o valor de um campo.
- Carregar uma página.
- Redimensionar a janela.

A utilização de eventos é um dos principais recursos para desenvolver páginas **dinâmicas e interativas**.

### Programação orientada a eventos

Na **programação orientada a eventos (Event-Driven Programming)**, determinadas funções são executadas em resposta a acontecimentos.

O programa não precisa verificar constantemente se um botão foi clicado. Em vez disso, regista uma função que será chamada quando o evento ocorrer.

```text
        UTILIZADOR
            |
            v
       Clica no botão
            |
            v
         EVENTO
          click
            |
            v
      EVENT LISTENER
            |
            v
      Executa função
            |
            v
      Atualiza a página
```

### O que é um Event Listener?

Um **Event Listener** é um mecanismo utilizado para registar uma função que deverá ser executada quando determinado evento ocorrer.

Em JavaScript, utilizamos frequentemente o método:

```js
elemento.addEventListener("evento", funcao);
```

**Exemplo HTML:**

```html
<button id="botao">Clique aqui</button>
```

**Exemplo JavaScript:**

```js
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    console.log("O botão foi clicado!");
});
```

Neste exemplo:

- `getElementById()` seleciona o elemento HTML.
- `addEventListener()` regista o evento.
- `"click"` identifica o tipo de evento.
- A Arrow Function define a ação que será executada.

### Principais categorias de eventos

| Categoria | Exemplos | Utilização |
|---|---|---|
| Mouse | `click`, `mouseover`, `mousemove` | Interações com o ponteiro |
| Teclado | `keydown`, `keyup` | Pressionamento de teclas |
| Botões | `click`, `dblclick` | Ações realizadas através de botões |
| Formulários | `submit`, `input`, `change` | Entrada e envio de dados |
| Foco | `focus`, `blur` | Entrada e saída de campos |
| Documento e janela | `DOMContentLoaded`, `load`, `resize` | Carregamento e alterações da página |

### O objeto `event`

Quando um evento acontece, o JavaScript disponibiliza um objeto com informações sobre a ocorrência.

```js
const botao = document.getElementById("botao");

botao.addEventListener("click", (event) => {
    console.log(event.type);
    console.log(event.target);
});
```

**Propriedades comuns:**

| Propriedade | Descrição |
|---|---|
| `event.type` | Tipo do evento |
| `event.target` | Elemento onde o evento teve origem |
| `event.currentTarget` | Elemento onde o listener está registado |
| `event.timeStamp` | Momento associado à ocorrência do evento |

O objeto `event` também disponibiliza métodos como `preventDefault()` e `stopPropagation()`.

---

## 2. Eventos de Mouse

### O que são eventos de mouse?

Os **Mouse Events** são eventos relacionados com interações realizadas através do mouse ou de dispositivos apontadores.

São frequentemente utilizados para:

- Identificar cliques.
- Destacar elementos.
- Criar menus interativos.
- Implementar funcionalidades de arrastar.
- Identificar movimentos do ponteiro.

### Principais eventos de mouse

| Evento | Descrição |
|---|---|
| `click` | Clique no elemento |
| `dblclick` | Clique duplo |
| `mousedown` | Botão do mouse pressionado |
| `mouseup` | Botão do mouse libertado |
| `mousemove` | Movimento do ponteiro |
| `mouseover` | Ponteiro entra no elemento ou num descendente |
| `mouseout` | Ponteiro sai do elemento ou entra/sai entre descendentes |
| `mouseenter` | Ponteiro entra no elemento |
| `mouseleave` | Ponteiro sai do elemento |

### Evento `click`

O evento `click` é um dos mais utilizados no desenvolvimento web.

**HTML:**

```html
<button id="meuBotao">Clique aqui</button>

<p id="mensagem"></p>
```

**JavaScript:**

```js
const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent = "Botão clicado com sucesso!";
});
```

### Eventos `mouseenter` e `mouseleave`

São utilizados para identificar quando o ponteiro entra ou sai da área de um elemento.

**HTML:**

```html
<div id="caixa">Passe o mouse aqui</div>
```

**CSS:**

```css
#caixa {
    width: 250px;
    padding: 30px;
    background-color: lightgray;
}
```

**JavaScript:**

```js
const caixa = document.getElementById("caixa");

caixa.addEventListener("mouseenter", () => {
    caixa.style.backgroundColor = "lightblue";
});

caixa.addEventListener("mouseleave", () => {
    caixa.style.backgroundColor = "lightgray";
});
```

A cor da caixa é alterada conforme a posição do ponteiro.

Para efeitos exclusivamente visuais, a pseudoclasse CSS `:hover` costuma ser uma alternativa mais simples.

### Evento `mousemove`

O evento `mousemove` é disparado quando o ponteiro se movimenta dentro de um elemento.

```js
document.addEventListener("mousemove", (event) => {
    console.log(`X: ${event.clientX}`);
    console.log(`Y: ${event.clientY}`);
});
```

As propriedades:

- `clientX`: coordenada horizontal relativa à viewport.
- `clientY`: coordenada vertical relativa à viewport.

**Atenção:** `mousemove` pode ser disparado muitas vezes por segundo. Operações pesadas dentro desse listener podem prejudicar o desempenho.

### Mouse vs. Pointer Events

JavaScript também oferece **Pointer Events**, como:

- `pointerdown`
- `pointerup`
- `pointermove`

Esses eventos são úteis quando queremos trabalhar com diferentes dispositivos de entrada, incluindo mouse, toque e caneta digital.

Em aplicações que precisam funcionar tanto em computadores como em telemóveis, os Pointer Events podem ser uma opção mais adequada.

---

## 3. Eventos de Teclado

### O que são eventos de teclado?

Os **Keyboard Events** permitem identificar interações realizadas através do teclado.

São utilizados em:

- Campos de pesquisa.
- Atalhos.
- Jogos.
- Formulários.
- Interfaces acessíveis.
- Navegação por teclado.

### Principais eventos

| Evento | Descrição |
|---|---|
| `keydown` | Uma tecla é pressionada |
| `keyup` | Uma tecla é libertada |

O antigo evento `keypress` está obsoleto e deve ser evitado em novos projetos.

### Evento `keydown`

**HTML:**

```html
<label for="campo">Digite alguma coisa:</label>
<input type="text" id="campo">
```

**JavaScript:**

```js
const campo = document.getElementById("campo");

campo.addEventListener("keydown", (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
});
```

O evento é disparado quando uma tecla é pressionada e pode repetir-se enquanto permanece pressionada.

### Evento `keyup`

```js
const campo = document.getElementById("campo");

campo.addEventListener("keyup", (event) => {
    console.log(`Tecla libertada: ${event.key}`);
});
```

O evento ocorre quando a tecla é libertada.

### Propriedades `key` e `code`

O objeto do evento de teclado possui propriedades importantes.

| Propriedade | Significado |
|---|---|
| `event.key` | Valor da tecla pressionada |
| `event.code` | Identificação física da tecla |
| `event.ctrlKey` | Indica se Ctrl está pressionado |
| `event.shiftKey` | Indica se Shift está pressionado |
| `event.altKey` | Indica se Alt está pressionado |
| `event.repeat` | Indica repetição automática da tecla |

**Exemplo:**

```js
document.addEventListener("keydown", (event) => {
    console.log(event.key);
    console.log(event.code);
});
```

`key` é normalmente utilizado para identificar o significado da tecla, enquanto `code` pode ser útil em aplicações como jogos, nas quais a posição física é importante.

### Exemplo — identificar a tecla Enter

```html
<input type="text" id="pesquisa" placeholder="Pesquisar">
```

```js
const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log(`Pesquisar por: ${pesquisa.value}`);
    }
});
```

### Exemplo — atalhos de teclado

```js
document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();

        console.log("Atalho personalizado de guardar.");
    }
});
```

O método `preventDefault()` impede a ação padrão do navegador quando o evento permite cancelamento.

**Boa prática:** evitar substituir atalhos importantes do navegador ou de tecnologias de acessibilidade sem uma necessidade justificada.

---

## 4. Eventos de Botão

### Como funcionam os eventos em botões?

Os botões HTML são elementos interativos que permitem executar ações.

O evento mais comum é `click`, que pode ser ativado tanto com o mouse como através do teclado, incluindo Enter e Espaço em botões nativos.

### Criando um botão interativo

**HTML:**

```html
<button id="botaoMensagem">Mostrar mensagem</button>

<p id="resultado"></p>
```

**JavaScript:**

```js
const botao = document.getElementById("botaoMensagem");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
    resultado.textContent = "Olá! Bem-vindo ao JavaScript.";
});
```

### Exemplo — contador de cliques

**HTML:**

```html
<button id="incrementar">Adicionar</button>
<button id="decrementar">Remover</button>

<p id="contador">0</p>
```

**JavaScript:**

```js
let valor = 0;

const contador = document.getElementById("contador");

document.getElementById("incrementar").addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});

document.getElementById("decrementar").addEventListener("click", () => {
    valor--;
    contador.textContent = valor;
});
```

Neste exemplo, utilizámos:

- Seleção de elementos DOM.
- Eventos de clique.
- Operadores de incremento e decremento.
- Manipulação do conteúdo HTML.

### Exemplo — alternar uma classe CSS

**HTML:**

```html
<button id="alternarTema">Alternar tema</button>
```

**CSS:**

```css
body {
    background-color: white;
    color: black;
}

body.escuro {
    background-color: #222;
    color: white;
}
```

**JavaScript:**

```js
const botaoTema = document.getElementById("alternarTema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("escuro");
});
```

O método `classList.toggle()` adiciona a classe quando ela não existe e remove quando já está presente.

### Botões em formulários

O atributo `type` determina o comportamento de um botão.

```html
<button type="button">Ação normal</button>

<button type="submit">Enviar formulário</button>

<button type="reset">Limpar formulário</button>
```

| Tipo | Comportamento |
|---|---|
| `button` | Não envia o formulário automaticamente |
| `submit` | Submete o formulário |
| `reset` | Repõe os valores iniciais dos campos |

**Importante:** quando um botão está dentro de um formulário e não possui o atributo `type`, normalmente funciona como `submit`.

Por isso, recomenda-se definir explicitamente o tipo de botão.

### Desativando botões

Podemos utilizar a propriedade `disabled`.

```js
const botao = document.getElementById("botaoMensagem");

botao.disabled = true;
```

Um botão desativado não pode ser ativado normalmente pelo utilizador.

---

## 5. Eventos Gerais

Além dos eventos relacionados com mouse, teclado e botões, existem outros eventos importantes para o desenvolvimento web.

### Evento `input`

O evento **`input`** ocorre quando o valor de um campo é alterado através de uma interação do utilizador.

**HTML:**

```html
<label for="nome">Nome:</label>
<input type="text" id="nome">

<p id="visualizacao"></p>
```

**JavaScript:**

```js
const nome = document.getElementById("nome");
const visualizacao = document.getElementById("visualizacao");

nome.addEventListener("input", () => {
    visualizacao.textContent = nome.value;
});
```

O texto apresentado no parágrafo é atualizado à medida que o utilizador escreve.

### Evento `change`

O evento **`change`** ocorre quando uma alteração de valor é confirmada, de acordo com o comportamento do tipo de campo.

```html
<label for="curso">Escolha o curso:</label>

<select id="curso">
    <option value="ADS">ADS</option>
    <option value="Engenharia">Engenharia</option>
    <option value="Design">Design</option>
</select>
```

```js
const curso = document.getElementById("curso");

curso.addEventListener("change", () => {
    console.log(`Curso selecionado: ${curso.value}`);
});
```

### Evento `submit`

O evento **`submit`** ocorre quando um formulário é submetido.

```html
<form id="formulario">
    <label for="email">E-mail:</label>
    <input type="email" id="email" required>

    <button type="submit">Enviar</button>
</form>
```

```js
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    console.log(`E-mail enviado: ${email}`);
});
```

`preventDefault()` impede o envio tradicional do formulário neste exemplo, permitindo tratar os dados com JavaScript.

### Eventos `focus` e `blur`

Esses eventos estão relacionados com o foco de um elemento.

| Evento | Significado |
|---|---|
| `focus` | Elemento recebe foco |
| `blur` | Elemento perde foco |

**Exemplo:**

```js
const campo = document.getElementById("email");

campo.addEventListener("focus", () => {
    campo.style.borderColor = "blue";
});

campo.addEventListener("blur", () => {
    campo.style.borderColor = "gray";
});
```

Para alterações exclusivamente visuais, também podemos utilizar a pseudoclasse CSS `:focus`.

### Evento `DOMContentLoaded`

O evento **`DOMContentLoaded`** é disparado quando o documento HTML foi completamente analisado e os scripts diferidos relevantes foram executados, sem precisar aguardar todas as imagens e outros recursos externos.

```js
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM preparado para manipulação!");
});
```

É útil quando precisamos garantir que os elementos HTML já estão disponíveis.

Se utilizarmos um script externo com `defer`, normalmente não precisamos adicionar outro listener `DOMContentLoaded` apenas para selecionar elementos do documento.

### Evento `load`

O evento **`load`** da janela ocorre após o carregamento da página e dos recursos que participam desse evento.

```js
window.addEventListener("load", () => {
    console.log("Página carregada!");
});
```

### Evento `resize`

O evento **`resize`** permite identificar alterações no tamanho da janela do navegador.

```js
window.addEventListener("resize", () => {
    console.log(`Largura: ${window.innerWidth}`);
    console.log(`Altura: ${window.innerHeight}`);
});
```

É útil em algumas funcionalidades responsivas. Para adaptar apenas o layout visual, CSS Media Queries normalmente são preferíveis.

### Propagação de Eventos

Os eventos podem percorrer a estrutura do DOM através de diferentes fases.

As principais são:

1. **Capturing:** o evento percorre os ancestrais em direção ao elemento de destino.
2. **Target:** o evento chega ao elemento de destino.
3. **Bubbling:** quando aplicável, o evento propaga-se de volta pelos ancestrais.

```text
             DOCUMENT
                |
                v
               DIV
                |
                v
              BUTTON
                |
             EVENTO
                |
                v
        Propagação pelo DOM
```

### Exemplo de Event Bubbling

**HTML:**

```html
<div id="container">
    <button id="botao">Clique aqui</button>
</div>
```

**JavaScript:**

```js
const container = document.getElementById("container");
const botao = document.getElementById("botao");

container.addEventListener("click", () => {
    console.log("Clique no container");
});

botao.addEventListener("click", () => {
    console.log("Clique no botão");
});
```

Ao clicar no botão, o resultado será:

```text
Clique no botão
Clique no container
```

Isso acontece porque o evento `click` se propaga do botão para o elemento pai.

### `stopPropagation()`

O método **`stopPropagation()`** permite interromper a propagação de um evento para outros elementos na árvore do DOM.

```js
botao.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Clique apenas no botão");
});
```

Deve ser utilizado quando realmente necessário, porque interromper a propagação pode interferir com outros listeners.

### Event Delegation

A **delegação de eventos (Event Delegation)** consiste em registar um listener num elemento pai para tratar eventos originados nos seus descendentes.

É especialmente útil quando os elementos são adicionados dinamicamente.

**HTML:**

```html
<ul id="lista">
    <li><button type="button">HTML</button></li>
    <li><button type="button">CSS</button></li>
    <li><button type="button">JavaScript</button></li>
</ul>
```

**JavaScript:**

```js
const lista = document.getElementById("lista");

lista.addEventListener("click", (event) => {
    const botao = event.target.closest("button");

    if (!botao || !lista.contains(botao)) {
        return;
    }

    console.log(`Selecionado: ${botao.textContent}`);
});
```

Dessa forma, um único listener pode tratar os cliques dos diferentes botões da lista.

---

## 6. Exemplo Prático — Formulário Interativo

Vamos combinar diferentes eventos numa aplicação simples.

### Estrutura do projeto

```text
formulario-interativo/
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
    <title>Formulário Interativo</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

    <main class="container">
        <h1>Formulário Interativo</h1>

        <form id="formulario">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required>

            <button type="submit">Enviar</button>
            <button type="reset">Limpar</button>
        </form>

        <p id="contador">Caracteres no nome: 0</p>
        <p id="mensagem" role="status"></p>
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
    max-width: 500px;
    margin: 0 auto;
    padding: 25px;
    background-color: white;
    border-radius: 10px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input {
    padding: 10px;
    border: 2px solid #cccccc;
    border-radius: 5px;
}

input:focus {
    border-color: #2563eb;
}

button {
    padding: 10px;
    cursor: pointer;
}

#mensagem {
    font-weight: bold;
}
```

### JavaScript — `script.js`

```js
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const contador = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");

// Evento de digitação
campoNome.addEventListener("input", () => {
    const quantidade = campoNome.value.length;

    contador.textContent = `Caracteres no nome: ${quantidade}`;
});

// Evento de alteração do e-mail
campoEmail.addEventListener("change", () => {
    console.log("E-mail alterado:", campoEmail.value);
});

// Evento de envio do formulário
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();

    if (nome === "" || email === "") {
        mensagem.textContent = "Preencha todos os campos.";
        return;
    }

    mensagem.textContent = `Obrigado, ${nome}! Dados recebidos.`;

    console.log({
        nome: nome,
        email: email
    });
});

// Evento de limpeza do formulário
formulario.addEventListener("reset", () => {
    contador.textContent = "Caracteres no nome: 0";
    mensagem.textContent = "";
});
```

### Conceitos aplicados

| Conceito | Utilização |
|---|---|
| `addEventListener()` | Registar eventos |
| `input` | Contar caracteres |
| `change` | Identificar alterações |
| `submit` | Processar formulário |
| `reset` | Atualizar interface após limpeza |
| `preventDefault()` | Impedir envio tradicional |
| `textContent` | Atualizar mensagens |
| `value` | Consultar valores dos campos |
| `trim()` | Remover espaços extras |
| `console.log()` | Visualizar dados |

Neste exemplo, os dados são apenas apresentados no navegador e não são enviados a um servidor.

---

## 7. Boas Práticas na Utilização de Eventos

### Preferir `addEventListener()`

Permite registar vários listeners num mesmo elemento e manter o JavaScript separado do HTML.

### Evitar eventos inline

Em vez de:

```html
<button onclick="mostrarMensagem()">Clique</button>
```

Preferir:

```js
botao.addEventListener("click", mostrarMensagem);
```

### Utilizar elementos HTML adequados

Os elementos `<button>` são preferíveis para ações, pois já possuem comportamentos de interação por teclado e acessibilidade.

### Evitar operações pesadas em eventos frequentes

Eventos como `mousemove`, `scroll` e `resize` podem ocorrer repetidamente.

Quando necessário, podemos aplicar técnicas como **debounce** e **throttle** para limitar a frequência do processamento.

### Remover listeners quando necessário

O método `removeEventListener()` permite remover um listener anteriormente registado, utilizando a mesma referência de função e opções de captura compatíveis.

```js
function mostrarMensagem() {
    console.log("Botão clicado!");
}

botao.addEventListener("click", mostrarMensagem);

botao.removeEventListener("click", mostrarMensagem);
```

### Ter atenção à acessibilidade

Funcionalidades importantes não devem depender exclusivamente do mouse.

Sempre que possível, utilizar elementos HTML nativos que suportem interação pelo teclado.

---

## Resumo em uma frase

> Os eventos em JavaScript permitem criar páginas web interativas através da identificação de ações realizadas pelos utilizadores ou pelo navegador, incluindo eventos de mouse, teclado, botões, formulários e carregamento da página, utilizando `addEventListener()` para executar funções em resposta a essas ocorrências, enquanto recursos como o objeto `event`, `preventDefault()`, propagação de eventos e delegação permitem controlar de forma mais organizada o comportamento dos elementos do DOM.

---

## Conceitos relacionados para estudar a seguir

- **Event Loop** — compreender como o JavaScript organiza a execução de tarefas e callbacks.

- **Event Bubbling e Capturing** — aprofundar as fases de propagação de eventos.

- **Event Delegation** — gerir eventos de vários elementos através de um listener comum.

- **Debounce e Throttle** — controlar a frequência de execução de funções associadas a eventos.

- **Pointer Events** — desenvolver interações compatíveis com mouse, toque e caneta.

- **Formulários Dinâmicos** — validar campos e apresentar feedback em tempo real.

- **Manipulação do DOM** — criar, modificar e remover elementos em resposta a eventos.

- **Acessibilidade Web** — desenvolver componentes interativos compatíveis com teclado e tecnologias de apoio.

- **Fetch API** — executar requisições HTTP em resposta a ações do utilizador.
