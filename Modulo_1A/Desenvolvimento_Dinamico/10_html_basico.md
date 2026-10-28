
# HTML Básico

---

## 1. Conceito de HTML

### O que é HTML

O **HTML (HyperText Markup Language)** é uma linguagem de marcação utilizada para estruturar e organizar o conteúdo de páginas web.

O HTML define os elementos que compõem uma página, como:

- Títulos e subtítulos.
- Parágrafos.
- Imagens.
- Links.
- Listas.
- Tabelas.
- Formulários.
- Vídeos e áudios.

Diferentemente do JavaScript, o HTML **não é uma linguagem de programação**, pois não possui, por si só, estruturas de programação como funções, condicionais e laços de repetição.

A sua principal função é descrever a estrutura e o significado do conteúdo.

### HTML, CSS e JavaScript

O desenvolvimento web utiliza três tecnologias fundamentais.

| Tecnologia | Responsabilidade |
|---|---|
| **HTML** | Estrutura e conteúdo |
| **CSS** | Aparência e apresentação visual |
| **JavaScript** | Comportamento e interatividade |

```text
                  PÁGINA WEB
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
         HTML        CSS      JAVASCRIPT
          |           |           |
          v           v           v
       Estrutura    Estilo     Interação
       Conteúdo     Cores      Eventos
       Elementos    Layout     Funções
```

**Exemplo:**

- HTML cria um botão.
- CSS define a cor e o tamanho do botão.
- JavaScript determina o que acontece quando o utilizador clica nele.

### O que são tags HTML

As **tags** são marcações utilizadas para identificar elementos numa página.

Normalmente, um elemento HTML possui uma tag de abertura, um conteúdo e uma tag de fechamento.

```html
<p>Olá, mundo!</p>
```

Neste exemplo:

- `<p>` representa a abertura do elemento de parágrafo.
- `Olá, mundo!` é o conteúdo.
- `</p>` representa o fechamento.

### Tags com e sem fechamento

Alguns elementos possuem abertura e fechamento.

```html
<h1>Meu primeiro título</h1>

<p>Meu primeiro parágrafo.</p>
```

Outros são chamados de **elementos vazios (Void Elements)** e não possuem tag de fechamento.

```html
<img src="imagem.jpg" alt="Descrição da imagem">

<br>

<hr>
```

### O que são atributos

Os **atributos (Attributes)** fornecem informações adicionais sobre os elementos HTML.

São definidos normalmente na tag de abertura.

```html
<a href="https://www.google.com">Visitar Google</a>
```

Neste exemplo:

- `<a>` cria um link.
- `href` identifica o endereço de destino.
- O texto entre as tags é apresentado ao utilizador.

Outro exemplo:

```html
<img src="foto.jpg" alt="Fotografia de uma praia">
```

Os atributos utilizados são:

- `src`: caminho da imagem.
- `alt`: texto alternativo que descreve a imagem.

### HTML Semântico

O **HTML semântico (Semantic HTML)** utiliza elementos que descrevem o significado do conteúdo.

Exemplos:

- `<header>` — cabeçalho.
- `<nav>` — navegação.
- `<main>` — conteúdo principal.
- `<section>` — secção temática.
- `<article>` — conteúdo independente.
- `<footer>` — rodapé.

A utilização de elementos semânticos contribui para:

- Melhor organização do código.
- Acessibilidade.
- Compreensão da estrutura da página.
- Interpretação do conteúdo por mecanismos de pesquisa.

---

## 2. Principais Elementos de um Arquivo HTML

### Estrutura básica do HTML5

Um documento HTML costuma apresentar a seguinte estrutura:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Esta é a minha primeira página HTML.</p>
</body>
</html>
```

Vamos compreender o significado de cada linha.

### `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

Esta declaração informa ao navegador que o documento utiliza o padrão HTML moderno.

A sua principal função é fazer com que o navegador interprete a página no **modo de padrões (Standards Mode)**, evitando comportamentos de compatibilidade com páginas antigas.

O `DOCTYPE` não é uma tag HTML comum.

### `<html lang="pt-BR">`

```html
<html lang="pt-BR">
```

O elemento `<html>` representa a raiz do documento.

Todos os outros elementos HTML principais ficam dentro dele.

O atributo `lang` identifica o idioma do conteúdo.

Exemplos:

