
# Bootstrap Avançado — Imagens, Cards, Modais e Tabelas

O **Bootstrap** é um framework frontend que disponibiliza componentes e classes CSS reutilizáveis para facilitar a construção de interfaces web.

Neste módulo, serão abordados recursos para apresentar imagens responsivas, organizar informações em cartões, criar janelas modais e estilizar tabelas.

Os exemplos utilizam a versão **Bootstrap 5.3**.

---

## 1. Imagens

### Imagens no Bootstrap

O Bootstrap disponibiliza classes para controlar a apresentação visual das imagens sem precisar escrever todas as propriedades CSS manualmente.

Essas classes permitem:

- Adaptar imagens à largura disponível.
- Arredondar cantos.
- Criar imagens circulares.
- Adicionar bordas.
- Centralizar imagens.
- Aplicar alinhamentos.
- Organizar imagens em layouts responsivos.

### Classe `img-fluid`

A classe **`img-fluid`** permite que uma imagem se adapte ao espaço disponível no elemento pai.

**Exemplo:**

```html
<img
    src="imagens/paisagem.jpg"
    class="img-fluid"
    alt="Paisagem natural"
>
```

Essa classe aplica essencialmente as seguintes propriedades:

```css
.img-fluid {
    max-width: 100%;
    height: auto;
}
```

**Explicação:**

- `max-width: 100%` impede que a imagem ultrapasse a largura do contentor.
- `height: auto` preserva a proporção da imagem.

### Diferença entre imagem fixa e responsiva

**Imagem com largura fixa:**

```html
<img
    src="imagens/paisagem.jpg"
    width="800"
    alt="Paisagem natural"
>
```

Sem outras regras CSS, uma imagem com largura de 800px pode ultrapassar o espaço disponível num ecrã pequeno.

**Imagem responsiva:**

```html
<img
    src="imagens/paisagem.jpg"
    class="img-fluid"
    alt="Paisagem natural"
>
```

A imagem poderá diminuir conforme a largura do contentor.

### Classe `img-thumbnail`

A classe **`img-thumbnail`** apresenta uma imagem com uma borda fina e cantos ligeiramente arredondados.

```html
<img
    src="imagens/perfil.jpg"
    class="img-thumbnail"
    alt="Fotografia de perfil"
>
```

Esse estilo é frequentemente utilizado em:

- Fotografias de perfil.
- Galerias.
- Catálogos.
- Listas de utilizadores.

### Bordas arredondadas

O Bootstrap disponibiliza classes utilitárias para arredondar os cantos.

```html
<img
    src="imagens/paisagem.jpg"
    class="img-fluid rounded"
    alt="Paisagem"
>
```

### Principais classes de arredondamento

| Classe | Finalidade |
|---|---|
| `rounded` | Aplica arredondamento padrão |
| `rounded-0` | Remove o arredondamento |
| `rounded-1` | Arredondamento pequeno |
| `rounded-3` | Arredondamento maior |
| `rounded-5` | Arredondamento mais acentuado |
| `rounded-circle` | Aplica arredondamento circular |
| `rounded-pill` | Aplica arredondamento em formato de cápsula |

### Imagem circular

A classe **`rounded-circle`** permite apresentar uma imagem com formato circular quando as dimensões são quadradas.

```html
<img
    src="imagens/perfil.jpg"
    class="rounded-circle"
    width="150"
    height="150"
    alt="Fotografia de perfil"
>
```

Para evitar distorções, podemos utilizar `object-fit: cover`.

**HTML:**

```html
<img
    src="imagens/perfil.jpg"
    class="rounded-circle foto-perfil"
    alt="Fotografia de perfil"
>
```

**CSS:**

```css
.foto-perfil {
    width: 150px;
    height: 150px;
    object-fit: cover;
}
```

A propriedade `object-fit: cover` faz com que a imagem preencha a área disponível, preservando a proporção e recortando o excesso quando necessário.

### Centralizando imagens

Podemos utilizar classes de display e margem.

```html
<img
    src="imagens/paisagem.jpg"
    class="img-fluid rounded mx-auto d-block"
    alt="Paisagem natural"
>
```

**Classes utilizadas:**

