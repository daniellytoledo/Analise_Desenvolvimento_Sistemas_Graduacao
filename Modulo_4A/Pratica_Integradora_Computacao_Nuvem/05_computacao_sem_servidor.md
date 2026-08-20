# Computação em Nuvem sem Servidor

## 1. Sistema de mensagens e enfileiramento — comunicação entre recursos e configuração de alertas

Quando uma aplicação é dividida em vários componentes independentes (ex: um serviço que recebe pedidos, outro que processa pagamentos, outro que envia e-mails), esses componentes precisam de **comunicar entre si de forma confiável**, mesmo que um deles esteja temporariamente indisponível ou mais lento que os outros. É aqui que entram os sistemas de **mensagens e enfileiramento (messaging & queuing)**.

### O problema que resolvem
Se o "Componente A" tentasse chamar diretamente o "Componente B" para lhe enviar uma tarefa, e o Componente B estivesse em baixo ou sobrecarregado, a mensagem seria perdida. Sistemas de fila resolvem isto ao colocar uma **fila (queue)** entre os dois: o Componente A deposita a mensagem na fila e segue com o seu trabalho; o Componente B processa as mensagens da fila ao seu próprio ritmo, sem que ambos precisem de estar disponíveis ao mesmo tempo.

Este padrão é chamado de **comunicação assíncrona** e **desacoplamento (decoupling)** — os componentes deixam de depender diretamente uns dos outros.

### Amazon SQS (Simple Queue Service)
É o serviço de filas de mensagens da AWS. Funciona como uma "caixa de correio" intermediária entre serviços:

- **Produtor (producer)** — envia mensagens para a fila (ex: um serviço web que recebeu um novo pedido)
- **Fila (queue)** — armazena as mensagens até serem processadas
- **Consumidor (consumer)** — lê e processa as mensagens da fila (ex: uma função Lambda que processa o pedido)

**Tipos de fila no SQS:**
- **Standard Queue** — throughput praticamente ilimitado, mas não garante ordem exata nem entrega única (uma mensagem pode, raramente, ser entregue mais do que uma vez)
- **FIFO Queue** (*First-In-First-Out*) — garante que as mensagens são processadas exatamente na ordem em que chegaram, e exatamente uma vez — usado quando a ordem importa (ex: processamento de transações financeiras)

### Amazon SNS (Simple Notification Service)
Enquanto o SQS é um modelo de **fila** (uma mensagem, um consumidor), o **SNS** é um modelo de **publicação/subscrição (pub/sub)**: uma mensagem publicada num "tópico" é enviada automaticamente para **todos** os subscritores desse tópico ao mesmo tempo (ex: vários serviços diferentes, e-mails, SMS, ou até outra fila SQS).

### Configuração de alertas
O SNS é também o serviço mais usado na AWS para configurar **alertas e notificações automáticas**, geralmente em conjunto com o **CloudWatch** (serviço de monitorização):

1. O CloudWatch monitoriza uma métrica (ex: uso de CPU de uma instância EC2, ou número de mensagens numa fila SQS)
2. É definido um **alarme (alarm)** com uma condição (ex: "CPU acima de 80% durante 5 minutos")
3. Quando a condição é acionada, o CloudWatch publica uma mensagem num tópico SNS
4. O SNS distribui essa notificação para os destinos configurados — e-mail, SMS, ou até para acionar automaticamente uma função Lambda que resolve o problema (ex: escalar recursos automaticamente)

```
CloudWatch (monitoriza métrica) → Alarme disparado → SNS (tópico) → E-mail / SMS / Lambda / SQS
```

Este padrão de comunicação assíncrona (filas + notificações) é uma das bases mais importantes de arquiteturas modernas na nuvem, especialmente em sistemas *serverless* e de microsserviços, que serão o foco do resto deste ficheiro.

---

## 2. Computação sem servidor — abstração de servidores na nuvem

**Computação sem servidor (serverless computing)** é um modelo de computação em nuvem em que o **fornecedor gere toda a infraestrutura de servidores automaticamente**, deixando o desenvolvedor livre para se preocupar apenas com o código da aplicação.

