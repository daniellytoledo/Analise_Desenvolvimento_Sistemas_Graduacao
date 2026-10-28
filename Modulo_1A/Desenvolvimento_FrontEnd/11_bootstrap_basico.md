
# Bootstrap Básico — Desenvolvimento Frontend

---

## 1. Introdução ao Bootstrap

### O que é Bootstrap?

O **Bootstrap** é um framework frontend de código aberto que disponibiliza estilos CSS, componentes reutilizáveis e funcionalidades JavaScript para facilitar o desenvolvimento de interfaces web.

O Bootstrap permite criar páginas responsivas sem precisar desenvolver todos os estilos do zero.

Entre os recursos disponibilizados estão:

- Sistema de Grid responsivo.
- Botões personalizados.
- Barras de navegação.
- Formulários estilizados.
- Cartões.
- Alertas.
- Tabelas.
- Modais.
- Menus suspensos.
- Classes utilitárias de espaçamento, cores e alinhamento.

### O que é um framework?

Um **framework** é um conjunto de ferramentas, padrões e estruturas que auxiliam no desenvolvimento de aplicações.

Em vez de criar todos os recursos manualmente, podemos utilizar soluções já disponibilizadas pelo framework.

**Exemplo com CSS tradicional:**

```html
<button class="meu-botao">Enviar</button>
```

```css
.meu-botao {
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
}
```

**Exemplo com Bootstrap:**

```html
<button class="btn btn-primary">Enviar</button>
```

O Bootstrap já disponibiliza as classes `btn` e `btn-primary`, evitando a necessidade de escrever manualmente os estilos básicos.

### Origem do Bootstrap

O Bootstrap surgiu no Twitter em 2010.

Foi desenvolvido inicialmente por **Mark Otto e Jacob Thornton**, com o objetivo de padronizar a aparência e o desenvolvimento de ferramentas internas.

Antes do lançamento público, o projeto era conhecido como **Twitter Blueprint**.

Em **19 de agosto de 2011**, o Bootstrap foi disponibilizado como projeto de código aberto.

A proposta era fornecer componentes e padrões reutilizáveis, facilitando o trabalho de diferentes programadores numa mesma aplicação.

### Evolução do Bootstrap

Ao longo dos anos, o Bootstrap recebeu melhorias importantes.

| Versão | Evolução |
|---|---|
| Bootstrap 1 | Primeira versão pública, lançada em 2011 |
| Bootstrap 2 | Introduziu recursos de responsividade |
| Bootstrap 3 | Adotou a abordagem Mobile First |
| Bootstrap 4 | Passou a utilizar Flexbox no Grid |
| Bootstrap 5 | Removeu a dependência de jQuery e modernizou a estrutura |

### Bootstrap 5

O Bootstrap 5 utiliza recursos modernos de HTML, CSS e JavaScript.

Entre as suas características estão:

- Grid baseado em Flexbox.
- Classes responsivas.
- Componentes reutilizáveis.
- JavaScript sem dependência de jQuery.
- Utilização de propriedades personalizadas CSS.
- Recursos para personalização de temas.
- Suporte a diferentes tamanhos de ecrã.

### O que é Mobile First?

**Mobile First** é uma abordagem de desenvolvimento em que a interface é inicialmente pensada para ecrãs menores.

Depois, o layout é expandido para dispositivos com maior largura disponível.

O Bootstrap utiliza breakpoints para aplicar estilos conforme a largura da viewport.

### Vantagens do Bootstrap

- Rapidez no desenvolvimento.
- Componentes prontos para utilização.
- Sistema de Grid responsivo.
- Consistência visual.
- Documentação extensa.
- Integração com HTML, CSS e JavaScript.
- Facilidade para criar protótipos.

### Desvantagens do Bootstrap

- Pode gerar interfaces visualmente semelhantes quando não existe personalização.
- Inclui estilos e funcionalidades que podem não ser utilizados.
- Exige aprendizagem das classes.
- A personalização avançada pode exigir conhecimentos de CSS e Sass.
- O uso excessivo de classes pode dificultar a leitura do HTML.

### Bootstrap substitui CSS?

Não.

O Bootstrap é construído principalmente com CSS e JavaScript.

Portanto, compreender CSS continua a ser fundamental para:

- Personalizar componentes.
- Criar layouts específicos.
- Corrigir problemas de estilo.
- Compreender responsividade.
- Desenvolver interfaces que não dependam exclusivamente de frameworks.

