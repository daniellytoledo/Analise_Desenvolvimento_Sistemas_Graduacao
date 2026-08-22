# Docker: Dockerfile, Camadas, Tags e Repositórios

> Este ficheiro dá continuidade ao conteúdo de `03_docker_introducao.md`, aprofundando como as imagens Docker são efetivamente construídas, organizadas e distribuídas.

---

## 1. O que é um Dockerfile

Um **Dockerfile** é um ficheiro de texto simples (sem extensão, chamado literalmente `Dockerfile`) que contém uma **sequência de instruções** descrevendo, passo a passo, como construir uma imagem Docker (ver `03_docker_introducao.md`, ponto 3, sobre do que é feita uma imagem).

### Por que usar um Dockerfile
Em vez de criar uma imagem manualmente (instalando programas dentro de um contentor já em execução, um a um), o Dockerfile permite **automatizar e documentar** todo esse processo num único ficheiro, trazendo vantagens importantes:

- **Reprodutibilidade**: qualquer pessoa (ou qualquer servidor, ou qualquer pipeline de CI/CD — ver `01_eficiencia_operacional_entrega_software.md`) consegue construir exatamente a mesma imagem, a partir do mesmo Dockerfile, sempre com o mesmo resultado.
- **Versionamento**: como é apenas um ficheiro de texto, o Dockerfile pode (e deve) ser guardado no controlo de versões (Git/SCM), junto com o resto do código da aplicação.
- **Transparência**: qualquer pessoa consegue ler o Dockerfile e perceber exatamente o que compõe aquela imagem, sem precisar de "adivinhar" o que foi instalado manualmente.

### Estrutura geral
Um Dockerfile é composto por **instruções**, escritas em maiúsculas por convenção (`FROM`, `RUN`, `EXPOSE`, `CMD`, entre outras), cada uma numa linha, executadas **de cima para baixo**, na ordem em que aparecem no ficheiro.

---

## 2. Layered system — o que são as camadas de uma imagem

Antes de explicar como construir uma imagem a partir de um Dockerfile, é importante perceber um conceito que influencia diretamente como esse ficheiro deve ser escrito: o **sistema de camadas (layered system)**.

### Como funciona
Cada instrução de um Dockerfile que **modifica o sistema de ficheiros** (principalmente `RUN`, mas também `COPY` e `ADD`) cria uma nova **camada (layer)**, empilhada sobre a anterior. A imagem final é, na prática, o resultado de todas essas camadas sobrepostas.

```
Dockerfile:                     Imagem resultante (camadas empilhadas):
FROM ubuntu:18.04        →      ┌───────────────────────┐
RUN apt-get update       →      │ Camada 3: apt update   │
RUN apt-get install nginx →     │ Camada 2: instala nginx│
                                 ├───────────────────────┤
                                 │ Camada 1: Ubuntu 18.04 │
                                 └───────────────────────┘
```

### Exemplo: várias camadas (menos eficiente)
```dockerfile
FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install -y nginx
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*
```
Neste exemplo, **cada `RUN` separado cria a sua própria camada**. Isto tem duas consequências práticas:
- A imagem final acaba maior, porque ficheiros temporários criados numa camada (ex: pelo `apt-get update`) continuam a "existir" no histórico de camadas, mesmo que sejam apagados numa camada seguinte (`rm -rf`) — a camada anterior já ficou registada com esses ficheiros.
- Mais camadas geralmente significam mais overhead e uma imagem final menos otimizada.

### Exemplo: uma única camada combinada (boa prática)
```dockerfile
FROM ubuntu:18.04
RUN apt-get update \
    && apt-get install -y nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```
