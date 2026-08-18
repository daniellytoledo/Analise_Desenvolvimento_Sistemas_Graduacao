# Computação em Nuvem (Cloud Computing)

## O que é?

Computação em nuvem é o modelo de fornecimento de recursos de tecnologia — como servidores, armazenamento, bases de dados, redes, software e capacidade de processamento — através da internet, em regime de "pagamento consoante a utilização" (*pay-as-you-go*), em vez de o utilizador ter de comprar e manter infraestrutura física própria.

Em vez de uma empresa comprar servidores, instalá-los numa sala própria (data center), configurar toda a rede e contratar uma equipa para os manter, ela aluga esses recursos a um fornecedor (como AWS, Azure ou Google Cloud) e paga apenas pelo que usa, podendo aumentar ou diminuir a capacidade conforme a necessidade.

A definição mais citada academicamente é a do **NIST (National Institute of Standards and Technology)**, que resume a computação em nuvem através de 5 características essenciais, 3 modelos de serviço e 4 modelos de implementação (detalhados mais abaixo).

---

## Como surgiu?

A ideia de "computação como um serviço" não é nova — é mais antiga do que se costuma pensar:

- **Décadas de 1950-60**: com computadores enormes e caríssimos (mainframes), surgiu o conceito de *time-sharing*, em que várias pessoas partilhavam o mesmo computador central através de terminais, cada uma pagando pelo tempo de utilização. Este é considerado o embrião conceptual da nuvem.
- **1999**: a Salesforce lança-se com um modelo pioneiro de entregar aplicações empresariais através de um simples site, sem necessidade de instalar software localmente — um dos primeiros exemplos práticos do que hoje chamamos SaaS.
- **2002-2006**: a Amazon, que tinha construído uma infraestrutura massiva para suportar os picos de tráfego do seu próprio site de e-commerce, percebeu que essa capacidade ficava ociosa na maior parte do tempo. Decidiu alugar esse excedente de processamento e armazenamento a outras empresas. Em 2006 lança o **Amazon Web Services (AWS)**, com serviços como o S3 (armazenamento) e o EC2 (servidores virtuais) — este é geralmente apontado como o marco do início da era moderna da cloud comercial.
- **2008 em diante**: entram no mercado o Google App Engine, e mais tarde o Microsoft Azure (2010), consolidando a concorrência entre os grandes fornecedores (os chamados *hyperscalers*).
- **Anos seguintes**: a adoção acelera com a popularização de contentores (Docker, 2013), orquestração (Kubernetes, 2014) e arquiteturas serverless, tornando a nuvem cada vez mais flexível e granular.

Em resumo: a nuvem nasceu da combinação entre a virtualização (tecnologia que permite dividir um servidor físico em vários servidores "virtuais") e a necessidade das empresas de rentabilizar infraestrutura ociosa, evoluindo depois para um modelo de negócio próprio.

---

## As 5 características essenciais (segundo o NIST)

1. **Self-service on-demand**: o utilizador consegue provisionar recursos (ex: criar um servidor) sozinho, através de um painel ou API, sem precisar de falar com uma pessoa do fornecedor.
2. **Amplo acesso via rede**: os serviços estão disponíveis pela internet e podem ser acedidos a partir de qualquer dispositivo (portátil, telemóvel, tablet).
3. **Pool de recursos partilhado**: o fornecedor serve vários clientes a partir da mesma infraestrutura física, usando virtualização para isolar os dados e cargas de trabalho de cada um (modelo *multi-tenant*).
4. **Elasticidade rápida**: os recursos podem ser aumentados ou reduzidos automaticamente, quase em tempo real, conforme a procura (ex: um site de e-commerce que escala automaticamente na Black Friday).
5. **Serviço mensurável**: o uso é monitorizado, controlado e reportado com transparência, permitindo cobrança precisa baseada no consumo real.

---

## Modelos de serviço

| Modelo | O que o fornecedor gere | O que o utilizador gere | Exemplo |
|---|---|---|---|
| **IaaS** (Infrastructure as a Service) | Servidores físicos, rede, virtualização, armazenamento | Sistema operativo, aplicações, dados | Amazon EC2, Azure Virtual Machines, Google Compute Engine |
| **PaaS** (Platform as a Service) | Infraestrutura + sistema operativo + runtime | Apenas o código da aplicação e os dados | Heroku, Google App Engine, Azure App Service |
| **SaaS** (Software as a Service) | Tudo — infraestrutura, plataforma e a própria aplicação | Apenas a configuração e o uso | Gmail, Netflix, Microsoft 365, Salesforce |

