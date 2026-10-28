
# Bootstrap Intermediário — Menus, Textos, Botões e Responsividade

---

## 1. Criação de um Menu

### O que são menus de navegação?

Os **menus de navegação** são componentes que permitem aos utilizadores deslocar-se entre páginas ou secções de um website.

São utilizados em:

- Websites institucionais.
- Lojas virtuais.
- Plataformas de ensino.
- Dashboards administrativos.
- Aplicações web.
- Landing pages.

O Bootstrap disponibiliza componentes e classes que facilitam a criação de menus organizados e responsivos.

### Componente Navbar

A **Navbar** é o principal componente do Bootstrap para criar barras de navegação.

Pode incluir:

- Logótipo ou nome do website.
- Links de navegação.
- Menus suspensos.
- Botões.
- Formulários de pesquisa.
- Menu recolhível em dispositivos móveis.

### Classes principais da Navbar

| Classe | Função |
|---|---|
| `navbar` | Define a barra de navegação |
| `navbar-brand` | Identifica a marca ou website |
| `navbar-nav` | Agrupa os links de navegação |
| `nav-item` | Representa um item do menu |
| `nav-link` | Estiliza os links |
| `navbar-expand-lg` | Expande o menu a partir do breakpoint `lg` |
| `navbar-toggler` | Botão para expandir ou recolher o menu |
| `navbar-collapse` | Área de conteúdo recolhível |
| `collapse` | Ativa a estrutura de recolhimento |
| `ms-auto` | Aplica margem automática no início, ajudando no alinhamento |

### Criando um menu simples

```html
<nav class="navbar bg-body-tertiary">
    <div class="container">

        <a class="navbar-brand" href="#">
            Meu Website
        </a>

        <ul class="navbar-nav flex-row gap-3">

            <li class="nav-item">
                <a class="nav-link" href="#inicio">Início</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#sobre">Sobre</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#contato">Contato</a>
            </li>

        </ul>

    </div>
</nav>
```

Neste exemplo:

- `navbar` cria a estrutura principal.
- `container` limita e centraliza a área de conteúdo.
- `navbar-brand` apresenta a identificação do website.
- `navbar-nav` organiza os links.
- `flex-row` mantém os elementos horizontalmente.
- `gap-3` adiciona espaçamento entre os links.

Este é um exemplo simples, sem recolhimento automático para dispositivos móveis.

### Criando um menu responsivo

Num menu responsivo, os links podem ser apresentados horizontalmente em ecrãs maiores e recolhidos num botão em ecrãs menores.

**Exemplo:**

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">

    <div class="container">

        <a class="navbar-brand fw-bold" href="#">
            Academia Web
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
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="#inicio"
                    >
                        Início
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#cursos">
                        Cursos
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

### Como funciona o menu responsivo?

A classe:

```html
navbar-expand-lg
```

Define que o menu será apresentado expandido a partir do breakpoint `lg`, correspondente a 992px na configuração padrão.

Em larguras inferiores, o conteúdo pode ser recolhido.

O botão utiliza:

```html
data-bs-toggle="collapse"
data-bs-target="#menuPrincipal"
```

Esses atributos indicam ao JavaScript do Bootstrap que deverá expandir ou recolher o elemento cujo ID é `menuPrincipal`.

### Estrutura do funcionamento

```text
               NAVBAR
                 |
        +--------+--------+
        |                 |
        v                 v
   ECRÃ GRANDE       ECRÃ PEQUENO
        |                 |
        v                 v
  Links visíveis     Botão de menu
        |                 |
        |                 v
        |             Utilizador
        |               clica
        |                 |
        |                 v
        |          Menu expandido
        |                 |
        +--------+--------+
                 |
                 v
          Links de navegação
```

### Criando um Dropdown

Um **Dropdown** é um menu suspenso que apresenta opções adicionais.

**Exemplo:**

```html
<div class="dropdown">

    <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    >
        Cursos
    </button>

    <ul class="dropdown-menu">

        <li>
            <a class="dropdown-item" href="#html">HTML</a>
        </li>

        <li>
            <a class="dropdown-item" href="#css">CSS</a>
        </li>

        <li>
            <a class="dropdown-item" href="#javascript">
                JavaScript
            </a>
        </li>

    </ul>

</div>
```

