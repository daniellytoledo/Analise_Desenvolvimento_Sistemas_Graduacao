
# Melhorando os Formulários em HTML

---

## 1. Métodos de Envio de Formulário

### O que são métodos de envio?

Os **métodos de envio de formulários** determinam como os dados preenchidos pelo utilizador serão enviados ao servidor.

O HTML utiliza principalmente dois métodos HTTP:

- **GET:** utilizado normalmente para consultar informações.
- **POST:** utilizado para enviar dados que serão processados pelo servidor.

Esses métodos são definidos através do atributo `method` do elemento `<form>`.

### Elemento Form

A estrutura básica de um formulário é:

```html
<form action="/processar" method="post">
    <label for="nome">Nome:</label>

    <input
        type="text"
        id="nome"
        name="nome"
        required
    >

    <button type="submit">Enviar</button>
</form>
```

Neste exemplo:

- `<form>` define o formulário.
- `action` indica o endereço que receberá os dados.
- `method` determina o método HTTP.
- `name` identifica o campo nos dados enviados.
- `submit` inicia a submissão do formulário.

### Método GET

O método **GET** é utilizado principalmente para consultar informações.

Quando um formulário utiliza GET, os dados são normalmente adicionados à URL através de parâmetros.

**Exemplo:**

```html
<form action="/pesquisar" method="get">

    <label for="pesquisa">Pesquisar:</label>

    <input
        type="search"
        id="pesquisa"
        name="q"
        required
    >

    <button type="submit">Pesquisar</button>

</form>
```

Se o utilizador pesquisar por `JavaScript`, a URL poderá ficar assim:

```text
/pesquisar?q=JavaScript
```

### Características do GET

- Os dados são enviados através da URL.
- Os parâmetros podem aparecer no histórico do navegador.
- A URL pode ser partilhada ou guardada nos favoritos.
- É adequado para pesquisas e filtros.
- Não deve ser utilizado para operações que alteram dados no servidor.
- Não é adequado para enviar senhas ou outras informações sensíveis.

### Método POST

O método **POST** permite enviar dados no corpo de uma requisição HTTP.

É frequentemente utilizado em:

- Cadastros.
- Autenticação.
- Envio de mensagens.
- Criação de recursos.
- Processamento de formulários.

**Exemplo:**

```html
<form action="/cadastro" method="post">

    <label for="nome">Nome:</label>

    <input
        type="text"
        id="nome"
        name="nome"
        required
    >

    <label for="email">E-mail:</label>

    <input
        type="email"
        id="email"
        name="email"
        required
    >

    <button type="submit">Cadastrar</button>

</form>
```

Neste caso, os dados são enviados no corpo da requisição, em vez de serem acrescentados à URL como parâmetros de pesquisa.

**Importante:** POST não encripta os dados automaticamente. Para proteger a comunicação, devemos utilizar HTTPS.

### Comparação entre GET e POST

| Característica | GET | POST |
|---|---|---|
| Finalidade comum | Consultar dados | Enviar dados para processamento |
| Local dos dados | Parâmetros da URL | Corpo da requisição |
| Visibilidade na URL | Sim | Não |
| Pode ser guardado nos favoritos | Sim | Não da mesma forma |
| Adequado para pesquisas | Sim | Geralmente desnecessário |
| Adequado para cadastros | Não | Sim |
| Suporta envio de ficheiros | Não pelo formulário HTML tradicional | Sim |
| Segurança automática | Não | Não |

### Fluxo de envio

```text
              FORMULÁRIO
                  |
                  v
          Utilizador preenche
                  |
                  v
           Clica em Enviar
                  |
                  v
             MÉTODO HTTP
                  |
          +-------+-------+
          |               |
          v               v
         GET             POST
          |               |
          v               v
     Parâmetros        Corpo da
       na URL          requisição
          |               |
          +-------+-------+
                  |
                  v
               SERVIDOR
                  |
                  v
             PROCESSAMENTO
```

### Atributo `enctype`

O atributo **`enctype`** determina como os dados do formulário são codificados no envio.

É especialmente importante quando utilizamos POST.

| Valor | Finalidade |
|---|---|
| `application/x-www-form-urlencoded` | Formato padrão para formulários |
| `multipart/form-data` | Utilizado para envio de ficheiros |
| `text/plain` | Formato textual simples, pouco utilizado |

**Exemplo de upload:**

