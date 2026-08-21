# Front-end, Back-end e Persistência de Dados

---

## 1. O que é front-end, back-end e persistência de dados

Qualquer aplicação de software um pouco mais completa — seja um site, uma app de telemóvel ou um sistema empresarial — costuma estar dividida em **camadas com responsabilidades diferentes e bem separadas**. Esta separação (chamada **segregação de responsabilidades**) é uma das ideias mais fundamentais da engenharia de software, e as três camadas mais comuns são o front-end, o back-end e a persistência de dados.

### Front-end (camada de apresentação)
É a parte do software com a qual o utilizador **interage diretamente** — tudo o que se vê e se toca no ecrã: botões, formulários, textos, imagens, animações, mensagens de erro, etc.

**Responsabilidades típicas do front-end:**
- Apresentar a informação de forma clara e organizada
- Capturar as ações e os dados introduzidos pelo utilizador (ex: preencher um formulário, clicar num botão)
- Validar dados de forma imediata (ex: avisar que um e-mail está mal formatado, antes mesmo de enviar o pedido ao servidor)
- Comunicar com o back-end para pedir ou enviar informação

**Tecnologias comuns:** HTML, CSS, JavaScript, e frameworks como React, Vue ou Angular.

### Back-end (camada de lógica de negócio)
É a parte do software que corre **do lado do servidor**, invisível diretamente ao utilizador, responsável por processar pedidos, aplicar as regras de negócio e decidir o que fazer com os dados.

**Responsabilidades típicas do back-end:**
- Receber pedidos vindos do front-end (ex: "criar uma nova conta", "processar um pagamento")
- Aplicar **regras de negócio** (ex: "um utilizador só pode fazer login se a password estiver correta", "um pedido só pode ser confirmado se houver stock disponível")
- Validar e processar os dados de forma segura (validações que não podem depender só do front-end, já que o front-end pode ser manipulado pelo utilizador)
- Comunicar com a camada de persistência de dados para guardar ou ler informação
- Gerir autenticação, autorização e segurança de acesso

**Tecnologias comuns:** PHP, Python, Java, Node.js, C#, entre outras.

### Persistência de dados (camada de armazenamento)
É a camada responsável por **guardar a informação de forma duradoura**, para que não se perca quando a aplicação é fechada, reiniciada, ou quando o servidor é desligado.

**Responsabilidades típicas da persistência de dados:**
- Guardar e organizar os dados de forma estruturada (ex: tabelas, relações entre entidades)
- Garantir a integridade dos dados (ex: não permitir dois utilizadores com o mesmo e-mail, se essa for uma regra do sistema)
- Permitir consultas eficientes, mesmo com grandes volumes de dados
- Manter os dados seguros e, idealmente, com cópias de segurança (backups)

**Tecnologias comuns:** bases de dados relacionais como MySQL, PostgreSQL, SQL Server, ou bases de dados não-relacionais como MongoDB, DynamoDB (ver `01_aws.md`, sobre RDS e DynamoDB na AWS).

### Por que separar estas responsabilidades?

Esta segregação traz vantagens importantes:

- **Especialização de equipas**: uma pessoa pode focar-se em construir boas interfaces (front-end), outra em regras de negócio e segurança (back-end), outra em modelação e otimização de dados (persistência) — sem que uma equipa precise de dominar tudo.
- **Manutenção mais simples**: alterar a aparência de um botão não deveria exigir mexer na lógica de pagamentos, e vice-versa — cada camada pode evoluir de forma relativamente independente.
- **Reutilização**: o mesmo back-end pode servir várias aplicações de front-end diferentes ao mesmo tempo (ex: uma app web e uma app móvel, ambas a consumir a mesma API).
- **Segurança**: regras críticas de negócio ficam protegidas no back-end, num ambiente controlado pelo servidor, em vez de dependerem só de validações feitas no front-end (que o utilizador pode contornar facilmente, já que corre no seu próprio dispositivo).

### Visão geral do fluxo entre as três camadas

```
Utilizador
   │
   ▼
Front-end (interface, captura ações do utilizador)
   │  pede/envia dados
   ▼
Back-end (aplica regras de negócio, processa o pedido)
   │  lê/grava dados
   ▼
Persistência de Dados (base de dados, guarda tudo de forma duradoura)
```

---

## 2. Integrações com API — exemplo simples de GET e POST

A comunicação entre o front-end e o back-end (mencionada no fluxo acima) acontece, na grande maioria dos sistemas modernos, através de uma **API (Application Programming Interface)**.

### O que é uma API, nesse contexto
Uma API é, de forma simples, um **conjunto de regras que define como duas partes de um sistema podem conversar entre si** — neste caso, como o front-end pode pedir ou enviar dados ao back-end, sem precisar de saber como o back-end funciona por dentro (só precisa de saber "a que porta bater" e "o que dizer").