### Classes do Dropdown

| Classe | Função |
|---|---|
| `dropdown` | Contentor do menu |
| `dropdown-toggle` | Identifica o controlo de abertura |
| `dropdown-menu` | Agrupa as opções |
| `dropdown-item` | Estiliza cada opção |
| `dropdown-divider` | Cria uma separação visual |

### Menu fixo no topo

Podemos utilizar:

```html
<nav class="navbar fixed-top bg-body-tertiary">
```

A classe `fixed-top` fixa a barra no topo da viewport.

**Atenção:** uma navbar fixa pode sobrepor-se ao conteúdo da página. Pode ser necessário adicionar espaçamento superior ao conteúdo.

### Navbar Sticky

Outra opção é:

```html
<nav class="navbar sticky-top bg-body-tertiary">
```

A classe `sticky-top` permite que a navegação acompanhe a rolagem, respeitando as regras de posicionamento sticky.

### Boas práticas para menus

- Utilizar a tag semântica `<nav>`.
- Criar nomes de links claros.
- Manter o menu organizado.
- Evitar excesso de opções.
- Garantir navegação por teclado.
- Identificar a página atual com `aria-current`, quando apropriado.
- Testar a abertura e o fechamento no telemóvel.

---

## 2. Criação de Textos

### Tipografia no Bootstrap

O Bootstrap disponibiliza classes utilitárias para personalizar a apresentação dos textos.

Essas classes permitem controlar:

- Tamanho.
- Peso.
- Alinhamento.
- Cor.
- Estilo.
- Transformação.
- Espaçamento.
- Quebra de linhas.

### Hierarquia de títulos

O HTML disponibiliza elementos de título:

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Título de secção</h3>
```

O Bootstrap também permite aplicar a aparência desses títulos através de classes.

```html
<p class="h1">Aparência de H1</p>
<p class="h2">Aparência de H2</p>
<p class="h3">Aparência de H3</p>
<p class="h4">Aparência de H4</p>
<p class="h5">Aparência de H5</p>
<p class="h6">Aparência de H6</p>
```

**Importante:** essas classes alteram a aparência, mas não modificam a semântica do elemento HTML.

Para manter a acessibilidade, devemos continuar a utilizar corretamente os elementos `<h1>` até `<h6>`.

### Display Headings

As classes **Display** criam títulos maiores e visualmente destacados.

```html
<h1 class="display-1">Título Display 1</h1>
<h1 class="display-3">Título Display 3</h1>
<h1 class="display-6">Título Display 6</h1>
```

São frequentemente utilizadas em:

- Landing pages.
- Banners.
- Cabeçalhos.
- Secções principais.

### Classe Lead

A classe **`lead`** destaca um parágrafo em relação ao texto normal.

```html
<p class="lead">
    Aprenda desenvolvimento frontend
    com HTML, CSS, JavaScript e Bootstrap.
</p>
```

É útil para introduções e descrições de destaque.

### Tamanhos de fonte

O Bootstrap disponibiliza classes como:

```html
<p class="fs-1">Fonte maior</p>
<p class="fs-2">Fonte grande</p>
<p class="fs-3">Fonte intermédia</p>
<p class="fs-4">Fonte intermédia</p>
<p class="fs-5">Fonte menor</p>
<p class="fs-6">Fonte padrão da escala</p>
```

Os tamanhos seguem a escala tipográfica definida pelo Bootstrap.

### Peso da fonte

| Classe | Efeito |
|---|---|
| `fw-bold` | Negrito |
| `fw-semibold` | Seminegrito |
| `fw-normal` | Peso normal |
| `fw-light` | Peso leve |
| `fw-lighter` | Mais leve em relação ao elemento pai |
| `fw-bolder` | Mais espesso em relação ao elemento pai |

**Exemplo:**

```html
<p class="fw-bold">Texto em negrito</p>

<p class="fw-semibold">Texto seminegrito</p>