```html
<html lang="pt-BR">
```

Português do Brasil.

```html
<html lang="pt-PT">
```

Português de Portugal.

```html
<html lang="en">
```

Inglês.

Definir corretamente o idioma ajuda ferramentas de acessibilidade, como leitores de ecrã, a interpretar o texto.

### `<head>`

```html
<head>
```

O elemento `<head>` contém informações sobre o documento, conhecidas como **metadados**.

Normalmente, essas informações não aparecem diretamente no conteúdo visual da página.

Podem incluir:

- Título da página.
- Codificação de caracteres.
- Configurações de visualização.
- Referências a ficheiros CSS.
- Metadados para mecanismos de pesquisa.

### `<meta charset="UTF-8">`

```html
<meta charset="UTF-8">
```

Define a codificação de caracteres utilizada no documento.

O UTF-8 permite representar corretamente caracteres como:

- `á`, `é`, `í`, `ó`, `ú`.
- `ç`.
- Caracteres de diferentes idiomas.
- Emojis.

Sem uma codificação adequada, alguns caracteres podem ser apresentados incorretamente.

### `<meta name="viewport">`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Esta linha configura a área de visualização da página em dispositivos móveis.

**`width=device-width`**

Indica que a largura da viewport deve corresponder à largura do dispositivo.

**`initial-scale=1.0`**

Define o nível inicial de escala da página.

Essa configuração é importante para o desenvolvimento de layouts responsivos.

Contudo, não torna a página responsiva sozinha: a estrutura HTML e os estilos CSS também precisam de se adaptar aos diferentes tamanhos de ecrã.

### `<title>`

```html
<title>Minha Primeira Página</title>
```

Define o título do documento.

Esse título costuma aparecer:

- Na aba do navegador.
- Nos favoritos.
- Em determinados resultados de mecanismos de pesquisa.

**Importante:** o `<title>` não cria um título visível no conteúdo da página.

Para isso, utilizamos elementos como `<h1>`.

### `</head>`

```html
</head>
```

Encerra a secção de metadados do documento.

### `<body>`

```html
<body>
```

O elemento `<body>` contém o conteúdo principal apresentado ao utilizador.

Dentro dele podemos colocar:

- Textos.
- Imagens.
- Links.
- Botões.
- Formulários.
- Tabelas.
- Vídeos.
- Outros elementos HTML.

### `<h1>`

```html
<h1>Olá, mundo!</h1>
```

Define um título de primeiro nível.

O HTML possui seis níveis de títulos:

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Título de terceiro nível</h3>
<h4>Título de quarto nível</h4>
<h5>Título de quinto nível</h5>
<h6>Título de sexto nível</h6>
```

Os títulos devem ser organizados conforme a hierarquia do conteúdo, e não apenas pelo tamanho visual.

### `<p>`

```html
<p>Esta é a minha primeira página HTML.</p>
```

O elemento `<p>` representa um parágrafo.

É utilizado para apresentar textos organizados em blocos.

### `</body>` e `</html>`

```html
</body>
</html>
```

Essas tags encerram, respetivamente:

- O conteúdo do documento.
- O elemento raiz HTML.

### Resumo da estrutura

| Elemento | Função |
|---|---|
| `<!DOCTYPE html>` | Ativa a interpretação em modo de padrões |
| `<html>` | Elemento raiz |
| `lang` | Identifica o idioma |
| `<head>` | Contém metadados |
| `<meta charset>` | Define a codificação |
| `<meta name="viewport">` | Configura a viewport |
| `<title>` | Define o título do documento |
| `<body>` | Contém o conteúdo apresentado |
| `<h1>` | Título principal |
| `<p>` | Parágrafo |

---

## 3. Criação de uma Página Simples Usando VS Code

### O que é o Visual Studio Code

O **Visual Studio Code (VS Code)** é um editor de código utilizado no desenvolvimento de aplicações.

Permite trabalhar com:

- HTML.
- CSS.
- JavaScript.
- Python.
- PHP.
- Java.
- Outras linguagens.

Possui funcionalidades como:

- Realce de sintaxe.
- Autocompletar.
- Terminal integrado.
- Extensões.
- Integração com Git.
- Organização de projetos.

### Passo 1 — Criar a pasta do projeto

No VS Code, podemos criar uma pasta chamada:

```text
meu-primeiro-site/
```

Dentro dela, criamos o ficheiro:

```text
meu-primeiro-site/
└── index.html
```

O nome `index.html` é frequentemente utilizado para identificar a página inicial de um website.

### Passo 2 — Criar a estrutura HTML

No ficheiro `index.html`, escrevemos:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>

    <h1>Bem-vindo ao meu site!</h1>

    <p>Esta página foi criada utilizando HTML.</p>

</body>
</html>
```

