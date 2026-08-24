# Escalonamento de Clusters Kubernetes

> Este ficheiro dá continuidade a `00_introducao_kubernetes.md` e `01_historia_conceitos_basicos_kubernetes.md`, aplicando os conceitos já vistos (cluster, Deployment, Service) num fluxo prático completo — desde a configuração do ambiente até à atualização de uma aplicação em produção sem tempo de inatividade.

---

## 1. Configuração de um cluster no Google Kubernetes Engine — ambiente inicial

Este ponto retoma e aprofunda o processo já introduzido em `00_introducao_kubernetes.md`, ponto 2, focando-se agora na preparação completa do ambiente antes de implementar qualquer aplicação.

### Ativar as APIs necessárias
Antes de criar um cluster, é preciso garantir que os serviços necessários estão ativos no projeto Google Cloud:
```
gcloud services enable container.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```
Estas três APIs correspondem exatamente aos três serviços que vão ser usados ao longo deste ficheiro: **Kubernetes Engine** (cluster), **Cloud Build** (construção de imagens, ver ponto 2) e **Artifact Registry** (armazenamento de imagens, já visto em `02_introducao_docker_google_cloud.md`).

### Definir o projeto e a região padrão
Para evitar repetir estes parâmetros em todos os comandos seguintes:
```
gcloud config set project ID-DO-PROJETO
gcloud config set compute/zone europe-west1-b
```

### Criar o cluster
```
gcloud container clusters create-auto cluster-producao
```
- **`create-auto`** — cria o cluster em modo **Autopilot**, já mencionado em `00_introducao_kubernetes.md`, ponto 2 — o Google Cloud gere automaticamente o dimensionamento dos nodes, sendo especialmente indicado para começar sem ter de decidir manualmente quantos nodes ou de que tamanho.
- Alternativa, em modo **Standard** (mais controlo manual sobre os nodes):
  ```
  gcloud container clusters create cluster-producao --num-nodes=3
  ```

### Ligar o `kubectl` ao cluster criado
```
gcloud container clusters get-credentials cluster-producao --zone europe-west1-b
```

### Confirmar que o ambiente está pronto
```
kubectl get nodes
kubectl cluster-info
```
Estes comandos confirmam que o cluster está ativo, com os seus nodes disponíveis, e que o `kubectl` está corretamente configurado para comunicar com ele — fechando a preparação do ambiente antes de qualquer implantação de aplicação.

---

## 2. Criação de contêiner Docker com Cloud Build — construção automatizada

Com o cluster pronto para receber aplicações, o passo seguinte é preparar a **imagem Docker** que vai ser implantada nele — desta vez com foco na automação do processo de build, em vez de o correr manualmente.

### Por que usar o Cloud Build em vez de `docker build`
Como já mencionado em `02_introducao_docker_google_cloud.md`, ponto 2, o **Cloud Build** constrói imagens **remotamente**, sem depender do motor Docker instalado na máquina local ou no Cloud Shell — o que se torna especialmente valioso neste contexto, porque permite **automatizar completamente** o processo, integrando-o a pipelines (ver `01_eficiencia_operacional_entrega_software.md`, na pasta DevOps_I) sem depender de nenhum passo manual.

### Preparar o Dockerfile
Assumindo uma aplicação simples, com um `Dockerfile` já criado na pasta do projeto (seguindo os princípios já vistos em `04_docker_dockerfile_imagens.md`, na pasta DevOps_I):
```dockerfile
FROM node:18-slim
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]
```

### Construir e publicar a imagem automaticamente com Cloud Build
```
gcloud builds submit --tag europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-app:1.0 .
```
Este único comando:
1. Envia o código-fonte da pasta atual para o Cloud Build
2. Constrói a imagem remotamente, seguindo as instruções do `Dockerfile`
3. Publica automaticamente a imagem resultante no **Artifact Registry**, já pronta a ser usada pelo GKE no ponto seguinte

### Automatizar ainda mais, com um ficheiro `cloudbuild.yaml`
Para processos de build mais complexos (ex: correr testes antes de construir a imagem, ou publicar em múltiplos destinos), é possível descrever os passos num ficheiro de configuração dedicado:
```yaml
steps:
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-app:1.0', '.']
images:
  - 'europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-app:1.0'
```
E, depois, correr:
```
gcloud builds submit --config cloudbuild.yaml .
```