<p class="fw-normal">Texto normal</p>

<p class="fw-light">Texto leve</p>
```

### Alinhamento de textos

O Bootstrap oferece classes para controlar o alinhamento horizontal.

```html
<p class="text-start">Texto no início</p>

<p class="text-center">Texto centralizado</p>

<p class="text-end">Texto no final</p>
```

Também podemos utilizar classes responsivas.

```html
<p class="text-center text-md-start">
    Centralizado em ecrãs pequenos
    e alinhado ao início a partir de 768px.
</p>
```

### Cores de texto

O Bootstrap disponibiliza cores semânticas.

```html
<p class="text-primary">Texto Primary</p>

<p class="text-success">Texto Success</p>

<p class="text-danger">Texto Danger</p>

<p class="text-warning">Texto Warning</p>

<p class="text-info">Texto Info</p>
```

**Atenção:** algumas cores não possuem contraste suficiente sobre determinados fundos. Devemos testar a legibilidade.

### Transformação de texto

```html
<p class="text-uppercase">
    texto em maiúsculas
</p>

<p class="text-lowercase">
    TEXTO EM MINÚSCULAS
</p>

<p class="text-capitalize">
    texto com capitalização
</p>
```

### Texto em itálico

```html
<p class="fst-italic">
    Texto em itálico.
</p>
```

### Decoração de textos

```html
<p class="text-decoration-underline">
    Texto sublinhado.
</p>

<p class="text-decoration-line-through">
    Texto riscado.
</p>

<a href="#" class="text-decoration-none">
    Link sem sublinhado.
</a>
```

### Exemplo prático — Secção de apresentação

```html
<section class="container py-5 text-center">

    <h1 class="display-4 fw-bold text-primary">
        Desenvolvimento Frontend
    </h1>

    <p class="lead mt-3">
        Aprenda a criar interfaces modernas
        utilizando Bootstrap.
    </p>

    <p class="text-body-secondary">
        Conteúdos sobre HTML, CSS,
        JavaScript e responsividade.
    </p>

</section>
```

Classes utilizadas:

- `container` — centraliza a área de conteúdo.
- `py-5` — adiciona espaçamento vertical.
- `text-center` — centraliza o texto.
- `display-4` — define um título de destaque.
- `fw-bold` — aplica negrito.
- `text-primary` — utiliza a cor primária.
- `lead` — destaca o parágrafo.
- `mt-3` — adiciona margem superior.
- `text-body-secondary` — utiliza a cor secundária de texto do tema.

---

## 3. Botões

### Botões no Bootstrap

O Bootstrap disponibiliza estilos prontos para botões através da classe base **`btn`**.

Podemos combinar essa classe com modificadores para alterar:

- Cor.
- Tamanho.
- Borda.
- Estado.
- Alinhamento.

### Estrutura básica

```html
<button type="button" class="btn btn-primary">
    Clique aqui
</button>
```

Nesse exemplo:

- `btn` aplica os estilos gerais.
- `btn-primary` aplica o estilo principal.

### Principais estilos

```html
<button class="btn btn-primary">Primary</button>

<button class="btn btn-secondary">Secondary</button>

<button class="btn btn-success">Success</button>

<button class="btn btn-danger">Danger</button>

<button class="btn btn-warning">Warning</button>

<button class="btn btn-info">Info</button>

<button class="btn btn-light">Light</button>

<button class="btn btn-dark">Dark</button>
```

### Aplicações das cores

| Classe | Utilização comum |
|---|---|
| `btn-primary` | Ação principal |
| `btn-secondary` | Ação secundária |
| `btn-success` | Confirmação ou sucesso |
| `btn-danger` | Ação destrutiva |
| `btn-warning` | Ação que exige atenção |
| `btn-info` | Ação informativa |
| `btn-light` | Interface com aparência clara |
| `btn-dark` | Interface com aparência escura |

As cores não substituem textos e identificações claras para comunicar o significado das ações.

### Botões Outline

As variantes **Outline** apresentam um estilo de contorno.

```html
<button class="btn btn-outline-primary">
    Primary Outline