---

## 2. Configuração no Projeto

### Como utilizar Bootstrap?

Existem diferentes formas de adicionar o Bootstrap a um projeto.

As principais são:

1. CDN.
2. Instalação com npm.
3. Download dos ficheiros compilados.

### Método 1 — Utilizando CDN

Uma **CDN (Content Delivery Network)** disponibiliza ficheiros através de servidores acessíveis pela internet.

Para começar rapidamente, podemos incluir o CSS e o JavaScript do Bootstrap no HTML.

### Estrutura do projeto

```text
meu-projeto/
├── index.html
├── style.css
└── script.js
```

### HTML com Bootstrap

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Meu Projeto Bootstrap</title>

    <!-- CSS do Bootstrap -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
        crossorigin="anonymous"
    >

    <!-- CSS personalizado -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="container py-5">
        <h1 class="text-primary">
            Olá, Bootstrap!
        </h1>

        <p class="lead">
            Meu primeiro projeto utilizando Bootstrap.
        </p>

        <button class="btn btn-primary">
            Clique aqui
        </button>
    </main>

    <!-- JavaScript do Bootstrap -->
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"
    ></script>

    <script src="script.js"></script>
</body>
</html>
```

### Explicação

- O primeiro `<link>` carrega o CSS do Bootstrap.
- O segundo `<link>` carrega os estilos personalizados.
- O atributo `integrity` verifica a integridade do ficheiro externo.
- O atributo `crossorigin` configura o modo de requisição entre origens.
- O ficheiro `bootstrap.bundle.min.js` disponibiliza os componentes interativos e inclui Popper.
- O ficheiro `script.js` pode conter as funcionalidades personalizadas da aplicação.

**Importante:** o JavaScript do Bootstrap não é necessário para todos os componentes. Um botão estilizado, por exemplo, pode utilizar apenas CSS. Modais, dropdowns e outros componentes interativos podem necessitar do JavaScript.

### Por que adicionar o CSS personalizado depois?

O CSS utiliza regras de cascata para determinar quais estilos serão aplicados.

Ao carregar o ficheiro personalizado depois do Bootstrap, podemos sobrescrever determinadas declarações quando as restantes condições da cascata permitem.

**Exemplo:**

```css
.btn-primary {
    background-color: purple;
    border-color: purple;
}
```

Isso permite personalizar a aparência de um componente existente.

Entretanto, em projetos maiores, costuma ser preferível utilizar classes próprias e personalizações organizadas para evitar conflitos.

### Método 2 — Instalação com npm

O Bootstrap também pode ser instalado através do **npm (Node Package Manager)**.

Para isso, é necessário ter Node.js e npm instalados.

**Verificando a instalação:**

```bash
node --version
npm --version
```

**Criando um projeto npm:**

```bash
npm init -y
```

**Instalando Bootstrap:**

```bash
npm install bootstrap@5.3.8
```

O pacote será adicionado às dependências do projeto.

### Estrutura após instalação

```text
meu-projeto/
├── node_modules/
├── package.json
├── package-lock.json
├── index.html
└── style.css
```

O diretório `node_modules` contém as dependências instaladas.

### Utilizando Bootstrap com ferramentas de build

Em projetos que utilizam ferramentas como Vite, podemos importar os estilos e o JavaScript através de módulos.

**Exemplo de JavaScript:**

```js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

Esse código pressupõe um ambiente de desenvolvimento que reconheça importações de módulos e dependências npm.

### Método 3 — Download dos ficheiros

Outra possibilidade é descarregar os ficheiros compilados do Bootstrap.

Depois, podemos armazená-los no projeto.

**Exemplo:**

```text
meu-projeto/
├── index.html
├── css/
│   ├── bootstrap.min.css
│   └── style.css
└── js/
    └── bootstrap.bundle.min.js
```

**HTML:**

```html
<link rel="stylesheet" href="css/bootstrap.min.css">

<link rel="stylesheet" href="css/style.css">
```

**JavaScript:**

```html
<script src="js/bootstrap.bundle.min.js"></script>
```

Essa abordagem permite disponibilizar os ficheiros diretamente a partir do próprio projeto.

### Comparação dos métodos