### Atalho Emmet

O VS Code possui suporte ao **Emmet**, uma ferramenta que acelera a escrita de HTML.

Num ficheiro HTML, podemos digitar:

```text
!
```

Depois, selecionar a sugestão de expansão ou pressionar `Tab`, conforme a configuração do editor.

O VS Code gera automaticamente uma estrutura básica de documento HTML.

### Passo 3 — Abrir a página no navegador

Existem diferentes formas de visualizar a página.

**Opção 1 — Abrir diretamente**

Localizar o ficheiro `index.html` e abri-lo com um navegador.

**Opção 2 — Utilizar a extensão Live Server**

A extensão Live Server pode disponibilizar a página através de um servidor local e atualizar a visualização durante o desenvolvimento.

Para utilizar:

1. Abrir a área de extensões do VS Code.
2. Procurar `Live Server`.
3. Instalar uma extensão adequada.
4. Abrir o ficheiro `index.html`.
5. Utilizar a opção disponibilizada pela extensão para iniciar o servidor.

### Passo 4 — Adicionar conteúdo

Podemos acrescentar títulos, parágrafos, listas, imagens e links.

**Exemplo de página simples:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portfólio</title>
</head>
<body>

    <header>
        <h1>Meu Portfólio</h1>
        <p>Estudante de Análise e Desenvolvimento de Sistemas.</p>
    </header>

    <main>
        <section>
            <h2>Sobre mim</h2>

            <p>
                Estou aprendendo desenvolvimento web
                utilizando HTML, CSS e JavaScript.
            </p>
        </section>

        <section>
            <h2>Tecnologias</h2>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
            </ul>
        </section>

        <section>
            <h2>Projetos</h2>

            <p>Conheça alguns dos meus projetos:</p>

            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                Visitar GitHub
            </a>
        </section>
    </main>

    <footer>
        <p>Meu primeiro site em HTML.</p>
    </footer>

</body>
</html>
```

### Explicação dos elementos utilizados

| Elemento | Função |
|---|---|
| `<header>` | Cabeçalho da página ou secção |
| `<main>` | Conteúdo principal |
| `<section>` | Agrupa conteúdos relacionados |
| `<h2>` | Título de segundo nível |
| `<ul>` | Lista não ordenada |
| `<li>` | Item da lista |
| `<a>` | Cria um link |
| `<footer>` | Rodapé |

### Ligando HTML ao CSS

Para adicionar estilos, criamos um ficheiro `style.css`.

Estrutura:

```text
meu-primeiro-site/
├── index.html
└── style.css
```

No `<head>` do HTML, adicionamos:

```html
<link rel="stylesheet" href="style.css">
```

**Exemplo de CSS:**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

h1 {
    color: #2563eb;
}

main {
    max-width: 800px;
    margin: 0 auto;
}
```

### Ligando HTML ao JavaScript

Também podemos adicionar um ficheiro JavaScript.

```text
meu-primeiro-site/
├── index.html
├── style.css
└── script.js
```

No HTML:

```html
<script src="script.js" defer></script>
```

O atributo `defer` permite que um script externo clássico seja executado depois de o HTML ter sido analisado pelo navegador.

**Exemplo de JavaScript:**

```js
console.log("JavaScript ligado ao HTML com sucesso!");
```

Para visualizar a mensagem, podemos abrir as ferramentas de desenvolvimento do navegador (`F12`) e consultar a aba **Console**.

---

## 4. Possibilidades em HTML

O HTML oferece diferentes recursos para estruturar conteúdos e criar interfaces web.

Essas possibilidades podem ser agrupadas em quatro áreas principais.

### 4.1 Apresentação e Estruturação de Conteúdo

O HTML permite organizar informações através de elementos semânticos e estruturais.

**Títulos e parágrafos:**

