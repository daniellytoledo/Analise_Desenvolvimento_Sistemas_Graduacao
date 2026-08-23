# Introdução ao Kubernetes

---

## 1. Panorama geral do Kubernetes

O **Kubernetes** (frequentemente abreviado como **K8s** — "K" + 8 letras + "s") é uma plataforma open-source de **orquestração de contentores**, criada originalmente pela Google e hoje mantida pela **Cloud Native Computing Foundation (CNCF)**.

### O problema que o Kubernetes resolve
No conteúdo sobre Docker (ver pasta `DevOps_I`, ficheiros `03_docker_introducao.md` a `05_docker_volumes_arquivos_pastas.md`), foi visto como correr **um contentor** de forma isolada e leve. Mas aplicações reais em produção normalmente precisam de:

- Correr **muitas instâncias** do mesmo contentor em simultâneo (para aguentar tráfego)
- **Reiniciar automaticamente** um contentor que falhou, sem intervenção manual
- **Distribuir tráfego** entre várias instâncias de forma equilibrada
- **Escalar automaticamente** o número de contentores conforme a procura sobe ou desce
- Gerir tudo isto de forma consistente, mesmo com **centenas ou milhares de contentores** espalhados por vários servidores físicos

Fazer tudo isto manualmente, contentor a contentor, torna-se rapidamente inviável. O Kubernetes existe exatamente para **automatizar e gerir este ciclo de vida completo dos contentores** — sendo, por isso, chamado de "orquestrador".

### Principais conceitos e componentes

| Conceito | O que é |
|---|---|
| **Cluster** | O conjunto completo de máquinas (físicas ou virtuais) que o Kubernetes gere como um todo |
| **Node** | Cada máquina individual dentro do cluster, onde os contentores efetivamente correm |
| **Pod** | A menor unidade que o Kubernetes gere — normalmente contém um único contentor (ou, por vezes, um pequeno grupo de contentores fortemente relacionados) |
| **Deployment** | Uma definição de "como" e "quantas" instâncias (Pods) de uma aplicação devem estar sempre a correr |
| **Service** | Um ponto de acesso estável e com um endereço de rede fixo, usado para expor e distribuir tráfego entre Pods (aprofundado no ponto 4) |
| **Control Plane** | O "cérebro" do cluster — o conjunto de componentes responsáveis por tomar decisões (ex: onde correr um Pod) e manter o estado desejado do sistema |

### Como o Kubernetes se relaciona com o Docker
O Kubernetes **não substitui** o Docker (ou outros motores de contentores) — ele **orquestra** contentores que já existem como imagens (ver `03_docker_introducao.md` e `04_docker_dockerfile_imagens.md`). Numa analogia simples:

- **Docker** = sabe construir e correr uma "caixa" (contentor) isolada
- **Kubernetes** = sabe gerir milhares dessas "caixas" espalhadas por vários servidores, garantindo que estão sempre nas quantidades certas, saudáveis, e acessíveis

### O princípio central: estado desejado (desired state)
O Kubernetes funciona à volta de um princípio fundamental: o utilizador **declara o estado desejado** (ex: "quero sempre 3 réplicas desta aplicação a correr"), e o Kubernetes **trabalha continuamente para garantir que a realidade corresponde a essa declaração** — se um Pod falhar, o Kubernetes cria automaticamente outro para repor o número desejado, sem intervenção manual.

---

## 2. Configuração de um cluster no Kubernetes Engine

Antes de correr qualquer aplicação com Kubernetes, é necessário ter um **cluster** disponível. Em vez de instalar e gerir manualmente todos os componentes do Control Plane (o que é complexo), a forma mais comum de começar é usar um serviço de Kubernetes **gerido** por um fornecedor de nuvem — como o **Google Kubernetes Engine (GKE)**, o serviço da Google Cloud especificamente desenhado para isto.

> Nota: existem equivalentes de serviços de Kubernetes geridos noutros fornecedores, como o **Amazon EKS** na AWS (já mencionado em `05_computacao_sem_servidor.md`, na pasta de Computação em Nuvem) — o princípio de configuração de cluster explicado aqui é conceptualmente semelhante entre fornecedores.

### O que significa um cluster "gerido" (managed)
Num cluster Kubernetes gerido, o fornecedor de nuvem trata automaticamente da parte mais complexa e crítica — o **Control Plane** (ver ponto 1) — incluindo a sua alta disponibilidade, atualizações e segurança. O utilizador fica apenas responsável por configurar os **nodes** (as máquinas onde as aplicações vão efetivamente correr) e por definir o que quer correr nesse cluster.

### Passo a passo geral para configurar um cluster

1. **Aceder à consola do fornecedor de nuvem** (ex: Google Cloud Console) e navegar até ao serviço de Kubernetes (ex: "Kubernetes Engine").
2. **Criar um novo cluster**, escolhendo:
   - **Nome do cluster** (identificador único dentro do projeto)
   - **Região/zona** onde o cluster vai correr (fisicamente, em que data centers)
   - **Número e tipo de nodes** — quantas máquinas virtuais vão compor o cluster, e com que capacidade (CPU, memória) cada uma
   - **Modo do cluster** (ex: "Standard", com mais controlo manual, ou "Autopilot", onde o próprio fornecedor gere automaticamente até o dimensionamento dos nodes)