### "Sem servidor" não significa que não há servidor
O nome é um pouco enganador: os servidores continuam a existir fisicamente nos data centers da AWS, tal como no EC2. A diferença é que, no modelo serverless, o **desenvolvedor nunca precisa de provisionar, configurar, corrigir (patch) ou gerir** esses servidores — toda essa camada fica completamente abstraída (escondida) pelo fornecedor de nuvem.

### Comparação com o modelo tradicional (EC2)

| Aspecto | EC2 (servidor tradicional/IaaS) | Serverless |
|---|---|---|
| Gestão do servidor | Responsabilidade do utilizador | Totalmente gerida pela AWS |
| Escalabilidade | Configurada manualmente (Auto Scaling) — ver `04_ec2_escalabilidade_trafego_virtualbox.md` | Automática e instantânea, sem configuração |
| Cobrança | Paga-se pelo tempo em que a instância está ligada, mesmo ociosa | Paga-se apenas pelo tempo real de execução do código |
| Disponibilidade | É preciso manter a instância sempre ligada | Escala a zero — se não houver uso, não há custo |
| Foco do desenvolvedor | Código + infraestrutura | Apenas código |

### Características centrais do serverless
- **Execução orientada a eventos (event-driven)**: o código só corre quando é acionado por um evento (ex: um pedido HTTP, uma mensagem numa fila SQS, um ficheiro carregado no S3)
- **Escalabilidade automática e instantânea**: se chegarem 1000 pedidos ao mesmo tempo, a plataforma cria automaticamente as execuções necessárias, sem qualquer configuração prévia
- **Pagamento por execução**: normalmente cobrado por número de invocações e tempo de execução (ex: em milissegundos), não por "tempo ligado"
- **Sem gestão de capacidade**: não é preciso decidir quantas instâncias ou que tamanho de servidor usar

### Exemplos de serviços serverless na AWS
- **AWS Lambda** — execução de código sob demanda (o foco do próximo ponto)
- **Amazon S3** — armazenamento de objetos, também serverless (não há "servidor" a gerir para guardar ficheiros)
- **Amazon DynamoDB** — base de dados NoSQL totalmente gerida
- **AWS Fargate** — execução de contentores sem gerir os servidores por baixo (ver ponto 4)

---

## 3. AWS Lambda — estrutura de computação sem servidor na AWS

O **AWS Lambda** é o serviço principal de computação serverless da AWS. Permite executar código (numa das linguagens suportadas) em resposta a eventos, sem nunca ter de provisionar ou gerir um servidor.

### Como funciona
1. O desenvolvedor escreve uma **função** (um bloco de código com um ponto de entrada específico)
2. Essa função é carregada para o Lambda
3. É definido um **gatilho (trigger)** — o evento que vai acionar a execução da função
4. Sempre que o evento ocorre, a AWS **cria automaticamente o ambiente necessário**, executa a função, devolve o resultado, e depois liberta esse ambiente

### Gatilhos (triggers) comuns
- Um pedido HTTP recebido através do **API Gateway**
- Uma nova mensagem numa fila **SQS**
- Um ficheiro carregado num bucket **S3**
- Um alarme do **CloudWatch**
- Uma alteração numa tabela **DynamoDB**
- Um evento agendado (ex: correr todos os dias às 3h da manhã, semelhante a um *cron job*)

### Linguagens suportadas
O Lambda suporta várias linguagens nativamente, incluindo **Python, Node.js (JavaScript), Java, C#, Go e Ruby** — sendo Python e Node.js as escolhas mais comuns pela rapidez de desenvolvimento.

### Limites e características técnicas importantes
- **Tempo máximo de execução**: cada execução do Lambda tem um limite de tempo configurável, até 15 minutos — não é indicado para processos muito longos
- **Memória configurável**: entre 128 MB e 10 GB — a CPU disponível escala automaticamente com a memória atribuída
- **Cold start**: quando uma função não é usada há algum tempo, a primeira execução pode demorar um pouco mais, pois a AWS precisa de preparar um novo ambiente de execução (as execuções seguintes, enquanto o ambiente permanece "quente", são mais rápidas)

