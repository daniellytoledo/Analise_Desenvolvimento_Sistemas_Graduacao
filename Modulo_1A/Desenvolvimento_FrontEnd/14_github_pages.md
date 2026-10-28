
# GitHub Pages — Hospedagem e Publicação de Projetos Web

---

## 1. O que é GitHub Pages? Conceitos

### Definição

O **GitHub Pages** é um serviço de hospedagem de sites estáticos disponibilizado pelo GitHub.

Permite publicar websites diretamente a partir dos ficheiros armazenados num repositório GitHub, tornando-os acessíveis através de uma URL pública.

É frequentemente utilizado para disponibilizar:

- Portfólios profissionais.
- Landing pages.
- Documentação de projetos.
- Websites pessoais.
- Projetos académicos.
- Demonstrações de aplicações frontend.
- Websites desenvolvidos com HTML, CSS e JavaScript.

### Git, GitHub e GitHub Pages

Embora estejam relacionados, possuem funções diferentes.

| Ferramenta | Função |
|---|---|
| Git | Sistema de controlo de versões |
| GitHub | Plataforma para alojar e colaborar em repositórios Git |
| GitHub Pages | Serviço para publicar websites a partir de repositórios |

### O que é um repositório?

Um **repositório** é um espaço onde os ficheiros e o histórico de alterações de um projeto são armazenados.

Por exemplo:

```text
meu-site/
├── index.html
├── style.css
├── script.js
└── README.md
```

Quando esses ficheiros são enviados para um repositório GitHub, podemos utilizar o GitHub Pages para disponibilizar o website na internet.

### O que são websites estáticos?

Um **website estático** é um website cujos ficheiros podem ser entregues ao navegador sem a execução de código de backend no servidor de hospedagem.

Isso não significa que o website não possa apresentar interatividade.

Um website estático pode utilizar JavaScript para:

- Manipular o DOM.
- Criar animações.
- Validar formulários.
- Consumir APIs externas.
- Atualizar informações dinamicamente.
- Armazenar preferências no navegador.

Entretanto, o GitHub Pages não executa diretamente aplicações backend, como servidores PHP, Python Flask, Node.js ou Java Spring Boot.

### Exemplo

Um website desenvolvido com:

```text
index.html
style.css
script.js
```

Pode ser publicado diretamente no GitHub Pages.

Já uma aplicação que necessite executar:

```text
server.js
app.py
index.php
```

Como backend, precisará de outro serviço para executar essa parte da aplicação.

### GitHub Pages e APIs

Um site publicado no GitHub Pages pode consumir uma API hospedada noutro serviço.

**Exemplo:**

```javascript
async function buscarDados() {
    const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (!resposta.ok) {
        throw new Error("Erro ao obter utilizadores.");
    }

    const utilizadores = await resposta.json();

    console.log(utilizadores);
}

buscarDados();
```

O JavaScript é executado no navegador e comunica com a API externa.

A API precisa permitir a requisição, incluindo as regras de CORS aplicáveis.

### Tipos de websites no GitHub Pages

Existem dois tipos principais.

#### Site de utilizador ou organização

O repositório deve seguir o formato:

```text
usuario.github.io
```

A URL padrão será:

```text
https://usuario.github.io/
```

Por exemplo, para um utilizador fictício chamado `exemplo`:

```text
Repositório:
exemplo.github.io

Website:
https://exemplo.github.io/
```

#### Site de projeto

É publicado a partir de um repositório com um nome comum.

**Exemplo:**

```text
Repositório:
meu-projeto

Website:
https://usuario.github.io/meu-projeto/
```

### Comparação

| Tipo | Repositório | URL |
|---|---|---|
| Utilizador | `usuario.github.io` | `usuario.github.io` |
| Projeto | `meu-projeto` | `usuario.github.io/meu-projeto/` |

O GitHub Pages também permite configurar domínios personalizados.

### Vantagens do GitHub Pages

- Hospedagem gratuita para repositórios públicos em contas GitHub Free.
- Integração com Git e GitHub.
- Publicação de projetos frontend.
- Atualização através de commits.
- Suporte a HTTPS.
- Possibilidade de utilizar domínios personalizados.
- Adequado para portfólios e projetos académicos.

### Limitações do GitHub Pages

- Não executa código backend no servidor.
- Não disponibiliza uma base de dados própria para a aplicação.
- Não é adequado para armazenar informações secretas no frontend.
- Não substitui uma infraestrutura completa de backend.
- Possui limites de utilização definidos pelo GitHub.

**Importante:** os websites publicados através do GitHub Pages são publicamente acessíveis, mesmo em determinadas configurações nas quais o repositório de origem é privado.

---