```html
<form
    action="/upload"
    method="post"
    enctype="multipart/form-data"
>
    <label for="arquivo">Escolha um ficheiro:</label>

    <input
        type="file"
        id="arquivo"
        name="arquivo"
    >

    <button type="submit">Enviar ficheiro</button>
</form>
```

O endpoint `/upload` precisaria de existir no servidor para processar o ficheiro.

---

## 2. Submissão de Formulário

### O que é submissão?

A **submissão de formulário (Form Submission)** é o processo de enviar os dados preenchidos pelo utilizador para um destino definido.

Esse processo pode acontecer através de:

1. Submissão tradicional do HTML.
2. Submissão controlada por JavaScript.

### Submissão tradicional

Num formulário tradicional, o navegador envia os dados para o endereço definido em `action`.

```html
<form action="/contacto" method="post">

    <label for="mensagem">Mensagem:</label>

    <textarea
        id="mensagem"
        name="mensagem"
        required
    ></textarea>

    <button type="submit">Enviar</button>

</form>
```

Após o envio, o navegador normalmente navega para a resposta devolvida pelo servidor.

### Submissão com JavaScript

O JavaScript permite controlar o envio através do evento **`submit`**.

```html
<form id="formulario">

    <label for="nome">Nome:</label>

    <input
        type="text"
        id="nome"
        name="nome"
        required
    >

    <button type="submit">Enviar</button>

</form>

<p id="resultado" role="status"></p>

<script src="script.js" defer></script>
```

**JavaScript — `script.js`:**

```js
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;

    resultado.textContent = `Olá, ${nome}!`;
});
```

### Método `preventDefault()`

O método **`preventDefault()`** impede o comportamento padrão associado a um evento cancelável.

No evento `submit`, permite evitar a navegação ou o envio tradicional do formulário.

```js
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    console.log("Submissão controlada pelo JavaScript.");
});
```

Isso é útil quando queremos:

- Validar os dados.
- Enviar informações através de uma API.
- Apresentar mensagens personalizadas.
- Atualizar a interface sem recarregar a página.

### Objeto `FormData`

O **`FormData`** permite recolher os dados dos campos de um formulário.

**HTML:**

```html
<form id="cadastro">

    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Enviar</button>

</form>
```

**JavaScript:**

```js
const formulario = document.getElementById("cadastro");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const dados = new FormData(formulario);

    console.log(dados.get("nome"));
    console.log(dados.get("email"));
});
```

O método `.get()` permite consultar os dados através do atributo `name`.

### Convertendo os dados num objeto

Podemos converter os dados de um formulário num objeto JavaScript.

```js
const dados = new FormData(formulario);

const objeto = Object.fromEntries(dados.entries());

console.log(objeto);
```

**Atenção:** esta conversão não preserva automaticamente vários valores associados ao mesmo nome, como grupos de checkboxes. Nesses casos, podemos utilizar `FormData.getAll()`.

### Enviando formulários com Fetch API

Podemos utilizar **`fetch()`** para enviar os dados sem recarregar a página.

```js
async function enviarFormulario(dados) {
    const resposta = await fetch("/api/cadastro", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(dados)
    });

    if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    return resposta.json();
}
```

Neste exemplo:

- `fetch()` realiza a requisição.
- `method: "POST"` define o método HTTP.
- `Content-Type` informa que o corpo contém JSON.
- `JSON.stringify()` converte o objeto em texto JSON.
- `response.ok` verifica o resultado HTTP.

O endpoint `/api/cadastro` representa uma API que precisaria de ser implementada.

### Tratamento de erros no envio

Uma requisição pode falhar por diferentes motivos:

- Falha de rede.
- Servidor indisponível.
- Dados inválidos.
- Falha na autenticação.
- Erro interno do servidor.

Podemos utilizar `try...catch` para tratar essas situações.

```js
async function enviarDados() {
    try {
        const resposta = await fetch("/api/cadastro", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nome: "Ana",
                email: "ana@exemplo.com"
            })
        });

        if (!resposta.ok) {
            throw new Error("Não foi possível enviar os dados.");
        }

        console.log("Dados enviados com sucesso!");

    } catch (erro) {
        console.error(erro.message);
    }
}
```

### Como otimizar a submissão?

Algumas boas práticas são:

- Validar os campos antes do envio.
- Apresentar um indicador de carregamento.
- Evitar submissões duplicadas.
- Informar o resultado da operação.
- Tratar erros de rede e do servidor.
- Manter mensagens claras.
- Não apagar os dados quando ocorre um erro.
- Validar novamente as informações no backend.

