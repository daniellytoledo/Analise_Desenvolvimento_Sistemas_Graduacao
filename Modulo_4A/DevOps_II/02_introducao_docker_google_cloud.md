# Introdução ao Docker (usando Google Cloud)

---

## 1. Introdução ao Docker — conceitos básicos

Os conceitos fundamentais de Docker já foram introduzidos em detalhe na pasta `DevOps_I`, nos ficheiros `03_docker_introducao.md`, `04_docker_dockerfile_imagens.md` e `05_docker_volumes_arquivos_pastas.md` — vale a pena reler esses ficheiros antes de avançar, já que este ficheiro assume esses conceitos como já conhecidos e foca-se especificamente em como aplicá-los **dentro do ecossistema Google Cloud**.

### Recapitulação rápida dos conceitos essenciais
- **Contentor**: um ambiente isolado e leve, que empacota uma aplicação e as suas dependências, partilhando o kernel do sistema operativo do anfitrião (ver `03_docker_introducao.md`, ponto 1).
- **Imagem**: o "molde" imutável a partir do qual um contentor é criado (ver `03_docker_introducao.md`, ponto 3).
- **Dockerfile**: o ficheiro de instruções que descreve, passo a passo, como construir uma imagem (ver `04_docker_dockerfile_imagens.md`, ponto 1).
- **Registo (registry)**: um repositório onde imagens ficam guardadas e disponíveis para serem descarregadas — o Docker Hub é o exemplo mais conhecido (ver `03_docker_introducao.md`, ponto 2), mas cada fornecedor de nuvem costuma ter também o seu próprio registo privado, como será visto neste ficheiro.

### Por que usar Docker através do Google Cloud
Até agora, os exemplos práticos de Docker foram feitos localmente, na própria máquina (via CMD, ver `03_docker_introducao.md` e `05_docker_volumes_arquivos_pastas.md`). Trabalhar através do Google Cloud traz vantagens específicas:

- **Não depende de instalar Docker localmente** — é possível construir e testar imagens diretamente através do **Cloud Shell**, um ambiente de linha de comandos disponibilizado gratuitamente na consola do Google Cloud, já com o Docker (e outras ferramentas) pré-instalado.
- **Integração direta com um registo privado de imagens** — o **Artifact Registry** (sucessor do antigo Container Registry), onde as imagens construídas podem ser guardadas de forma segura, sem depender de as tornar públicas no Docker Hub.
- **Caminho natural para produção** — imagens construídas desta forma já ficam prontas a ser usadas por outros serviços do Google Cloud, como o **Cloud Run** ou o **Google Kubernetes Engine (GKE)**, já introduzido em `00_introducao_kubernetes.md`.

---

## 2. Construção de uma imagem Docker básica através do Google Cloud

### Aceder ao Cloud Shell
O ponto de partida é o **Cloud Shell**, acessível diretamente através do ícone de terminal no topo da **Google Cloud Console**. Trata-se de uma máquina virtual temporária, gerida pela Google, já com `docker`, `gcloud` (a ferramenta de linha de comandos do Google Cloud) e outras ferramentas comuns pré-instaladas — sem necessidade de qualquer instalação local.

### Preparar o projeto
1. Confirmar que existe um **projeto Google Cloud** selecionado (visível no topo da consola), já que todos os recursos criados (imagens, registos) ficam associados a um projeto específico.
2. Ativar a API do **Artifact Registry**, caso ainda não esteja ativa:
   ```
   gcloud services enable artifactregistry.googleapis.com
   ```

### Criar um repositório no Artifact Registry
Antes de enviar qualquer imagem, é preciso ter um repositório de destino:
```
gcloud artifacts repositories create meu-repositorio \
  --repository-format=docker \
  --location=europe-west1 \
  --description="Repositório de imagens Docker de estudo"
```

### Escrever um Dockerfile simples
Dentro do Cloud Shell, criar um `Dockerfile` básico (seguindo a mesma lógica já explicada em `04_docker_dockerfile_imagens.md`), por exemplo:
```dockerfile
FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
```

### Construir a imagem
Existem duas formas comuns de construir a imagem a partir do Google Cloud:

**Opção A — usando o comando `docker build`, diretamente no Cloud Shell** (igual ao já visto em `04_docker_dockerfile_imagens.md`, ponto 3):
```
docker build -t europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-imagem:1.0 .
```
Repara que o **nome da imagem** já inclui o caminho completo do Artifact Registry (região + ID do projeto + nome do repositório) — este é o equivalente, no Google Cloud, ao prefixo de utilizador explicado em `04_docker_dockerfile_imagens.md`, ponto 5, para evitar conflitos de nomes ao publicar num repositório remoto.

**Opção B — usando o Cloud Build, sem depender do `docker build` local**:
```
gcloud builds submit --tag europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-imagem:1.0 .
```
O **Cloud Build** é um serviço gerido do Google Cloud que constrói a imagem **remotamente**, sem sequer precisar de correr o motor Docker na máquina/Cloud Shell do utilizador — útil especialmente em pipelines automatizadas (ver `01_eficiencia_operacional_entrega_software.md`, na pasta DevOps_I, sobre CI/CD).

