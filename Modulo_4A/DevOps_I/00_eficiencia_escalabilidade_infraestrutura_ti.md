# Eficiência e Escalabilidade em Infraestrutura de TI

---

## 1. Pré-história: a época do On-Premises

Antes da nuvem e da virtualização em larga escala, as empresas implementavam os seus softwares através do modelo **On-Premises** (literalmente "nas instalações"): toda a infraestrutura de TI ficava fisicamente dentro da própria empresa.

### Como funcionava
- A empresa **comprava servidores físicos** (hardware), muitas vezes com um investimento inicial elevado (CapEx).
- Esses servidores eram instalados numa **sala própria (data center local)**, com necessidade de energia elétrica dedicada, sistemas de refrigeração e, em muitos casos, geradores de backup.
- Era preciso contratar uma **equipa de TI dedicada** para instalar, configurar, atualizar, corrigir falhas (patch) e manter fisicamente esses servidores.
- Cada servidor físico corria, tipicamente, **uma única aplicação ou um único propósito** — por exemplo, um servidor dedicado apenas à base de dados, outro apenas ao servidor web, outro apenas ao servidor de e-mail.

### Principais problemas deste modelo

- **Desperdício de capacidade**: um servidor era dimensionado para o pico máximo de uso esperado, mesmo que na maior parte do tempo estivesse a usar uma fração pequena da sua capacidade real (ex: um servidor com 80% do processador ocioso durante a maior parte do dia).
- **Investimento inicial elevado e lento**: comprar, entregar, instalar e configurar um novo servidor podia demorar semanas ou meses — dificultando reagir rapidamente a picos de procura ou a novas necessidades do negócio.
- **Escalabilidade limitada e lenta**: se um servidor ficasse sem capacidade suficiente, a solução era comprar mais um servidor físico (*scale up* limitado ao hardware disponível, ou *scale out* comprando mais máquinas) — um processo caro e demorado.
- **Risco de subutilização generalizada**: como cada aplicação tinha "o seu próprio servidor", multiplicavam-se máquinas físicas subaproveitadas por toda a empresa, cada uma com o seu próprio custo de manutenção, energia e espaço físico.
- **Manutenção totalmente a cargo da empresa**: qualquer falha de hardware, atualização de sistema operativo ou expansão de capacidade era responsabilidade interna, sem apoio de um fornecedor externo especializado.

Este cenário — um servidor físico por aplicação, com capacidade fixa e desperdício constante — é o ponto de partida que a evolução da infraestrutura de TI (hypervisores, depois contentores, depois nuvem) foi resolvendo progressivamente, como veremos nos pontos seguintes.

---

## 2. A chegada do hypervisor — quebra de paradigma no uso de infraestrutura

A primeira grande mudança que resolveu o problema do desperdício de capacidade do modelo On-Premises foi a chegada da **virtualização de hardware**, através de uma peça de software chamada **hypervisor**.

### O que é um hypervisor
Um **hypervisor** (também chamado *Virtual Machine Monitor*) é uma camada de software que permite dividir **um único servidor físico em várias máquinas virtuais (VMs) independentes**, cada uma com o seu próprio sistema operativo, como se fossem servidores físicos separados — mas todas a partilhar os mesmos recursos físicos (CPU, RAM, disco) por baixo.

### Tipos de hypervisor
- **Tipo 1 (bare-metal)**: corre diretamente sobre o hardware físico, sem sistema operativo intermediário. Exemplos: VMware ESXi, Microsoft Hyper-V, Xen — este é o tipo mais usado em ambientes empresariais e data centers.
- **Tipo 2 (hosted)**: corre sobre um sistema operativo já existente, como uma aplicação normal. Exemplos: VirtualBox, VMware Workstation — mais comum para uso local/testes (foi exatamente este o tipo usado no guia prático de criação de VM Ubuntu, ver `04_ec2_escalabilidade_trafego_virtualbox.md`).

### A quebra de paradigma
Antes do hypervisor, a relação era **1 servidor físico = 1 sistema operativo = 1 aplicação**. Com o hypervisor, essa relação deixou de existir:

```
Antes (On-Premises tradicional):
Servidor Físico A → Aplicação A
Servidor Físico B → Aplicação B
Servidor Físico C → Aplicação C
(3 servidores físicos, cada um subutilizado)

Depois (com hypervisor):
Servidor Físico único
   ├── VM 1 → Aplicação A
   ├── VM 2 → Aplicação B
   └── VM 3 → Aplicação C
(1 servidor físico, capacidade muito melhor aproveitada)
```

Esta mudança teve impacto direto em vários problemas identificados no modelo On-Premises tradicional:

- **Redução de desperdício**: um único servidor físico passou a poder correr várias VMs, aproveitando muito melhor a capacidade de processamento e memória disponível.
- **Maior flexibilidade**: criar uma nova VM passou a ser uma questão de minutos, em vez de semanas para comprar e instalar um novo servidor físico.
- **Isolamento mantido**: cada VM continuava a funcionar como uma máquina completamente independente, com o seu próprio sistema operativo, sem interferir nas outras — mantendo a segurança e a separação entre aplicações diferentes.
- **Base tecnológica da nuvem moderna**: é exatamente este princípio de virtualização que, mais tarde, permitiu à AWS (e a outros fornecedores de nuvem) oferecer múltiplas instâncias EC2 independentes a partir do mesmo hardware físico dos seus data centers (ver `01_aws.md` e `04_ec2_escalabilidade_trafego_virtualbox.md`).

---

## 3. Eficiência organizacional — atender vários negócios com um único servidor

A virtualização não trouxe apenas benefícios técnicos — trouxe também uma mudança na forma como as empresas (e, mais tarde, os fornecedores de nuvem) passaram a **rentabilizar e organizar a sua infraestrutura**.

### Multi-tenancy (multi-inquilino)
Com o hypervisor, tornou-se possível um único servidor físico (ou um conjunto deles, num data center) **atender vários "negócios" ou departamentos diferentes ao mesmo tempo**, cada um isolado na sua própria VM — um modelo conhecido como **multi-tenancy**.

Isto acontece em dois níveis:

- **Dentro de uma mesma empresa**: diferentes departamentos ou projetos passam a partilhar a mesma infraestrutura física, cada um com as suas VMs dedicadas, reduzindo a necessidade de comprar hardware separado para cada equipa.
- **Entre empresas diferentes (o modelo dos fornecedores de nuvem)**: um fornecedor como a AWS consegue, através da mesma lógica de virtualização, servir **milhares de clientes diferentes** a partir dos mesmos data centers físicos — cada cliente com os seus próprios recursos isolados (VMs, redes virtuais, permissões), sem que um cliente tenha qualquer visibilidade ou acesso aos recursos de outro.

### Por que isto é mais eficiente
- **Economia de escala**: o custo de manter um data center gigante, altamente otimizado, dividido por milhares de clientes, é proporcionalmente muito menor do que cada empresa manter o seu próprio data center pequeno e subutilizado.
- **Melhor aproveitamento de picos e vales de uso**: como diferentes clientes/aplicações têm picos de utilização em momentos diferentes (ex: uma aplicação usada de dia, outra à noite), a infraestrutura física partilhada consegue absorver melhor essa variação, em vez de cada aplicação precisar da sua própria capacidade máxima reservada.
- **Manutenção centralizada e especializada**: em vez de cada empresa ter a sua própria equipa a gerir hardware físico, essa responsabilidade passa a ser centralizada no fornecedor de infraestrutura (seja um departamento de TI central, seja um fornecedor de nuvem como a AWS), que consegue investir em especialização e automação a uma escala que uma empresa isolada normalmente não conseguiria.

Este princípio — **uma infraestrutura física, muitos "negócios" isolados por cima dela** — é a base conceptual que sustenta tanto a eficiência interna de uma empresa (vários departamentos partilhando servidores) como o próprio modelo de negócio da computação em nuvem pública (ver `00_computacao_em_nuvem.md`).

---

## 4. A chegada dos contentores — reduzindo o tamanho do servidor ao tamanho da aplicação

Apesar de o hypervisor já ter resolvido grande parte do desperdício do modelo On-Premises, as **máquinas virtuais continuavam "pesadas"**: cada VM ainda precisa de correr uma cópia completa de um sistema operativo, mesmo que a aplicação lá dentro seja pequena.

Foi para resolver este novo nível de desperdício que surgiram os **contentores (containers)** — já introduzidos em `05_computacao_sem_servidor.md`, mas aqui aprofundados sob a ótica da evolução da infraestrutura.

### A ideia central dos contentores
Em vez de virtualizar **um computador inteiro** (como faz uma VM, com o seu próprio kernel e sistema operativo completo), um contentor virtualiza apenas **o suficiente para isolar uma aplicação**, partilhando o kernel do sistema operativo do servidor anfitrião (host).

```
Máquina Virtual:                    Contentor:
┌─────────────────────┐             ┌─────────────────────┐
│   Aplicação          │             │   Aplicação          │
│   Bibliotecas         │             │   Bibliotecas         │
│   Sistema Operativo   │  ←pesado    │   (kernel partilhado  │  ←leve
│   completo próprio    │             │    com o host)        │
└─────────────────────┘             └─────────────────────┘
        Hypervisor                          Docker Engine
     Servidor físico                      Servidor físico
```

### O que isto significa na prática
- O "tamanho" do ambiente isolado deixa de ser do tamanho de um sistema operativo inteiro (gigabytes) e passa a ser praticamente do **tamanho da própria aplicação** e das suas dependências diretas (muitas vezes apenas megabytes).
- O tempo de arranque de um contentor passa a ser medido em **segundos ou milissegundos**, em vez dos minutos que uma VM tradicional demora a iniciar (que precisa de "ligar" um sistema operativo completo do zero).
- É possível correr **muito mais contentores do que VMs** no mesmo servidor físico, já que não há sobreposição de sistemas operativos completos para cada aplicação isolada.