- `img-fluid` — torna a imagem responsiva.
- `rounded` — arredonda os cantos.
- `mx-auto` — aplica margens horizontais automáticas.
- `d-block` — apresenta o elemento como bloco.

Também podemos centralizar uma imagem através do alinhamento do contentor.

```html
<div class="text-center">
    <img
        src="imagens/paisagem.jpg"
        class="img-fluid rounded"
        alt="Paisagem natural"
    >
</div>
```

### Alinhamento com Float

O Bootstrap disponibiliza classes para posicionar imagens utilizando `float`.

```html
<img
    src="imagens/paisagem.jpg"
    class="rounded float-start"
    alt="Paisagem"
>
```

```html
<img
    src="imagens/paisagem.jpg"
    class="rounded float-end"
    alt="Paisagem"
>
```

| Classe | Função |
|---|---|
| `float-start` | Flutua no início da direção de escrita |
| `float-end` | Flutua no final da direção de escrita |
| `float-none` | Remove o efeito float |

Para layouts mais complexos, Flexbox e Grid costumam ser mais adequados do que `float`.

### Imagens responsivas com Grid

Podemos combinar imagens com o sistema de Grid do Bootstrap.

```html
<div class="container">

    <div class="row g-3">

        <div class="col-12 col-md-6 col-lg-4">
            <img
                src="imagens/foto1.jpg"
                class="img-fluid rounded"
                alt="Paisagem de montanha"
            >
        </div>

        <div class="col-12 col-md-6 col-lg-4">
            <img
                src="imagens/foto2.jpg"
                class="img-fluid rounded"
                alt="Paisagem de praia"
            >
        </div>

        <div class="col-12 col-md-6 col-lg-4">
            <img
                src="imagens/foto3.jpg"
                class="img-fluid rounded"
                alt="Paisagem de floresta"
            >
        </div>

    </div>

</div>
```

**Comportamento:**

- Em ecrãs pequenos, uma imagem por linha.
- A partir de `md`, duas imagens por linha.
- A partir de `lg`, três imagens por linha.

### Classes importantes para imagens

| Classe | Utilização |
|---|---|
| `img-fluid` | Imagem responsiva |
| `img-thumbnail` | Borda de miniatura |
| `rounded` | Cantos arredondados |
| `rounded-circle` | Forma circular |
| `mx-auto` | Margens horizontais automáticas |
| `d-block` | Elemento em bloco |
| `float-start` | Flutuação no início |
| `float-end` | Flutuação no final |
| `shadow` | Aplica sombra |

### Boas práticas

- Utilizar o atributo `alt` com descrições relevantes.
- Utilizar imagens otimizadas.
- Evitar ficheiros excessivamente grandes.
- Utilizar `img-fluid` quando necessário.
- Preservar as proporções.
- Considerar o atributo `loading="lazy"` para imagens abaixo da área inicial da página.
- Utilizar dimensões apropriadas para reduzir alterações inesperadas no layout.

---

## 2. Cards

### O que são Cards?

Os **Cards** são componentes do Bootstrap utilizados para apresentar informações em contentores visuais.

Podem incluir:

- Imagens.
- Títulos.
- Descrições.
- Botões.
- Links.
- Cabeçalhos.
- Rodapés.

São frequentemente utilizados em:

- Lojas virtuais.
- Catálogos de produtos.
- Plataformas de cursos.
- Portfólios.
- Dashboards.
- Listagens de serviços.

### Estrutura básica de um Card

```html
<div class="card" style="width: 18rem;">

    <div class="card-body">

        <h2 class="card-title h5">
            Desenvolvimento Frontend
        </h2>

        <p class="card-text">
            Aprenda HTML, CSS e JavaScript.
        </p>

        <a href="curso.html" class="btn btn-primary">
            Saber mais
        </a>

    </div>

</div>
```

### Principais classes dos Cards

| Classe | Função |
|---|---|
| `card` | Contentor principal |
| `card-body` | Área de conteúdo |
| `card-title` | Título do cartão |
| `card-subtitle` | Subtítulo |
| `card-text` | Texto descritivo |
| `card-img-top` | Imagem superior |
| `card-img-bottom` | Imagem inferior |
| `card-header` | Cabeçalho |
| `card-footer` | Rodapé |
| `card-img-overlay` | Conteúdo sobre a imagem |

