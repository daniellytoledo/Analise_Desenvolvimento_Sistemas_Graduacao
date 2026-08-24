# Cluster Kubernetes e Contêiner Nginx no Microsoft Azure

> Este ficheiro aplica os conceitos já vistos em `00_introducao_kubernetes.md`, `01_historia_conceitos_basicos_kubernetes.md` e `04_escalonamento_clusters_kubernetes.md` (até agora sempre no Google Cloud) desta vez no **Microsoft Azure**, através do **Azure Kubernetes Service (AKS)** — o serviço de Kubernetes gerido da Microsoft, equivalente ao GKE (Google) e ao Amazon EKS (ver `05_computacao_sem_servidor.md`, na pasta de Computação em Nuvem).

---

## 1. Cluster Kubernetes e contêiner Nginx — o que é orquestração, e Nginx vs. Apache

### Recapitulação: o que é orquestração
Como já explicado em `01_historia_conceitos_basicos_kubernetes.md`, ponto 3, **orquestração** é a prática de gerir automaticamente o ciclo de vida de muitos contentores — onde correm, quantas réplicas existem, como se recuperam de falhas, e como comunicam entre si. O Kubernetes é o orquestrador usado ao longo de toda esta pasta, e o **AKS** é apenas a versão gerida pela Microsoft desse mesmo Kubernetes — o motor por trás é exatamente o mesmo estudado até aqui, mudando apenas quem gere o Control Plane (ver `01_historia_conceitos_basicos_kubernetes.md`, ponto 4).

### Criar o cluster no AKS
```
az group create --name grupo-recursos-k8s --location westeurope

az aks create \
  --resource-group grupo-recursos-k8s \
  --name cluster-aks \
  --node-count 3 \
  --generate-ssh-keys
```
- **`az group create`** — cria um **Grupo de Recursos** no Azure (ver `03_buckets_google_cloud_recursos_azure.md`, ponto 3, sobre o Azure Resource Manager), que vai agrupar todos os recursos deste cluster.
- **`az aks create`** — cria o cluster propriamente dito, com 3 nodes.

### Ligar o `kubectl` ao cluster
```
az aks get-credentials --resource-group grupo-recursos-k8s --name cluster-aks
kubectl get nodes
```
Este processo é conceptualmente idêntico ao `gcloud container clusters get-credentials` já usado no Google Cloud (ver `00_introducao_kubernetes.md`, ponto 2, e `04_escalonamento_clusters_kubernetes.md`, ponto 1) — apenas com o comando específico do fornecedor Azure.

### Por que Nginx entra nesta aula
Ao longo deste ficheiro, o **Nginx** vai ser usado como um contentor complementar dentro de um Pod (ver ponto 2), atuando como um **proxy** à frente da aplicação principal — um padrão muito comum em Kubernetes, chamado **sidecar** (um contentor auxiliar que corre ao lado do contentor principal, dentro do mesmo Pod, ajudando-o com uma responsabilidade específica, como gestão de tráfego ou TLS).

### Nginx vs. Apache — as diferenças principais
Já que o Nginx vai ser usado ativamente neste exercício, vale a pena entender como se compara ao **Apache HTTP Server**, o outro servidor web mais conhecido:

| Aspecto | Nginx | Apache |
|---|---|---|
| **Modelo de arquitetura** | Orientado a eventos (assíncrono) — um pequeno número de processos trata de milhares de ligações simultaneamente | Baseado em processos/threads — tipicamente cria um processo ou thread por cada ligação recebida |
| **Uso de memória sob carga elevada** | Mais eficiente, consumo mais previsível com muitas ligações simultâneas | Tende a consumir mais memória à medida que o número de ligações simultâneas cresce |
| **Desempenho a servir conteúdo estático** | Muito rápido, é um dos seus pontos fortes históricos | Bom, mas geralmente um pouco atrás do Nginx neste cenário específico |
| **Uso comum** | Servidor web, proxy reverso, balanceador de carga (ver `04_ec2_escalabilidade_trafego_virtualbox.md`, sobre Load Balancers) | Servidor web tradicional, forte em compatibilidade com módulos e configurações `.htaccess` |
| **Configuração** | Ficheiro de configuração único e mais simples de ler | Suporta configuração distribuída por diretório (`.htaccess`), mais flexível, mas potencialmente mais lenta |

