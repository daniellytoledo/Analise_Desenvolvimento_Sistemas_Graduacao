# História e Conceitos Básicos do Kubernetes

---

## 1. História e surgimento do Kubernetes

### As origens: Borg, o sistema interno da Google
Muito antes de o Kubernetes existir publicamente, a **Google** já enfrentava, internamente, o problema de gerir milhões de contentores a correr em simultâneo nos seus próprios data centers, para suportar serviços como a Pesquisa Google, o Gmail e o YouTube. Para resolver isto, a Google desenvolveu um sistema interno chamado **Borg**, criado ainda na década de 2000, responsável por orquestrar essa quantidade massiva de cargas de trabalho.

Mais tarde, a Google desenvolveu um segundo sistema interno chamado **Omega**, que aprendeu com as limitações do Borg e serviu como uma segunda geração dessa tecnologia de orquestração.

### O nascimento do Kubernetes
Em **2014**, a Google decidiu abrir ao público uma versão **open-source**, construída com base na experiência acumulada com o Borg e o Omega — este projeto foi batizado de **Kubernetes** (palavra grega, κυβερνήτης, que significa "timoneiro" ou "piloto de navio" — daí o logótipo com um leme, uma referência direta a "pilotar" contentores).

O nome **K8s**, muitas vezes usado como abreviação, vem da contagem das 8 letras entre o "K" e o "s" na palavra "Kubernetes".

### Doação à Cloud Native Computing Foundation (CNCF)
Em **2015**, coincidindo com o lançamento da versão 1.0 do Kubernetes, a Google doou o projeto à recém-criada **Cloud Native Computing Foundation (CNCF)**, uma organização sem fins lucrativos ligada à Linux Foundation. Esta doação foi um marco importante, porque:

- Retirou o Kubernetes do controlo exclusivo de uma única empresa
- Permitiu que outras grandes empresas de tecnologia (Microsoft, Red Hat, IBM, Amazon, entre muitas outras) contribuíssem e confiassem no projeto como uma **norma neutra e aberta**
- Ajudou a consolidar o Kubernetes como o **padrão de facto** para orquestração de contentores na indústria, em vez de ficar limitado a ser "a ferramenta da Google"

Este contexto de origem — nascido de anos de experiência prática a resolver um problema real em escala massiva, e depois aberto e neutralizado como projeto da comunidade — ajuda a explicar por que o Kubernetes se tornou tão dominante tão rapidamente, comparado com outras alternativas surgidas na mesma época (ver ponto 6).

---

## 2. Evolução do Kubernetes — desenvolvimento e marcos importantes

Desde o seu lançamento público, o Kubernetes passou por uma evolução rápida e constante, com contribuições de centenas de empresas e milhares de programadores em todo o mundo. Alguns marcos importantes:

| Ano | Marco |
|---|---|
| **2014** | Lançamento público do Kubernetes pela Google, como projeto open-source |
| **2015** | Lançamento da versão **1.0**; doação do projeto à recém-criada **CNCF** |
| **2016** | Início da adoção por grandes fornecedores de nuvem — a Google lança o **Google Kubernetes Engine (GKE)** como serviço gerido (ver `00_introducao_kubernetes.md`) |
| **2017** | Momento decisivo na "guerra" entre orquestradores: grandes empresas que tinham as suas próprias alternativas (como a Docker Inc., com o Docker Swarm) passam também a suportar Kubernetes nativamente; a Microsoft lança o **Azure Kubernetes Service (AKS)** |
| **2018** | O Kubernetes torna-se o **primeiro projeto a "graduar-se" na CNCF**, um estatuto que reconhece a sua maturidade, adoção e sustentabilidade como projeto; a AWS lança o **Amazon EKS** |
| **2019 em diante** | Consolidação como padrão da indústria; crescimento de todo um ecossistema à volta do Kubernetes (Helm, Istio, Prometheus, ArgoCD, entre muitos outros) |
| **Atualidade** | Lançamentos regulares de novas versões (aproximadamente a cada poucos meses), cada uma com melhorias de segurança, performance e novas funcionalidades, mantendo o Kubernetes em desenvolvimento ativo e contínuo |