### Evitando submissões duplicadas

Podemos desativar temporariamente o botão durante o processamento.

```js
const botao = document.getElementById("enviar");

botao.disabled = true;

// Após a conclusão do processamento:
botao.disabled = false;
```

Em operações assíncronas, o bloco `finally` é adequado para restaurar o estado do botão.

---

## 3. Mensagem de Erro

### O que são mensagens de erro?

As **mensagens de erro** são informações apresentadas ao utilizador quando uma operação não pode ser concluída ou quando os dados não cumprem determinadas regras.

Uma mensagem adequada deve explicar:

1. O que aconteceu.
2. Qual campo ou operação apresenta o problema.
3. Como o utilizador pode corrigir a situação.

### Mensagens claras vs. mensagens genéricas

**Mensagem pouco informativa:**

```text
Erro!
```

**Mensagem mais informativa:**

```text
Introduza um endereço de e-mail válido.
```

Outro exemplo:

**Mensagem genérica:**

```text
Falha no formulário.
```

**Mensagem clara:**

```text
A senha deve possuir pelo menos 8 caracteres.
```

### Tipos de erros em formulários

| Tipo | Exemplo |
|---|---|
| Campo obrigatório | Nome não preenchido |
| Formato inválido | E-mail sem formato válido |
| Comprimento inválido | Senha demasiado curta |
| Valor fora do intervalo | Idade inferior ao permitido |
| Erro de servidor | Serviço indisponível |
| Erro de autenticação | Credenciais não aceites |

### Validação nativa do HTML

O HTML permite configurar regras básicas de validação.

```html
<form>

    <label for="email">E-mail:</label>

    <input
        type="email"
        id="email"
        name="email"
        required
    >

    <button type="submit">Enviar</button>

</form>
```

O navegador pode impedir o envio quando o campo está vazio ou apresenta um formato inválido.

### Principais atributos de validação

| Atributo | Função |
|---|---|
| `required` | Torna o campo obrigatório |
| `minlength` | Define comprimento mínimo |
| `maxlength` | Define comprimento máximo |
| `min` | Define valor mínimo |
| `max` | Define valor máximo |
| `pattern` | Define um padrão de validação |
| `type` | Pode ativar validações específicas |

### Exemplo com Minlength

```html
<label for="senha">Senha:</label>

<input
    type="password"
    id="senha"
    name="senha"
    minlength="8"
    required
>
```

O campo exige pelo menos oito caracteres para satisfazer a validação de comprimento.

### Validação com JavaScript

Podemos criar mensagens personalizadas para os campos.

**HTML:**

```html
<form id="formulario">

    <label for="nome">Nome:</label>

    <input type="text" id="nome" name="nome">

    <p id="erro-nome" class="erro"></p>

    <button type="submit">Enviar</button>

</form>
```

**JavaScript:**

```js
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const erroNome = document.getElementById("erro-nome");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    erroNome.textContent = "";

    if (nome.value.trim() === "") {
        erroNome.textContent = "O nome é obrigatório.";
        nome.focus();
        return;
    }

    console.log("Formulário válido!");
});
```

### Estilizando mensagens de erro

```css
.erro {
    color: #b91c1c;
    font-size: 0.9rem;
    margin-top: 5px;
}
```

O contraste entre o texto e o fundo deve ser suficiente para garantir a legibilidade.

### Destacando campos inválidos

Podemos utilizar a pseudoclasse CSS `:invalid`.

```css
input:invalid {
    border-color: #dc2626;
}
```

Essa regra pode destacar campos antes de o utilizador tentar enviar o formulário.

Para controlar melhor quando apresentar o erro, podemos aplicar uma classe através de JavaScript.

```css
.campo-invalido {
    border: 2px solid #dc2626;
}
```

```js
nome.classList.add("campo-invalido");
```

### Melhorando a acessibilidade das mensagens

Podemos relacionar uma mensagem de erro com um campo utilizando `aria-describedby`.

```html
<label for="email">E-mail:</label>

<input
    type="email"
    id="email"
    name="email"
    aria-describedby="erro-email"
>

<p id="erro-email" class="erro"></p>
```

Quando o erro é identificado, JavaScript pode atualizar o conteúdo e indicar o estado inválido.

```js
const email = document.getElementById("email");
const erroEmail = document.getElementById("erro-email");

email.setAttribute("aria-invalid", "true");

erroEmail.textContent = "Introduza um e-mail válido.";
```