| Método | Vantagem | Utilização |
|---|---|---|
| CDN | Configuração rápida | Estudos e protótipos |
| npm | Gestão de dependências | Aplicações com ferramentas de build |
| Download | Controlo local dos ficheiros | Projetos estáticos e ambientes específicos |

---

## 3. Sistema de Grid

### O que é o sistema de Grid?

O **Grid do Bootstrap** é um sistema de organização de layouts baseado em linhas e colunas.

Permite distribuir os elementos de forma responsiva, adaptando a disposição conforme o espaço disponível.

O sistema utiliza **12 colunas** como referência.

### Estrutura básica

Os três elementos principais são:

1. `container`
2. `row`
3. `col`

```html
<div class="container">
    <div class="row">
        <div class="col">
            Coluna 1
        </div>

        <div class="col">
            Coluna 2
        </div>
    </div>
</div>
```

### Classe Container

A classe **`container`** cria uma área de conteúdo centralizada, com padding horizontal e largura máxima variável conforme o breakpoint.

```html
<div class="container">
    <h1>Meu conteúdo</h1>
</div>
```

### Tipos de Container

| Classe | Comportamento |
|---|---|
| `.container` | Largura máxima responsiva |
| `.container-fluid` | Ocupa 100% da largura disponível |
| `.container-sm` | Fluido abaixo de `sm`, limitado a partir desse breakpoint |
| `.container-md` | Fluido abaixo de `md`, limitado a partir desse breakpoint |
| `.container-lg` | Fluido abaixo de `lg`, limitado a partir desse breakpoint |

### Classe Row

A classe **`row`** organiza as colunas horizontalmente.

```html
<div class="container">
    <div class="row">

        <div class="col">Primeira</div>

        <div class="col">Segunda</div>

    </div>
</div>
```

O Bootstrap utiliza Flexbox no sistema de Grid.

### Classe Col

A classe **`col`** representa uma coluna.

Quando utilizamos colunas automáticas, o Bootstrap distribui o espaço disponível entre elas.

```html
<div class="container">
    <div class="row">

        <div class="col">HTML</div>
        <div class="col">CSS</div>
        <div class="col">JavaScript</div>

    </div>
</div>
```

As três colunas dividirão igualmente o espaço disponível na linha, quando houver espaço suficiente.

### Sistema de 12 Colunas

O Bootstrap utiliza uma grelha de 12 unidades.

```text
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
```

Podemos combinar diferentes larguras.

**Duas colunas iguais:**

```html
<div class="row">
    <div class="col-6">Coluna A</div>
    <div class="col-6">Coluna B</div>
</div>
```

**Três colunas iguais:**

```html
<div class="row">
    <div class="col-4">Coluna A</div>
    <div class="col-4">Coluna B</div>
    <div class="col-4">Coluna C</div>
</div>
```

**Colunas com larguras diferentes:**

```html
<div class="row">
    <div class="col-8">Conteúdo principal</div>
    <div class="col-4">Barra lateral</div>
</div>
```

### Breakpoints Responsivos

Os **breakpoints** são valores utilizados para modificar o layout conforme a largura da viewport.

O Bootstrap 5.3 disponibiliza seis níveis padrão.

| Breakpoint | Prefixo | Largura mínima |
|---|---|---|
| Extra small | `.col-` | Inferior a 576px como faixa inicial |
| Small | `.col-sm-` | 576px |
| Medium | `.col-md-` | 768px |
| Large | `.col-lg-` | 992px |
| Extra large | `.col-xl-` | 1200px |
| Extra extra large | `.col-xxl-` | 1400px |

### Exemplo responsivo

```html
<div class="container">
    <div class="row">

        <div class="col-12 col-md-6">
            Primeira coluna
        </div>

        <div class="col-12 col-md-6">
            Segunda coluna
        </div>

    </div>
</div>
```

**Comportamento:**

- Em ecrãs menores que 768px, cada coluna ocupa 12 unidades.
- A partir de 768px, cada coluna ocupa 6 unidades.
- As colunas ficam empilhadas em ecrãs menores e lado a lado em ecrãs maiores.

### Exemplo com três cartões

```html
<div class="container my-5">
    <div class="row g-4">

        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">HTML</h5>
                    <p class="card-text">
                        Estrutura das páginas web.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">CSS</h5>
                    <p class="card-text">
                        Estilização e apresentação.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">JavaScript</h5>
                    <p class="card-text">
                        Comportamento e interatividade.
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>
```

