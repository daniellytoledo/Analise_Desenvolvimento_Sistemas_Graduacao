# Computação em Nuvem: EC2, Escalabilidade, Tráfego e Máquinas Virtuais

## 1. Visão geral dos serviços de computação — hardware e software como serviço

Os **serviços de computação em nuvem** são a categoria de serviços responsável por fornecer capacidade de processamento — ou seja, "poder computacional" — sem que a empresa precise de comprar, instalar e manter servidores físicos próprios.

A ideia central é transformar recursos que tradicionalmente eram **ativos físicos** (hardware) e **licenças instaladas localmente** (software) em **serviços consumidos sob demanda**, através da internet. Isto muda completamente a forma como uma empresa lida com tecnologia:

| Modelo tradicional | Modelo em nuvem |
|---|---|
| Comprar servidores físicos (CapEx elevado) | Alugar capacidade computacional (OpEx, pago por uso) |
| Instalar e licenciar software localmente | Consumir software/plataforma como serviço |
| Capacidade fixa, definida na compra | Capacidade elástica, ajustável em minutos |
| Manutenção de hardware feita internamente | Manutenção do hardware é responsabilidade do fornecedor |
| Expansão lenta (comprar, instalar, configurar) | Expansão em minutos, via painel ou API |

Na AWS, esta "transformação de hardware em serviço" acontece principalmente através de:

- **EC2 (Elastic Compute Cloud)** — servidores virtuais configuráveis (o foco principal deste ficheiro)
- **Lambda** — execução de código sem gerir servidor algum (computação *serverless*)
- **Elastic Beanstalk** — plataforma para implementar aplicações sem gerir a infraestrutura por baixo
- **ECS / EKS** — orquestração de contentores (Docker/Kubernetes) geridos pela AWS

O ponto comum entre todos estes serviços é que a empresa deixa de se preocupar com "onde está fisicamente o servidor" e passa a focar-se apenas em "quanto poder de processamento preciso e por quanto tempo" — sendo esta a base conceptual de todo o modelo de computação em nuvem.

---

## 2. Tipos de instâncias Amazon EC2

Uma **instância EC2** é, na prática, um servidor virtual alugado na AWS. Ao criar uma instância, a AWS permite escolher entre diferentes **tipos** (também chamados *instance types*), que são combinações pré-definidas de CPU, memória RAM, armazenamento e capacidade de rede — de forma semelhante a escolher as especificações de um computador antes de o comprar.

### Estrutura do nome de uma instância
Os tipos de instância seguem uma nomenclatura própria, por exemplo `t3.medium` ou `m5.large`:

- **Família** (ex: `t`, `m`, `c`, `r`) — indica para que finalidade a instância foi otimizada
- **Geração** (ex: `3`, `5`) — versão da tecnologia usada (gerações mais recentes costumam ter melhor performance/custo)
- **Tamanho** (ex: `micro`, `medium`, `large`, `xlarge`) — quantidade de vCPUs e memória disponibilizada

### Principais famílias de instâncias

| Família | Otimizada para | Exemplos de uso |
|---|---|---|
| **T** (ex: t3, t4g) | Uso geral, com performance "explosiva" (*burstable*) | Sites pequenos, ambientes de desenvolvimento/testes, cargas variáveis |
| **M** (ex: m5, m6i) | Uso geral, equilíbrio entre CPU e memória | Aplicações web, bases de dados de médio porte, backends |
| **C** (ex: c5, c6g) | Computação intensiva (CPU) | Processamento em lote, servidores de jogos, análise de dados |
| **R** (ex: r5, r6g) | Memória intensiva (RAM) | Bases de dados em memória, cache, análise de big data |
| **I** (ex: i3) | Armazenamento intensivo (I/O rápido) | Bases de dados NoSQL, data warehouses |
| **G / P** (ex: g4, p3) | Processamento gráfico (GPU) | Machine learning, renderização, jogos na nuvem |

### Configurações relevantes ao escolher uma instância
Além do tipo, é possível configurar outros aspectos da máquina virtual na criação de uma instância EC2:

- **AMI (Amazon Machine Image)** — imagem base do sistema operativo (ex: Ubuntu, Amazon Linux, Windows Server)
- **vCPUs e memória RAM** — determinadas pelo tamanho da instância escolhida
- **Armazenamento (EBS)** — tipo e tamanho do disco virtual anexado (ex: SSD de uso geral, SSD de alta performance)
- **Rede** — VPC, sub-rede e grupo de segurança (*security group*) associados
- **Par de chaves (key pair)** — usado para aceder à instância remotamente via SSH (Linux) ou RDP (Windows)

> **Dica prática:** para estudar/praticar sem custos, a AWS Free Tier disponibiliza normalmente uma instância `t2.micro` ou `t3.micro` gratuita durante 12 meses (dentro de um limite de horas mensais).

---

## 3. Escalabilidade Amazon EC2 — variação na disponibilidade dos recursos