Aqui, ao combinar todos os comandos num **único `RUN`** (usando `&&` para os encadear, e `\` apenas para quebrar a linha visualmente), tudo acontece **dentro da mesma camada**. Isto significa que os ficheiros temporários criados e depois removidos (`rm -rf`) **nunca chegam a ficar registados permanentemente** no histórico da imagem, resultando numa imagem final mais leve.

### É boa prática?
**Sim** — combinar instruções relacionadas num único `RUN` (especialmente instalação + limpeza de ficheiros temporários) é considerada uma **boa prática recomendada** para manter imagens Docker mais leves e eficientes. É exatamente este o padrão usado no exemplo de Dockerfile analisado no ponto seguinte.

> Nem sempre menos camadas é sempre melhor — separar `RUN`s pode, por vezes, ajudar a aproveitar melhor a **cache de build** do Docker (se só uma instrução específica mudar, o Docker pode reutilizar as camadas anteriores já construídas). O equilíbrio ideal depende do contexto, mas para instalação + limpeza no mesmo passo, juntar num só `RUN` é quase sempre preferível.

---

## 3. Construir uma imagem a partir do Dockerfile (VSCode + `docker build`)

Com os conceitos de Dockerfile e camadas entendidos, o próximo passo é analisar um exemplo real, linha a linha, e depois construir a imagem através do terminal.

### Criar o ficheiro no VSCode
1. Abrir o VSCode na pasta do projeto.
2. Criar um novo ficheiro chamado exatamente **`Dockerfile`** (sem extensão).
3. Escrever as instruções de construção da imagem.

### Exemplo de Dockerfile, explicado linha a linha

```dockerfile
FROM ubuntu:18.04
RUN apt-get update \
	&& apt-get install -y nginx \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
	&& echo "daemon off;" >> /etc/nginx/nginx.conf
	
EXPOSE 80
CMD ["nginx"]
```

**`FROM ubuntu:18.04`**
Define a **imagem base** a partir da qual esta nova imagem vai ser construída — neste caso, a versão **18.04** do Ubuntu (a tag `18.04` especifica a versão exata, evitando o comportamento imprevisível da tag `latest`, ver ponto 6). Toda instrução `Dockerfile` tem de começar com um `FROM`.

**`RUN apt-get update \`**
Inicia um comando que corre **dentro** da imagem, durante a sua construção — neste caso, atualiza a lista de pacotes disponíveis no gestor de pacotes do Ubuntu (`apt-get`). O `\` no final da linha serve apenas para continuar o mesmo comando na linha seguinte, por questões de legibilidade.

**`&& apt-get install -y nginx \`**
Instala o **Nginx** (servidor web), estando encadeado ao comando anterior através do `&&` — isto garante que todos estes comandos corram **dentro da mesma camada** (ver ponto 2), em vez de cada um criar a sua própria camada separada. O `-y` responde automaticamente "sim" a qualquer confirmação que o instalador pediria interativamente.

**`&& apt-get clean \`**
Remove ficheiros de cache do próprio gestor de pacotes (`apt-get`), que já não são necessários depois da instalação — ajuda a reduzir o tamanho final da imagem.

**`&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \`**
Remove manualmente ficheiros temporários adicionais deixados durante o processo de instalação (listas de pacotes já usadas, ficheiros temporários gerais) — outra medida para manter a imagem o mais leve possível.

**`&& echo "daemon off;" >> /etc/nginx/nginx.conf`**
Adiciona a linha `daemon off;` ao ficheiro de configuração do Nginx. Isto é importante porque, por padrão, o Nginx corre como um **processo em segundo plano (daemon)** — mas um contentor Docker precisa que o processo principal continue **em primeiro plano**, ou o contentor entende que "o trabalho terminou" e desliga-se imediatamente após iniciar. Esta linha garante que o Nginx se mantém ativo em primeiro plano, mantendo o contentor vivo.

**`EXPOSE 80`**
Documenta que esta imagem espera que a aplicação lá dentro (o Nginx) esteja à escuta na **porta 80**. É importante perceber que `EXPOSE` **não abre, por si só, a porta para fora do contentor** — é apenas uma informação/documentação da imagem; a exposição real para o exterior continua a depender do uso do parâmetro `-p` no momento de correr o contentor (ver `03_docker_introducao.md`, ponto 7).

**`CMD ["nginx"]`**
Define o **comando padrão** que é executado automaticamente sempre que um contentor é criado a partir desta imagem — neste caso, inicia o Nginx. Ao contrário do `RUN` (que corre durante a *construção* da imagem), o `CMD` só corre quando o contentor é efetivamente *iniciado*.

### Construir a imagem com `docker build`

Estando dentro da pasta onde o `Dockerfile` foi guardado, o comando para construir a imagem é:

```
docker build -t minha-imagem:1.0 .
```

- **`docker build`** — instrução que constrói uma imagem a partir de um Dockerfile.
- **`-t minha-imagem:1.0`** — define o **nome e a tag** da imagem resultante (ver ponto 6, sobre tageamento) — sem isto, a imagem ficaria apenas com um identificador numérico difícil de reconhecer.
- **`.`** (o ponto final) — indica o **contexto de build**, ou seja, a pasta onde o Docker deve procurar o `Dockerfile` e quaisquer outros ficheiros necessários (ex: código da aplicação a copiar) — neste caso, a pasta atual.

Após correr este comando, o Docker executa cada instrução do Dockerfile, uma a uma, criando as camadas correspondentes, e no final regista a imagem completa localmente com o nome `minha-imagem` e a tag `1.0`.

---

## 4. Tageamento — como organizar versões de imagens com tags

Já foi usada uma tag no exemplo anterior (`minha-imagem:1.0`), mas vale aprofundar o conceito, já que **organizar versões corretamente** é essencial para manter ambientes previsíveis (ver também `03_docker_introducao.md`, ponto 7, sobre a diferença entre usar uma tag específica e usar `latest`).

### O que é uma tag
Uma **tag** é um rótulo associado a uma imagem, normalmente usado para identificar a sua **versão**. O formato completo de um nome de imagem com tag é:

```
nome-da-imagem:tag
```

Se nenhuma tag for especificada, o Docker assume automaticamente `latest`.

### Boas práticas de tageamento

- **Versionamento semântico**: usar tags como `1.0`, `1.1`, `2.0`, seguindo, idealmente, o padrão *semantic versioning* (`MAJOR.MINOR.PATCH`), onde cada número comunica o tipo de mudança feita (ex: `2.1.3`).
- **Múltiplas tags para a mesma imagem**: é possível atribuir mais do que uma tag à mesma imagem construída, por exemplo:
  ```
  docker build -t minha-imagem:1.0 -t minha-imagem:latest .
  ```
  Isto permite que `latest` aponte sempre para a versão mais recente, enquanto versões anteriores (`1.0`, `1.1`, etc.) continuam disponíveis e imutáveis.
- **Evitar depender só de `latest` em produção**: como já mencionado em `03_docker_introducao.md`, usar apenas `latest` torna difícil saber exatamente que versão está a correr num determinado ambiente, e pode levar a comportamentos inesperados quando essa tag é atualizada.
- **Adicionar uma nova tag a uma imagem já existente**, sem reconstruir tudo:
  ```
  docker tag minha-imagem:1.0 minha-imagem:estavel
  ```
  Isto cria um "apelido" adicional (`estavel`) para a mesma imagem já construída como `1.0`.

---

## 5. Diferenças entre repositório local e remoto

Depois de construída, uma imagem Docker pode continuar a existir **apenas localmente** (só na máquina onde foi criada), ou pode ser **enviada para um repositório remoto**, tornando-a disponível para outras máquinas, servidores ou membros da equipa.

### Repositório local
Todas as imagens construídas com `docker build`, ou descarregadas com `docker pull` (ver `03_docker_introducao.md`, ponto 5), ficam guardadas no **repositório local** da própria máquina — visível através do comando:
```
docker images
```
Estas imagens só estão disponíveis **naquele computador ou servidor específico**, a não ser que sejam explicitamente enviadas para um repositório remoto.

### Repositório remoto
Um **repositório remoto** — como o **Docker Hub** (ver `03_docker_introducao.md`, ponto 2), ou alternativas privadas como o Amazon ECR (Elastic Container Registry) — permite guardar imagens num local centralizado e acessível pela internet, de onde qualquer máquina autorizada pode depois fazer `docker pull`.

### A questão do nome ao publicar numa imagem remota

Este é um ponto importante: o **Docker Hub é um repositório público e partilhado por milhões de utilizadores**, o que significa que um nome simples como `minha-imagem` **quase certamente já existe**, criado por outra pessoa, algures no mundo.

Por isso, ao preparar uma imagem para envio a um repositório remoto, é necessário **prefixar o nome da imagem com um identificador específico** — normalmente o **nome de utilizador (ou organização) do Docker Hub** — para garantir que o nome final é único e não entra em conflito com imagens já existentes de outras pessoas:

```
nome-utilizador/nome-da-imagem:tag
```

Exemplo prático:
```
docker tag minha-imagem:1.0 danielly/minha-imagem:1.0
docker push danielly/minha-imagem:1.0
```

- **`docker tag`** — cria uma nova referência para a imagem já existente localmente, agora já com o prefixo do utilizador, preparando-a para envio.
- **`docker push`** — envia efetivamente a imagem para o repositório remoto (Docker Hub, por padrão), tornando-a acessível a partir de qualquer outra máquina com permissão de acesso.

> É necessário estar autenticado no Docker Hub (via `docker login`) antes de conseguir publicar (`push`) uma imagem num repositório remoto.

### Resumo comparativo

| Aspecto | Repositório local | Repositório remoto |
|---|---|---|
| Onde fica guardado | Só na máquina onde foi construído/descarregado | Servidor centralizado (Docker Hub, ECR, etc.), acessível pela internet |
| Visibilidade | Só naquela máquina específica | Qualquer máquina autorizada, em qualquer lugar |
| Necessidade de nome único | Não — o nome só precisa de ser único localmente | Sim — exige prefixo (ex: nome de utilizador) para evitar conflito com imagens de outras pessoas |
| Comandos principais | `docker build`, `docker images` | `docker push`, `docker pull`, `docker login` |

---

## 6. Criar um contentor a partir da imagem construída

Com a imagem já construída (e devidamente tageada), o passo final é criar um contentor a partir dela — o mesmo comando `docker run` já introduzido em `03_docker_introducao.md`, agora aplicado à imagem criada neste ficheiro.

```
docker run -p 8080:80 minha-imagem:1.0
```

- **`minha-imagem:1.0`** — a imagem construída anteriormente com `docker build`, identificada pelo nome e tag escolhidos.
- **`-p 8080:80`** — mapeia a porta 8080 da máquina anfitriã para a porta 80 dentro do contentor, que é exatamente a porta documentada pela instrução `EXPOSE 80` no Dockerfile e onde o Nginx está configurado para escutar.

Ao correr este comando, o Docker:
1. Verifica se a imagem `minha-imagem:1.0` já existe localmente (existe, pois acabou de ser construída).
2. Cria um novo contentor a partir dessa imagem.
3. Executa automaticamente o comando definido em `CMD ["nginx"]` no Dockerfile, iniciando o servidor Nginx dentro do contentor.
4. Torna a aplicação acessível a partir de `http://localhost:8080`, graças ao mapeamento de porta feito com `-p`.

---

## Resumo em uma frase

> Um Dockerfile descreve, passo a passo, como construir uma imagem Docker através de instruções que criam camadas sobrepostas (sendo boa prática agrupar instalação e limpeza no mesmo `RUN` para manter a imagem leve), sendo depois construída com `docker build -t`, organizada com tags para controlar versões, e — quando destinada a um repositório remoto como o Docker Hub — nomeada com um prefixo único para evitar conflitos, antes de finalmente ser usada para criar um contentor com `docker run`.

---

## Conceitos relacionados para estudar a seguir

- **`.dockerignore`** — ficheiro que evita copiar ficheiros desnecessários para dentro da imagem durante o build
- **Multi-stage builds** — técnica para construir imagens ainda mais leves, usando várias etapas de `FROM` no mesmo Dockerfile
- **Docker Compose** — orquestrar vários contentores (ex: aplicação + base de dados) a partir de um único ficheiro de configuração
- **Amazon ECR (Elastic Container Registry)** — alternativa privada ao Docker Hub, integrada com os serviços AWS já vistos na pasta de Computação em Nuvem
- **CI/CD com Docker** — como o `docker build` e `docker push` costumam ser automatizados dentro de pipelines, como as descritas em `01_eficiencia_operacional_entrega_software.md`