
# Internet — Fundamentos do Desenvolvimento Frontend

---

## 1. História da Internet

### O que é a Internet?

A **Internet** é uma rede mundial de computadores e dispositivos interligados que comunicam através de protocolos padronizados, principalmente o conjunto **TCP/IP (Transmission Control Protocol / Internet Protocol)**.

A Internet permite a comunicação entre diferentes sistemas, possibilitando serviços como:

- Navegação em websites.
- Envio de e-mails.
- Transferência de ficheiros.
- Comunicação em tempo real.
- Streaming de áudio e vídeo.
- Aplicações web e serviços em nuvem.

### Origem da Internet

A história da Internet começou com pesquisas sobre redes de computadores durante a década de 1960.

Um dos projetos mais importantes foi a **ARPANET**, desenvolvida com financiamento da ARPA, uma agência de pesquisa do Departamento de Defesa dos Estados Unidos.

A ARPANET começou a funcionar em 1969, interligando instituições de pesquisa e permitindo a comunicação entre computadores distantes.

### Evolução histórica

| Ano | Acontecimento |
|---|---|
| 1969 | Início da ARPANET |
| 1971 | Desenvolvimento de sistemas de e-mail em rede |
| 1974 | Publicação de conceitos fundamentais do TCP |
| 1983 | Transição da ARPANET para TCP/IP |
| 1989 | Tim Berners-Lee propõe a World Wide Web |
| 1990 | Desenvolvimento do primeiro servidor e navegador web |
| 1991 | A World Wide Web começa a ser disponibilizada publicamente |
| 1993 | Lançamento do navegador Mosaic, que ajudou a popularizar a Web |
| 1994 | Fundação do W3C |
| Anos 2000 | Expansão da banda larga e das aplicações web |
| Anos 2010 | Crescimento da navegação móvel e dos serviços em nuvem |
| Anos 2020 | Expansão das aplicações web avançadas e da integração com IA |

### Internet vs. World Wide Web

Embora sejam frequentemente utilizados como sinónimos, **Internet e Web não são a mesma coisa**.

**Internet**

É a infraestrutura de redes que permite a comunicação entre computadores e dispositivos.

**World Wide Web (WWW)**

É um sistema de documentos e recursos interligados, acessíveis principalmente através de navegadores e protocolos como HTTP e HTTPS.

| Internet | World Wide Web |
|---|---|
| Infraestrutura global de redes | Serviço que funciona sobre a Internet |
| Utiliza TCP/IP | Utiliza principalmente HTTP/HTTPS |
| Suporta diversos serviços | Disponibiliza websites e aplicações web |
| Surgiu antes da Web | Foi proposta em 1989 |

### Como funciona a Internet?

Quando um utilizador acede a um website, o navegador comunica com servidores através da rede.

**Exemplo simplificado:**

```text
             UTILIZADOR
                 |
                 v
              BROWSER
                 |
                 v
          REQUISIÇÃO HTTP
                 |
                 v
              INTERNET
                 |
                 v
             SERVIDOR
                 |
                 v
           RESPOSTA HTTP
                 |
                 v
              BROWSER
                 |
                 v
          EXIBE A PÁGINA
```

### Principais protocolos

| Protocolo | Finalidade |
|---|---|
| IP | Endereçamento e encaminhamento de pacotes |
| TCP | Transporte confiável de dados |
| UDP | Transporte de datagramas |
| HTTP | Comunicação entre clientes e servidores web |
| HTTPS | Comunicação HTTP protegida por TLS |
| DNS | Tradução de nomes de domínio para endereços IP |
| SMTP | Envio de e-mails |
| FTP | Transferência de ficheiros |

O conhecimento desses protocolos ajuda a compreender como as aplicações frontend comunicam com os servidores.

---

## 2. W3C

### O que é W3C?

O **W3C (World Wide Web Consortium)** é uma organização internacional responsável pelo desenvolvimento de padrões e recomendações para a Web.