### Card com imagem

```html
<div class="card" style="width: 20rem;">

    <img
        src="imagens/curso.jpg"
        class="card-img-top"
        alt="Computador com editor de código"
    >

    <div class="card-body">

        <h2 class="card-title h5">
            Curso de Bootstrap
        </h2>

        <p class="card-text">
            Aprenda a desenvolver interfaces
            modernas e responsivas.
        </p>

        <a href="curso.html" class="btn btn-primary">
            Ver curso
        </a>

    </div>

</div>
```

A classe `card-img-top` apresenta a imagem na parte superior do cartão.

### Card com cabeçalho e rodapé

```html
<div class="card">

    <div class="card-header">
        Curso em destaque
    </div>

    <div class="card-body">

        <h2 class="card-title h5">
            JavaScript
        </h2>

        <p class="card-text">
            Aprenda programação e interatividade web.
        </p>

    </div>

    <div class="card-footer text-body-secondary">
        Formação Online
    </div>

</div>
```

### Cards com cores personalizadas

Podemos utilizar classes de cor do Bootstrap.

```html
<div class="card text-bg-primary">

    <div class="card-body">

        <h2 class="card-title h5">
            Curso de HTML
        </h2>

        <p class="card-text">
            Aprenda a estruturar páginas web.
        </p>

    </div>

</div>
```

Outros exemplos de classes:

- `text-bg-primary`
- `text-bg-secondary`
- `text-bg-success`
- `text-bg-danger`
- `text-bg-warning`
- `text-bg-dark`

Essas classes combinam estilos de fundo e texto.

### Card com imagem de fundo

A classe **`card-img-overlay`** permite colocar conteúdo sobre uma imagem.

```html
<div class="card text-bg-dark">

    <img
        src="imagens/paisagem.jpg"
        class="card-img"
        alt="Paisagem de montanha"
    >

    <div class="card-img-overlay">

        <h2 class="card-title h5">
            Explorar a Natureza
        </h2>

        <p class="card-text">
            Descubra novos destinos.
        </p>

    </div>

</div>
```

**Atenção:** o contraste entre texto e imagem deve ser suficiente para garantir a legibilidade. A altura do conteúdo também precisa ser compatível com a imagem.

### Cards responsivos com Grid

Podemos utilizar o sistema de Grid para organizar vários cards.

```html
<div class="container my-5">

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        <div class="col">
            <article class="card h-100">

                <div class="card-body">
                    <h2 class="card-title h5">HTML</h2>
                    <p class="card-text">
                        Estrutura das páginas web.
                    </p>
                </div>

            </article>
        </div>

        <div class="col">
            <article class="card h-100">

                <div class="card-body">
                    <h2 class="card-title h5">CSS</h2>
                    <p class="card-text">
                        Estilização de interfaces.
                    </p>
                </div>

            </article>
        </div>

        <div class="col">
            <article class="card h-100">

                <div class="card-body">
                    <h2 class="card-title h5">JavaScript</h2>
                    <p class="card-text">
                        Interatividade e comportamento.
                    </p>
                </div>

            </article>
        </div>

    </div>

</div>
```

### Explicação das classes

| Classe | Função |
|---|---|
| `row-cols-1` | Uma coluna em ecrãs pequenos |
| `row-cols-md-2` | Duas colunas a partir de `md` |
| `row-cols-lg-3` | Três colunas a partir de `lg` |
| `g-4` | Espaçamento entre colunas |
| `h-100` | Card ocupa 100% da altura disponível |

### Cards com altura uniforme

A classe `h-100` é utilizada frequentemente para que cartões numa mesma linha mantenham alturas consistentes.

```html
<div class="card h-100">
    <div class="card-body">
        <h2 class="card-title h5">Curso HTML</h2>
        <p class="card-text">Descrição do curso.</p>
    </div>
</div>
```

### Card com botão alinhado ao final

Podemos combinar o componente Card com Flexbox.

```html
<div class="card h-100">

    <div class="card-body d-flex flex-column">

        <h2 class="card-title h5">
            Curso CSS
        </h2>

        <p class="card-text">
            Aprenda layouts, estilos,
            animações e responsividade.
        </p>

        <a href="curso.html" class="btn btn-primary mt-auto">
            Ver detalhes
        </a>

    </div>

</div>
```