## 2. Como Usar? Como Hospedar Projetos Web

### Requisitos

Para utilizar o GitHub Pages, normalmente precisamos de:

1. Uma conta GitHub.
2. Um repositório.
3. Ficheiros do website.
4. Uma configuração de publicação.

Para um projeto estático simples, basta ter os ficheiros HTML, CSS, JavaScript e outros recursos necessários.

### Estrutura de um projeto

```text
landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── imagens/
└── README.md
```

### Importância do `index.html`

O ficheiro **`index.html`** funciona normalmente como a página inicial do website.

Quando o visitante acede à URL do projeto, o GitHub Pages pode servir esse ficheiro como documento de entrada.

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Meu Site</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <h1>Meu Primeiro Site no GitHub Pages</h1>

    <p>
        Website publicado utilizando HTML,
        CSS e JavaScript.
    </p>

    <script src="js/script.js"></script>
</body>
</html>
```

### Exemplo de CSS

**Ficheiro `css/style.css`:**

```css
body {
    margin: 0;
    padding: 40px;

    font-family: Arial, sans-serif;

    background-color: #f1f5f9;
    color: #333333;
}

h1 {
    color: #2563eb;
}
```

### Exemplo de JavaScript

**Ficheiro `js/script.js`:**

```javascript
console.log("Website carregado com sucesso!");
```

### Caminhos relativos e absolutos

Um dos problemas mais comuns ao publicar websites no GitHub Pages está relacionado com os caminhos dos ficheiros.

Considere o endereço:

```text
https://usuario.github.io/meu-projeto/
```

Se utilizarmos:

```html
<link rel="stylesheet" href="/css/style.css">
```

O navegador procurará o ficheiro em:

```text
https://usuario.github.io/css/style.css
```

Mas o ficheiro pode estar localizado em:

```text
https://usuario.github.io/meu-projeto/css/style.css
```

Nesse caso, o CSS não será encontrado.

### Solução com caminhos relativos

É recomendável utilizar caminhos relativos quando apropriado.

```html
<link rel="stylesheet" href="css/style.css">
```

```html
<script src="js/script.js"></script>
```

```html
<img src="assets/imagens/foto.jpg" alt="Fotografia">
```

Esses caminhos são resolvidos em relação à localização do documento HTML.

### Navegação entre páginas

Considere a seguinte estrutura:

```text
meu-projeto/
├── index.html
├── sobre.html
└── contato.html
```

Podemos criar links relativos:

```html
<nav>
    <a href="index.html">Início</a>
    <a href="sobre.html">Sobre</a>
    <a href="contato.html">Contato</a>
</nav>
```

Quando o website estiver publicado como site de projeto, os links continuarão a funcionar dentro do diretório correspondente.

### GitHub Pages e frameworks

Além de HTML, CSS e JavaScript, o GitHub Pages pode hospedar os ficheiros estáticos gerados por ferramentas e frameworks frontend.

Exemplos:

- React.
- Vue.
- Vite.
- Geradores de websites estáticos.

Entretanto, esses projetos podem necessitar de um processo de build.

Por exemplo:

```bash
npm run build
```

Esse comando geralmente produz ficheiros estáticos prontos para publicação, dependendo da configuração do projeto.

O GitHub Pages hospeda o resultado estático, não o servidor de desenvolvimento utilizado durante a programação.

---

## 3. Configuração do Repositório no GitHub

### Criando um repositório

Para configurar um projeto no GitHub Pages:

1. Aceder ao GitHub.
2. Iniciar sessão.
3. Selecionar **New repository**.
4. Definir o nome do repositório.
5. Escolher a visibilidade.
6. Criar o repositório.

No plano GitHub Free, a publicação normal pelo GitHub Pages está disponível para repositórios públicos.

### Exemplo de repositório

```text
Nome:
meu-site

Visibilidade:
Public
```

Depois de criado, o repositório poderá armazenar os ficheiros do website.

### Enviando os ficheiros pelo navegador

Podemos carregar os ficheiros diretamente pelo GitHub.

1. Abrir o repositório.
2. Selecionar **Add file**.
3. Escolher **Upload files**.
4. Adicionar os ficheiros do projeto.
5. Escrever uma mensagem de commit.
6. Confirmar as alterações.

Essa abordagem é útil para projetos simples.

### Enviando os ficheiros com Git

Outra forma consiste em utilizar Git através do terminal.

Primeiro, abrir o terminal na pasta do projeto.

### Inicializar o repositório

```bash
git init
```

Esse comando inicializa um repositório Git local.

### Adicionar os ficheiros

```bash
git add .
```

O comando adiciona os ficheiros alterados à área de preparação (*staging area*).

### Criar um commit

```bash
git commit -m "Versão inicial do website"
```

O commit regista uma versão das alterações no histórico do projeto.

### Definir a branch principal

```bash
git branch -M main
```

O comando define o nome da branch atual como `main`.

### Associar o repositório remoto

```bash
git remote add origin https://github.com/usuario/meu-site.git
```

Substituir `usuario` pelo nome da conta e `meu-site` pelo nome do repositório.

### Enviar para o GitHub

```bash
git push -u origin main
```

Esse comando envia os commits para o repositório remoto.

### Resumo dos comandos

```bash
git init