### Impacto na eficiência organizacional
Este avanço aprofunda ainda mais a lógica de eficiência descrita no ponto 3: se antes um servidor físico conseguia atender vários negócios através de várias VMs, agora, com contentores, esse mesmo servidor físico consegue atender **um número muito maior de aplicações isoladas em simultâneo**, porque cada uma ocupa apenas uma fração do espaço e dos recursos que uma VM exigiria.

> Ferramentas como o **Docker** (para criar e correr contentores) e o **Kubernetes** (para orquestrar muitos contentores em produção, distribuindo-os automaticamente entre vários servidores físicos) são as tecnologias centrais por trás desta etapa da evolução da infraestrutura.

---

## 5. Escalabilidade: On-Premises vs. Contentores

Reunindo os pontos anteriores, esta secção compara diretamente **como escalar uma aplicação mudou** entre o modelo On-Premises tradicional e o modelo atual baseado em contentores.

| Aspecto | On-Premises (pré-virtualização) | Contentores (modelo atual) |
|---|---|---|
| **Unidade de escala** | Servidor físico inteiro | Contentor individual (fração de recursos) |
| **Tempo para escalar** | Semanas/meses (comprar, instalar, configurar hardware) | Segundos (criar novos contentores a partir de uma imagem já pronta) |
| **Custo de escalar** | Elevado (novo hardware físico) | Baixo (apenas os recursos computacionais consumidos, muitas vezes já na nuvem) |
| **Granularidade** | Baixa — só era possível escalar "por servidor inteiro" | Alta — é possível escalar cada componente da aplicação de forma independente (ex: escalar só o serviço de pagamentos, sem escalar todo o resto) |
| **Automação** | Praticamente inexistente — processos manuais | Alta — orquestradores como o Kubernetes escalam automaticamente com base em métricas em tempo real |
| **Reversibilidade** | Difícil desfazer (hardware comprado fica comprado) | Imediata — contentores podem ser destruídos e recriados livremente, sem custo residual |
| **Portabilidade** | Baixa — aplicação normalmente presa ao hardware/configuração específica da empresa | Alta — o mesmo contentor corre de forma idêntica em qualquer ambiente (local, nuvem, diferentes fornecedores) |

### O que mudou fundamentalmente
No modelo On-Premises, escalar significava **antecipar a procura e comprar capacidade a mais**, aceitando desperdício como o preço da segurança. No modelo atual com contentores (frequentemente combinado com orquestração automática, como o Kubernetes, ou com serviços geridos como o Amazon ECS/EKS — ver `05_computacao_sem_servidor.md`), a escalabilidade passou a ser:

- **Reativa e quase instantânea**: os recursos ajustam-se ao uso real, em tempo real, e não a uma previsão feita meses antes.
- **Granular**: cada parte de uma aplicação escala de forma independente, em vez de escalar "o servidor inteiro" mesmo quando só uma parte da aplicação está sob pressão.
- **Elástica em ambos os sentidos**: tal como cresce rapidamente perante um pico de procura, também reduz rapidamente quando a procura desce, evitando pagar por capacidade ociosa — o oposto do desperdício constante característico do modelo On-Premises original.

Este percurso — **On-Premises → Hypervisor/VMs → Contentores** — representa a evolução histórica que tornou possível a eficiência e a escalabilidade que hoje são consideradas normais em qualquer infraestrutura moderna de TI, incluindo tudo o que sustenta os serviços de nuvem como o Amazon EC2, Lambda e Elastic Beanstalk já abordados nos ficheiros anteriores deste repositório.

---

## Resumo em uma frase

> A infraestrutura de TI evoluiu de um modelo On-Premises rígido e desperdiçador (um servidor físico por aplicação) para um modelo virtualizado com hypervisores (vários negócios isolados num único servidor) e, mais recentemente, para contentores (que reduzem o "tamanho do servidor" ao tamanho real da aplicação), tornando a escalabilidade cada vez mais rápida, granular e barata.

---

## Conceitos relacionados para estudar a seguir

- **Kubernetes** — orquestração automática de contentores em larga escala, incluindo escalabilidade automática (Horizontal Pod Autoscaler)
- **Modelo de responsabilidade partilhada** — como a divisão de responsabilidades entre empresa e fornecedor mudou ao longo desta evolução (On-Premises → IaaS → PaaS → Serverless)
- **AWS Fargate** — um passo além dos contentores geridos manualmente, onde nem os servidores por trás dos contentores precisam de ser geridos (ver `05_computacao_sem_servidor.md`)
- **Infraestrutura como Código (IaC)** — como ferramentas como Terraform ou CloudFormation automatizam ainda mais a criação e escalabilidade de infraestrutura, tema central de DevOps