Quando o campo voltar a ser válido, devemos remover ou atualizar o estado inválido e limpar a mensagem.

### Boas práticas para mensagens de erro

- Utilizar linguagem clara.
- Identificar o campo incorreto.
- Explicar como resolver o problema.
- Evitar mensagens excessivamente técnicas.
- Não depender apenas da cor vermelha.
- Preservar os dados já preenchidos.
- Apresentar feedback próximo do campo correspondente.
- Considerar a utilização de tecnologias de apoio.

---

## 4. Atributo Placeholder

### O que é Placeholder?

O atributo **`placeholder`** permite apresentar um texto de exemplo ou uma orientação curta dentro de determinados campos de formulário.

O texto é apresentado quando o campo está vazio.

### Exemplo básico

```html
<label for="nome">Nome:</label>

<input
    type="text"
    id="nome"
    placeholder="Digite o seu nome"
>
```

O texto `Digite o seu nome` será apresentado como sugestão.

Quando o utilizador começar a escrever, o placeholder normalmente deixa de aparecer.

### Placeholder em diferentes campos

**Campo de e-mail:**

```html
<label for="email">E-mail:</label>

<input
    type="email"
    id="email"
    placeholder="exemplo@email.com"
>
```

**Campo de telefone:**

```html
<label for="telefone">Telefone:</label>

<input
    type="tel"
    id="telefone"
    placeholder="+351 912 345 678"
>
```

**Campo de pesquisa:**

```html
<label for="pesquisa">Pesquisar:</label>

<input
    type="search"
    id="pesquisa"
    placeholder="Pesquisar produtos..."
>
```

**Textarea:**

```html
<label for="mensagem">Mensagem:</label>

<textarea
    id="mensagem"
    placeholder="Descreva a sua dúvida..."
></textarea>
```

### Placeholder vs. Label

Embora ambos ajudem a compreender um campo, possuem funções diferentes.

| Label | Placeholder |
|---|---|
| Identifica o campo | Apresenta uma sugestão ou exemplo |
| Permanece visível conforme a estrutura | Normalmente desaparece durante a digitação |
| É importante para a acessibilidade | Não substitui a identificação acessível |
| Exemplo: E-mail | Exemplo: nome@exemplo.com |

### Exemplo recomendado

```html
<label for="email">E-mail:</label>

<input
    type="email"
    id="email"
    name="email"
    placeholder="nome@exemplo.com"
    required
>
```

Neste exemplo:

- O label identifica o campo.
- O placeholder fornece um exemplo.
- O atributo `required` indica que o campo é obrigatório.

### Estilizando o Placeholder

Podemos utilizar o pseudoelemento **`::placeholder`** para personalizar a aparência do texto de exemplo.

```css
input::placeholder {
    color: #64748b;
    font-style: italic;
}
```

Também podemos aplicar estilos em diferentes campos.

```css
textarea::placeholder {
    color: #64748b;
    font-size: 14px;
}
```

### Pseudoclasse `:placeholder-shown`

A pseudoclasse **`:placeholder-shown`** permite selecionar determinados campos enquanto o placeholder está visível.

```css
input:placeholder-shown {
    background-color: #f8fafc;
}
```

É útil para criar efeitos visuais relacionados com o estado do campo.

### Boas práticas para Placeholders

- Utilizar textos curtos.
- Apresentar exemplos úteis.
- Não substituir o label.
- Evitar instruções longas.
- Garantir contraste adequado.
- Não utilizar placeholder como valor inicial.
- Não depender exclusivamente do placeholder para explicar regras importantes.

### Exemplo de utilização inadequada

```html
<input
    type="email"
    placeholder="O e-mail deve ser válido e utilizado para receber notificações e confirmar a conta..."
>
```

O texto é demasiado longo e pode desaparecer durante o preenchimento.

### Alternativa recomendada

```html
<label for="email">E-mail:</label>

<input
    type="email"
    id="email"
    placeholder="nome@exemplo.com"
    aria-describedby="ajuda-email"
>

<p id="ajuda-email">
    Utilizaremos este endereço para enviar a confirmação.
</p>
```

Dessa forma, a instrução continua disponível durante o preenchimento.

---

## 5. Exemplo Prático — Formulário com Validação Personalizada

Vamos desenvolver um formulário que reúna os conceitos estudados.

O projeto terá:

- Campos de nome, e-mail e senha.
- Labels e placeholders.
- Validação personalizada.
- Mensagens de erro.
- Botão de envio.
- Feedback visual.
- Simulação de submissão assíncrona.

### Estrutura do projeto

```text
formulario-validado/
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

    <title>Formulário de Cadastro</title>

    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

    <main class="container">

        <h1>Cadastro de Utilizador</h1>

        <form id="formulario" novalidate>

            <div class="campo">
                <label for="nome">Nome completo:</label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Ex.: Ana Silva"
                    minlength="3"
                    aria-describedby="erro-nome"
                    required
                >

                <p id="erro-nome" class="erro"></p>
            </div>

            <div class="campo">
                <label for="email">E-mail:</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="nome@exemplo.com"
                    aria-describedby="erro-email"
                    required
                >

                <p id="erro-email" class="erro"></p>
            </div>

            <div class="campo">
                <label for="senha">Senha:</label>

                <input
                    type="password"
                    id="senha"
                    name="senha"
                    minlength="8"
                    autocomplete="new-password"
                    aria-describedby="ajuda-senha erro-senha"
                    required
                >

                <p id="ajuda-senha" class="ajuda">
                    Utilize pelo menos 8 caracteres.
                </p>

                <p id="erro-senha" class="erro"></p>
            </div>

            <button type="submit" id="enviar">
                Cadastrar
            </button>

        </form>

        <p id="resultado" role="status" aria-live="polite"></p>

    </main>

</body>
</html>
```

### CSS — `style.css`

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 20px;

    font-family: Arial, sans-serif;

    background-color: #f1f5f9;
    color: #333333;
}

.container {
    width: 100%;
    max-width: 500px;

    margin: 30px auto;
    padding: 30px;

    background-color: white;

    border-radius: 12px;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
}

h1 {
    text-align: center;
    color: #2563eb;
}

.campo {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;

    font-weight: bold;
}

input {
    width: 100%;
    padding: 12px;

    border: 1px solid #cccccc;
    border-radius: 6px;

    font: inherit;
}

input::placeholder {
    color: #64748b;
}

input:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}

.campo-invalido {
    border: 2px solid #dc2626;
}

.erro {
    color: #b91c1c;
    font-size: 0.9rem;
    margin: 6px 0 0;
}

.ajuda {
    font-size: 0.9rem;
    color: #475569;
}

button {
    width: 100%;
    padding: 14px;

    border: none;
    border-radius: 6px;

    background-color: #2563eb;
    color: white;

    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #1d4ed8;
}

button:disabled {
    background-color: #94a3b8;
    cursor: wait;
}

button:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
}

#resultado {
    margin-top: 20px;
    font-weight: bold;
}
```

### JavaScript — `script.js`

```js
const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const botaoEnviar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

function apresentarErro(campo, idMensagem, texto) {
    const elementoErro = document.getElementById(idMensagem);

    elementoErro.textContent = texto;

    campo.classList.add("campo-invalido");
    campo.setAttribute("aria-invalid", "true");
}

function limparErro(campo, idMensagem) {
    const elementoErro = document.getElementById(idMensagem);

    elementoErro.textContent = "";

    campo.classList.remove("campo-invalido");
    campo.removeAttribute("aria-invalid");
}

function validarFormulario() {
    let valido = true;
    let primeiroInvalido = null;

    limparErro(nome, "erro-nome");
    limparErro(email, "erro-email");
    limparErro(senha, "erro-senha");

    if (nome.value.trim().length < 3) {
        apresentarErro(
            nome,
            "erro-nome",
            "O nome deve possuir pelo menos 3 caracteres."
        );

        valido = false;
        primeiroInvalido ??= nome;
    }

    if (!email.validity.valid) {
        apresentarErro(
            email,
            "erro-email",
            "Introduza um endereço de e-mail válido."
        );

        valido = false;
        primeiroInvalido ??= email;
    }

    if (senha.value.length < 8) {
        apresentarErro(
            senha,
            "erro-senha",
            "A senha deve possuir pelo menos 8 caracteres."
        );

        valido = false;
        primeiroInvalido ??= senha;
    }

    if (primeiroInvalido) {
        primeiroInvalido.focus();
    }

    return valido;
}