</button>

<button class="btn btn-outline-success">
    Success Outline
</button>

<button class="btn btn-outline-danger">
    Danger Outline
</button>
```

### Tamanhos de botões

```html
<button class="btn btn-primary btn-lg">
    Botão grande
</button>

<button class="btn btn-primary">
    Botão normal
</button>

<button class="btn btn-primary btn-sm">
    Botão pequeno
</button>
```

### Botões de largura total

Podemos utilizar classes utilitárias:

```html
<button class="btn btn-primary w-100">
    Continuar
</button>
```

A classe `w-100` define uma largura de 100% em relação ao contentor.

### Agrupando botões

O Bootstrap disponibiliza o componente **Button Group**.

```html
<div class="btn-group" role="group" aria-label="Opções de visualização">

    <button type="button" class="btn btn-outline-primary">
        Lista
    </button>

    <button type="button" class="btn btn-outline-primary">
        Grelha
    </button>

    <button type="button" class="btn btn-outline-primary">
        Tabela
    </button>

</div>
```

Este exemplo apresenta os botões agrupados visualmente. Para alternar efetivamente modos de visualização, seria necessário adicionar lógica JavaScript.

### Botões desativados

```html
<button class="btn btn-primary" disabled>
    Indisponível
</button>
```

O atributo `disabled` impede a interação normal com o botão.

### Diferença entre Button e Link

**Botão:**

```html
<button type="button" class="btn btn-primary">
    Abrir opções
</button>
```

É utilizado para executar uma ação.

**Link:**

```html
<a href="cursos.html" class="btn btn-primary">
    Ver cursos
</a>
```

É utilizado para navegar até outra página ou secção.

**Boa prática:** escolher o elemento HTML com base na sua função, mesmo quando ambos possuem aparência de botão.

### Botões em formulários

Os tipos de botões continuam a funcionar normalmente com Bootstrap.

```html
<form>

    <button type="submit" class="btn btn-success">
        Enviar
    </button>

    <button type="reset" class="btn btn-secondary">
        Limpar
    </button>

    <button type="button" class="btn btn-info">
        Ajuda
    </button>

</form>
```

| Tipo | Função |
|---|---|
| `submit` | Submete o formulário |
| `reset` | Restaura os valores iniciais |
| `button` | Permite ações personalizadas |

### Personalizando botões com CSS

Podemos alterar estilos através de classes próprias.

**HTML:**

```html
<button class="btn btn-primary botao-personalizado">
    Começar agora
</button>
```

**CSS:**

```css
.botao-personalizado {
    border-radius: 30px;
    padding: 12px 28px;
    font-weight: bold;

    transition: transform 0.3s ease;
}

.botao-personalizado:hover {
    transform: translateY(-3px);
}
```

### Boas práticas para botões

- Utilizar textos descritivos.
- Destacar a ação principal.
- Manter tamanhos adequados para interação.
- Garantir contraste.
- Evitar muitos botões principais na mesma área.
- Distinguir ações destrutivas.
- Manter estados de foco visíveis.
- Não depender apenas de efeitos hover.

---

## 4. Responsividade

### O que é design responsivo?

O **Responsive Web Design** consiste em desenvolver interfaces que se adaptam a diferentes tamanhos de ecrã e condições de apresentação.

Uma página responsiva deve funcionar adequadamente em:

- Telemóveis.
- Tablets.
- Computadores.
- Ecrãs maiores.

O Bootstrap utiliza uma abordagem **Mobile First**, aplicando estilos básicos para ecrãs menores e acrescentando adaptações para larguras superiores.

### Breakpoints do Bootstrap 5.3

| Breakpoint | Prefixo | Largura mínima |
|---|---|---|
| Extra small | Sem prefixo | A partir de 0px |
| Small | `sm` | 576px |
| Medium | `md` | 768px |
| Large | `lg` | 992px |
| Extra large | `xl` | 1200px |
| Extra extra large | `xxl` | 1400px |

### Exemplo de Grid responsivo

```html
<div class="container">

    <div class="row g-3">

        <div class="col-12 col-md-6 col-lg-4">
            <div class="p-3 border bg-light">
                Primeiro cartão
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
            <div class="p-3 border bg-light">
                Segundo cartão
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
            <div class="p-3 border bg-light">
                Terceiro cartão
            </div>
        </div>

    </div>