```html
<h1>Notícias de Tecnologia</h1>

<h2>JavaScript</h2>

<p>
    JavaScript é uma linguagem muito utilizada
    no desenvolvimento web.
</p>
```

**Listas não ordenadas:**

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

**Listas ordenadas:**

```html
<ol>
    <li>Criar o HTML</li>
    <li>Adicionar o CSS</li>
    <li>Implementar o JavaScript</li>
</ol>
```

**Tabelas:**

```html
<table>
    <caption>Alunos e notas</caption>

    <thead>
        <tr>
            <th scope="col">Aluno</th>
            <th scope="col">Nota</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Ana</td>
            <td>8</td>
        </tr>

        <tr>
            <td>Maria</td>
            <td>9</td>
        </tr>
    </tbody>
</table>
```

As tabelas são apropriadas para dados tabulares, não para organizar o layout completo de uma página.

### 4.2 Formulários e Multimídia

O HTML permite criar formulários para recolher informações dos utilizadores.

### Formulários — `<form>`

O elemento `<form>` agrupa campos utilizados para receber dados.

```html
<form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Enviar</button>
</form>
```

**Principais elementos:**

| Elemento | Função |
|---|---|
| `<form>` | Agrupa campos |
| `<label>` | Identifica um campo |
| `<input>` | Recebe dados |
| `<textarea>` | Recebe textos maiores |
| `<select>` | Cria uma lista de seleção |
| `<option>` | Representa uma opção |
| `<button>` | Cria um botão |

O atributo `required` indica que o campo deve ser preenchido antes do envio normal do formulário.

O HTML pode realizar algumas validações nativas, mas validações importantes devem ser confirmadas também no servidor.

### Imagens — `<img>`

O elemento `<img>` permite apresentar imagens.

```html
<img src="imagens/praia.jpg" alt="Praia com mar azul">
```

O atributo `alt` é importante para a acessibilidade e para fornecer uma alternativa textual quando a imagem não está disponível.

### Vídeos — `<video>`

```html
<video controls width="500">
    <source src="video.mp4" type="video/mp4">

    O navegador não suporta este vídeo.
</video>
```

O atributo `controls` disponibiliza os controlos de reprodução do navegador.

### Áudio — `<audio>`

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">

    O navegador não suporta este áudio.
</audio>
```

### 4.3 Estilização e Interatividade

O HTML define a estrutura da página, mas pode ser combinado com CSS e JavaScript para criar experiências mais completas.

### Estilização com CSS

Podemos utilizar CSS para definir:

- Cores.
- Fontes.
- Espaçamentos.
- Bordas.
- Layouts.
- Animações.
- Responsividade.

**Exemplo:**

```html
<button class="botao">Clique aqui</button>
```

```css
.botao {
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
```

### Interatividade com JavaScript

O JavaScript permite responder a eventos realizados pelos utilizadores.

**Exemplo HTML:**

```html
<button id="botao">Clique aqui</button>

<p id="mensagem"></p>

<script src="script.js" defer></script>
```

**Exemplo JavaScript:**

```js
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent = "Botão clicado com sucesso!";
});
```

Neste exemplo:

- `getElementById()` localiza um elemento HTML.
- `addEventListener()` regista um evento.
- `"click"` identifica o evento de clique.
- `textContent` atualiza o texto apresentado.

Essa interação utiliza o **DOM (Document Object Model)**, que representa o documento HTML através de uma estrutura de objetos manipulável por JavaScript.

### 4.4 Acessibilidade e Responsividade

### Acessibilidade Web

A **acessibilidade (Web Accessibility)** procura garantir que páginas e aplicações possam ser utilizadas por pessoas com diferentes necessidades e capacidades.

Boas práticas incluem:

- Utilizar elementos semânticos.
- Fornecer textos alternativos para imagens.
- Associar labels aos campos.
- Organizar títulos hierarquicamente.
- Permitir navegação pelo teclado.
- Garantir contraste adequado.
- Não depender exclusivamente de cores para transmitir informações.

**Exemplo de formulário acessível:**

```html
<label for="senha">Palavra-passe:</label>

<input
    type="password"
    id="senha"
    name="senha"
    required