// Simulação de uma operação assíncrona
function simularEnvio() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    resultado.textContent = "";

    if (!validarFormulario()) {
        return;
    }

    botaoEnviar.disabled = true;
    botaoEnviar.textContent = "Enviando...";

    try {
        await simularEnvio();

        // Não registar senhas no console.
        console.log("Cadastro simulado com sucesso.");

        resultado.textContent =
            "Cadastro validado e envio simulado com sucesso!";

        formulario.reset();

        limparErro(nome, "erro-nome");
        limparErro(email, "erro-email");
        limparErro(senha, "erro-senha");

    } catch (erro) {
        console.error(erro);

        resultado.textContent =
            "Não foi possível concluir a operação.";

    } finally {
        botaoEnviar.disabled = false;
        botaoEnviar.textContent = "Cadastrar";
    }
});
```

### Como funciona?

```text
              FORMULÁRIO
                  |
                  v
          Utilizador preenche
                  |
                  v
             Clica Enviar
                  |
                  v
          Evento SUBMIT
                  |
                  v
          preventDefault()
                  |
                  v
          Validar os campos
                  |
          +-------+-------+
          |               |
          v               v
       INVÁLIDO         VÁLIDO
          |               |
          v               v
     Mensagens de     Desativar botão
         erro              |
                           v
                     Simular envio
                           |
                           v
                     Mensagem final
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
| `<form>` | Estrutura do formulário |
| `novalidate` | Permite controlar a validação com JavaScript |
| `label` | Identificação dos campos |
| `placeholder` | Exemplos de preenchimento |
| `required` | Regra de obrigatoriedade |
| `minlength` | Comprimento mínimo |
| `submit` | Evento de submissão |
| `preventDefault()` | Impede o envio tradicional |
| `validity.valid` | Consulta a validade nativa do campo |
| `aria-invalid` | Identifica campos inválidos |
| `aria-describedby` | Associa mensagens aos campos |
| `async/await` | Controla a operação assíncrona |
| `try...catch` | Trata falhas |
| `finally` | Restaura o botão |

**Observação:** este exemplo simula uma operação de cadastro. Não existe envio real nem armazenamento dos dados. Para uma aplicação real, seria necessário implementar uma API, validar os dados no backend e proteger adequadamente as senhas.

---

## 6. Boas Práticas para Melhorar Formulários

### Escolher corretamente o método HTTP

Utilizar GET para consultas e POST para operações de envio e processamento.

### Identificar os campos

Utilizar `<label>` associado a cada campo.

### Não depender exclusivamente do Placeholder

O placeholder deve complementar a identificação, nunca substituí-la.

### Apresentar mensagens de erro claras

Informar exatamente o que precisa de ser corrigido.

### Preservar os dados preenchidos

Evitar limpar o formulário quando a submissão falha.

### Evitar envios duplicados

Desativar temporariamente o botão durante operações assíncronas, mantendo o feedback visível.

### Considerar a acessibilidade

Utilizar labels, estados de foco, mensagens associadas aos campos e navegação por teclado.

### Validar no servidor

As validações HTML e JavaScript podem ser contornadas. Os dados devem ser validados novamente pelo backend.

### Proteger informações sensíveis

Nunca guardar senhas ou tokens privados diretamente no código frontend.

---

## Resumo em uma frase

> Melhorar formulários HTML envolve compreender os métodos GET e POST, configurar corretamente a submissão através de `action`, `method` ou JavaScript, validar os dados recebidos e apresentar mensagens de erro claras, além de utilizar o atributo `placeholder` para fornecer exemplos de preenchimento, garantindo interfaces mais intuitivas, acessíveis, seguras e eficientes.

---

## Conceitos Relacionados para Estudar a Seguir

- **FormData** — recolher e processar dados de formulários.
- **Constraint Validation API** — criar validações personalizadas.
- **Fetch API** — enviar informações para servidores.
- **Async/Await** — gerir a submissão assíncrona.
- **Validação Frontend e Backend** — compreender as diferentes responsabilidades.
- **HTTP GET e POST** — aprofundar os métodos HTTP.
- **Acessibilidade de Formulários** — melhorar mensagens e estados dos campos.
- **Segurança Web** — estudar HTTPS, CSRF e proteção de dados.
- **UX Design** — melhorar a experiência de preenchimento.
- **Testes de Formulários** — verificar campos, regras e comportamentos.

---

## Referências para Estudo

- [MDN — HTML Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)
- [MDN — Form](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form)
- [MDN — FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [MDN — Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)
- [MDN — Placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/placeholder)
- [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [W3C WAI — Form Validation](https://www.w3.org/WAI/tutorials/forms/validation/)