### A tendência geral desta evolução
Ao longo dos anos, a evolução do Kubernetes seguiu algumas direções muito claras:

- **De ferramenta de nicho a padrão de indústria**: hoje, praticamente todos os grandes fornecedores de nuvem (Google, AWS, Microsoft Azure, entre outros) oferecem um serviço de Kubernetes gerido, em vez de promoverem apenas as suas próprias alternativas proprietárias.
- **Crescimento de um ecossistema à volta do "core"**: o Kubernetes em si tornou-se a base sobre a qual muitas outras ferramentas complementares foram construídas (gestão de configuração, monitorização, segurança, redes avançadas).
- **Maior foco em simplicidade de operação**: modos como o "Autopilot" (mencionado em `00_introducao_kubernetes.md`, ponto 2) refletem um esforço contínuo da indústria para reduzir a complexidade operacional que sempre foi apontada como uma das maiores barreiras de entrada ao Kubernetes.

---

## 3. Princípios básicos do Kubernetes — conteinerização e orquestração

Para perceber bem o Kubernetes, é importante distinguir claramente dois conceitos que, apesar de relacionados, resolvem problemas diferentes.

### Conteinerização
A **conteinerização** é a prática de empacotar uma aplicação e as suas dependências num contentor isolado e leve (ver `03_docker_introducao.md`, na pasta DevOps_I, para uma explicação detalhada de contentores e do Docker). Este conceito resolve o problema de **consistência**: garantir que uma aplicação corre da mesma forma em qualquer ambiente.

Por si só, porém, a conteinerização **não resolve** questões como:
- O que fazer quando um contentor falha inesperadamente?
- Como distribuir 50 réplicas da mesma aplicação por vários servidores físicos diferentes?
- Como aumentar ou diminuir automaticamente o número de contentores conforme a procura muda?

### Orquestração
É aqui que entra a **orquestração**, o papel do Kubernetes: a prática de **gerir automaticamente o ciclo de vida completo de muitos contentores**, incluindo onde correm, quantos existem, como comunicam entre si, e como se recuperam de falhas.

### Princípios fundamentais que guiam o Kubernetes

- **Estado desejado (desired state)**: já introduzido em `00_introducao_kubernetes.md` — o utilizador declara "o que quer" (ex: "3 réplicas desta aplicação, sempre disponíveis"), e o Kubernetes trabalha continuamente para manter essa realidade, corrigindo desvios automaticamente (ex: recriando um Pod que falhou).
- **Declarativo, não imperativo**: em vez de dizer ao sistema "faz isto, depois aquilo, passo a passo" (abordagem imperativa), o Kubernetes é pensado para trabalhar de forma **declarativa** — descreve-se o resultado final desejado, e o próprio sistema decide como lá chegar (normalmente através de ficheiros de configuração YAML, ver `00_introducao_kubernetes.md`, secção final).
- **Autorreparação (self-healing)**: contentores que falham são automaticamente substituídos; contentores que não respondem a verificações de saúde são reiniciados ou removidos da distribuição de tráfego, sem necessidade de intervenção manual.
- **Escalabilidade horizontal automática**: o número de réplicas de uma aplicação pode ser ajustado automaticamente com base em métricas reais de utilização (CPU, memória, ou métricas personalizadas), seguindo o mesmo espírito do Auto Scaling já visto no Amazon EC2 (ver `04_ec2_escalabilidade_trafego_virtualbox.md`, na pasta de Computação em Nuvem), mas aplicado ao nível de contentores em vez de máquinas virtuais inteiras.
- **Abstração da infraestrutura subjacente**: quem implementa uma aplicação no Kubernetes normalmente não precisa de saber exatamente em que máquina física ou virtual ela vai correr — o Kubernetes decide isso automaticamente, com base nos recursos disponíveis em cada node do cluster.

---

## 4. Arquitetura do Kubernetes — clusters, nós e componentes

A arquitetura de um cluster Kubernetes divide-se em duas grandes partes: o **Control Plane** (o "cérebro") e os **Nodes** (onde as aplicações efetivamente correm).