git add .

git commit -m "Versão inicial do website"

git branch -M main

git remote add origin https://github.com/usuario/meu-site.git

git push -u origin main
```

**Observação:** esses comandos consideram um projeto local que ainda não possui um histórico Git configurado. Caso o repositório já tenha commits ou uma branch principal definida, o processo pode ser diferente.

### Ativando o GitHub Pages

Depois de enviar os ficheiros:

1. Abrir o repositório no GitHub.
2. Selecionar **Settings**.
3. No menu lateral, selecionar **Pages**.
4. Localizar a secção **Build and deployment**.
5. Em **Source**, selecionar **Deploy from a branch**.
6. Escolher a branch `main`.
7. Selecionar a pasta `/(root)`.
8. Clicar em **Save**.

### Configuração de publicação

```text
Settings
   |
   v
Pages
   |
   v
Build and deployment
   |
   v
Source: Deploy from a branch
   |
   v
Branch: main
   |
   v
Folder: /(root)
   |
   v
Save
```

### O que significa `/(root)`?

A opção **`/(root)`** indica que os ficheiros publicados estão na raiz da branch selecionada.

Exemplo:

```text
meu-site/
├── index.html
├── style.css
└── script.js
```

### Publicação a partir da pasta `/docs`

O GitHub Pages também permite utilizar a pasta `/docs` como origem de publicação através de uma branch.

Exemplo:

```text
meu-repositorio/
├── README.md
├── src/
└── docs/
    ├── index.html
    ├── style.css
    └── script.js
```

Nesse caso, a configuração poderá ser:

```text
Branch: main
Folder: /docs
```

A opção é útil quando o repositório contém outros ficheiros além do website.

### Publicação com GitHub Actions

O GitHub Pages também oferece publicação através do **GitHub Actions**.

Essa alternativa é utilizada quando o projeto necessita de:

- Instalar dependências.
- Executar comandos de build.
- Gerar ficheiros estáticos.
- Automatizar etapas de publicação.

O fluxo geral é:

```text
Código enviado ao GitHub
          |
          v
     GitHub Actions
          |
          v
    Instalar dependências
          |
          v
       Executar build
          |
          v
    Gerar ficheiros estáticos
          |
          v
      Publicar website
```

Para projetos simples de HTML, CSS e JavaScript, publicar diretamente a partir da branch costuma ser suficiente.

---

## 4. Publicação de Conteúdo no GitHub Pages

### Como funciona a publicação?

Depois de configurar a origem de publicação, o GitHub processa os ficheiros do website e disponibiliza o resultado através de uma URL.

Num repositório chamado:

```text
meu-site
```

Pertencente ao utilizador:

```text
usuario
```

A URL padrão do site de projeto será:

```text
https://usuario.github.io/meu-site/
```

### Processo de publicação

```text
        VS CODE
           |
           v
    Ficheiros do Projeto
           |
           v
        Git Commit
           |
           v
         Git Push
           |
           v
    Repositório GitHub
           |
           v
      GitHub Pages
           |
           v
    Website Publicado
```

### Como encontrar a URL?

Depois de ativar o GitHub Pages:

1. Abrir o repositório.
2. Aceder a **Settings → Pages**.
3. Consultar o endereço disponibilizado para o website.
4. Abrir o link no navegador.

A publicação pode levar algum tempo até ficar disponível.

### Atualizando um website publicado

Uma das vantagens do GitHub Pages é permitir atualizar o conteúdo através do mesmo repositório.

Depois de modificar os ficheiros:

```bash
git add .
```

Criar um novo commit:

```bash
git commit -m "Atualiza layout e estilos"
```

Enviar as alterações:

```bash
git push origin main
```

Quando a branch `main` está configurada como origem, o GitHub inicia o processo de publicação das alterações.

### Exemplo de atualização

**Versão inicial:**

```html
<h1>Meu Website</h1>
```

**Versão atualizada:**

```html
<h1>Meu Portfólio de Desenvolvimento Web</h1>

<p>
    Projetos desenvolvidos com HTML, CSS e JavaScript.