### Por que o Nginx é frequentemente a escolha por defeito em contentores
No contexto específico de Kubernetes e contentores, o Nginx costuma ser preferido por ser **mais leve** (uma imagem de contentor Nginx é tipicamente menor do que uma imagem Apache equivalente) e por o seu modelo orientado a eventos se adaptar bem a ambientes onde muitos Pods pequenos e replicados precisam de lidar com tráfego de forma eficiente — é exatamente por isto que aparece aqui como o contentor sidecar escolhido para acompanhar a aplicação principal.

---

## 2. Configuração de Pod e serviços para a aplicação "monolith"

Nesta prática, o ponto de partida é uma aplicação de exemplo chamada **`monolith`** — representando, propositadamente, uma aplicação única e não dividida (um "monólito"), que mais adiante (ponto 5) vai ser decomposta em serviços mais pequenos, ilustrando a transição de uma arquitetura monolítica para uma arquitetura de microsserviços (ver `02_frontend_backend_persistencia_dados.md`, na pasta DevOps_I, sobre segregação de responsabilidades).

### Definir o Pod, com dois contentores
Um Pod pode conter mais do que um contentor, quando estes precisam de partilhar rede e ciclo de vida (ver `01_historia_conceitos_basicos_kubernetes.md`, ponto 5). Neste caso, o Pod `monolith` contém:
- O contentor **`monolith`** — a aplicação principal
- O contentor **`nginx`** — a correr como sidecar, funcionando como proxy à frente da aplicação

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: monolith
  labels:
    app: monolith
spec:
  containers:
    - name: monolith
      image: europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/monolith:1.0
      ports:
        - name: http
          containerPort: 80
        - name: health
          containerPort: 81
    - name: nginx
      image: nginx:latest
      ports:
        - containerPort: 443
```

Aplicar o ficheiro:
```
kubectl apply -f monolith-pod.yaml
```

### Criar o Service associado
Com o Pod definido, um **Service** (ver `00_introducao_kubernetes.md`, ponto 4) é necessário para lhe dar um ponto de acesso estável:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: monolith
spec:
  selector:
    app: monolith
  ports:
    - protocol: TCP
      port: 443
      targetPort: 443
```

- **`selector: app: monolith`** — este é o mecanismo através do qual o Service "encontra" os Pods a que deve direcionar tráfego — qualquer Pod com o rótulo (*label*) `app: monolith` é automaticamente incluído (o conceito de rótulos é aprofundado no ponto 4).

Aplicar o Service:
```
kubectl apply -f monolith-service.yaml
```

---

## 3. Tráfego para "monolith" via NodePort

Com o Pod e o Service criados, este ponto foca-se especificamente em como o tipo de Service **NodePort** (já mencionado, em geral, em `00_introducao_kubernetes.md`, ponto 4) direciona tráfego até à aplicação.

### Como funciona o NodePort
Ao contrário do tipo `LoadBalancer` (que pede um endereço IP público dedicado ao fornecedor de nuvem, usado em `04_escalonamento_clusters_kubernetes.md`, ponto 3), o tipo **NodePort** abre uma **porta específica em todos os nodes do cluster**, encaminhando o tráfego recebido nessa porta diretamente para o Service, e deste para os Pods correspondentes.

```
Utilizador → IP de qualquer Node : Porta NodePort
                    │
                    ▼
              Service (monolith)
                    │
                    ▼
        Pod(s) com label app: monolith
```

### Atualizar o Service para o tipo NodePort
```yaml
apiVersion: v1
kind: Service
metadata:
  name: monolith
spec:
  type: NodePort
  selector:
    app: monolith
  ports:
    - port: 443
      targetPort: 443
      nodePort: 31000
```
- **`nodePort: 31000`** — a porta específica (dentro do intervalo permitido, tipicamente entre 30000-32767) que fica aberta em **todos** os nodes do cluster AKS, direcionando o tráfego recebido para o Service.