### Automatizar através de triggers
O Cloud Build também permite configurar **triggers (gatilhos)** que disparam automaticamente uma nova build sempre que há uma alteração num repositório Git ligado (ex: um novo `push` para o branch principal) — unindo diretamente este processo ao SCM já estudado em `01_eficiencia_operacional_entrega_software.md`, sem qualquer intervenção manual a partir desse ponto.

---

## 3. Implantação de contêineres no GKE — lançamento de aplicações no cluster

Com a imagem já construída e publicada no Artifact Registry, o próximo passo é implantá-la efetivamente dentro do cluster criado no ponto 1 — seguindo o mesmo padrão de Deployment + Service já introduzido em `00_introducao_kubernetes.md`, pontos 3 e 4.

### Criar o Deployment a partir da imagem construída
```
kubectl create deployment minha-app --image=europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-app:1.0
```

### Expor o Deployment como Service
```
kubectl expose deployment minha-app --type=LoadBalancer --port=80 --target-port=8080
```

### Confirmar a implantação
```
kubectl get deployments
kubectl get pods
kubectl get services
```
O `EXTERNAL-IP` devolvido pelo último comando é o endereço público através do qual a aplicação já fica acessível — o mesmo fluxo detalhado em `00_introducao_kubernetes.md`, ponto 4.

### Alternativa: implantação declarativa via YAML
Em vez de usar comandos `kubectl create`/`kubectl expose` diretamente (abordagem mais adequada para testes rápidos), é boa prática, em ambientes reais, descrever o Deployment num ficheiro YAML versionável:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: minha-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: minha-app
  template:
    metadata:
      labels:
        app: minha-app
    spec:
      containers:
        - name: minha-app
          image: europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-app:1.0
          ports:
            - containerPort: 8080
```
Aplicado com:
```
kubectl apply -f deployment.yaml
```
Esta abordagem **declarativa** (ver `01_historia_conceitos_basicos_kubernetes.md`, ponto 3) já define, desde o início, o número de réplicas (`replicas: 3`) — preparando diretamente o terreno para o escalonamento explicado no ponto seguinte.

---

## 4. Escalonamento de implantações no GKE — ajuste automático de recursos

Com a aplicação já implantada e acessível, este ponto foca-se em como ajustar a quantidade de recursos (réplicas) disponíveis, tanto manualmente como de forma automática.

### Escalonamento manual
Para ajustar diretamente o número de réplicas de um Deployment:
```
kubectl scale deployment minha-app --replicas=5
```
Isto instrui o Kubernetes a garantir que existem sempre **5 Pods** desta aplicação a correr, criando novos Pods se houver menos, ou terminando Pods em excesso se houver mais do que o pedido — o princípio de "estado desejado" já explicado em `00_introducao_kubernetes.md` e `01_historia_conceitos_basicos_kubernetes.md`.

### Escalonamento automático — Horizontal Pod Autoscaler (HPA)
Em vez de ajustar manualmente o número de réplicas, o Kubernetes permite configurar um **Horizontal Pod Autoscaler**, que ajusta automaticamente esse número com base em métricas reais de utilização (ex: uso de CPU):

```
kubectl autoscale deployment minha-app --cpu-percent=60 --min=2 --max=10
```

- **`--cpu-percent=60`** — o alvo de utilização de CPU: se a média de uso de CPU dos Pods ultrapassar 60%, o Kubernetes cria automaticamente mais réplicas.
- **`--min=2`** — nunca correr menos do que 2 réplicas, mesmo com pouco tráfego.
- **`--max=10`** — nunca ultrapassar 10 réplicas, mesmo com picos muito elevados de tráfego (proteção contra custos descontrolados).

Verificar o estado do autoscaler:
```
kubectl get hpa
```

### Este conceito espelha o Auto Scaling já visto na AWS
Este mecanismo é conceptualmente equivalente ao **EC2 Auto Scaling** já estudado em `04_ec2_escalabilidade_trafego_virtualbox.md` (na pasta de Computação em Nuvem) — a diferença central é o **nível de granularidade**: o EC2 Auto Scaling ajusta o número de **máquinas virtuais inteiras**, enquanto o HPA do Kubernetes ajusta o número de **Pods (contentores)** dentro de um conjunto de nodes já existente, sendo por isso normalmente mais rápido e eficiente a reagir a picos de tráfego.

### Escalonamento dos próprios nodes do cluster
Para além de escalar o número de Pods, é possível também escalar o número de **nodes** do cluster (ex: se não houver capacidade física suficiente para acomodar mais Pods), através do **Cluster Autoscaler** — que, em clusters no modo **Autopilot** (ver ponto 1), já é gerido automaticamente pelo Google Cloud, sem qualquer configuração adicional.

---

## 5. Atualização de sites sem tempo de inatividade — implantação contínua sem interrupções

O último passo deste fluxo é atualizar a aplicação já em produção (ex: publicar uma nova versão do código) **sem que os utilizadores percebam qualquer interrupção** — uma das grandes vantagens práticas de usar Kubernetes em vez de um processo de deploy manual tradicional.

### Rolling Update — a estratégia padrão do Kubernetes
Por padrão, quando a imagem associada a um Deployment é atualizada, o Kubernetes realiza automaticamente um **Rolling Update**: substitui os Pods antigos por novos **de forma gradual**, um (ou poucos) de cada vez, garantindo que **há sempre Pods saudáveis disponíveis** para continuar a atender pedidos durante todo o processo.

```
Estado inicial:        [v1] [v1] [v1]
        │
        ▼ (rolling update inicia)