### Exemplo prático de fluxo com Lambda
```
Utilizador carrega uma imagem → S3 (bucket)
        │
        ▼ (evento de novo ficheiro)
   AWS Lambda é acionado
        │
        ▼
Redimensiona a imagem e guarda uma miniatura noutro bucket S3
```

Neste exemplo, não existe nenhum servidor "sempre ligado" à espera de novas imagens — o código só corre exatamente quando é necessário, e o custo é cobrado apenas por essas execuções.

### Vantagens do Lambda
- Não há custo quando não há uso (ao contrário de uma instância EC2 sempre ligada)
- Escalabilidade automática, mesmo perante picos súbitos de eventos
- Reduz drasticamente a complexidade operacional (sem patches de sistema operativo, sem gestão de servidores)
- Ideal para tarefas pequenas, pontuais ou orientadas a eventos (processamento de imagens, APIs leves, automações, ETL simples)

### Quando o Lambda não é a melhor escolha
- Processos muito longos (acima de 15 minutos)
- Aplicações que precisam de estado persistente em memória entre execuções
- Cargas de trabalho constantes e previsíveis, onde uma instância EC2 reservada pode sair mais barata

---

## 4. Contentores — simplificação da estrutura das máquinas virtuais

Antes de perceber a vantagem dos **contentores (containers)**, é útil relembrar como funciona uma máquina virtual tradicional (ver também `04_ec2_escalabilidade_trafego_virtualbox.md`, sobre a criação de uma VM no VirtualBox):

### Máquina Virtual (VM) tradicional
Cada VM inclui uma **cópia completa de um sistema operativo** (kernel, bibliotecas do sistema, etc.), além da aplicação em si. Isto torna as VMs "pesadas" — ocupam mais espaço em disco, demoram mais a iniciar (minutos) e consomem mais recursos, mesmo que a aplicação dentro delas seja pequena.

### Contentores
Um **contentor** empacota apenas a aplicação e as suas dependências diretas (bibliotecas, variáveis de ambiente, configurações), mas **partilha o kernel do sistema operativo do host**, em vez de incluir um sistema operativo completo próprio. Isto torna os contentores muito mais leves e rápidos.

| Aspecto | Máquina Virtual | Contentor |
|---|---|---|
| Inclui sistema operativo próprio | Sim (completo) | Não (partilha o kernel do host) |
| Tempo de arranque | Minutos | Segundos (ou menos) |
| Tamanho típico | Gigabytes | Megabytes |
| Isolamento | Total (hardware virtualizado) | Por processo (mais leve, mas ainda isolado) |
| Portabilidade | Menor (imagem pesada) | Alta — "corre da mesma forma em qualquer lugar" |

### Docker
O **Docker** é a tecnologia mais popular para criar e gerir contentores. Permite empacotar uma aplicação, com tudo o que ela precisa para correr, numa **imagem** — que depois pode ser executada como um contentor em qualquer máquina que tenha o Docker instalado, seja no computador de um developer, num servidor on-premise, ou na nuvem.

### Por que os contentores simplificam a arquitetura
- **Consistência entre ambientes**: "funciona na minha máquina" deixa de ser um problema, porque o contentor leva consigo tudo o que precisa para correr
- **Densidade**: é possível correr muitos mais contentores do que VMs no mesmo hardware físico, já que não há sobreposição de sistemas operativos completos
- **Facilidade de escalar**: por serem leves e rápidos a iniciar, contentores combinam muito bem com escalabilidade automática (semelhante ao Auto Scaling do EC2, mas ainda mais ágil)

### Serviços de contentores na AWS
- **Amazon ECS (Elastic Container Service)** — orquestração de contentores nativa da AWS
- **Amazon EKS (Elastic Kubernetes Service)** — versão gerida do Kubernetes (o orquestrador de contentores open-source mais usado do mundo) na AWS
- **AWS Fargate** — permite correr contentores (via ECS ou EKS) sem gerir os servidores por baixo — uma espécie de "serverless para contentores"

---

## 5. AWS Elastic Beanstalk — orquestração de serviços da AWS