</p>
```

Depois de enviar a alteração para o GitHub, a versão publicada poderá ser atualizada automaticamente.

### Como verificar a publicação?

Podemos consultar a secção **Actions** do repositório.

O GitHub disponibiliza informações sobre a execução dos processos de publicação.

| Estado | Significado |
|---|---|
| Success | Processo concluído com sucesso |
| In progress | Processo em execução |
| Failure | Processo terminou com erro |
| Queued | Processo aguardando execução |

### Problemas comuns na publicação

#### Erro 404

O erro **404 — Not Found** indica que o recurso solicitado não foi encontrado.

Possíveis causas:

- URL incorreta.
- Publicação ainda não concluída.
- Ficheiro de entrada ausente.
- Branch configurada incorretamente.
- Pasta de publicação incorreta.
- Caminhos inválidos.

**Verificação:**

Confirmar que existe um ficheiro `index.html` na pasta configurada como origem da publicação.

#### CSS não carrega

Uma causa frequente é a utilização de caminhos incorretos.

**Exemplo problemático num site de projeto:**

```html
<link rel="stylesheet" href="/style.css">
```

**Exemplo relativo:**

```html
<link rel="stylesheet" href="style.css">
```

O segundo exemplo procura o ficheiro em relação à página atual.

#### Imagens não aparecem

Verificar:

- Nome do ficheiro.
- Extensão.
- Maiúsculas e minúsculas.
- Caminho relativo.
- Existência do ficheiro no repositório.

Por exemplo:

```html
<img src="assets/imagens/foto.jpg" alt="Fotografia">
```

É diferente de:

```html
<img src="assets/imagens/Foto.jpg" alt="Fotografia">
```

Em ambientes com distinção entre maiúsculas e minúsculas, esses caminhos podem apontar para ficheiros diferentes.

#### JavaScript não funciona

Podemos utilizar as ferramentas de desenvolvimento do navegador para verificar erros.

No Chrome:

```text
F12 → Console
```

Também podemos utilizar a aba **Network** para verificar se os ficheiros foram carregados corretamente.

### GitHub Pages e domínio personalizado

O GitHub Pages permite associar um domínio próprio ao website.

Por exemplo:

```text
https://www.meusite.com
```

Em vez de:

```text
https://usuario.github.io/meu-site/
```

Para isso, é necessário configurar o domínio nas definições do repositório e criar os registos DNS adequados no fornecedor do domínio.

### HTTPS

O GitHub Pages suporta HTTPS, permitindo estabelecer uma ligação encriptada entre o navegador e o website.

O HTTPS contribui para proteger a comunicação durante o acesso.

Entretanto, utilizar HTTPS não substitui outras medidas de segurança no desenvolvimento.

### Segurança na publicação

Ao publicar um website, devemos evitar incluir informações sensíveis no repositório e nos ficheiros enviados ao navegador.

Exemplos:

- Senhas.
- Tokens privados.
- Chaves secretas de APIs.
- Credenciais de bases de dados.
- Ficheiros com dados pessoais não destinados ao público.

Mesmo que um valor seja armazenado num ficheiro JavaScript ou num campo oculto, poderá ser inspecionado por quem visita o website.

### Aplicações do GitHub Pages

O serviço é particularmente útil para disponibilizar projetos frontend e partilhar resultados do desenvolvimento.

| Aplicação | Utilização |
|---|---|
| Portfólio | Apresentar competências e projetos |
| Landing Page | Divulgar serviços, conteúdos ou links |
| Documentação | Publicar guias e informações técnicas |
| Projeto académico | Disponibilizar trabalhos desenvolvidos |
| Website pessoal | Apresentar informações e contactos |
| Demonstração frontend | Mostrar interfaces e funcionalidades |

### Resumo do processo de publicação

```text
1. Criar os ficheiros HTML, CSS e JavaScript
                  |
                  v
2. Criar um repositório no GitHub
                  |
                  v
3. Enviar os ficheiros ao repositório
                  |
                  v
4. Aceder a Settings → Pages
                  |
                  v
5. Selecionar a origem de publicação
                  |
                  v
6. Guardar a configuração
                  |
                  v
7. Aguardar a conclusão da publicação
                  |
                  v
8. Aceder à URL do GitHub Pages
                  |
                  v
9. Atualizar o website através de commits
```

---

## Referências para Estudo

- [GitHub Pages — Documentação Oficial](https://docs.github.com/pt/pages)
- [O que é GitHub Pages?](https://docs.github.com/pt/pages/getting-started-with-github-pages/what-is-github-pages)
- [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart)
- [Configurar uma Fonte de Publicação](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Configurar um Domínio Personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Git — Documentação Oficial](https://git-scm.com/doc)
- [GitHub — Documentação Oficial](https://docs.github.com/)