Um dos maiores benefícios da nuvem é a possibilidade de **ajustar a quantidade de recursos computacionais conforme a procura real**, em vez de manter sempre a capacidade máxima ligada (o que geraria desperdício de dinheiro) ou uma capacidade insuficiente (o que geraria lentidão ou indisponibilidade em picos de acesso).

### O que é escalabilidade?
É a capacidade de um sistema aumentar ou diminuir os recursos disponíveis conforme a demanda muda ao longo do tempo — por exemplo, um site de e-commerce que recebe muito mais tráfego numa Black Friday do que num dia normal.

### Tipos de escalabilidade

- **Escalabilidade vertical (scale up/down)**: aumentar ou diminuir a capacidade de uma única instância (ex: mudar de `t3.medium` para `t3.large`). Tem um limite físico e normalmente exige reiniciar a instância.
- **Escalabilidade horizontal (scale out/in)**: aumentar ou diminuir o **número de instâncias** a correr em paralelo, em vez de aumentar o tamanho de uma só. É o modelo mais usado na nuvem, por ser mais flexível e resiliente (se uma instância falhar, as outras continuam a atender).

### Amazon EC2 Auto Scaling
O serviço responsável por automatizar a escalabilidade horizontal na AWS é o **EC2 Auto Scaling**. Ele permite definir:

- **Capacidade mínima** — número mínimo de instâncias que devem estar sempre a correr
- **Capacidade desejada** — número "normal" de instâncias em funcionamento
- **Capacidade máxima** — limite superior de instâncias, mesmo em picos de tráfego

O Auto Scaling monitoriza métricas (como uso de CPU, através do CloudWatch) e, com base em regras definidas, **cria automaticamente novas instâncias** quando a demanda sobe, e **remove instâncias** quando a demanda desce — otimizando tanto a performance quanto o custo.

### Por que a disponibilidade de recursos varia?
Vale notar que, apesar da elasticidade ser um dos pilares da nuvem, a **capacidade física de cada Zona de Disponibilidade não é infinita**. Em momentos de altíssima demanda global (ex: eventos muito grandes, ou regiões com pouca capacidade disponível), é possível que um tipo específico de instância fique temporariamente indisponível numa determinada AZ — por isso é considerada boa prática distribuir instâncias por **múltiplas zonas de disponibilidade**, aumentando tanto a resiliência quanto a chance de conseguir a capacidade necessária.

---

## 4. Direcionamento de tráfego para EC2 — garantindo o bom desempenho da aplicação

De nada adianta ter várias instâncias EC2 a correr em paralelo (graças ao Auto Scaling) se não houver um mecanismo que **distribua o tráfego de forma inteligente** entre elas. É aqui que entra o balanceamento de carga.

### Elastic Load Balancing (ELB)
O **ELB** é o serviço da AWS responsável por distribuir automaticamente o tráfego de entrada (ex: pedidos HTTP de utilizadores) entre múltiplas instâncias EC2, garantindo:

- **Melhor desempenho**: nenhuma instância fica sobrecarregada enquanto outras estão ociosas
- **Alta disponibilidade**: se uma instância falhar, o tráfego é automaticamente redirecionado para as instâncias saudáveis
- **Escalabilidade integrada**: funciona em conjunto com o Auto Scaling, distribuindo tráfego para novas instâncias assim que estas são criadas

### Tipos de load balancer na AWS

| Tipo | Camada | Uso típico |
|---|---|---|
| **Application Load Balancer (ALB)** | Camada 7 (HTTP/HTTPS) | Aplicações web, permite rotear tráfego com base em caminho de URL ou domínio |
| **Network Load Balancer (NLB)** | Camada 4 (TCP/UDP) | Aplicações que exigem altíssima performance e baixa latência |
| **Gateway Load Balancer (GWLB)** | Camada 3 | Integração com appliances de rede de terceiros (ex: firewalls) |

### Verificações de saúde (Health Checks)
O Load Balancer verifica periodicamente se cada instância está a responder corretamente (*health checks*). Se uma instância deixar de responder, ela é automaticamente retirada do grupo de distribuição de tráfego até voltar a ficar saudável — evitando que utilizadores sejam direcionados para uma instância com falha.

### Resumindo o fluxo completo
```
Utilizador → Internet → Load Balancer (ELB)
                             │
             ┌───────────────┼───────────────┐
        Instância EC2   Instância EC2   Instância EC2
         (AZ 1)           (AZ 2)          (AZ 3)
                             │
                    Auto Scaling Group
           (cria/remove instâncias conforme a demanda)
```

Esta combinação — **Auto Scaling + Load Balancer** — é o padrão de arquitetura mais comum na AWS para garantir que uma aplicação se mantém disponível, rápida e com custo otimizado, independentemente de picos ou quedas de tráfego.

---

## 5. Guia rápido: criar uma máquina virtual no VirtualBox com Ubuntu Linux