O **AWS Elastic Beanstalk** é um serviço de **PaaS (Platform as a Service)** que automatiza o processo de implementação (deploy) e orquestração de uma aplicação na AWS, gerindo automaticamente toda a infraestrutura subjacente necessária.

### O que o Elastic Beanstalk resolve
Sem o Beanstalk, para colocar uma aplicação web no ar de forma robusta, seria preciso configurar manualmente, entre outros:
- Instâncias EC2
- Um Load Balancer (ver `04_ec2_escalabilidade_trafego_virtualbox.md`)
- Um Auto Scaling Group
- Monitorização via CloudWatch
- Configuração de rede (VPC, security groups)

O Elastic Beanstalk automatiza essa orquestração inteira: o desenvolvedor apenas **envia o código da aplicação**, e o Beanstalk cria e gere automaticamente todos os recursos AWS necessários para a correr — mantendo, ainda assim, acesso a essas configurações caso o desenvolvedor precise de ajustar algo manualmente.

### Como funciona, na prática
1. O desenvolvedor escreve a aplicação (suporta várias linguagens/plataformas: Java, .NET, PHP, Node.js, Python, Ruby, Go, e também contentores Docker)
2. Faz o upload do código (ou de um ficheiro compactado) através da consola, CLI ou de um pipeline de CI/CD
3. O Beanstalk cria automaticamente:
   - As instâncias EC2 necessárias
   - O Load Balancer, se aplicável
   - O Auto Scaling Group
   - A monitorização básica via CloudWatch
4. A aplicação fica disponível através de um URL fornecido automaticamente
5. Em atualizações futuras, basta enviar uma nova versão do código — o Beanstalk gere o processo de implementação (incluindo estratégias como *rolling updates*, para evitar downtime)

### Elastic Beanstalk vs. Lambda vs. EC2 puro

| Serviço | Nível de abstração | Controlo manual | Melhor para |
|---|---|---|---|
| **EC2** (IaaS) | Baixo — gere-se tudo manualmente | Total | Cargas de trabalho que exigem controlo fino da infraestrutura |
| **Elastic Beanstalk** (PaaS) | Médio — a infraestrutura é orquestrada automaticamente, mas continua "visível" e ajustável | Parcial | Aplicações web tradicionais que precisam de ir ao ar rapidamente, sem abrir mão do acesso à infraestrutura |
| **Lambda** (Serverless/FaaS) | Alto — a infraestrutura é totalmente abstraída | Mínimo | Funções pequenas, orientadas a eventos, sem necessidade de gerir servidores |

### Vantagens do Elastic Beanstalk
- Reduz drasticamente o tempo entre "ter o código pronto" e "ter a aplicação no ar"
- Continua a dar acesso à infraestrutura por baixo (ao contrário do Lambda), permitindo ajustes finos quando necessário
- Sem custo adicional pelo próprio serviço — paga-se apenas pelos recursos AWS criados (EC2, Load Balancer, etc.)
- Facilita boas práticas de arquitetura "por defeito" (Load Balancer + Auto Scaling), alinhadas com o AWS Well-Architected Framework (ver `03_aws_well_architected_framework.md`)

---

## Resumo em uma frase

> A computação sem servidor abstrai a gestão de infraestrutura da nuvem através de serviços como o AWS Lambda (execução de código orientada a eventos) e contentores (empacotamento leve de aplicações), enquanto sistemas de mensagens como o SQS/SNS garantem comunicação assíncrona e confiável entre esses componentes, e o Elastic Beanstalk orquestra automaticamente toda essa infraestrutura para simplificar a implementação de aplicações completas na AWS.

---

## Conceitos relacionados para estudar a seguir

- **API Gateway** — ponto de entrada HTTP para acionar funções Lambda, muito usado na construção de APIs serverless
- **Step Functions** — orquestração de múltiplas funções Lambda em fluxos de trabalho complexos
- **Kubernetes (EKS)** — aprofundar a orquestração de contentores em larga escala
- **Arquitetura de microsserviços** — como o desacoplamento via filas/mensagens se relaciona com este padrão de arquitetura
- **CI/CD na AWS (CodePipeline, CodeBuild, CodeDeploy)** — automatização do processo de entrega de código, incluindo integrações com o Elastic Beanstalk