>
```

A associação entre `label` e `input` facilita a identificação do campo por tecnologias de apoio.

### Responsividade

O **Responsive Web Design** consiste em desenvolver interfaces capazes de se adaptar a diferentes tamanhos de ecrã.

Exemplos:

- Computadores.
- Tablets.
- Telemóveis.

A responsividade depende principalmente de técnicas CSS como:

- Media Queries.
- Flexbox.
- CSS Grid.
- Unidades relativas.
- Imagens flexíveis.

### Exemplo básico de responsividade

**HTML:**

```html
<div class="container">
    <h1>Meu Site Responsivo</h1>

    <p>Este conteúdo adapta-se à largura do ecrã.</p>
</div>
```

**CSS:**

```css
.container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

@media (max-width: 600px) {
    .container {
        padding: 10px;
    }
}
```

Neste exemplo:

- `width: 90%` utiliza uma largura relativa.
- `max-width` limita a largura máxima.
- `margin: 0 auto` centraliza o container horizontalmente.
- `@media` permite alterar os estilos conforme a largura da viewport.

### HTML Semântico e Acessibilidade

| Elemento | Utilização |
|---|---|
| `<header>` | Cabeçalho |
| `<nav>` | Navegação |
| `<main>` | Conteúdo principal |
| `<section>` | Agrupamento temático |
| `<article>` | Conteúdo independente |
| `<aside>` | Conteúdo complementar |
| `<footer>` | Rodapé |
| `<button>` | Ação interativa |
| `<label>` | Identificação de campos |

A utilização adequada desses elementos contribui para a estruturação do documento e para a navegação com tecnologias de apoio.

---

## 5. Exercícios para Praticar

### Exercício 1 — Estrutura HTML

Crie um ficheiro `index.html` contendo:

- `<!DOCTYPE html>`.
- Elemento `<html>` com idioma definido.
- Elemento `<head>`.
- Codificação UTF-8.
- Configuração de viewport.
- Título da página.
- Elemento `<body>`.

### Exercício 2 — Página pessoal

Crie uma página HTML com:

1. Um título principal.
2. Um parágrafo de apresentação.
3. Uma lista de tecnologias estudadas.
4. Um link para o GitHub.
5. Uma imagem com atributo `alt`.

### Exercício 3 — Formulário

Crie um formulário contendo:

- Nome.
- E-mail.
- Palavra-passe.
- Botão de envio.

Utilize corretamente os elementos `<label>` e `<input>`.

### Exercício 4 — HTML Semântico

Crie uma página utilizando:

- `<header>`.
- `<nav>`.
- `<main>`.
- `<section>`.
- `<footer>`.

Organize o conteúdo em diferentes secções.

### Exercício 5 — HTML, CSS e JavaScript

Crie três ficheiros:

```text
projeto/
├── index.html
├── style.css
└── script.js
```

Depois:

1. Crie um botão no HTML.
2. Defina a cor do botão no CSS.
3. Utilize JavaScript para apresentar uma mensagem quando o botão for clicado.

---

## Resumo em uma frase

> O HTML (HyperText Markup Language) é a linguagem de marcação utilizada para estruturar o conteúdo de páginas web através de elementos como títulos, parágrafos, links, imagens, listas e formulários, utilizando uma estrutura básica composta por `<!DOCTYPE html>`, `<html>`, `<head>` e `<body>`, podendo ser desenvolvido no VS Code e combinado com CSS e JavaScript para criar páginas estilizadas, interativas, acessíveis e responsivas.

---

## Conceitos relacionados para estudar a seguir

- **HTML Semântico** — aprofundar o uso de elementos que representam a estrutura e o significado do conteúdo.

- **CSS Básico** — estudar seletores, cores, fontes, margens, espaçamentos e posicionamento.

- **Flexbox e CSS Grid** — aprender a construir layouts modernos e responsivos.

- **Formulários HTML** — compreender diferentes tipos de campos, validações e envio de dados.

- **DOM (Document Object Model)** — estudar como o JavaScript identifica e manipula elementos HTML.

- **Eventos JavaScript** — aprofundar `click`, `submit`, `input` e outros eventos de interação.

- **Acessibilidade Web (WCAG)** — conhecer diretrizes para desenvolver interfaces acessíveis.

- **Responsive Web Design** — criar páginas adaptáveis a computadores, tablets e dispositivos móveis.

- **SEO Básico** — compreender como a estrutura e os metadados HTML contribuem para a interpretação das páginas pelos mecanismos de pesquisa.