**Explicação:**

- `d-flex` ativa o Flexbox.
- `flex-column` organiza os elementos verticalmente.
- `mt-auto` utiliza margem superior automática para deslocar o botão para o final da área flexível disponível.

### Personalizando Cards com CSS

```css
.card-personalizado {
    border-radius: 15px;
    border: 1px solid #e5e7eb;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.card-personalizado:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgb(0 0 0 / 15%);
}

@media (prefers-reduced-motion: reduce) {
    .card-personalizado {
        transition: none;
    }
}
```

Esses estilos permitem adicionar efeitos visuais aos cartões.

---

## 3. Modal

### O que é um Modal?

Um **Modal** é um componente que apresenta uma janela de diálogo sobre o conteúdo principal da página.

É utilizado quando queremos solicitar uma ação ou apresentar uma informação sem abrir outra página.

Aplicações comuns:

- Confirmação de operações.
- Visualização de detalhes.
- Formulários rápidos.
- Mensagens importantes.
- Visualização de informações adicionais.

### Funcionamento de um Modal

O componente Modal do Bootstrap utiliza:

- HTML para estruturar a janela.
- CSS para definir a apresentação.
- JavaScript para controlar abertura e fechamento.

O Bootstrap disponibiliza comportamentos como:

- Abertura do modal.
- Fechamento através de botões.
- Fundo de sobreposição (*backdrop*).
- Gestão de foco.
- Fechamento pela tecla Escape, na configuração padrão.

### Estrutura de um Modal

```text
MODAL
│
├── modal-dialog
│   │
│   └── modal-content
│       │
│       ├── modal-header
│       │
│       ├── modal-body
│       │
│       └── modal-footer
```

### Principais classes

| Classe | Função |
|---|---|
| `modal` | Estrutura principal |
| `fade` | Adiciona efeito de transição |
| `modal-dialog` | Contentor da caixa de diálogo |
| `modal-content` | Conteúdo visual |
| `modal-header` | Cabeçalho |
| `modal-title` | Título |
| `modal-body` | Corpo |
| `modal-footer` | Rodapé |
| `btn-close` | Botão de fechamento |
| `modal-dialog-centered` | Centralização vertical |
| `modal-dialog-scrollable` | Rolagem interna do conteúdo |

### Criando um Modal

**Botão de abertura:**

```html
<button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#modalExemplo"
>
    Abrir Modal
</button>
```

**Estrutura do Modal:**

```html
<div
    class="modal fade"
    id="modalExemplo"
    tabindex="-1"
    aria-labelledby="tituloModal"
    aria-hidden="true"
>

    <div class="modal-dialog">

        <div class="modal-content">

            <div class="modal-header">

                <h2 class="modal-title fs-5" id="tituloModal">
                    Informações
                </h2>

                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                ></button>

            </div>

            <div class="modal-body">
                <p>
                    Este é um exemplo de janela
                    modal utilizando Bootstrap.
                </p>
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

### Explicação dos atributos

| Atributo | Função |
|---|---|
| `data-bs-toggle="modal"` | Indica que o elemento controla um modal |
| `data-bs-target` | Define o modal a abrir |
| `data-bs-dismiss="modal"` | Fecha o modal |
| `aria-labelledby` | Associa o modal ao título |
| `aria-hidden` | Indica o estado inicial oculto |
| `tabindex="-1"` | Permite gestão programática do foco |

### JavaScript necessário

Para utilizar o Modal, precisamos carregar o JavaScript do Bootstrap.

**Exemplo com Bootstrap 5.3.8:**

```html
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
></script>
```

O ficheiro `bootstrap.bundle.min.js` inclui os recursos JavaScript do Bootstrap e a dependência Popper utilizada por determinados componentes.

### Modal centralizado

Podemos utilizar:

```html
<div class="modal-dialog modal-dialog-centered">
```

A classe `modal-dialog-centered` centraliza verticalmente a caixa de diálogo.

### Modal com rolagem

Quando existe muito conteúdo, podemos utilizar:

```html
<div class="modal-dialog modal-dialog-scrollable">
```

Isso permite que a área interna do modal possua rolagem.

### Tamanhos de Modal

O Bootstrap disponibiliza diferentes classes para controlar o tamanho.

| Classe | Tamanho |
|---|---|
| `modal-sm` | Pequeno |
| Padrão | Médio |
| `modal-lg` | Grande |
| `modal-xl` | Extra grande |
| `modal-fullscreen` | Ecrã inteiro |

**Exemplo:**

```html
<div class="modal-dialog modal-lg">
```

### Modal responsivo em ecrã inteiro

O Bootstrap também permite configurar modais que ocupam o ecrã inteiro apenas abaixo de determinados breakpoints.

```html
<div class="modal-dialog modal-fullscreen-md-down">
```

Nesse exemplo, o modal utiliza o modo de ecrã inteiro em larguras inferiores ao breakpoint `md`.

### Controlando um Modal com JavaScript

Além dos atributos HTML, podemos controlar modais através da API JavaScript do Bootstrap.

**HTML:**

```html
<button type="button" id="abrirModal" class="btn btn-primary">
    Mostrar informações