Foi fundado em **1994 por Tim Berners-Lee**, criador da World Wide Web.

O seu objetivo é promover uma Web interoperável, acessível e sustentável.

### Qual é a importância do W3C?

O W3C desenvolve padrões e recomendações que ajudam diferentes tecnologias e navegadores a trabalhar de maneira consistente.

Entre as áreas em que atua estão:

- HTML e tecnologias relacionadas.
- CSS.
- Acessibilidade web.
- Internacionalização.
- Tecnologias de dados e formatos web.
- Privacidade e segurança.

**Observação:** a evolução atual do padrão HTML é conduzida principalmente pelo WHATWG, com o HTML Living Standard. O W3C continua a desempenhar um papel fundamental em muitos outros padrões web.

### Padronização da Web

Imagine que cada navegador interpretasse HTML e CSS de maneira completamente diferente.

Os desenvolvedores precisariam criar uma versão do website para cada navegador.

Os padrões procuram reduzir essas incompatibilidades.

```text
                PADRÕES WEB
                    |
          +---------+---------+
          |         |         |
          v         v         v
         HTML      CSS     ACESSIBILIDADE
          |         |         |
          +---------+---------+
                    |
                    v
             INTEROPERABILIDADE
                    |
                    v
           DIFERENTES NAVEGADORES
```

### Acessibilidade — WAI

A **WAI (Web Accessibility Initiative)** é uma iniciativa do W3C dedicada à acessibilidade web.

Uma das suas principais referências são as **WCAG (Web Content Accessibility Guidelines)**.

As WCAG são diretrizes para tornar conteúdos web mais acessíveis a pessoas com diferentes necessidades.

### Os quatro princípios das WCAG

| Princípio | Significado |
|---|---|
| Perceptível | O conteúdo deve poder ser percebido |
| Operável | A interface deve permitir interação |
| Compreensível | As informações devem ser claras |
| Robusto | O conteúdo deve funcionar com diferentes tecnologias, incluindo tecnologias de apoio |

### Exemplos de boas práticas

**Imagens com texto alternativo:**

```html
<img src="praia.jpg" alt="Praia com areia branca e mar azul">
```

**Campos de formulário identificados:**

```html
<label for="email">E-mail:</label>
<input type="email" id="email" name="email">
```

**Utilização de elementos semânticos:**

```html
<header>
    <h1>Meu Website</h1>
</header>

<main>
    <section>
        <h2>Sobre o projeto</h2>
        <p>Descrição do conteúdo.</p>
    </section>
</main>
```

Essas práticas melhoram a organização e podem facilitar a utilização das páginas por leitores de ecrã e outras tecnologias de apoio.

### W3C no Desenvolvimento Frontend

Para um desenvolvedor frontend, conhecer os padrões web é importante porque contribui para:

- Criar páginas compatíveis com diferentes navegadores.
- Desenvolver interfaces acessíveis.
- Utilizar corretamente HTML e CSS.
- Reduzir problemas de compatibilidade.
- Melhorar a manutenção dos projetos.