O modelo mais comum de API na web é a **API REST**, que usa o protocolo **HTTP** (o mesmo protocolo usado para carregar páginas web) para comunicar, através de diferentes **métodos (verbos HTTP)**, sendo os mais usados:

| Método | Função | Exemplo |
|---|---|---|
| **GET** | Pedir/ler dados existentes | Obter a lista de produtos de uma loja |
| **POST** | Enviar/criar novos dados | Criar uma nova conta de utilizador |
| **PUT / PATCH** | Atualizar dados existentes | Alterar a morada de entrega de um pedido |
| **DELETE** | Remover dados existentes | Apagar um item do carrinho de compras |

### Exemplo simples: GET (ler dados)

Imagine uma aplicação simples que mostra uma lista de utilizadores. O front-end faz um pedido **GET** ao back-end, pedindo essa informação:

```javascript
// Front-end (JavaScript) — pedido GET a uma API
fetch('https://api.exemplo.com/utilizadores')
  .then(response => response.json())
  .then(dados => {
    console.log(dados); 
    // Ex: [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bruno" }]
  });
```

Por trás deste pedido, o back-end recebe o pedido GET, vai à base de dados buscar a lista de utilizadores, e devolve essa informação normalmente em formato **JSON** (um formato de texto simples e estruturado, fácil de ler tanto por humanos como por máquinas).

```
Front-end                Back-end                 Base de Dados
    │  GET /utilizadores     │                          │
    │ ──────────────────────▶│                          │
    │                        │  SELECT * FROM utilizadores
    │                        │ ────────────────────────▶│
    │                        │◀──────────────────────── │
    │◀────────────────────── │ (lista de utilizadores)  │
    │  (JSON com os dados)   │                          │
```

### Exemplo simples: POST (enviar/criar dados)

Agora imagine que a mesma aplicação tem um formulário para **criar um novo utilizador**. O front-end recolhe os dados preenchidos e envia-os através de um pedido **POST**:

```javascript
// Front-end (JavaScript) — pedido POST a uma API
fetch('https://api.exemplo.com/utilizadores', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: "Carla", email: "carla@exemplo.com" })
})
  .then(response => response.json())
  .then(resultado => {
    console.log(resultado); 
    // Ex: { id: 3, nome: "Carla", email: "carla@exemplo.com" }
  });
```

Neste caso, o back-end recebe os dados enviados no **corpo (body)** do pedido, aplica as regras de negócio necessárias (ex: verificar se o e-mail já existe, validar o formato dos dados), e só depois **grava** essa informação na base de dados:

```
Front-end                  Back-end                    Base de Dados
    │  POST /utilizadores       │                            │
    │  { nome, email }          │                            │
    │ ─────────────────────────▶│                            │
    │                           │  valida regras de negócio  │
    │                           │  INSERT INTO utilizadores   │
    │                           │ ──────────────────────────▶│
    │                           │◀────────────────────────── │
    │◀───────────────────────── │ (confirmação + novo ID)    │
    │  (JSON com o novo registo)│                            │
```

### Juntando tudo: onde entra cada camada

- O **front-end** é responsável por montar o pedido (GET ou POST), enviar os dados corretos, e depois mostrar a resposta ao utilizador de forma amigável.
- O **back-end** é responsável por receber esse pedido, aplicar todas as regras de negócio necessárias (ex: "este e-mail já existe?", "este utilizador tem permissão para fazer isto?"), e comunicar com a base de dados.
- A **persistência de dados** é responsável por efetivamente guardar (no caso do POST) ou devolver (no caso do GET) a informação pedida, de forma estruturada e duradoura.

Este ciclo — front-end pede/envia via API, back-end processa e aplica regras, persistência guarda/devolve os dados — é o padrão de comunicação que sustenta praticamente qualquer aplicação web ou móvel moderna, e é também a mesma lógica por trás de integrações mais avançadas, como uma função **AWS Lambda** a ser acionada por um pedido feito através do **API Gateway**.

---

## Resumo em uma frase

> Um software completo divide-se em front-end (interface com o utilizador), back-end (regras de negócio e processamento) e persistência de dados (armazenamento duradouro), comunicando entre si através de APIs que usam métodos HTTP como GET (para ler dados) e POST (para criar novos dados), permitindo que cada camada evolua de forma independente e especializada.

---

## Conceitos relacionados para estudar a seguir

- **Arquitetura REST em profundidade** — códigos de status HTTP (200, 404, 500, etc.), autenticação em APIs (tokens, JWT)
- **PUT vs. PATCH** — diferenças entre atualizar um recurso por completo ou parcialmente
- **ORMs (Object-Relational Mapping)** — ferramentas que facilitam a comunicação entre o back-end e a base de dados, sem escrever SQL manualmente
- **Arquitetura de microsserviços** — como dividir um back-end único em vários serviços menores, cada um com a sua própria API
- **CORS (Cross-Origin Resource Sharing)** — regra de segurança que controla quais front-ends podem comunicar com um determinado back-end