</button>
```

Considerando que existe um modal com o ID `modalExemplo`:

```js
const elementoModal = document.getElementById("modalExemplo");

const modal = new bootstrap.Modal(elementoModal);

document.getElementById("abrirModal").addEventListener("click", () => {
    modal.show();
});
```

### Métodos da API JavaScript

| Método | Função |
|---|---|
| `show()` | Abre o modal |
| `hide()` | Fecha o modal |
| `toggle()` | Alterna o estado |
| `dispose()` | Remove os dados e a instância associados ao componente |
| `getInstance()` | Obtém uma instância existente |
| `getOrCreateInstance()` | Obtém ou cria uma instância |

### Eventos do Modal

O Bootstrap disponibiliza eventos relacionados com o ciclo de abertura e fechamento.

| Evento | Quando ocorre |
|---|---|
| `show.bs.modal` | Início da abertura |
| `shown.bs.modal` | Após a abertura e conclusão da transição |
| `hide.bs.modal` | Início do fechamento |
| `hidden.bs.modal` | Após o fechamento e conclusão da transição |

**Exemplo:**

```js
const elementoModal = document.getElementById("modalExemplo");

elementoModal.addEventListener("shown.bs.modal", () => {
    console.log("O modal foi aberto.");
});

elementoModal.addEventListener("hidden.bs.modal", () => {
    console.log("O modal foi fechado.");
});
```

### Modal com formulário

Uma aplicação comum é apresentar um formulário dentro de um modal.

```html
<div class="modal-body">

    <form id="formularioContato">

        <div class="mb-3">

            <label for="nomeContato" class="form-label">
                Nome
            </label>

            <input
                type="text"
                id="nomeContato"
                name="nome"
                class="form-control"
                required
            >

        </div>

        <div class="mb-3">

            <label for="emailContato" class="form-label">
                E-mail
            </label>

            <input
                type="email"
                id="emailContato"
                name="email"
                class="form-control"
                required
            >

        </div>

        <button type="submit" class="btn btn-primary">
            Enviar
        </button>

    </form>

</div>
```

O exemplo mostra apenas o conteúdo que poderá ser inserido na região `modal-body` de um modal completo.

O formulário precisará de um endpoint ou de lógica JavaScript para realizar o envio.

### Boas práticas com Modais

- Utilizar títulos claros.
- Evitar abrir modais desnecessariamente.
- Disponibilizar uma forma evidente de fechar.
- Garantir funcionamento por teclado.
- Não colocar modais dentro de outros modais.
- Evitar formulários excessivamente longos.
- Testar em dispositivos móveis.
- Utilizar o componente para interações que realmente necessitem de uma janela de diálogo.

---

## 4. Tabelas

### Tabelas no Bootstrap

O Bootstrap disponibiliza classes CSS para estilizar tabelas HTML e melhorar a sua apresentação.

As tabelas são utilizadas para organizar dados em linhas e colunas.

Aplicações comuns:

- Relatórios financeiros.
- Listas de utilizadores.
- Tabelas de produtos.
- Horários.
- Dados académicos.
- Resultados de pesquisas.
- Dashboards administrativos.

### Classe `table`

A classe principal é **`table`**.

```html
<table class="table">

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