### Testar o acesso
```
kubectl get nodes -o wide
```
Este comando devolve os endereços IP dos nodes do cluster. Com um desses IPs, o acesso à aplicação através do NodePort é feito diretamente para:
```
https://IP-DO-NODE:31000
```

### Quando usar NodePort em vez de LoadBalancer
- **NodePort**: mais simples, não depende de provisionar um recurso de rede externo (e o custo associado) no fornecedor de nuvem — mais adequado para testes, desenvolvimento, ou cenários internos.
- **LoadBalancer**: mais adequado para produção, já que fornece um único ponto de entrada estável com IP público dedicado, sem exigir que quem acede saiba o IP específico de um node do cluster (ver `04_escalonamento_clusters_kubernetes.md`, ponto 3).

---

## 4. Adição de rótulos (labels) aos Pods — organização e identificação

Os **rótulos (labels)** já apareceram de forma implícita nos pontos anteriores (`app: monolith`), mas este ponto aprofunda o seu papel específico dentro do Kubernetes.

### O que são labels
**Labels** são pares chave-valor (ex: `app: monolith`, `ambiente: producao`) associados a recursos do Kubernetes (Pods, Deployments, Services, entre outros), usados para **organizar, identificar e selecionar** recursos de forma flexível — sem depender de nomes fixos ou de uma estrutura hierárquica rígida.

### Por que os labels são importantes
- **Seleção dinâmica**: Services (ver ponto 2 e 3) e outros recursos usam **selectors** para "encontrar" automaticamente todos os Pods que correspondem a determinados labels — se um novo Pod for criado com o mesmo label, passa automaticamente a fazer parte desse conjunto, sem qualquer configuração manual adicional.
- **Organização de ambientes**: é comum usar labels para distinguir, por exemplo, `ambiente: desenvolvimento` de `ambiente: producao`, ou `versao: v1` de `versao: v2`, facilitando filtrar e gerir recursos relacionados.
- **Automação e políticas**: ferramentas de monitorização, políticas de segurança, e regras de rede (Network Policies) frequentemente usam labels como critério de aplicação.

### Adicionar um label a um Pod já existente
```
kubectl label pods monolith secure=enabled
```
Este comando adiciona o label `secure=enabled` ao Pod `monolith` já criado no ponto 2, sem precisar de o recriar.

### Confirmar os labels de um recurso
```
kubectl get pods --show-labels
```
Ou, filtrando diretamente por um label específico:
```
kubectl get pods -l secure=enabled
```

### Exemplo prático: usar um novo label para direcionar tráfego seletivamente
Retomando o Service criado no ponto 3, é possível torná-lo mais específico, passando a selecionar apenas Pods que tenham **ambos** os labels `app: monolith` **e** `secure: enabled`:
```yaml
spec:
  selector:
    app: monolith
    secure: enabled
```
Isto é particularmente útil, por exemplo, para garantir que o tráfego só é direcionado para Pods que já passaram por alguma validação adicional (representada, neste exemplo simples, pelo label `secure: enabled`), antes de serem considerados prontos a receber tráfego real.

---

## 5. Criação de Deployments — dividindo o monólito em auth, hello e frontend

Este último ponto representa a evolução natural de todo o processo anterior: em vez de manter a aplicação como um único Pod "monolith" (pontos 2 a 4), ela é agora **dividida em três serviços independentes**, cada um com o seu próprio Deployment — uma transição direta de arquitetura monolítica para **microsserviços** (ver `02_frontend_backend_persistencia_dados.md`, na pasta DevOps_I).

### Por que dividir em Deployments separados
Um único Pod "monolith" tem as limitações já discutidas em ficheiros anteriores sobre segregação de responsabilidades: qualquer alteração, mesmo pequena, obriga a reconstruir e reimplantar a aplicação inteira, e não é possível escalar apenas a parte que está sob mais pressão (ver `00_eficiencia_escalabilidade_infraestrutura_ti.md`, na pasta DevOps_I, ponto 5, sobre a vantagem da granularidade na escalabilidade).