### Autenticação necessária
Antes de conseguir enviar imagens para o Artifact Registry, é preciso configurar o Docker para se autenticar corretamente:
```
gcloud auth configure-docker europe-west1-docker.pkg.dev
```

### Enviar a imagem para o repositório
```
docker push europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-imagem:1.0
```

---

## 3. Execução de contentores a partir da imagem criada

Com a imagem já construída (e, opcionalmente, já enviada para o Artifact Registry), existem várias formas de correr um contentor a partir dela.

### Correr o contentor diretamente no Cloud Shell
Da mesma forma já vista em `03_docker_introducao.md`, ponto 6 e 7:
```
docker run -p 8080:80 europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-imagem:1.0
```
Como o Cloud Shell corre numa máquina temporária na nuvem, o acesso à aplicação exposta não é feito diretamente via `localhost` como numa máquina local — o Cloud Shell disponibiliza uma opção de **"Web Preview"** (pré-visualização web), que permite abrir a porta mapeada (ex: 8080) diretamente através de um separador do navegador.

### Correr a imagem noutros serviços do Google Cloud
Uma das grandes vantagens de já ter a imagem publicada no Artifact Registry é poder usá-la diretamente noutros serviços geridos, sem repetir o processo de build:

- **Cloud Run**: serviço serverless (semelhante em espírito ao AWS Lambda/Elastic Beanstalk, ver `05_computacao_sem_servidor.md`, na pasta de Computação em Nuvem) que corre contentores diretamente a partir de uma imagem, sem gerir servidores nem clusters:
  ```
  gcloud run deploy minha-app \
    --image europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-imagem:1.0 \
    --platform managed \
    --region europe-west1 \
    --allow-unauthenticated
  ```
- **Google Kubernetes Engine (GKE)**: para correr a mesma imagem dentro de um cluster Kubernetes, através de um Deployment (ver `00_introducao_kubernetes.md`, ponto 3), bastando referenciar o mesmo caminho de imagem do Artifact Registry no comando `kubectl create deployment` ou num ficheiro YAML.

### Confirmar que o contentor está a correr
Independentemente do método escolhido, os comandos básicos de verificação continuam válidos:
```
docker ps
```
(para contentores a correr diretamente no Cloud Shell), ou, no caso do Cloud Run:
```
gcloud run services list
```

---

## 4. Práticas de depuração com Docker

Quando algo não funciona como esperado — um contentor que não inicia, uma aplicação que não responde, ou um comportamento inesperado — existem várias técnicas de depuração (*debugging*) específicas para contentores.

### Ver os logs do contentor
O primeiro passo em qualquer depuração é normalmente olhar para os **logs** produzidos pela aplicação dentro do contentor:
```
docker logs nome-ou-id-do-contentor
```
Para acompanhar os logs em tempo real, à medida que são gerados:
```
docker logs -f nome-ou-id-do-contentor
```

### Inspecionar o estado detalhado de um contentor
```
docker inspect nome-ou-id-do-contentor
```
Devolve um relatório detalhado em JSON com toda a configuração do contentor — variáveis de ambiente, volumes montados (ver `05_docker_volumes_arquivos_pastas.md`), rede, e o motivo de uma eventual falha ao iniciar.

### Entrar interativamente dentro de um contentor em execução
Uma das técnicas mais úteis de depuração é **abrir um terminal dentro do próprio contentor**, para inspecionar diretamente o que se passa lá dentro:
```
docker exec -it nome-ou-id-do-contentor /bin/bash
```
- **`exec`** — executa um comando dentro de um contentor que já está a correr.
- **`-it`** — combina o modo interativo (`-i`) com a alocação de um terminal (`-t`), permitindo usar o terminal normalmente, como se estivesse "dentro" do contentor.
- **`/bin/bash`** — o comando a correr (neste caso, abrir uma shell Bash; em imagens mais minimalistas, como as baseadas em Alpine, pode ser necessário usar `/bin/sh` em vez de `/bin/bash`).

> Isto só funciona em contentores **já a correr**. Se o contentor falhar logo ao iniciar (e por isso já não estiver ativo), a alternativa é usar `docker logs` para perceber o motivo da falha, ou correr a imagem com um comando alternativo, sobrepondo o `CMD` padrão, por exemplo:
> ```
> docker run -it minha-imagem:1.0 /bin/bash
> ```
> Isto cria um novo contentor, mas em vez de correr o comando padrão definido no Dockerfile (ver `04_docker_dockerfile_imagens.md`, sobre a instrução `CMD`), abre diretamente uma shell interativa — útil para investigar o sistema de ficheiros e configurações da imagem sem depender do processo principal arrancar corretamente.

### Verificar o histórico de camadas da imagem
Já que cada instrução do Dockerfile cria uma camada (ver `04_docker_dockerfile_imagens.md`, ponto 2), por vezes é útil perceber exatamente o que cada camada acrescentou:
```
docker history minha-imagem:1.0
```