3. **Aguardar a criação do cluster** — este processo é automatizado pelo fornecedor, criando toda a infraestrutura de rede, segurança e Control Plane necessária.
4. **Ligar a ferramenta de linha de comandos (`kubectl`) ao cluster criado** — geralmente através de um comando fornecido pela própria consola, que configura as credenciais de acesso localmente, por exemplo:
   ```
   gcloud container clusters get-credentials nome-do-cluster --zone europe-west1-b
   ```
5. **Confirmar a ligação ao cluster**, verificando os nodes disponíveis:
   ```
   kubectl get nodes
   ```
   Este comando deve devolver a lista de máquinas (nodes) que compõem o cluster, confirmando que está tudo pronto para receber aplicações.

### `kubectl` — a ferramenta principal de interação
O **`kubectl`** é o comando de linha usado para comunicar com qualquer cluster Kubernetes — seja local, seja num fornecedor de nuvem — sendo através dele que praticamente todas as ações seguintes (implementar aplicações, criar serviços, remover recursos) são realizadas.

---

## 3. Implementação inicial: Hello-Server

Com o cluster configurado e o `kubectl` ligado a ele, o próximo passo prático é implementar (fazer *deploy* de) uma aplicação simples de exemplo — tradicionalmente chamada **"hello-server"** nos tutoriais oficiais do Kubernetes/GKE — para validar que o cluster está a funcionar corretamente de ponta a ponta.

### O que é um Deployment
Um **Deployment** é o recurso do Kubernetes que descreve **qual imagem de contentor correr, e quantas réplicas (cópias) dela devem estar sempre ativas**. É o Deployment que, na prática, cria e gere os **Pods** (ver ponto 1) por trás dos panos.

### Comando para criar o Deployment inicial

```
kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:1.0
```

- **`kubectl create deployment`** — instrução para criar um novo Deployment.
- **`hello-server`** — o nome dado a este Deployment, usado para o identificar e geri-lo depois.
- **`--image=gcr.io/google-samples/hello-app:1.0`** — especifica a **imagem de contentor** a usar, neste caso uma imagem de exemplo oficial fornecida pela Google, já preparada especificamente para este tipo de tutorial introdutório (semelhante em espírito a puxar uma imagem do Docker Hub, ver `03_docker_introducao.md`, ponto 5, mas aqui vinda do registo de imagens da Google Cloud).

### Verificar que o Deployment está a correr

```
kubectl get deployments
```
Mostra o Deployment criado, incluindo quantas réplicas estão configuradas e quantas estão efetivamente prontas (*ready*).

```
kubectl get pods
```
Mostra o(s) Pod(s) criado(s) automaticamente pelo Deployment — nesta fase inicial, tipicamente apenas um Pod, correspondente à única réplica padrão criada.

### O que aconteceu neste passo
O Kubernetes:
1. Recebeu a instrução "quero correr esta imagem, como Deployment chamado `hello-server`"
2. Escolheu automaticamente em que node do cluster colocar o Pod correspondente
3. Descarregou a imagem indicada e iniciou o contentor dentro de um Pod
4. Passou a monitorizar continuamente esse Pod, garantindo que, se falhar, é automaticamente recriado — aplicando já aqui o princípio de "estado desejado" explicado no ponto 1

Neste momento, a aplicação já está a correr **dentro do cluster**, mas ainda não é acessível a partir de fora dele — é exatamente esse o problema resolvido no ponto seguinte.

---

## 4. Criação de um serviço Kubernetes

Um Pod, por si só, tem um endereço de rede **interno e instável** dentro do cluster (se o Pod for recriado, ganha um novo endereço). Para tornar uma aplicação **acessível de forma estável** — seja a partir de outras aplicações dentro do cluster, seja a partir da internet — é necessário criar um **Service**.

### O que é um Service
Um **Service** é o recurso do Kubernetes que cria um **ponto de acesso fixo e estável** para um conjunto de Pods, distribuindo automaticamente o tráfego recebido entre todas as réplicas ativas — desempenhando um papel conceptualmente semelhante a um **Load Balancer** (ver `04_ec2_escalabilidade_trafego_virtualbox.md`, na pasta de Computação em Nuvem, sobre balanceamento de tráfego no Amazon EC2).

### Tipos principais de Service
- **ClusterIP** (padrão) — expõe o Service apenas **dentro** do cluster, acessível por outras aplicações internas, mas não pela internet.
- **NodePort** — expõe o Service através de uma porta específica em cada node do cluster, tornando-o acessível externamente de forma simples, mas menos flexível.
- **LoadBalancer** — pede ao fornecedor de nuvem (ex: Google Cloud) para provisionar automaticamente um balanceador de carga externo, com um endereço IP público próprio, tornando a aplicação acessível diretamente pela internet — o tipo mais comum para expor aplicações web reais.