```
                    ┌───────────────────────────────┐
                    │         Control Plane          │
                    │  ┌───────────┐ ┌─────────────┐ │
                    │  │ API Server│ │  Scheduler  │ │
                    │  └───────────┘ └─────────────┘ │
                    │  ┌───────────┐ ┌─────────────┐ │
                    │  │   etcd    │ │  Controller │ │
                    │  │           │ │   Manager   │ │
                    │  └───────────┘ └─────────────┘ │
                    └───────────────┬─────────────────┘
                                    │
            ┌───────────────────────┼───────────────────────┐
            ▼                       ▼                       ▼
      ┌───────────┐          ┌───────────┐           ┌───────────┐
      │  Node 1   │          │  Node 2   │           │  Node 3   │
      │ ┌───────┐ │          │ ┌───────┐ │           │ ┌───────┐ │
      │ │ Pods  │ │          │ │ Pods  │ │           │ │ Pods  │ │
      │ └───────┘ │          │ └───────┘ │           │ └───────┘ │
      │  kubelet  │          │  kubelet  │           │  kubelet  │
      └───────────┘          └───────────┘           └───────────┘
```

### Componentes do Control Plane

- **API Server**: o ponto de entrada central de todo o cluster — é através dele que o `kubectl` (e qualquer outra ferramenta) comunica com o Kubernetes, seja para consultar informação, seja para pedir alterações (ex: criar um novo Deployment).
- **etcd**: uma base de dados distribuída, do tipo chave-valor, onde o Kubernetes guarda **todo o estado do cluster** — configurações, estado atual de cada recurso, etc. É considerada a "fonte de verdade" de todo o sistema.
- **Scheduler**: responsável por decidir **em que node** cada novo Pod deve correr, com base nos recursos disponíveis (CPU, memória) e em regras/restrições definidas.
- **Controller Manager**: corre continuamente vários "controladores" em segundo plano, cada um responsável por garantir que um determinado tipo de recurso está no seu estado desejado (ex: o controlador de Deployments garante que o número certo de réplicas está sempre a correr).

### Componentes de cada Node

- **kubelet**: o "agente" que corre em cada node, responsável por comunicar com o Control Plane e garantir que os contentores descritos nos Pods atribuídos a esse node estão, de facto, a correr corretamente.
- **Container runtime**: o motor efetivamente responsável por correr os contentores dentro de cada node (ex: containerd, uma tecnologia relacionada com o motor por trás do próprio Docker).
- **kube-proxy**: gere as regras de rede em cada node, permitindo a comunicação entre Pods e a distribuição de tráfego feita pelos Services (ver ponto 5).

### Relação entre os termos "Cluster" e "Node"
Recapitulando de `00_introducao_kubernetes.md`: um **Cluster** é o conjunto total do Control Plane + todos os Nodes geridos por ele; cada **Node** é uma máquina individual (física ou virtual) onde os Pods das aplicações efetivamente correm.

---

## 5. Principais componentes do Kubernetes — Pods, Services, Volumes, ConfigMaps, Deployments

Esta secção resume os principais **recursos (objects)** que se definem e geram dentro de um cluster Kubernetes, para além dos componentes de infraestrutura já vistos no ponto 4.

### Pod
A **menor unidade** que o Kubernetes gere diretamente. Normalmente corresponde a um único contentor, embora possa, por vezes, agrupar mais do que um contentor fortemente relacionado que precise de partilhar rede e armazenamento entre si. Pods são, por natureza, **efémeros** — podem ser destruídos e recriados a qualquer momento, geralmente com um novo endereço IP interno.

### Deployment
Já introduzido em `00_introducao_kubernetes.md`, ponto 3 — um Deployment descreve **qual imagem correr e quantas réplicas (Pods) devem existir**, sendo responsável por criar, atualizar e substituir Pods automaticamente para manter esse número.

### Service
Já introduzido em `00_introducao_kubernetes.md`, ponto 4 — cria um **ponto de acesso de rede estável** para um conjunto de Pods, resolvendo o problema de os Pods terem endereços internos instáveis, e distribuindo tráfego entre as réplicas disponíveis.