Passo 1:          [v2] [v1] [v1]   ← 1 novo Pod (v2) criado, 1 antigo mantido até o novo estar pronto
        │
        ▼
Passo 2:          [v2] [v2] [v1]
        │
        ▼
Passo 3 (final):  [v2] [v2] [v2]   ← todos os Pods já na nova versão
```

Em nenhum momento deste processo o número de Pods saudáveis cai a zero — o Service (ver `00_introducao_kubernetes.md`, ponto 4) continua a distribuir tráfego apenas para os Pods que já estão prontos, garantindo continuidade total do serviço.

### Comando para atualizar a imagem de um Deployment já existente
```
kubectl set image deployment/minha-app minha-app=europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/minha-app:2.0
```
Este comando atualiza apenas a imagem usada pelo Deployment `minha-app`, acionando automaticamente o processo de Rolling Update descrito acima.

### Acompanhar o progresso da atualização
```
kubectl rollout status deployment/minha-app
```

### Reverter para a versão anterior, se algo correr mal
Uma das grandes vantagens deste modelo é a possibilidade de **reverter rapidamente** para a versão anterior, caso a nova versão apresente problemas:
```
kubectl rollout undo deployment/minha-app
```
Este comando aplica o mesmo princípio de Rolling Update, mas no sentido inverso — substituindo gradualmente os Pods da versão problemática pelos da versão anterior estável, mantendo, também aqui, a continuidade do serviço durante a reversão.

### Ver o histórico de implantações
```
kubectl rollout history deployment/minha-app
```

### Ligação com o ciclo build-deploy-run
Este processo fecha, na prática, o ciclo **build → deploy → run** já explicado em `01_eficiencia_operacional_entrega_software.md` (na pasta DevOps_I): o Cloud Build trata do *build* (ponto 2), o `kubectl apply`/`kubectl set image` trata do *deploy* (pontos 3 e 5), e o Kubernetes, através do HPA e do Rolling Update, garante que o sistema continua bem servido e disponível durante o *run* — mesmo perante picos de tráfego ou atualizações de código.

---

## Resumo em uma frase

> Escalar uma aplicação no Google Kubernetes Engine passa por configurar o cluster (Autopilot ou Standard), automatizar a construção de imagens com Cloud Build, implantar essas imagens através de Deployments e Services, ajustar automaticamente o número de réplicas com o Horizontal Pod Autoscaler conforme a demanda muda, e atualizar a aplicação em produção através de Rolling Updates — garantindo, em todo este processo, zero tempo de inatividade para quem está a usar a aplicação.

---

## Conceitos relacionados para estudar a seguir

- **Readiness Probes e Liveness Probes** — como o Kubernetes verifica se um Pod está realmente pronto a receber tráfego, essencial para o funcionamento correto do Rolling Update
- **Vertical Pod Autoscaler (VPA)** — alternativa/complemento ao HPA, que ajusta a quantidade de CPU/memória atribuída a cada Pod individual, em vez de ajustar o número de réplicas
- **Blue-Green Deployments e Canary Releases** — estratégias alternativas ao Rolling Update padrão, com ainda mais controlo sobre o risco de uma nova versão
- **Cloud Build Triggers em profundidade** — automatizar por completo o fluxo deste ficheiro, do `git push` até à atualização automática do Deployment no GKE
- **Custos de escalonamento no GKE Autopilot vs. Standard** — entender as diferenças de modelo de cobrança entre os dois modos de cluster mencionados no ponto 1