### Comportamento do exemplo

| Largura | Layout |
|---|---|
| Menor que 768px | Uma coluna por linha |
| De 768px até 991px | Duas colunas por linha |
| A partir de 992px | Três colunas por linha |

### Espaçamentos no Grid

O Bootstrap utiliza o conceito de **gutter**, que representa o espaçamento entre colunas.

Podemos controlar esses espaços com classes como:

| Classe | Função |
|---|---|
| `g-0` | Remove gutters |
| `g-2` | Aplica espaçamento nos dois eixos |
| `g-3` | Aplica espaçamento nos dois eixos |
| `g-4` | Aplica espaçamento maior |
| `gx-3` | Espaçamento horizontal |
| `gy-3` | Espaçamento vertical |

**Exemplo:**

```html
<div class="row g-3">

    <div class="col-md-6">
        <div class="p-3 bg-light border">Coluna 1</div>
    </div>

    <div class="col-md-6">
        <div class="p-3 bg-light border">Coluna 2</div>
    </div>

</div>
```

### Grid do Bootstrap vs. CSS Grid

Apesar de possuírem nomes semelhantes, são tecnologias diferentes.

| Bootstrap Grid | CSS Grid |
|---|---|
| Sistema fornecido pelo Bootstrap | Recurso nativo do CSS |
| Baseado principalmente em Flexbox | Layout bidimensional nativo |
| Utiliza classes predefinidas | Utiliza propriedades CSS |
| Organização baseada em 12 colunas | Permite grelhas personalizadas |

---

## 4. Componentes do Bootstrap

### O que são componentes?

Os **componentes** são elementos de interface com estilos e comportamentos já definidos pelo Bootstrap.

Permitem construir páginas reutilizando estruturas prontas.

### Principais componentes

| Componente | Utilização |
|---|---|
| Button | Botões |
| Card | Cartões de conteúdo |
| Navbar | Barras de navegação |
| Alert | Mensagens e avisos |
| Modal | Caixas de diálogo |
| Accordion | Conteúdos expansíveis |
| Dropdown | Menus suspensos |
| Carousel | Apresentações de conteúdo |
| Badge | Etiquetas |
| Form Controls | Campos de formulário |
| Table | Tabelas estilizadas |
| Spinner | Indicadores de carregamento |

### 4.1 Buttons

O Bootstrap disponibiliza classes para diferentes estilos de botões.

```html
<button class="btn btn-primary">Primary</button>

<button class="btn btn-secondary">Secondary</button>

<button class="btn btn-success">Success</button>

<button class="btn btn-danger">Danger</button>

<button class="btn btn-warning">Warning</button>

<button class="btn btn-info">Info</button>
```

### Botões com diferentes tamanhos

```html
<button class="btn btn-primary btn-lg">
    Botão grande
</button>

<button class="btn btn-primary btn-sm">
    Botão pequeno
</button>
```

### Botões Outline

```html
<button class="btn btn-outline-primary">
    Botão Outline
</button>
```

Nesse caso, o botão utiliza um estilo de contorno.

### 4.2 Cards

O componente **Card** é utilizado para organizar blocos de conteúdo.

**Exemplo:**

```html
<div class="card" style="max-width: 20rem;">

    <div class="card-body">

        <h5 class="card-title">
            Desenvolvimento Frontend
        </h5>

        <p class="card-text">
            Aprenda HTML, CSS, JavaScript e Bootstrap.
        </p>

        <a href="#" class="btn btn-primary">
            Saber mais
        </a>

    </div>

</div>
```

Classes utilizadas:

- `card` — estrutura principal.
- `card-body` — conteúdo interno.
- `card-title` — título.
- `card-text` — descrição.

### 4.3 Alerts

O componente **Alert** apresenta mensagens de informação, sucesso ou erro.

```html
<div class="alert alert-success" role="alert">
    Cadastro realizado com sucesso!
</div>
```

**Outros exemplos:**

```html
<div class="alert alert-danger" role="alert">
    Ocorreu um erro.
</div>

<div class="alert alert-warning" role="alert">
    Atenção aos dados introduzidos.
</div>

<div class="alert alert-info" role="alert">
    Informação importante.
</div>
```

### 4.4 Navbar