Uma boa forma de memorizar: **IaaS** é alugar o terreno e a estrutura da casa, **PaaS** é alugar a casa já pronta (só levas a mobília), e **SaaS** é alugar um apartamento mobilado, com tudo incluído — só entras e usas.

---

## Modelos de implementação (deployment)

- **Nuvem pública**: infraestrutura pertence e é gerida por um fornecedor terceiro (AWS, Azure, GCP), partilhada entre múltiplos clientes. Mais barata e escalável, mas com menos controlo direto.
- **Nuvem privada**: infraestrutura dedicada a uma única organização, seja no próprio data center da empresa ou gerida por terceiros. Mais controlo e segurança, mas custo mais elevado.
- **Nuvem híbrida**: combinação de nuvem pública e privada, permitindo mover dados e aplicações entre ambas conforme a necessidade (ex: manter dados sensíveis on-premise e usar a nuvem pública para picos de processamento).
- **Multi-cloud**: uso de mais do que um fornecedor de nuvem pública em simultâneo (ex: usar AWS para uns serviços e Azure para outros), para evitar dependência de um único fornecedor (*vendor lock-in*) ou aproveitar pontos fortes de cada um.

---

## Vantagens

- **Redução de custos iniciais (CapEx → OpEx)**: não é preciso investir em hardware caro à partida; passa-se a pagar como despesa operacional recorrente, proporcional ao uso.
- **Escalabilidade e elasticidade**: capacidade de aumentar ou reduzir recursos rapidamente, sem esperar por compras ou instalações físicas.
- **Alta disponibilidade**: os grandes fornecedores oferecem infraestrutura distribuída por várias regiões e zonas, reduzindo o risco de indisponibilidade.
- **Manutenção simplificada**: o fornecedor trata de atualizações, patches de segurança e manutenção do hardware.
- **Acesso remoto**: os recursos ficam disponíveis de qualquer lugar com internet, o que facilita trabalho remoto e colaboração.
- **Foco no core business**: as equipas de TI deixam de gastar tempo a gerir infraestrutura e passam a focar-se em desenvolvimento e inovação.
- **Segurança avançada**: os grandes fornecedores investem fortemente em segurança física e lógica, com recursos que a maioria das empresas não conseguiria implementar sozinha.
- **Sustentabilidade**: data centers otimizados costumam ser mais eficientes energeticamente do que muitos pequenos servidores geridos individualmente.

## Desvantagens / pontos de atenção

- **Dependência do fornecedor** (*vendor lock-in*): migrar de um fornecedor para outro pode ser complexo e caro.
- **Dependência de ligação à internet**: sem internet, o acesso aos recursos fica comprometido.
- **Custos podem escalar sem controlo**: se não houver monitorização, o modelo de pagamento por uso pode gerar faturas elevadas inesperadamente.
- **Questões de privacidade e conformidade legal**: dados podem ficar armazenados em países com legislações diferentes (ex: implicações do RGPD na Europa).
- **Menor controlo direto sobre a infraestrutura física**, especialmente em SaaS.

---

## Exemplos de fornecedores e serviços

- **Amazon Web Services (AWS)** — líder de mercado, oferece centenas de serviços (EC2, S3, Lambda, RDS, etc.)
- **Microsoft Azure** — forte integração com o ecossistema Microsoft (Active Directory, Office 365)
- **Google Cloud Platform (GCP)** — destaque em dados, machine learning e Kubernetes (criado pela própria Google)
- **IBM Cloud, Oracle Cloud** — mais focados em clientes empresariais e cargas de trabalho legadas
- **Exemplos de SaaS do dia a dia**: Gmail, Dropbox, Spotify, Netflix, Microsoft 365, Canva
- **Exemplos de PaaS**: Heroku, Vercel, Google App Engine
- **Exemplos de IaaS**: Amazon EC2, DigitalOcean Droplets, Azure Virtual Machines

---

## Conceitos relacionados que vale a pena estudar a seguir

- **Virtualização** (base tecnológica que torna a nuvem possível)
- **Contentores e Docker** (unidades leves de virtualização, alternativa às VMs tradicionais)
- **Kubernetes** (orquestração de contentores em larga escala)
- **Serverless / FaaS (Function as a Service)** (ex: AWS Lambda — executar código sem gerir servidor algum)
- **CDN (Content Delivery Network)** (distribuição de conteúdo geograficamente próxima do utilizador final)

---

## Resumo em uma frase

> Computação em nuvem é a entrega de recursos de TI (armazenamento, processamento, software) através da internet, pagos conforme o uso, permitindo escalar rapidamente sem precisar de infraestrutura física própria.