### Volumes
Assim como no Docker (ver `05_docker_volumes_arquivos_pastas.md`, na pasta DevOps_I), os Pods do Kubernetes também precisam, muitas vezes, de **persistir dados** além do ciclo de vida efémero de um contentor individual. Um **Volume** no Kubernetes cumpre esse papel, ligando armazenamento persistente a um Pod. Existem várias formas de armazenamento subjacente (ex: discos do próprio fornecedor de nuvem, sistemas de ficheiros de rede), geridas através de conceitos como **PersistentVolume (PV)** e **PersistentVolumeClaim (PVC)**, que separam "o armazenamento disponível" de "o pedido de uso desse armazenamento" por parte de uma aplicação.

### ConfigMaps
Um **ConfigMap** permite guardar **dados de configuração não sensíveis** (ex: URLs de outros serviços, definições de comportamento, variáveis de ambiente) **fora** do código da aplicação e da própria imagem de contentor, podendo ser injetados num Pod em tempo de execução. Isto permite reutilizar a mesma imagem de contentor em ambientes diferentes (ex: testes vs. produção), mudando apenas a configuração associada, sem reconstruir a imagem.

> Para informação **sensível** (passwords, tokens, chaves de API), o Kubernetes disponibiliza um recurso semelhante, mas mais adequado, chamado **Secret**, que trata esses dados com cuidados adicionais de segurança.

### Como estes componentes se relacionam entre si

```
Deployment (define: imagem + nº de réplicas)
      │
      ▼
   cria e gere
      │
      ▼
    Pods (unidades em execução)
      │             │
      ▼             ▼
  usa Volumes   lê ConfigMaps/Secrets
  (dados persistentes) (configuração externa)
      │
      ▼
  Service (ponto de acesso estável e distribuição de tráfego)
```

---

## 6. Comparação do Kubernetes com outras ferramentas

O Kubernetes não foi a única resposta ao problema de orquestração de contentores — vale a pena conhecer as principais alternativas e como se comparam.

### Docker Swarm
A própria **Docker Inc.** desenvolveu o seu orquestrador nativo, o **Docker Swarm**, focado especialmente em **simplicidade** e integração direta com as ferramentas Docker já conhecidas (ver `03_docker_introducao.md` e seguintes, na pasta DevOps_I).

- **Vantagem**: curva de aprendizagem muito mais suave, especialmente para quem já domina Docker — comandos e conceitos são mais diretos.
- **Desvantagem**: conjunto de funcionalidades bastante mais limitado do que o Kubernetes (ex: menos opções de escalabilidade avançada, menos flexibilidade de configuração de rede), e um ecossistema de ferramentas complementares muito menor. A adoção no mercado tem vindo a diminuir consistentemente em favor do Kubernetes.

### Apache Mesos (com Marathon)
O **Mesos** é um sistema mais genérico de gestão de recursos de cluster, não desenhado especificamente para contentores desde o início (podia gerir também outras cargas de trabalho, como processamento de big data). Para orquestrar contentores especificamente, era normalmente combinado com um framework adicional chamado **Marathon**.

- **Vantagem**: maior flexibilidade para gerir cargas de trabalho muito diversas, não só contentores, sendo historicamente usado por empresas com necessidades muito específicas de gestão de recursos em larga escala (ex: Twitter, Airbnb, numa fase inicial).
- **Desvantagem**: maior complexidade de configuração, e uma comunidade e ecossistema hoje muito menores do que o do Kubernetes, tendo perdido relevância no mercado nos últimos anos.

### Red Hat OpenShift
O **OpenShift** não é propriamente um concorrente direto do Kubernetes — é, na verdade, uma **plataforma construída sobre o Kubernetes**, desenvolvida pela Red Hat, que adiciona uma camada adicional de ferramentas, interface gráfica, políticas de segurança mais rígidas por padrão, e funcionalidades voltadas para ambientes empresariais.