O componente **Navbar** é utilizado para criar barras de navegação.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">

    <div class="container">

        <a class="navbar-brand" href="#">
            Meu Site
        </a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Alternar navegação"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">

            <ul class="navbar-nav ms-auto">

                <li class="nav-item">
                    <a class="nav-link active"
                       aria-current="page"
                       href="#">
                        Início
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#sobre">
                        Sobre
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#contato">
                        Contato
                    </a>
                </li>

            </ul>

        </div>

    </div>

</nav>
```

A Navbar utiliza diferentes classes:

- `navbar` — estrutura principal.
- `navbar-expand-lg` — permite expansão a partir do breakpoint `lg`.
- `navbar-brand` — identificação do site.
- `navbar-toggler` — botão para alternar o menu.
- `navbar-collapse` — área expansível.
- `navbar-nav` — organização dos links.
- `nav-item` — item de navegação.
- `nav-link` — link.

O comportamento de abrir e fechar o menu necessita do JavaScript do Bootstrap.

### 4.5 Formulários

O Bootstrap também disponibiliza classes para estilizar formulários.

```html
<form>
    <div class="mb-3">

        <label for="email" class="form-label">
            E-mail
        </label>

        <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="nome@exemplo.com"
            required
        >

    </div>

    <div class="mb-3">

        <label for="senha" class="form-label">
            Senha
        </label>

        <input
            type="password"
            class="form-control"
            id="senha"
            name="senha"
            required
        >

    </div>

    <button type="submit" class="btn btn-primary">
        Entrar
    </button>
</form>
```

Classes importantes:

| Classe | Função |
|---|---|
| `form-label` | Estiliza labels |
| `form-control` | Estiliza campos de entrada |
| `form-select` | Estiliza listas de seleção |
| `form-check` | Organiza checkboxes e radios |
| `mb-3` | Define margem inferior |

### 4.6 Tables

O Bootstrap oferece estilos prontos para tabelas HTML.

```html
<table class="table table-striped table-hover">

    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Nota</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Ana</td>
            <td>HTML</td>
            <td>9</td>
        </tr>

        <tr>
            <td>Maria</td>
            <td>CSS</td>
            <td>8</td>
        </tr>
    </tbody>

</table>
```

Classes utilizadas:

- `table` — estilos básicos.
- `table-striped` — linhas alternadas.
- `table-hover` — destaque durante hover.

Para permitir rolagem horizontal:

```html
<div class="table-responsive">
    <table class="table">
        <!-- Conteúdo da tabela -->
    </table>
</div>
```

### 4.7 Modal

O componente **Modal** permite apresentar uma caixa de diálogo sobre o conteúdo da página.

**Botão de abertura:**

```html
<button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#meuModal"
>
    Abrir Modal
</button>
```

**Estrutura do Modal:**

```html
<div
    class="modal fade"
    id="meuModal"
    tabindex="-1"
    aria-labelledby="tituloModal"
    aria-hidden="true"
>

    <div class="modal-dialog">

        <div class="modal-content">

            <div class="modal-header">

                <h2 class="modal-title fs-5" id="tituloModal">
                    Exemplo de Modal
                </h2>

                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                ></button>

            </div>

            <div class="modal-body">
                Esta é uma caixa de diálogo do Bootstrap.
            </div>

            <div class="modal-footer">

                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Fechar
                </button>

            </div>

        </div>

    </div>

</div>
```

O componente necessita do JavaScript do Bootstrap.

### 4.8 Accordion

O componente **Accordion** permite apresentar conteúdos expansíveis.

```html
<div class="accordion" id="accordionCursos">

    <div class="accordion-item">

        <h2 class="accordion-header">

            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#conteudoHTML"
                aria-expanded="false"
                aria-controls="conteudoHTML"
            >
                O que é HTML?
            </button>

        </h2>

        <div
            id="conteudoHTML"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionCursos"
        >

            <div class="accordion-body">
                HTML é uma linguagem de marcação
                utilizada para estruturar páginas web.
            </div>

        </div>

    </div>

</div>
```

O Accordion também utiliza JavaScript para controlar a expansão e o fechamento dos conteúdos.

---

## 5. Classes Utilitárias do Bootstrap

### O que são Utilities?

As **classes utilitárias (Utilities)** são classes CSS predefinidas para aplicar estilos rapidamente.

Permitem controlar:

- Margens.
- Padding.
- Cores.
- Tipografia.
- Display.
- Flexbox.
- Bordas.
- Sombras.
- Alinhamentos.

### Espaçamentos

O Bootstrap utiliza abreviações para margens e padding.

| Prefixo | Propriedade |
|---|---|
| `m` | Margin |
| `p` | Padding |
| `mt` | Margin top |
| `mb` | Margin bottom |
| `ms` | Margin start |
| `me` | Margin end |
| `pt` | Padding top |
| `pb` | Padding bottom |
| `px` | Padding horizontal |
| `py` | Padding vertical |

**Exemplos:**

```html
<div class="m-3">
    Margem