### Deployment: `auth`
Responsável pela autenticação de utilizadores.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth
spec:
  replicas: 2
  selector:
    matchLabels:
      app: auth
  template:
    metadata:
      labels:
        app: auth
    spec:
      containers:
        - name: auth
          image: europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/auth:1.0
          ports:
            - containerPort: 80
```

### Deployment: `hello`
Um serviço simples de exemplo (semelhante ao "hello-server" já usado em `00_introducao_kubernetes.md`, ponto 3), representando aqui a lógica de negócio principal da aplicação.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello
spec:
  replicas: 3
  selector:
    matchLabels:
      app: hello
  template:
    metadata:
      labels:
        app: hello
    spec:
      containers:
        - name: hello
          image: europe-west1-docker.pkg.dev/ID-DO-PROJETO/meu-repositorio/hello:1.0
          ports:
            - containerPort: 80
```

### Deployment: `frontend`
A camada de apresentação (ver `02_frontend_backend_persistencia_dados.md`, ponto 1), que comunica com os serviços `auth` e `hello` através dos seus respetivos Services internos.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 443
```

### Aplicar os três Deployments
```
kubectl apply -f auth-deployment.yaml
kubectl apply -f hello-deployment.yaml
kubectl apply -f frontend-deployment.yaml
```

### Criar os Services correspondentes a cada Deployment
Cada Deployment precisa do seu próprio Service interno, para que os outros serviços consigam comunicar entre si dentro do cluster (tipicamente do tipo `ClusterIP`, ver `00_introducao_kubernetes.md`, ponto 4, já que só o `frontend` precisa de ficar acessível externamente):
```
kubectl expose deployment auth --port=80 --target-port=80
kubectl expose deployment hello --port=80 --target-port=80
kubectl expose deployment frontend --type=LoadBalancer --port=443 --target-port=443
```

### Resultado final: da arquitetura monolítica à de microsserviços

```
Antes (pontos 2-4):                Depois (ponto 5):
┌─────────────────┐               ┌────────┐  ┌────────┐  ┌──────────┐
│   Pod monolith    │      →       │  auth  │  │  hello │  │ frontend │
│ (monolith+nginx)  │               └────────┘  └────────┘  └──────────┘
└─────────────────┘                   (Deployments independentes,
                                        cada um com o seu Service,
                                        escaláveis separadamente)
```

Cada um destes Deployments pode agora ser escalado de forma independente (ver `04_escalonamento_clusters_kubernetes.md`, ponto 4) — por exemplo, se o serviço `hello` receber muito mais tráfego do que `auth`, é possível escalar apenas o `hello`, sem desperdiçar recursos a escalar os outros serviços desnecessariamente.

---

## Resumo em uma frase

> Este exercício aplicou Kubernetes no Azure (AKS) através de uma aplicação de exemplo "monolith" — com um Pod contendo a aplicação principal e um sidecar Nginx, exposta inicialmente via NodePort e organizada com labels — antes de a decompor em três Deployments independentes (auth, hello e frontend), demonstrando na prática a transição de uma arquitetura monolítica para microsserviços, cada um escalável de forma independente.

---

## Conceitos relacionados para estudar a seguir

- **Init Containers** — outro padrão de múltiplos contentores num Pod, usado para tarefas de preparação antes do contentor principal arrancar
- **Network Policies** — como restringir, com base em labels, que Pods podem comunicar entre si dentro de um cluster
- **Ingress Controllers** — alternativa mais avançada ao NodePort/LoadBalancer para expor múltiplos serviços (como `frontend`) através de um único ponto de entrada HTTP/HTTPS
- **Comparação AKS vs. GKE vs. EKS** — aprofundar as diferenças práticas entre os três principais serviços de Kubernetes geridos, já usados ao longo desta pasta
- **Service Mesh (ex: Istio, Linkerd)** — evolução natural deste padrão de microsserviços, adicionando observabilidade, segurança e controlo de tráfego mais avançado entre serviços como `auth`, `hello` e `frontend`