</div>
```

### Como funciona?

```text
TELEMÓVEL (< 768px)

+------------------+
|     Cartão 1     |
+------------------+
|     Cartão 2     |
+------------------+
|     Cartão 3     |
+------------------+


TABLET (768px até 991px)

+----------+----------+
| Cartão 1 | Cartão 2 |
+----------+----------+
| Cartão 3 |
+----------+


COMPUTADOR (>= 992px)

+----------+----------+----------+
| Cartão 1 | Cartão 2 | Cartão 3 |
+----------+----------+----------+
```

### Classes responsivas

Podemos combinar classes diferentes para cada breakpoint.

```html
<div class="col-12 col-sm-6 col-lg-3">
    Conteúdo
</div>
```

Isso significa:

- Ecrãs extra pequenos: 12 colunas.
- A partir de 576px: 6 colunas.
- A partir de 992px: 3 colunas.

### Esconder e mostrar elementos

O Bootstrap permite controlar a apresentação conforme a largura da viewport.

```html
<div class="d-none d-md-block">
    Conteúdo visível a partir de 768px.
</div>
```

Outro exemplo:

```html
<div class="d-block d-md-none">
    Conteúdo visível apenas abaixo de 768px.
</div>
```

**Atenção:** ocultar conteúdo em certos tamanhos de ecrã pode tornar informações importantes inacessíveis. Deve ser utilizado com cuidado.

### Flexbox responsivo

Podemos modificar a direção dos elementos conforme o breakpoint.

```html
<div class="d-flex flex-column flex-md-row gap-3">

    <div class="p-3 bg-primary text-white">
        Item 1
    </div>

    <div class="p-3 bg-secondary text-white">
        Item 2
    </div>

</div>
```

Nesse exemplo:

- Em ecrãs menores, os elementos ficam empilhados.
- A partir de `md`, ficam lado a lado.

### Alinhamento responsivo

```html
<div class="text-center text-lg-start">
    Texto responsivo
</div>
```

O conteúdo fica centralizado em larguras menores e alinhado ao início a partir do breakpoint `lg`.

### Imagens responsivas

A classe **`img-fluid`** permite que a imagem se adapte à largura disponível.

```html
<img
    src="imagem.jpg"
    class="img-fluid rounded"
    alt="Paisagem natural"
>
```

A classe `img-fluid` aplica essencialmente:

```css
max-width: 100%;
height: auto;
```

A imagem pode diminuir para caber no contentor sem perder a proporção.

### Tabelas responsivas

```html
<div class="table-responsive">

    <table class="table">

        <thead>
            <tr>
                <th scope="col">Produto</th>
                <th scope="col">Categoria</th>
                <th scope="col">Preço</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Notebook</td>
                <td>Informática</td>
                <td>800€</td>
            </tr>
        </tbody>

    </table>

</div>
```

A classe `table-responsive` permite rolagem horizontal quando necessário.

### Container vs. Container Fluid

**Container:**

```html
<div class="container">
    Conteúdo centralizado com larguras máximas responsivas.
</div>
```

**Container Fluid:**

```html
<div class="container-fluid">
    Conteúdo que ocupa a largura disponível.
</div>
```

### Bootstrap e Media Queries

O Bootstrap não impede a utilização de Media Queries personalizadas.

**Exemplo:**

```css
.titulo-principal {
    font-size: 2rem;
}