</div>

<div class="p-4">
    Padding
</div>

<div class="mt-5">
    Margem superior
</div>

<div class="px-3 py-4">
    Padding horizontal e vertical
</div>
```

Os números utilizam a escala de espaçamento definida pelo Bootstrap, e não representam diretamente valores em pixels.

### Cores

```html
<p class="text-primary">Texto azul</p>

<p class="text-danger">Texto de destaque para erro</p>

<div class="bg-primary text-white p-3">
    Fundo azul
</div>
```

### Alinhamento de texto

```html
<p class="text-start">Texto no início</p>

<p class="text-center">Texto centralizado</p>

<p class="text-end">Texto no final</p>
```

### Display

```html
<div class="d-none">
    Elemento oculto
</div>

<div class="d-block">
    Elemento em bloco
</div>

<div class="d-flex">
    Elemento flexível
</div>
```

### Display responsivo

```html
<div class="d-none d-md-block">
    Conteúdo visível a partir de 768px.
</div>
```

Nesse exemplo, o elemento fica oculto em ecrãs menores e passa a ser apresentado como bloco a partir do breakpoint `md`.

### Flexbox

```html
<div class="d-flex justify-content-center align-items-center">
    Conteúdo centralizado
</div>
```

### Sombras

```html
<div class="shadow-sm p-3">
    Sombra pequena
</div>

<div class="shadow p-3">
    Sombra padrão
</div>

<div class="shadow-lg p-3">
    Sombra maior
</div>
```

### Bordas arredondadas

```html
<div class="rounded p-3">
    Cantos arredondados
</div>

<div class="rounded-pill p-3">
    Arredondamento em formato de cápsula