Este guia serve como prática local de conceitos de virtualização — a mesma tecnologia de base que sustenta os serviços de nuvem como o EC2 (ver [00_computacao_em_nuvem.md](./00_computacao_em_nuvem.md)), mas aqui a "virtualização" acontece no próprio computador, através do VirtualBox.

### Pré-requisitos
- **VirtualBox** instalado (disponível gratuitamente em [virtualbox.org](https://www.virtualbox.org))
- **Ficheiro ISO do Ubuntu** descarregado (disponível em [ubuntu.com/download](https://ubuntu.com/download/desktop))
- Espaço em disco livre (recomenda-se pelo menos 25 GB) e pelo menos 4 GB de RAM disponíveis para atribuir à VM

### Passo a passo

1. **Abrir o VirtualBox e criar uma nova VM**
   Clicar em "Novo" (New). Dar um nome à máquina (ex: "Ubuntu-Teste"), selecionar o tipo "Linux" e a versão "Ubuntu (64-bit)".

2. **Definir a memória RAM**
   Atribuir a quantidade de RAM que a VM poderá usar (recomendado: pelo menos 2 GB, idealmente 4 GB, sem comprometer a memória do computador anfitrião/host).

3. **Criar um disco rígido virtual**
   Escolher "Criar um disco rígido virtual agora", selecionar o formato **VDI** (formato nativo do VirtualBox), tipo "Alocado dinamicamente" (o disco cresce conforme necessário, em vez de ocupar todo o espaço logo de início), e definir o tamanho (recomendado: 25 GB ou mais).

4. **Configurar o processador (opcional, mas recomendado)**
   Em "Configurações" → "Sistema" → "Processador", atribuir pelo menos 2 vCPUs, se o computador anfitrião suportar, para melhorar a performance da VM.

5. **Associar o ficheiro ISO do Ubuntu à unidade ótica virtual**
   Em "Configurações" → "Armazenamento", selecionar o controlador de armazenamento (ex: "Vazio" na unidade ótica), clicar no ícone de disco e escolher "Escolher um ficheiro de disco" — apontando para o ficheiro `.iso` do Ubuntu descarregado anteriormente.

6. **Iniciar a máquina virtual**
   Clicar em "Iniciar" (Start). A VM vai arrancar diretamente a partir do ISO do Ubuntu, como se fosse um computador novo a arrancar de uma pen USB de instalação.

7. **Seguir o instalador do Ubuntu**
   - Escolher o idioma e o layout do teclado
   - Selecionar "Instalar o Ubuntu" (Install Ubuntu)
   - Escolher o tipo de instalação — normalmente "Apagar disco e instalar o Ubuntu" é seguro, pois está a referir-se apenas ao disco virtual criado no passo 3, e não ao disco real do computador
   - Definir fuso horário, criar o utilizador e definir a password
   - Aguardar a conclusão da instalação

8. **Reiniciar e remover o ISO**
   No final da instalação, o sistema pede para reiniciar. É boa prática, antes de reiniciar, remover o ISO da unidade ótica virtual (em "Dispositivos" → "Unidades óticas" → "Remover disco") para que a VM não tente instalar o sistema novamente a partir do ISO.

9. **Instalação concluída**
   A VM reinicia e entra diretamente no sistema Ubuntu instalado, já pronto para uso — funcionando como um computador Linux completo e isolado dentro do sistema anfitrião, útil para testes, estudo de comandos Linux, ou simular ambientes de servidor sem afetar o sistema operativo principal.

> **Nota:** Este mesmo princípio de virtualização — isolar um sistema operativo completo dentro de outro, através de um *hypervisor* (neste caso, o VirtualBox) — é a base tecnológica que permite à AWS oferecer múltiplas instâncias EC2 independentes a partir do mesmo hardware físico nos seus data centers.

---

## Resumo em uma frase

> Os serviços de computação em nuvem, como o Amazon EC2, transformam hardware e software em recursos configuráveis e escaláveis sob demanda — através da escolha do tipo de instância certo, do uso de Auto Scaling para ajustar a capacidade automaticamente e de Load Balancers para distribuir o tráfego — sendo o mesmo princípio de virtualização também replicável localmente, como no exemplo prático de criar uma VM Ubuntu via VirtualBox.

---

## Conceitos relacionados para estudar a seguir

- **Amazon Machine Images (AMIs)** — como criar e reutilizar imagens personalizadas de instâncias
- **Elastic Block Store (EBS)** — tipos de armazenamento anexado às instâncias EC2
- **VPC e Security Groups** — como controlar o tráfego de rede que chega às instâncias
- **Contentores (Docker) e Kubernetes** — alternativa mais leve à virtualização tradicional de VMs completas
- **AWS Well-Architected Framework — pilar de Fiabilidade e Performance** (ver [03_aws_well_architected_framework.md](./03_aws_well_architected_framework.md)), diretamente relacionado com os conceitos de escalabilidade e balanceamento de tráfego aqui abordados