@media (min-width: 768px) {
    .titulo-principal {
        font-size: 3rem;
    }
}
```

Podemos combinar classes Bootstrap com CSS personalizado sempre que necessário.

### Testando a responsividade

Os navegadores disponibilizam ferramentas de desenvolvimento para simular diferentes larguras de viewport.

No Chrome, por exemplo:

1. Abrir as DevTools.
2. Ativar a visualização de dispositivos.
3. Selecionar diferentes dimensões.
4. Verificar o comportamento dos elementos.
5. Identificar problemas de rolagem, alinhamento e sobreposição.

---

## 5. Exemplo Prático — Landing Page com Bootstrap Intermediário

Vamos criar uma página de divulgação de cursos utilizando os recursos estudados.

### Funcionalidades

A página terá:

- Menu responsivo.
- Textos formatados com Bootstrap.
- Botões estilizados.
- Cards responsivos.
- Secção de apresentação.
- Formulário de contacto.
- Rodapé.

### Estrutura do projeto

```text
bootstrap-intermediario/
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

    <title>Academia Digital</title>

    <!-- Bootstrap CSS -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet"
    >

    <!-- CSS personalizado -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- MENU -->

    <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">

        <div class="container">

            <a class="navbar-brand fw-bold text-primary" href="#inicio">
                Academia Digital
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

            <div class="collapse navbar-collapse" id="menuPrincipal">

                <ul class="navbar-nav ms-auto gap-lg-3">

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

    <!-- APRESENTAÇÃO -->

    <header id="inicio" class="hero text-white py-5">

        <div class="container py-5">

            <div class="row align-items-center g-4">

                <div class="col-12 col-lg-7">

                    <h1 class="display-4 fw-bold">
                        Aprenda Desenvolvimento Web
                    </h1>

                    <p class="lead mt-4">
                        Desenvolva competências em HTML, CSS,
                        JavaScript e Bootstrap.
                    </p>

                    <div class="d-flex flex-wrap gap-3 mt-4">

                        <a
                            href="#cursos"
                            class="btn btn-light btn-lg"
                        >
                            Explorar Cursos
                        </a>

                        <a
                            href="#sobre"
                            class="btn btn-outline-light btn-lg"
                        >
                            Saber Mais
                        </a>

                    </div>

                </div>

                <div class="col-12 col-lg-5 text-center">

                    <div class="painel-destaque p-4 rounded-4">

                        <h2 class="h3 fw-bold">
                            Formação Frontend
                        </h2>

                        <p class="mb-0">
                            Conteúdos práticos para desenvolver
                            interfaces web modernas.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </header>

    <!-- CURSOS -->

    <main>

        <section id="cursos" class="container py-5">

            <div class="text-center mb-5">

                <h2 class="display-6 fw-bold">
                    Cursos Disponíveis
                </h2>

                <p class="lead text-body-secondary">
                    Escolha uma tecnologia para começar.
                </p>

            </div>

            <div class="row g-4">

                <!-- HTML -->

                <div class="col-12 col-md-6 col-lg-4">

                    <article class="card h-100 shadow-sm">

                        <div class="card-body d-flex flex-column">

                            <h3 class="card-title h4 text-primary">
                                HTML
                            </h3>

                            <p class="card-text">
                                Aprenda a criar a estrutura
                                de páginas web semânticas.
                            </p>

                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                                class="btn btn-primary mt-auto"
                            >
                                Estudar HTML
                            </a>

                        </div>

                    </article>

                </div>

                <!-- CSS -->

                <div class="col-12 col-md-6 col-lg-4">

                    <article class="card h-100 shadow-sm">

                        <div class="card-body d-flex flex-column">

                            <h3 class="card-title h4 text-primary">
                                CSS
                            </h3>

                            <p class="card-text">
                                Desenvolva layouts, estilizações
                                e interfaces responsivas.
                            </p>

                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                                class="btn btn-primary mt-auto"
                            >
                                Estudar CSS
                            </a>

                        </div>

                    </article>

                </div>

                <!-- JavaScript -->

                <div class="col-12 col-md-6 col-lg-4">

                    <article class="card h-100 shadow-sm">

                        <div class="card-body d-flex flex-column">

                            <h3 class="card-title h4 text-primary">
                                JavaScript
                            </h3>

                            <p class="card-text">
                                Adicione comportamento, eventos
                                e interatividade às aplicações.
                            </p>

                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                                class="btn btn-primary mt-auto"
                            >
                                Estudar JavaScript
                            </a>

                        </div>

                    </article>

                </div>

            </div>

        </section>

        <!-- SOBRE -->

        <section id="sobre" class="bg-body-tertiary py-5">

            <div class="container">

                <div class="row align-items-center g-4">

                    <div class="col-12 col-lg-6">

                        <h2 class="fw-bold">
                            Por que aprender Bootstrap?
                        </h2>

                        <p class="lead">
                            Bootstrap facilita a criação
                            de interfaces responsivas.
                        </p>

                        <p>
                            O framework disponibiliza componentes
                            e utilitários que aceleram o
                            desenvolvimento frontend.
                        </p>

                        <a
                            href="https://getbootstrap.com/"
                            class="btn btn-outline-primary"
                        >
                            Conhecer Bootstrap
                        </a>

                    </div>

                    <div class="col-12 col-lg-6">

                        <ul class="list-group">

                            <li class="list-group-item">
                                Sistema de Grid responsivo
                            </li>

                            <li class="list-group-item">
                                Componentes reutilizáveis
                            </li>

                            <li class="list-group-item">
                                Classes utilitárias
                            </li>

                            <li class="list-group-item">
                                Integração com HTML e JavaScript
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>

        <!-- CONTATO -->

        <section id="contato" class="container py-5">

            <div class="row justify-content-center">

                <div class="col-12 col-md-8 col-lg-6">

                    <h2 class="text-center fw-bold mb-4">
                        Entre em Contato
                    </h2>

                    <form id="formularioContato">

                        <div class="mb-3">

                            <label for="nome" class="form-label">
                                Nome
                            </label>

                            <input
                                type="text"
                                class="form-control"
                                id="nome"
                                name="nome"
                                placeholder="Digite o seu nome"
                                required
                            >

                        </div>

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

                            <label for="mensagem" class="form-label">
                                Mensagem
                            </label>

                            <textarea
                                class="form-control"
                                id="mensagem"
                                name="mensagem"
                                rows="4"
                                placeholder="Escreva a sua mensagem"
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

                    <p
                        id="resultadoContato"
                        class="mt-3"
                        role="status"
                    ></p>

                </div>

            </div>

        </section>

    </main>

    <!-- RODAPÉ -->

    <footer class="bg-dark text-white text-center py-4">

        <div class="container">

            <p class="mb-0">
                Academia Digital — Projeto Académico
            </p>

        </div>

    </footer>

    <!-- Bootstrap JavaScript -->
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    ></script>

    <!-- JavaScript do formulário demonstrativo -->
    <script>
        const formulario = document.getElementById(
            "formularioContato"
        );

        const resultado = document.getElementById(
            "resultadoContato"
        );

        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            resultado.textContent =
                "Formulário validado! Exemplo sem envio ao servidor.";

            formulario.reset();
        });
    </script>