</div>
```

---

## 6. Exemplo Prático — Landing Page com Bootstrap

Vamos construir uma landing page simples utilizando:

1. Navbar.
2. Container.
3. Grid responsivo.
4. Cards.
5. Botões.
6. Classes utilitárias.
7. CSS personalizado.

### Estrutura do Projeto

```text
landing-page-bootstrap/
├── index.html
└── style.css
```

### HTML — index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Academia Frontend</title>

    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
        crossorigin="anonymous"
    >

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Navbar -->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container">

            <a class="navbar-brand fw-bold" href="#">
                Academia Frontend
            </a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menuPrincipal"
                aria-controls="menuPrincipal"
                aria-expanded="false"
                aria-label="Alternar navegação"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                class="collapse navbar-collapse"
                id="menuPrincipal"
            >

                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="#inicio">
                            Início
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#cursos">
                            Cursos
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#contato">
                            Contato
                        </a>
                    </li>

                </ul>

            </div>

        </div>

    </nav>

    <!-- Apresentação -->

    <header id="inicio" class="hero text-white text-center py-5">

        <div class="container py-4">

            <h1 class="display-5 fw-bold">
                Aprenda Desenvolvimento Frontend
            </h1>

            <p class="lead mt-3">
                Estude HTML, CSS, JavaScript e Bootstrap.
            </p>

            <a href="#cursos" class="btn btn-light btn-lg mt-3">
                Ver Cursos
            </a>

        </div>

    </header>

    <!-- Cursos -->

    <main>

        <section id="cursos" class="container py-5">

            <h2 class="text-center mb-4">
                Nossos Cursos
            </h2>

            <div class="row g-4">

                <!-- HTML -->

                <div class="col-12 col-md-6 col-lg-4">

                    <article class="card h-100 shadow-sm">

                        <div class="card-body d-flex flex-column">

                            <h3 class="card-title h5">
                                HTML
                            </h3>

                            <p class="card-text">
                                Aprenda a estruturar páginas web
                                utilizando HTML semântico.
                            </p>

                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                                class="btn btn-primary mt-auto"
                            >
                                Saiba Mais
                            </a>

                        </div>

                    </article>

                </div>

                <!-- CSS -->

                <div class="col-12 col-md-6 col-lg-4">

                    <article class="card h-100 shadow-sm">

                        <div class="card-body d-flex flex-column">

                            <h3 class="card-title h5">
                                CSS
                            </h3>

                            <p class="card-text">
                                Aprenda a desenvolver layouts
                                e interfaces responsivas.
                            </p>

                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                                class="btn btn-primary mt-auto"
                            >
                                Saiba Mais
                            </a>

                        </div>

                    </article>

                </div>

                <!-- JavaScript -->

                <div class="col-12 col-md-6 col-lg-4">

                    <article class="card h-100 shadow-sm">

                        <div class="card-body d-flex flex-column">

                            <h3 class="card-title h5">
                                JavaScript
                            </h3>

                            <p class="card-text">
                                Desenvolva funcionalidades
                                e interatividade para a web.
                            </p>

                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                                class="btn btn-primary mt-auto"
                            >
                                Saiba Mais
                            </a>

                        </div>

                    </article>

                </div>

            </div>

        </section>

        <!-- Contacto -->

        <section id="contato" class="bg-body-tertiary py-5">

            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-12 col-md-8 col-lg-6">

                        <h2 class="text-center mb-4">
                            Entre em Contacto
                        </h2>

                        <form action="/contacto" method="post">

                            <div class="mb-3">

                                <label
                                    for="nome"
                                    class="form-label"
                                >
                                    Nome
                                </label>

                                <input
                                    type="text"
                                    class="form-control"
                                    id="nome"
                                    name="nome"
                                    required
                                >

                            </div>

                            <div class="mb-3">

                                <label
                                    for="email"
                                    class="form-label"
                                >
                                    E-mail
                                </label>

                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    name="email"
                                    required
                                >

                            </div>

                            <div class="mb-3">

                                <label
                                    for="mensagem"
                                    class="form-label"
                                >
                                    Mensagem
                                </label>

                                <textarea
                                    class="form-control"
                                    id="mensagem"
                                    name="mensagem"
                                    rows="4"
                                    required
                                ></textarea>

                            </div>

                            <button
                                type="submit"
                                class="btn btn-primary w-100"
                            >
                                Enviar Mensagem
                            </button>

                        </form>

                        <p class="text-muted small mt-3">
                            Exemplo demonstrativo: para enviar
                            mensagens, é necessário implementar
                            o endpoint /contacto no backend.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    </main>

    <!-- Rodapé -->

    <footer class="bg-dark text-white text-center py-4">

        <div class="container">

            <p class="mb-0">
                Academia Frontend — Projeto de Estudo
            </p>

        </div>

    </footer>

    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"
    ></script>

</body>
</html>
```

### CSS — style.css

```css
/* Estilos personalizados */

html {
    scroll-behavior: smooth;
}

.hero {
    background: linear-gradient(
        135deg,
        #2563eb,
        #7c3aed
    );
}

.card {
    border-radius: 12px;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);

    box-shadow: 0 10px 25px rgb(0 0 0 / 15%);
}

.btn-primary {
    background-color: #2563eb;
    border-color: #2563eb;
}

.btn-primary:hover {
    background-color: #1d4ed8;
    border-color: #1d4ed8;
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    .card {
        transition: none;
    }
}
```

### Conceitos Aplicados

| Conceito | Aplicação |
|---|---|
| Bootstrap CDN | Importação do framework |
| `container` | Centralização do conteúdo |
| `row` | Organização das linhas |
| `col-12` | Coluna inteira em ecrãs pequenos |
| `col-md-6` | Duas colunas a partir de 768px |
| `col-lg-4` | Três colunas a partir de 992px |
| `g-4` | Espaçamento entre colunas |
| Navbar | Barra de navegação |
| Card | Apresentação dos cursos |
| Button | Links e botões estilizados |
| Form Control | Campos de formulário |
| Utilities | Espaçamento e alinhamento |
| CSS personalizado | Identidade visual |

---

## 7. Boas Práticas ao Utilizar Bootstrap

### Compreender HTML e CSS

O Bootstrap facilita o desenvolvimento, mas não substitui o conhecimento das tecnologias fundamentais.

### Utilizar componentes semânticos