O Bootstrap aplica estilos de espaçamento, alinhamento e bordas às células da tabela.

### Classes de estilização

| Classe | Função |
|---|---|
| `table` | Estilos básicos |
| `table-striped` | Linhas alternadas |
| `table-hover` | Destaque ao passar o ponteiro |
| `table-bordered` | Bordas nas células |
| `table-borderless` | Remove bordas |
| `table-sm` | Reduz o espaçamento interno |
| `table-dark` | Aplica tema escuro |
| `table-responsive` | Permite rolagem horizontal |

### Table Striped

A classe **`table-striped`** adiciona cores alternadas às linhas do corpo da tabela.

```html
<table class="table table-striped">
    <!-- Conteúdo da tabela -->
</table>
```

Esse estilo facilita a leitura de tabelas com muitas linhas.

### Table Hover

A classe **`table-hover`** destaca uma linha quando o ponteiro passa sobre ela.

```html
<table class="table table-hover">
    <!-- Conteúdo da tabela -->
</table>
```

É útil para melhorar a identificação visual de linhas em listas de dados.

### Combinando classes

As classes podem ser combinadas.

```html
<table class="table table-striped table-hover">
    <!-- Conteúdo da tabela -->
</table>
```

Nesse exemplo, a tabela apresenta linhas alternadas e efeito hover.

### Table Bordered

A classe **`table-bordered`** adiciona bordas às células.

```html
<table class="table table-bordered">
    <!-- Conteúdo da tabela -->
</table>
```

### Table Borderless

A classe **`table-borderless`** remove as bordas.

```html
<table class="table table-borderless">
    <!-- Conteúdo da tabela -->
</table>
```

### Table Small

A classe **`table-sm`** reduz o espaçamento interno das células.

```html
<table class="table table-sm">
    <!-- Conteúdo da tabela -->
</table>
```

É útil para tabelas que apresentam uma quantidade maior de informações.

### Table Dark

A classe **`table-dark`** aplica um estilo escuro.

```html
<table class="table table-dark">
    <!-- Conteúdo da tabela -->
</table>
```

### Variantes de cores

O Bootstrap disponibiliza classes para aplicar estilos de cor às tabelas.

| Classe | Utilização |
|---|---|
| `table-primary` | Destaque primário |
| `table-secondary` | Destaque secundário |
| `table-success` | Representação de sucesso |
| `table-danger` | Representação de erro ou alerta |
| `table-warning` | Representação de atenção |
| `table-info` | Representação informativa |
| `table-light` | Aparência clara |
| `table-dark` | Aparência escura |

Essas classes podem ser aplicadas à tabela inteira ou a determinadas linhas e células.

**Exemplo:**

```html
<table class="table">

    <thead>
        <tr>
            <th scope="col">Produto</th>
            <th scope="col">Stock</th>
        </tr>
    </thead>

    <tbody>
        <tr class="table-success">
            <td>Notebook</td>
            <td>Disponível</td>
        </tr>

        <tr class="table-warning">
            <td>Mouse</td>
            <td>Stock reduzido</td>
        </tr>

        <tr class="table-danger">
            <td>Teclado</td>
            <td>Indisponível</td>
        </tr>
    </tbody>

</table>
```

### Tabelas responsivas

Uma tabela pode apresentar dificuldades de visualização quando possui muitas colunas.

O Bootstrap disponibiliza a classe **`table-responsive`** para permitir rolagem horizontal quando necessário.

```html
<div class="table-responsive">

    <table class="table">

        <thead>
            <tr>
                <th scope="col">Código</th>
                <th scope="col">Produto</th>
                <th scope="col">Categoria</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Preço</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>001</td>
                <td>Notebook</td>
                <td>Informática</td>
                <td>5</td>
                <td>800€</td>
            </tr>
        </tbody>

    </table>

</div>
```

**Importante:** `table-responsive` deve ser aplicada normalmente ao elemento que envolve a tabela, e não diretamente à tag `<table>`.

### Responsividade por Breakpoint

O Bootstrap também permite ativar a rolagem horizontal apenas abaixo de determinados breakpoints.