### Comando para expor o Deployment como Service

```
kubectl expose deployment hello-server --type=LoadBalancer --port=8080 --target-port=8080
```

- **`kubectl expose deployment hello-server`** — cria um Service associado ao Deployment `hello-server` criado no ponto 3.
- **`--type=LoadBalancer`** — pede um endereço IP público, gerido automaticamente pelo fornecedor de nuvem.
- **`--port=8080`** — a porta através da qual o Service vai ser acedido externamente.
- **`--target-port=8080`** — a porta em que a aplicação está efetivamente à escuta **dentro** do Pod/contentor (semelhante, em conceito, ao mapeamento de portas feito com `-p` no Docker, ver `03_docker_introducao.md`, ponto 7).

### Obter o endereço público do Service

```
kubectl get services
```

Este comando mostra os Services existentes, incluindo, no caso de um Service do tipo `LoadBalancer`, o **endereço IP externo (`EXTERNAL-IP`)** atribuído automaticamente pelo fornecedor de nuvem, através do qual a aplicação já pode ser acedida diretamente a partir de um navegador (ex: `http://<EXTERNAL-IP>:8080`).

### O que este passo trouxe
Com o Service criado, deixa de importar quantos Pods existem, ou se algum deles falha e é recriado com um novo endereço interno — o **Service mantém sempre o mesmo ponto de acesso estável**, redirecionando automaticamente o tráfego para os Pods que estiverem efetivamente saudáveis e disponíveis naquele momento.

---

## 5. Limpeza e remoção do cluster

Depois de concluído o teste/tutorial, é uma boa prática **remover todos os recursos criados** — tanto para manter o ambiente organizado como, especialmente em fornecedores de nuvem pagos, para **evitar custos desnecessários** com recursos que já não estão a ser usados (um cluster Kubernetes gerido, os seus nodes, e um Load Balancer externo continuam a gerar custos enquanto existirem).

### Remover o Service criado

```
kubectl delete service hello-server
```

Isto remove o ponto de acesso público e liberta o endereço IP externo associado (que, em muitos fornecedores, tem custo próprio enquanto está reservado).

### Remover o Deployment criado

```
kubectl delete deployment hello-server
```

Isto instrui o Kubernetes a parar de manter o "estado desejado" definido anteriormente — os Pods associados são terminados e não voltam a ser recriados.

### Remover o cluster inteiro
Se o cluster não for mais necessário (ex: foi criado apenas para fins de estudo/tutorial), o passo final é eliminá-lo por completo através da consola do fornecedor de nuvem, ou via linha de comandos, por exemplo:

```
gcloud container clusters delete nome-do-cluster --zone europe-west1-b
```

Este comando remove **todos** os componentes associados ao cluster — nodes, Control Plane gerido, e qualquer recurso de rede criado especificamente para ele.

### Por que este passo é importante
- **Custos**: clusters Kubernetes geridos, os nodes que os compõem, e balanceadores de carga externos **continuam a ser cobrados** enquanto existirem, mesmo sem tráfego real a passar por eles.
- **Organização**: manter apenas os clusters e recursos efetivamente em uso evita confusão futura sobre "o que está realmente em produção" versus "o que era só um teste".
- **Segurança**: recursos esquecidos e sem manutenção (ex: um cluster de teste nunca mais atualizado) podem tornar-se um ponto fraco de segurança ao longo do tempo.

---

## Resumo em uma frase

> O Kubernetes orquestra automaticamente contentores em larga escala — desde a configuração de um cluster gerido (ex: no GKE), passando pela implementação de uma aplicação através de um Deployment (como o exemplo hello-server) e pela sua exposição estável ao exterior através de um Service, até à limpeza final dos recursos criados para evitar custos desnecessários.

---

## Conceitos relacionados para estudar a seguir

- **ConfigMaps e Secrets** — como gerir configurações e informação sensível (ex: passwords) de forma separada do código da aplicação dentro do Kubernetes
- **Horizontal Pod Autoscaler (HPA)** — escalabilidade automática do número de Pods com base em métricas de uso, expandindo o conceito de escalabilidade já visto em `04_ec2_escalabilidade_trafego_virtualbox.md`
- **Ingress** — uma alternativa mais avançada e flexível ao Service do tipo LoadBalancer, permitindo rotear tráfego HTTP/HTTPS com base em domínios ou caminhos de URL
- **Helm** — ferramenta de gestão de "pacotes" de configuração Kubernetes, facilitando a implementação de aplicações mais complexas
- **YAML manifests** — a forma mais comum, em ambientes reais, de definir Deployments e Services (em vez de comandos `kubectl create`/`kubectl expose` diretos), permitindo versionar essas configurações junto com o código (ver `01_eficiencia_operacional_entrega_software.md`, sobre SCM, na pasta DevOps_I)