</body>
</html>
```

### CSS — style.css

```css
/* Configurações gerais */

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
}

/* Apresentação */

.hero {
    background: linear-gradient(
        135deg,
        #2563eb,
        #7c3aed
    );
}

/* Painel de destaque */

.painel-destaque {
    background-color: rgb(255 255 255 / 15%);
    border: 1px solid rgb(255 255 255 / 25%);
}

/* Cartões */

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

/* Botões */

.btn {
    border-radius: 8px;
}

/* Formulário */

.form-control {
    padding: 12px;
}

/* Ajustes para ecrãs pequenos */

@media (max-width: 576px) {
    .hero {
        text-align: center;
    }

    .hero .btn {
        width: 100%;
    }
}

/* Acessibilidade */

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    .card {
        transition: none;
    }
}
```

### Conceitos aplicados no projeto

| Conceito | Aplicação |
|---|---|
| `navbar` | Menu de navegação |
| `navbar-expand-lg` | Menu responsivo |
| `navbar-toggler` | Botão de menu móvel |
| `display-4` | Título destacado |
| `lead` | Parágrafo de destaque |
| `fw-bold` | Texto em negrito |
| `text-center` | Alinhamento centralizado |
| `btn` | Botões estilizados |
| `btn-outline-light` | Botão com contorno |
| `container` | Área centralizada |
| `row` | Organização das linhas |
| `col-12` | Ocupa a largura da linha em ecrãs pequenos |
| `col-md-6` | Duas colunas a partir de `md` |
| `col-lg-4` | Três colunas a partir de `lg` |
| `g-4` | Espaçamento entre colunas |
| `form-control` | Campos estilizados |
| `w-100` | Largura de 100% |
| Media Queries | Personalização responsiva |

### Resultado esperado

A página apresenta:

1. Uma barra de navegação com menu móvel.
2. Uma secção principal com fundo em gradiente.
3. Botões de destaque.
4. Três cartões de cursos.
5. Uma secção informativa.
6. Um formulário demonstrativo.
7. Um rodapé.

Em dispositivos móveis, os elementos organizam-se verticalmente.

Em ecrãs maiores, são distribuídos em múltiplas colunas.

---

## 6. Boas Práticas com Bootstrap Intermediário

### Organizar o HTML

Mesmo utilizando Bootstrap, devemos manter uma estrutura semântica e organizada.

### Evitar excesso de classes

Utilizar apenas as classes necessárias para obter o comportamento desejado.

### Personalizar quando necessário

O Bootstrap disponibiliza estilos padrão, mas podemos criar a identidade visual de cada projeto através de CSS personalizado.

### Garantir responsividade

Testar o comportamento das interfaces em diferentes dimensões de ecrã.

### Respeitar a acessibilidade

Garantir:

- Navegação por teclado.
- Foco visível.
- Contraste adequado.
- Labels nos formulários.
- Menus acessíveis.
- Textos legíveis.

### Não depender apenas do Bootstrap

O conhecimento de HTML, CSS e JavaScript continua necessário para desenvolver e manter aplicações frontend.

### Organizar os ficheiros

Em projetos maiores, manter ficheiros próprios para:

- HTML.
- CSS.
- JavaScript.
- Imagens e outros recursos.

## Resumo em uma frase

> O Bootstrap intermediário permite desenvolver interfaces mais completas através de menus de navegação responsivos com Navbar e Dropdown, formatação de textos com classes tipográficas, botões personalizados com diferentes estilos e tamanhos, e técnicas de responsividade utilizando Grid, Flexbox, breakpoints e classes utilitárias, facilitando a construção de aplicações frontend modernas, consistentes e adaptáveis a diferentes dispositivos.

---

## Conceitos Relacionados para Estudar a Seguir

- **Bootstrap Navbar** — aprofundar menus responsivos.
- **Bootstrap Dropdown** — criar menus suspensos.
- **Bootstrap Typography** — personalizar títulos e textos.
- **Bootstrap Buttons** — explorar estilos e grupos de botões.
- **Bootstrap Grid** — desenvolver layouts com 12 colunas.
- **Bootstrap Utilities** — aplicar espaçamentos e alinhamentos.
- **Mobile First** — desenvolver interfaces inicialmente para dispositivos móveis.
- **Media Queries** — personalizar estilos responsivos.
- **Flexbox** — compreender o alinhamento e a distribuição dos elementos.
- **Bootstrap Offcanvas** — criar painéis laterais e menus móveis.
- **Acessibilidade Web** — melhorar a navegação e a utilização dos componentes.
- **Bootstrap Sass** — realizar personalizações avançadas.

---

## Referências para Estudo

- [Bootstrap — Documentação Oficial](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap — Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)
- [Bootstrap — Dropdowns](https://getbootstrap.com/docs/5.3/components/dropdowns/)
- [Bootstrap — Typography](https://getbootstrap.com/docs/5.3/content/typography/)
- [Bootstrap — Text Utilities](https://getbootstrap.com/docs/5.3/utilities/text/)
- [Bootstrap — Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)
- [Bootstrap — Button Group](https://getbootstrap.com/docs/5.3/components/button-group/)
- [Bootstrap — Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Bootstrap — Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/)
- [Bootstrap — Display](https://getbootstrap.com/docs/5.3/utilities/display/)
- [Bootstrap — Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
- [Bootstrap — Offcanvas](https://getbootstrap.com/docs/5.3/components/offcanvas/)