### Depuração específica no contexto do Google Cloud
- **Logs do Cloud Run**: para contentores implementados através do Cloud Run, os logs ficam automaticamente disponíveis no **Cloud Logging**, acessível através da consola ou via `gcloud logging read`.
- **Logs de build**: se a construção da imagem falhar através do Cloud Build (ver ponto 2, opção B), os logs completos do processo de build ficam disponíveis diretamente na consola do Google Cloud, na secção "Cloud Build > Histórico", facilitando perceber em que instrução exata do Dockerfile o processo falhou.

---

## 5. Verificação e teste da imagem Docker

Antes de considerar uma imagem "pronta", é importante verificar que ela cumpre os requisitos esperados — tanto em termos de **funcionamento correto** como de **segurança**.

### Testar que o contentor arranca e responde corretamente
O teste mais básico é simplesmente correr o contentor e confirmar que responde como esperado:
```
docker run -d -p 8080:80 --name teste-imagem minha-imagem:1.0
curl http://localhost:8080
```
O comando `curl` faz um pedido HTTP simples à aplicação (ver `02_frontend_backend_persistencia_dados.md`, na pasta DevOps_I, sobre pedidos GET), permitindo confirmar rapidamente que o contentor está a responder de forma esperada, sem precisar de abrir um navegador.

### Verificar o tamanho e as camadas da imagem
Imagens desnecessariamente grandes podem indicar más práticas na construção (ver `04_docker_dockerfile_imagens.md`, ponto 2, sobre boas práticas com `RUN`):
```
docker images minha-imagem:1.0
```
Mostra o tamanho total da imagem, permitindo comparar com versões anteriores e identificar se alguma alteração ao Dockerfile aumentou o tamanho de forma inesperada.

### Verificação de vulnerabilidades de segurança (Artifact Analysis)
O Google Cloud disponibiliza um serviço de **análise de vulnerabilidades** integrado com o Artifact Registry, que verifica automaticamente as imagens enviadas em busca de vulnerabilidades conhecidas nas suas dependências e sistema base:
```
gcloud artifacts docker images scan europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-imagem:1.0
```
O resultado desta análise lista vulnerabilidades encontradas, classificadas por nível de gravidade (ex: baixo, médio, alto, crítico), ajudando a decidir se a imagem está pronta para produção ou se precisa de ajustes (ex: atualizar a versão da imagem base, ver `04_docker_dockerfile_imagens.md`, sobre a importância de especificar tags concretas em vez de `latest`).

### Testes automatizados de estrutura da imagem
Para verificações mais rigorosas e repetíveis (ex: "esta imagem tem mesmo o Nginx instalado?", "a porta 80 está mesmo exposta?"), é possível usar ferramentas como o **Container Structure Test** (open-source, mantida pela própria Google), que permite escrever testes específicos sobre o conteúdo e comportamento de uma imagem, e correr esses testes automaticamente — uma prática especialmente valiosa quando integrada numa pipeline de CI/CD (ver `01_eficiencia_operacional_entrega_software.md`), garantindo que nenhuma imagem com problemas chega a ser publicada ou implementada em produção.

### Boas práticas gerais de verificação antes de publicar uma imagem
- Confirmar que o contentor arranca sem erros e responde como esperado
- Verificar se o tamanho da imagem está dentro do razoável, comparado a builds anteriores
- Correr a análise de vulnerabilidades disponível no Artifact Registry
- Sempre que possível, automatizar estes testes dentro de uma pipeline, para que nenhuma imagem "não verificada" chegue a ser usada em produção

---

## Resumo em uma frase

> Construir, correr e testar imagens Docker através do Google Cloud segue os mesmos conceitos fundamentais já vistos localmente (Dockerfile, camadas, tags), mas acrescenta um fluxo natural até à nuvem — via Cloud Shell, Cloud Build e Artifact Registry — permitindo depurar contentores com `docker logs`/`docker exec`/`docker inspect`, e verificar cada imagem antes de a colocar em produção, seja com testes funcionais simples, seja com análise automática de vulnerabilidades.

---

## Conceitos relacionados para estudar a seguir

- **Cloud Build triggers** — automatizar a construção de imagens sempre que há uma alteração num repositório Git (ligando este processo ao SCM já visto em `01_eficiencia_operacional_entrega_software.md`)
- **Cloud Run vs. GKE** — quando escolher um serviço serverless simples versus um cluster Kubernetes completo para correr contentores no Google Cloud
- **Container Structure Test em profundidade** — escrever ficheiros de teste YAML para validar imagens automaticamente
- **Distroless images** — um tipo de imagem base ainda mais minimalista do que Alpine, popularizado pela própria Google, focado em reduzir superfície de ataque e tamanho ao máximo
- **IAM no Google Cloud** — equivalente ao IAM já estudado na AWS (ver `01_aws.md`), controlando quem pode publicar ou aceder a imagens no Artifact Registry