| Classe | Comportamento |
|---|---|
| `table-responsive` | Rolagem horizontal quando necessária em qualquer largura |
| `table-responsive-sm` | Responsiva abaixo de 576px |
| `table-responsive-md` | Responsiva abaixo de 768px |
| `table-responsive-lg` | Responsiva abaixo de 992px |
| `table-responsive-xl` | Responsiva abaixo de 1200px |
| `table-responsive-xxl` | Responsiva abaixo de 1400px |

**Exemplo:**

```html
<div class="table-responsive-md">
    <table class="table">
        <!-- Dados da tabela -->
    </table>
</div>
```

A rolagem horizontal controlada por essa classe aplica-se abaixo do breakpoint `md`.

### Table Group Divider

A classe **`table-group-divider`** permite criar uma separação visual entre grupos de linhas.

```html
<table class="table">

    <thead>
        <tr>
            <th scope="col">Aluno</th>
            <th scope="col">Nota</th>
        </tr>
    </thead>

    <tbody class="table-group-divider">

        <tr>
            <td>Ana</td>
            <td>9</td>
        </tr>

        <tr>
            <td>Maria</td>
            <td>8</td>
        </tr>

    </tbody>

</table>
```

### Exemplo de tabela de produtos

```html
<div class="container my-5">

    <h2 class="mb-4">
        Produtos em Stock
    </h2>

    <div class="table-responsive">

        <table class="table table-striped table-hover table-bordered align-middle">

            <caption>
                Lista de produtos disponíveis e respetivas quantidades.
            </caption>

            <thead class="table-dark">

                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Estado</th>
                </tr>

            </thead>

            <tbody>

                <tr>
                    <td>001</td>
                    <td>Notebook</td>
                    <td>5</td>
                    <td>800€</td>
                    <td>
                        <span class="badge text-bg-success">
                            Disponível
                        </span>
                    </td>
                </tr>

                <tr>
                    <td>002</td>
                    <td>Mouse</td>
                    <td>2</td>
                    <td>25€</td>
                    <td>
                        <span class="badge text-bg-warning">
                            Stock reduzido
                        </span>
                    </td>
                </tr>

                <tr>
                    <td>003</td>
                    <td>Teclado</td>
                    <td>0</td>
                    <td>50€</td>
                    <td>
                        <span class="badge text-bg-danger">
                            Indisponível
                        </span>
                    </td>
                </tr>

            </tbody>

        </table>

    </div>

</div>
```

### Conceitos aplicados

| Conceito | Aplicação |
|---|---|
| `container` | Centraliza a área de conteúdo |
| `table` | Estilização básica |
| `table-striped` | Cores alternadas |
| `table-hover` | Destaque de linhas |
| `table-bordered` | Bordas |
| `table-dark` | Cabeçalho escuro |
| `table-responsive` | Rolagem horizontal |
| `align-middle` | Alinhamento vertical |
| `badge` | Identificação visual de estados |
| `<caption>` | Descrição semântica da tabela |
| `<thead>` | Cabeçalho |
| `<tbody>` | Corpo |
| `<th>` | Identificação de linhas e colunas |

### Bootstrap cria tabelas dinâmicas?

O Bootstrap disponibiliza principalmente a apresentação visual.

Funcionalidades como:

- Pesquisa.
- Ordenação.
- Paginação.
- Filtros.
- Atualização através de APIs.

Precisam de lógica adicional em JavaScript, de recursos do backend ou de bibliotecas especializadas.

### Boas práticas para tabelas

- Utilizar tabelas para dados tabulares.
- Manter `<thead>`, `<tbody>` e `<tfoot>` conforme a estrutura necessária.
- Associar corretamente os cabeçalhos.
- Utilizar `<caption>` para descrever os dados quando apropriado.
- Garantir legibilidade.
- Utilizar `table-responsive` quando necessário.
- Não depender exclusivamente das cores para comunicar estados.
- Evitar utilizar tabelas como mecanismo de layout geral de páginas.

---

**Referências oficiais — Bootstrap 5.3**

- [Images](https://getbootstrap.com/docs/5.3/content/images/)
- [Cards](https://getbootstrap.com/docs/5.3/components/card/)
- [Modal](https://getbootstrap.com/docs/5.3/components/modal/)
- [Tables](https://getbootstrap.com/docs/5.3/content/tables/)