Manter a estrutura HTML adequada, utilizando elementos como:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`

### Utilizar Grid Responsivo

Aproveitar os breakpoints para criar interfaces que funcionem em diferentes dispositivos.

### Evitar personalizações desorganizadas

Criar um ficheiro CSS próprio para manter os estilos personalizados separados do framework.

### Evitar classes desnecessárias

Utilizar apenas as classes necessárias para cada elemento.

### Verificar a acessibilidade

Garantir que componentes interativos possam ser utilizados com teclado e tecnologias de apoio.

### Manter versões consistentes

Evitar combinar ficheiros CSS de uma versão com JavaScript de outra versão incompatível.

### Testar os componentes

Verificar o comportamento em:

- Computadores.
- Tablets.
- Telemóveis.
- Diferentes navegadores.
- Diferentes tamanhos de viewport.

---

## 8. Exercícios para Praticar

### Exercício 1 — Configuração do Bootstrap

Crie um ficheiro HTML e adicione o Bootstrap através de CDN.

Depois, crie um botão utilizando:

```html
<button class="btn btn-primary">
    Meu Primeiro Botão
</button>
```

### Exercício 2 — Sistema de Grid

Crie uma linha com três colunas utilizando:

```html
<div class="row">
    <div class="col-4">Coluna 1</div>
    <div class="col-4">Coluna 2</div>
    <div class="col-4">Coluna 3</div>
</div>
```

### Exercício 3 — Grid Responsivo

Crie três cartões utilizando:

- `col-12`.
- `col-md-6`.
- `col-lg-4`.

Observe o comportamento em diferentes larguras.

### Exercício 4 — Botões

Crie botões com os estilos:

- Primary.
- Secondary.
- Success.
- Danger.
- Warning.

### Exercício 5 — Cards

Crie três cartões contendo:

1. Título.
2. Descrição.
3. Botão.

Utilize `card`, `card-body` e `card-title`.

### Exercício 6 — Formulários

Crie um formulário de login utilizando:

- `form-label`.
- `form-control`.
- `mb-3`.
- `btn`.
- `btn-primary`.

### Exercício 7 — Navbar

Crie uma barra de navegação responsiva com links para:

- Início.
- Sobre.
- Serviços.
- Contacto.

### Exercício 8 — Projeto Completo

Desenvolva uma landing page utilizando Bootstrap.

A página deverá conter:

1. Navbar responsiva.
2. Cabeçalho de apresentação.
3. Três cartões.
4. Secção de serviços.
5. Formulário de contacto.
6. Rodapé.
7. Layout responsivo.
8. Estilos personalizados.

---

## Resumo em uma frase

> O Bootstrap é um framework frontend de código aberto que facilita o desenvolvimento de interfaces responsivas através de estilos e componentes reutilizáveis, permitindo configurar rapidamente projetos por CDN ou npm, organizar layouts com um sistema de Grid de 12 colunas e utilizar componentes como botões, cartões, formulários, tabelas, barras de navegação e modais para construir aplicações web de forma mais rápida, consistente e organizada.

---

## Conceitos Relacionados para Estudar a Seguir

- **Bootstrap Grid** — aprofundar breakpoints e organização de colunas.
- **Bootstrap Utilities** — trabalhar com classes de espaçamento, cores e alinhamento.
- **Bootstrap Components** — explorar componentes avançados.
- **Bootstrap Forms** — criar formulários personalizados.
- **Sass** — compreender a personalização avançada do framework.
- **Responsive Web Design** — desenvolver interfaces adaptáveis.
- **Mobile First** — criar interfaces inicialmente para ecrãs menores.
- **Flexbox** — compreender o funcionamento do Grid.
- **CSS Grid** — conhecer uma alternativa nativa para layouts.
- **JavaScript** — adicionar comportamentos personalizados aos componentes.
- **Acessibilidade Web** — garantir a utilização adequada dos componentes.

---

## Referências para Estudo

- [Bootstrap — Site Oficial](https://getbootstrap.com/)
- [Bootstrap — Introdução](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap — História](https://getbootstrap.com/docs/4.0/about/history/)
- [Bootstrap — Sistema de Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Bootstrap — Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/)
- [Bootstrap — Components](https://getbootstrap.com/docs/5.3/components/alerts/)
- [Bootstrap — Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)
- [Bootstrap — Cards](https://getbootstrap.com/docs/5.3/components/card/)
- [Bootstrap — Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)
- [Bootstrap — Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
- [Bootstrap — Utilities](https://getbootstrap.com/docs/5.3/utilities/api/)