**Referência:** [W3C — Website Oficial](https://www.w3.org/)

---

## 3. Browser

### O que é um Browser?

Um **browser (navegador web)** é um software que permite aceder, interpretar e apresentar conteúdos disponíveis na Web.

Os navegadores processam documentos HTML, estilos CSS e código JavaScript para construir interfaces com as quais os utilizadores podem interagir.

### Exemplos de navegadores

- Google Chrome.
- Mozilla Firefox.
- Microsoft Edge.
- Apple Safari.
- Opera.
- Brave.

### Como funciona um navegador?

Quando um endereço é introduzido na barra de navegação, o browser realiza diferentes operações.

**Funcionamento simplificado:**

1. O utilizador informa uma URL.
2. O navegador identifica o servidor de destino, recorrendo ao DNS quando necessário.
3. Estabelece a comunicação com o servidor.
4. Envia uma requisição HTTP ou HTTPS.
5. Recebe os recursos da página.
6. Interpreta HTML e CSS.
7. Executa JavaScript conforme necessário.
8. Apresenta o resultado ao utilizador.

### Estrutura de uma URL

Considere o endereço:

```text
https://www.exemplo.com/produtos?id=10
```

Podemos identificar:

| Componente | Exemplo | Significado |
|---|---|---|
| Protocolo | `https` | Forma de comunicação |
| Domínio | `www.exemplo.com` | Identificação do servidor |
| Caminho | `/produtos` | Recurso solicitado |
| Query String | `?id=10` | Parâmetro da requisição |

### O papel do navegador no Frontend

O navegador é responsável por apresentar a interface e disponibilizar recursos para a execução de aplicações web.

Entre as principais funcionalidades estão:

- Interpretação de HTML.
- Processamento de CSS.
- Execução de JavaScript.
- Manipulação do DOM.
- Gestão de eventos.
- Comunicação com APIs.
- Armazenamento local.
- Aplicação de mecanismos de segurança.

### DOM — Document Object Model

O **DOM**, estudado no módulo de Desenvolvimento Dinâmico, representa o documento HTML através de uma estrutura de objetos.

O JavaScript pode utilizar essa representação para modificar a página.

**HTML:**

```html
<h1 id="titulo">Título original</h1>
```

**JavaScript:**

```js
const titulo = document.getElementById("titulo");

titulo.textContent = "Título alterado!";
```

O navegador atualiza o conteúdo apresentado.

### Ferramentas de Desenvolvimento — DevTools

Os navegadores modernos disponibilizam ferramentas para inspecionar e depurar aplicações web.

No Chrome e no Edge, podemos abrir as ferramentas de desenvolvimento pressionando `F12`.

**Principais separadores:**

| Separador | Utilização |
|---|---|
| Elements | Inspecionar HTML e CSS |
| Console | Executar JavaScript e visualizar mensagens |
| Sources | Inspecionar e depurar código |
| Network | Analisar requisições HTTP |
| Application | Consultar armazenamento e outros recursos |
| Performance | Analisar desempenho |

### Exemplo prático

No separador Console, podemos executar:

```js
console.log("Olá, navegador!");

console.log(document.title);

console.log(window.innerWidth);
```

Também podemos consultar um elemento:

```js
const titulo = document.querySelector("h1");

console.log(titulo);
```

Essas ferramentas são essenciais para identificar problemas em aplicações frontend.

---

## 4. Motores

### O que são motores no contexto da Web?

No desenvolvimento web, o termo **motor (Engine)** pode referir-se a diferentes tecnologias.

Dois conceitos importantes são:

1. **Motores de renderização:** utilizados pelos navegadores para interpretar e apresentar páginas.
2. **Motores de pesquisa:** serviços utilizados para localizar informações na Web.

É importante compreender a diferença entre eles.

### 4.1 Motores de Renderização

Um **motor de renderização (Rendering Engine)** é um componente do navegador responsável por interpretar documentos e produzir a representação visual da página.

Entre as suas funções estão:

- Interpretar HTML.
- Processar CSS.
- Construir estruturas internas do documento.
- Calcular o layout.
- Preparar a apresentação visual.

### Principais motores de renderização

| Motor | Navegadores associados |
|---|---|
| Blink | Chrome, Edge, Opera e Brave |
| Gecko | Firefox |
| WebKit | Safari |

A tecnologia utilizada pode variar conforme a plataforma e as características do navegador.

### Processo de renderização

```text
              HTML
                |
                v
               DOM
                |
                +----------+
                |          |
                |         CSS
                |          |
                |          v
                |         CSSOM
                |          |
                +-----+----+
                      |
                      v
                RENDER TREE
                      |
                      v
                    LAYOUT
                      |
                      v
                    PAINT
                      |
                      v
                 COMPOSITING
                      |
                      v
                PÁGINA VISUAL
```

**DOM (Document Object Model)**

Representa a estrutura do documento HTML.

**CSSOM (CSS Object Model)**

Representa os estilos CSS interpretados.

**Render Tree**

Reúne as informações necessárias para apresentar os elementos visuais.

**Layout**

Calcula posições e dimensões dos elementos.

**Paint**

Produz instruções de desenho dos elementos.

**Compositing**

Combina camadas visuais para apresentar o resultado.

Esse é um modelo simplificado. Os motores modernos utilizam otimizações e pipelines internos mais complexos.

### 4.2 Motores JavaScript

Além do motor de renderização, o navegador possui um **motor JavaScript (JavaScript Engine)**.

Ele é responsável por executar o código JavaScript.

### Principais motores JavaScript

| Motor JavaScript | Utilização |
|---|---|
| V8 | Chrome, Edge e Node.js |
| SpiderMonkey | Firefox |
| JavaScriptCore | Safari |

### Motor de Renderização vs. Motor JavaScript

| Motor de Renderização | Motor JavaScript |
|---|---|
| Processa a apresentação da página | Executa código JavaScript |
| Trabalha com HTML e CSS | Trabalha com instruções JavaScript |
| Calcula layout e elementos visuais | Executa funções e operações |
| Exemplo: Blink | Exemplo: V8 |

Esses componentes trabalham em conjunto.

Por exemplo, o JavaScript pode modificar o DOM, fazendo com que o navegador precise atualizar partes da apresentação visual.

### 4.3 Motores de Pesquisa

Um **motor de pesquisa (Search Engine)** é um serviço que permite encontrar informações disponíveis na Web.

Exemplos:

- Google.
- Bing.
- DuckDuckGo.

### Como funcionam os motores de pesquisa?

De forma simplificada, os motores de pesquisa realizam três atividades principais.

**1. Rastreamento (Crawling)**

Sistemas automatizados, conhecidos como crawlers, procuram páginas e recursos disponíveis na Web.

**2. Indexação (Indexing)**

As informações recolhidas são analisadas e podem ser organizadas em índices de pesquisa.

**3. Classificação (Ranking)**

Os resultados são ordenados conforme diferentes critérios de relevância e qualidade.

```text
             WEB
              |
              v
          CRAWLING
              |
              v
          INDEXAÇÃO
              |
              v
         BASE DE ÍNDICES
              |
              v
       PESQUISA DO UTILIZADOR
              |
              v
            RANKING
              |
              v
       RESULTADOS DE PESQUISA
```

### SEO — Search Engine Optimization

O **SEO (Otimização para Motores de Pesquisa)** consiste num conjunto de práticas utilizadas para melhorar a capacidade de descoberta e compreensão das páginas pelos motores de pesquisa.

No frontend, algumas práticas importantes incluem:

- Utilizar HTML semântico.
- Criar títulos descritivos.
- Definir metadados adequados.
- Organizar corretamente os níveis de títulos.
- Utilizar URLs compreensíveis.
- Melhorar o desempenho.
- Garantir boa experiência em dispositivos móveis.

**Exemplo:**

```html
<head>
    <meta charset="UTF-8">

    <title>Curso de JavaScript — Fundamentos</title>

    <meta
        name="description"
        content="Aprenda os fundamentos de JavaScript e desenvolvimento web."
    >
</head>
```

O elemento `<title>` identifica o documento, enquanto a meta description fornece uma descrição que os motores de pesquisa podem utilizar.

**Importante:** aplicar boas práticas de SEO não garante uma posição específica nos resultados de pesquisa.

---

## 5. Integração dos Conceitos

Os conceitos estudados neste módulo estão diretamente relacionados.

```text
                  INTERNET
                     |
                     v
                WORLD WIDE WEB
                     |
          +----------+----------+
          |                     |
          v                     v
       PADRÕES W3C         MOTORES DE PESQUISA
          |                     |
          v                     v
      HTML / CSS /             INDEXAÇÃO
     ACESSIBILIDADE
          |
          v
        BROWSER
          |
    +-----+------+
    |            |
    v            v
 MOTOR DE       MOTOR
 RENDERIZAÇÃO   JAVASCRIPT
    |            |
    +-----+------+
          |
          v
      INTERFACE WEB
```

### Exemplo prático

Imagine que um utilizador procura um website de cursos.

1. Utiliza um motor de pesquisa para encontrar o website.
2. Abre o resultado num navegador.
3. O navegador realiza uma requisição ao servidor.
4. O servidor devolve os recursos necessários.
5. O motor de renderização processa HTML e CSS.
6. O motor JavaScript executa os scripts.
7. A interface é apresentada e pode responder às interações do utilizador.

Essa sequência demonstra como a infraestrutura da Internet, os padrões web, os navegadores e os diferentes motores trabalham em conjunto.

---

## 6. Exercícios para Praticar

### Exercício 1 — História da Internet

Explique a diferença entre ARPANET, Internet e World Wide Web.

### Exercício 2 — W3C

Pesquise a finalidade do W3C e explique por que a padronização é importante para o desenvolvimento frontend.

### Exercício 3 — Browser

Escolha dois navegadores e identifique:

- O motor de renderização utilizado.
- O motor JavaScript.
- As principais ferramentas de desenvolvimento.

### Exercício 4 — DevTools

Abra uma página no navegador e utilize as ferramentas de desenvolvimento para:

1. Inspecionar um elemento HTML.
2. Alterar temporariamente uma propriedade CSS.
3. Executar um comando JavaScript na consola.
4. Consultar uma requisição no separador Network.

### Exercício 5 — Motores de Pesquisa

Explique as diferenças entre:

- Crawling.
- Indexação.
- Ranking.

### Exercício 6 — SEO Básico

Crie uma página HTML contendo:

- Um título descritivo.
- Uma meta description.
- Um `<h1>`.
- Uma imagem com texto alternativo.
- Uma estrutura semântica com `<header>`, `<main>` e `<footer>`.

---

## Resumo em uma frase

> A Internet é uma infraestrutura mundial de comunicação entre redes que possibilitou o desenvolvimento da World Wide Web, enquanto organizações como o W3C promovem padrões de interoperabilidade e acessibilidade, os browsers permitem consultar e interagir com páginas web através de motores de renderização e execução JavaScript, e os motores de pesquisa ajudam a localizar e organizar informações disponíveis na Web.

---

## Conceitos Relacionados para Estudar a Seguir

- **HTTP e HTTPS** — compreender a comunicação entre navegadores e servidores.

- **DNS** — estudar a resolução de nomes de domínio.

- **Cliente e Servidor** — compreender a arquitetura fundamental das aplicações web.

- **HTML5** — aprofundar a estruturação semântica de documentos.

- **CSS3** — estudar os estilos e mecanismos de layout.

- **JavaScript** — compreender a execução de scripts no navegador.

- **DOM e CSSOM** — aprofundar as estruturas utilizadas na apresentação das páginas.

- **SEO** — estudar técnicas de otimização para motores de pesquisa.

- **Acessibilidade Web** — conhecer as diretrizes WCAG e as práticas de inclusão digital.

- **DevTools** — aprender técnicas de depuração e análise de aplicações frontend.

---

## Referências para Estudo

- [W3C — World Wide Web Consortium](https://www.w3.org/)
- [W3C — Web Accessibility Initiative](https://www.w3.org/WAI/)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)
- [MDN — Como a Web Funciona](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [MDN — Introdução à Web](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Your_first_website)
- [Google Search Central — Fundamentos de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [CERN — História da World Wide Web](https://home.cern/science/computing/birth-web)