- **Vantagem**: experiência mais "completa" e gerida, com suporte empresarial da Red Hat, interface web mais amigável, e políticas de segurança já configuradas por padrão.
- **Desvantagem**: menos flexível do que usar o Kubernetes "puro", com potencial custo de licenciamento (para o suporte empresarial), e alguma curva de aprendizagem adicional específica das particularidades do OpenShift.

### Amazon ECS (Elastic Container Service)
Já mencionado em `05_computacao_sem_servidor.md`, na pasta de Computação em Nuvem — o **ECS** é o orquestrador de contentores **proprietário e nativo da AWS**, alternativo ao Kubernetes (a AWS também oferece Kubernetes gerido através do **Amazon EKS**, para quem prefere este padrão).

- **Vantagem**: integração mais simples e direta com o resto do ecossistema AWS (IAM, VPC, CloudWatch — ver `01_aws.md`), e uma curva de aprendizagem geralmente mais suave para quem já trabalha dentro da AWS.
- **Desvantagem**: é uma tecnologia **proprietária da AWS** — não é possível levar uma configuração ECS para outro fornecedor de nuvem sem reescrever, ao contrário do Kubernetes, que corre de forma equivalente em qualquer fornecedor que o suporte (Google, AWS, Azure, ou até num data center próprio).

### Tabela-resumo comparativa

| Ferramenta | Tipo | Curva de aprendizagem | Portabilidade entre fornecedores | Ecossistema/comunidade |
|---|---|---|---|---|
| **Kubernetes** | Orquestrador open-source, padrão de indústria | Média/alta | Muito alta (corre em qualquer fornecedor) | Enorme, em crescimento constante |
| **Docker Swarm** | Orquestrador nativo do Docker | Baixa | Alta, mas menos usado | Pequeno, em declínio |
| **Apache Mesos + Marathon** | Gestor de recursos genérico | Alta | Alta, mas nicho específico | Pequeno, em declínio |
| **Red Hat OpenShift** | Plataforma empresarial sobre Kubernetes | Média/alta | Alta (é baseado em Kubernetes) | Grande, mas ligado ao ecossistema Red Hat |
| **Amazon ECS** | Orquestrador proprietário da AWS | Baixa (dentro da AWS) | Baixa (fica preso à AWS) | Grande, mas exclusivo da AWS |

### Por que o Kubernetes se tornou o padrão dominante
A combinação de ser **open-source**, **neutro** (mantido pela CNCF, não por uma única empresa), **portável entre qualquer fornecedor de nuvem**, e ter o maior **ecossistema de ferramentas complementares** à sua volta, explica por que o Kubernetes acabou por se tornar a escolha mais comum do mercado, mesmo havendo alternativas mais simples (como o Docker Swarm) ou mais integradas a um único fornecedor (como o Amazon ECS).

---

## Resumo em uma frase

> O Kubernetes nasceu da experiência interna da Google com os sistemas Borg e Omega, tornou-se um projeto open-source neutro sob a CNCF em 2015, e consolidou-se como o padrão de indústria para orquestração de contentores graças à sua arquitetura robusta (Control Plane + Nodes), aos seus princípios de estado desejado e autorreparação, e à sua portabilidade entre fornecedores — superando, em adoção, alternativas como Docker Swarm, Apache Mesos, e mesmo orquestradores proprietários como o Amazon ECS.

---

## Conceitos relacionados para estudar a seguir

- **CNCF Landscape** — o mapa completo do ecossistema de ferramentas cloud-native construídas à volta do Kubernetes
- **Namespaces** — como o Kubernetes permite dividir logicamente um mesmo cluster entre diferentes equipas, ambientes ou projetos
- **Helm Charts** — a forma mais comum de empacotar e reutilizar configurações complexas de Kubernetes
- **StatefulSets** — um tipo de recurso alternativo ao Deployment, pensado especificamente para aplicações com estado (ex: bases de dados) que precisam de identidade de rede estável entre reinícios
- **Service Mesh (ex: Istio)** — camada adicional para gerir comunicação, segurança e observabilidade entre serviços dentro de um cluster Kubernetes mais complexo