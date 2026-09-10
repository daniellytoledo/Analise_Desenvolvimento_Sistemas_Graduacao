# Segurança e Privacidade em Ambientes em Nuvem

> Este ficheiro complementa `13_seguranca_nuvem_aws.md`, que aborda as ferramentas específicas de segurança da AWS (IAM, WAF, KMS, MFA). Aqui o foco é mais amplo: os **desafios conceptuais e as implicações de segurança** dos diferentes modelos de serviço em nuvem (SaaS, IaaS, PaaS), independentemente do fornecedor.

---

## 1. Principais desafios de segurança em nuvem — menos fronteiras, maior responsabilidade

### O paradoxo da nuvem: mais alcance, menos perímetro
Durante décadas, a segurança de TI foi pensada em torno do conceito de **perímetro**: havia uma fronteira clara entre "dentro da empresa" (seguro) e "fora" (não confiável), e o objetivo era proteger essa fronteira — com firewalls, VPNs, e controlo de acesso físico aos servidores.

A nuvem dissolve esse perímetro. Os dados e as aplicações deixam de estar num data center físico da empresa, onde o acesso pode ser controlado por crachá e câmeras, e passam a estar em servidores geridos por um terceiro, acessíveis pela internet de qualquer parte do mundo. Isto traz **liberdade e escala** — mas também cria um conjunto novo de desafios de segurança.

### Os principais desafios

**Visibilidade reduzida**
Num data center próprio, é possível monitorar fisicamente o hardware, ver quem acede à sala dos servidores, e ter controlo total sobre o que entra e sai da rede. Na nuvem, essa visibilidade directa desaparece — a única forma de "ver" o que acontece é através de logs, métricas e alertas (ver `12_monitoramento_servidores_aws.md`). Sem uma estratégia de monitoramento bem configurada, incidentes podem passar despercebidos por horas ou dias.

**Superfície de ataque alargada**
Qualquer recurso acessível pela internet é um potencial alvo. Na nuvem, onde aplicações e APIs estão tipicamente expostas publicamente por design (ao contrário de sistemas internos on-premises), a superfície de ataque é estruturalmente maior — e os atacantes podem tentar comprometer sistemas de qualquer parte do mundo, 24 horas por dia.

**Identidade como o novo perímetro**
Com o fim do perímetro de rede tradicional, a **identidade** passa a ser o controlo de segurança mais importante: quem é este utilizador ou serviço? Que permissões tem? Está autenticado de forma segura? Isto explica por que ferramentas como IAM e MFA (ver `13_seguranca_nuvem_aws.md`) têm um papel tão central na segurança na nuvem — elas são, essencialmente, o novo perímetro.

**Configurações incorretas (misconfigurations)**
Este é, de longe, o **tipo de incidente de segurança mais comum na nuvem**. Ao contrário dos ataques sofisticados de filmes, a maioria das violações de dados em ambientes cloud acontece por razões simples: um bucket S3 deixado publicamente acessível sem necessidade, uma base de dados RDS sem encriptação, portas de acesso abertas a toda a internet num Security Group, ou credenciais de acesso (access keys) acidentalmente publicadas num repositório GitHub público.

A nuvem é, por natureza, muito fácil de configurar — o que também significa que é fácil configurar mal, especialmente quando não existe uma cultura sólida de revisão e automação de segurança.

**Multitenancy e isolamento**
Num ambiente de nuvem pública, a infraestrutura física é partilhada entre múltiplos clientes (ver `00_computacao_em_nuvem.md`, sobre o modelo multi-tenant). Apesar de os fornecedores como a AWS investirem enormemente em isolamento ao nível da virtualização, o simples facto de partilhar hardware com entidades desconhecidas levanta questões de privacidade e de segurança — especialmente para sectores com regulamentação específica (saúde, finanças, governo).

**Dependência do fornecedor e continuidade**
Quando toda a infraestrutura depende de um único fornecedor de nuvem, o risco de **indisponibilidade do fornecedor** (mesmo que rara) ou de **mudanças unilaterais de preços e políticas** passa a ser um fator de risco a gerir — algo inexistente quando a empresa controlava os seus próprios servidores.

**Conformidade regulatória (Compliance)**
Leis como o **RGPD** (Regulamento Geral sobre a Proteção de Dados, na Europa), a **LGPD** (Lei Geral de Proteção de Dados, no Brasil), o **HIPAA** (dados de saúde, nos EUA) ou o **PCI-DSS** (dados de cartão de crédito) estabelecem requisitos rigorosos sobre onde os dados podem ser armazenados, quem pode aceder a eles, e como devem ser protegidos. Migrar para a nuvem não isenta a empresa destes requisitos — pelo contrário, pode complicar a demonstração de conformidade se não for feita com cuidado.

### A mudança de mentalidade necessária: "Zero Trust"
A resposta moderna a estes desafios é o modelo **Zero Trust** — a ideia de que nenhum utilizador, dispositivo, ou serviço deve ser automaticamente considerado de confiança, mesmo que esteja "dentro" da rede da empresa. Cada pedido de acesso deve ser verificado, autenticado e autorizado independentemente, com base em identidade, contexto e princípio do menor privilégio — independentemente de onde vem.

---

## 2. Ameaças na camada SaaS — desafios dos serviços em larga escala

### Recapitulação: o que é SaaS
No modelo **SaaS (Software as a Service)** — já introduzido em `00_computacao_em_nuvem.md` — o utilizador consome uma aplicação completa entregue pela internet, sem qualquer controlo sobre a infraestrutura, plataforma ou, muitas vezes, sobre os próprios dados dentro da aplicação. Exemplos: Gmail, Microsoft 365, Salesforce, Dropbox, Slack.

### O que torna o SaaS particularmente desafiante do ponto de vista de segurança

**Controlo mínimo sobre a segurança da plataforma**
Ao contrário do IaaS ou PaaS (ver pontos 3 e 4), o utilizador de SaaS **não pode configurar** firewalls, encriptação do sistema de ficheiros, ou mecanismos de autenticação ao nível da infraestrutura — tudo isso é gerido pelo fornecedor. Se o fornecedor tiver uma vulnerabilidade ou uma violação de dados, todos os clientes são potencialmente afetados.

**Visibilidade limitada sobre onde os dados estão**
Em muitos serviços SaaS, os dados dos utilizadores ficam armazenados nos servidores do fornecedor, em regiões que o cliente pode não conseguir especificar. Isto levanta questões de **soberania dos dados** — especialmente quando o fornecedor está sujeito a legislação de outro país (ex: serviços americanos sujeitos ao CLOUD Act dos EUA, que pode obrigar a disponibilizar dados a autoridades americanas, mesmo que os dados estejam em servidores europeus).

**Gestão de identidade e acesso centralizada no fornecedor**
Em SaaS, a autenticação e autorização são geridas pelo fornecedor — o cliente pode configurar MFA e SSO (*Single Sign-On*) na maioria dos serviços enterprise, mas não tem controlo sobre o mecanismo de autenticação subjacente. Uma violação no sistema de autenticação do fornecedor pode comprometer todas as contas de todos os clientes.

**Shadow IT e proliferação de SaaS não autorizado**
Colaboradores que adoptam ferramentas SaaS sem aprovação do departamento de TI (ex: guardar ficheiros de trabalho numa conta pessoal de Dropbox) criam **Shadow IT** — dados corporativos fora do controlo da empresa, em plataformas sem as garantias de segurança e conformidade exigidas. Este problema é especialmente difícil de gerir porque os serviços SaaS são, por design, extremamente fáceis de adoptar sem intervenção de TI.

**Ataques de phishing e credential stuffing**
Como o acesso ao SaaS é feito por username/password via internet, é um alvo natural para ataques de phishing (enganar o utilizador para revelar as suas credenciais) e credential stuffing (usar credenciais roubadas de outros vazamentos para tentar aceder). A adoção generalizada de MFA (ver `13_seguranca_nuvem_aws.md`) e SSO com autenticação federada são as principais mitigações.

**APIs do SaaS como vetor de ataque**
A maioria dos serviços SaaS modernos expõe APIs para integração com outros sistemas. Essas APIs, se não estiverem adequadamente protegidas (autenticação fraca, tokens de acesso com permissões excessivas, sem rate limiting), tornam-se um vetor de ataque alternativo — que permite aceder aos dados do SaaS sem sequer passar pelo interface de utilizador normal.

### Boas práticas de segurança no consumo de SaaS
- Implementar MFA em todos os serviços SaaS críticos
- Usar SSO corporativo (ex: Azure AD, Okta, Google Workspace) como ponto centralizado de autenticação
- Inventariar todos os serviços SaaS em uso na organização (incluindo Shadow IT)
- Verificar as certificações de segurança e conformidade do fornecedor (ex: ISO 27001, SOC 2, RGPD)
- Compreender as políticas de retenção e eliminação de dados do fornecedor
- Usar ferramentas CASB (*Cloud Access Security Broker*) para visibilidade e controlo sobre o uso de SaaS

---

## 3. Segurança em IaaS — máquinas virtuais e servidores puros na nuvem

### Recapitulação: o que é IaaS
No modelo **IaaS (Infrastructure as a Service)** — já detalhado em `00_computacao_em_nuvem.md` e com exemplos concretos no Amazon EC2 em `04_ec2_escalabilidade_trafego_virtualbox.md` — o fornecedor disponibiliza a infraestrutura computacional bruta (servidores virtuais, redes, armazenamento), e o utilizador é responsável por tudo o que corre por cima: sistema operativo, middleware, runtime, aplicações, e dados.

### Por que o IaaS oferece mais controlo — e mais responsabilidade
O IaaS é o modelo onde **o utilizador tem mais controlo** sobre a configuração de segurança — e, consequentemente, onde **mais responsabilidades recaem sobre ele**. Ao contrário do SaaS (onde quase tudo é gerido pelo fornecedor) ou do PaaS (onde a plataforma abstrai muita complexidade), no IaaS o utilizador é responsável por:

- Manter o **sistema operativo atualizado** (patches de segurança, correção de vulnerabilidades conhecidas)
- Configurar corretamente a **firewall ao nível da instância** (iptables no Linux, Windows Firewall)
- Gerir os **Security Groups e NACLs** da VPC que controlam o tráfego de rede (ver `08_conectividade_aws.md`)
- Instalar e manter **software de segurança** (agentes de antivírus, deteção de intrusão, etc.)
- Gerir o **acesso SSH/RDP** às instâncias de forma segura (chaves SSH, bastions hosts, Session Manager)
- Encriptar dados em disco (volumes EBS, ver `09_armazenamento_dados_aws.md`) e em trânsito
- Monitorizar logs do sistema operativo e das aplicações

### Vetores de ataque específicos do IaaS

**Instâncias com portas abertas desnecessariamente**
Um dos erros mais comuns: um Security Group com a porta 22 (SSH) ou 3389 (RDP) aberta a todo o mundo (`0.0.0.0/0`). Isso expõe a instância a tentativas de força bruta 24 horas por dia. A prática correta é limitar o acesso SSH/RDP apenas a IPs específicos, ou usar o **AWS Systems Manager Session Manager** (que não exige portas abertas).

**Credenciais expostas ou mal geridas**
Access keys AWS hard-coded no código da aplicação ou em ficheiros de configuração (ex: `.env`) que são acidentalmente publicados em repositórios públicos do GitHub. A solução é usar **IAM Roles** (ver `13_seguranca_nuvem_aws.md`) em vez de credenciais estáticas, para que as instâncias EC2 obtenham permissões temporárias automaticamente.

**Sistemas operativos não atualizados**
No IaaS, o fornecedor de nuvem não aplica patches no sistema operativo da instância — essa é uma responsabilidade exclusiva do utilizador. Instâncias com sistemas operativos sem patches são um dos vetores de ataque mais explorados, especialmente quando vulnerabilidades conhecidas têm exploits públicos disponíveis.

**Imagens de VM comprometidas**
Usar AMIs (Amazon Machine Images) de fontes não confiáveis pode introduzir malware ou backdoors directamente nas instâncias. A prática recomendada é usar AMIs oficiais (da AWS, ou de fornecedores verificados no AWS Marketplace) e construir imagens próprias a partir delas quando necessário.

### Inovação e segurança como parceiros no IaaS
Apesar dos desafios, o IaaS é também o modelo que permite **maior inovação** em termos de arquitectura de segurança: é possível implementar soluções de segurança avançadas e personalizadas que não seriam possíveis em modelos mais geridos — desde firewalls de terceiros altamente especializados a sistemas de deteção de intrusão customizados, passando por architecturas de rede complexas com múltiplas camadas de isolamento.

---

## 4. Segurança em PaaS — desenvolver na nuvem e para a nuvem com facilidade

### Recapitulação: o que é PaaS
No modelo **PaaS (Platform as a Service)** — já aprofundado em `11_paas_lightsail_aws.md` — o fornecedor gere não só a infraestrutura (como no IaaS), mas também o sistema operativo, o runtime e o middleware. O utilizador foca-se apenas no código da aplicação e nos dados. Exemplos: AWS Elastic Beanstalk, AWS Lambda (serverless), Heroku, Google App Engine.

### Como o PaaS simplifica a postura de segurança
O PaaS reduz significativamente a superfície de ataque e as responsabilidades de segurança operacional do utilizador, em comparação com o IaaS:

```
IaaS (EC2):                        PaaS (Lambda/Beanstalk):
Responsabilidade do utilizador:    Responsabilidade do utilizador:
✗ Patches do sistema operativo     ✓ Apenas o código da aplicação
✗ Configuração da firewall local   ✓ e os dados que a aplicação gere
✗ Gestão de dependências do OS
✗ Configuração do runtime
✗ Hardening do servidor
```

Em ambientes serverless como o **AWS Lambda** (ver `05_computacao_sem_servidor.md`), a redução é ainda maior: a AWS gere não só o sistema operativo e o runtime, mas também a escalabilidade e a disponibilidade — o utilizador apenas escreve e publica a função.

### Desafios de segurança específicos do PaaS

**Injeção de código e vulnerabilidades da aplicação**
Como o PaaS abstrai a infraestrutura, a responsabilidade de segurança concentra-se no **código da aplicação** — SQL Injection, XSS, e outras vulnerabilidades OWASP Top 10 (ver `13_seguranca_nuvem_aws.md`, sobre o WAF) são da exclusiva responsabilidade do developer. A plataforma protege a infraestrutura; a aplicação tem de se proteger a si própria.

**Dependências de terceiros (supply chain attacks)**
Aplicações PaaS modernas dependem de dezenas ou centenas de bibliotecas de terceiros (via npm, pip, Maven, etc.). Uma vulnerabilidade numa dessas dependências pode comprometer a aplicação inteira — sem que o developer tenha escrito código vulnerável ele próprio. A gestão cuidadosa de dependências (usar versões específicas, verificar vulnerabilidades conhecidas com ferramentas como `npm audit` ou `pip-audit`) é fundamental.

**Permissões excessivas das funções serverless**
Um erro comum em ambientes Lambda: atribuir à função uma role IAM com permissões demasiado amplas (ex: `AdministratorAccess`) por conveniência, em vez de definir exatamente as permissões mínimas necessárias. Isto viola o princípio do menor privilégio (ver `13_seguranca_nuvem_aws.md`) e, no caso de a função ser comprometida, expõe toda a conta.

**Gestão de segredos em código de aplicação**
Em ambiente PaaS, é tentador colocar configurações sensíveis (passwords de bases de dados, API keys) diretamente nas variáveis de ambiente da plataforma ou, pior, no código. A prática correta é usar serviços dedicados como o **AWS Secrets Manager** ou o **AWS Parameter Store**, que guardam os segredos de forma segura e os injectam nas aplicações apenas em tempo de execução, com controlo de acesso IAM e rotação automática.

**Logs e rastreabilidade**
Em PaaS e especialmente em serverless, os logs de execução são gerados automaticamente pela plataforma (ex: Lambda → CloudWatch Logs, ver `12_monitoramento_servidores_aws.md`), o que é positivo. O desafio é que, quando algo corre mal, o developer pode ter acesso a menos contexto do que teria num servidor que controla diretamente — tornando o design cuidadoso de logs estruturados e traces (ver AWS X-Ray, em `12_monitoramento_servidores_aws.md`) ainda mais importante.

### PaaS como acelerador de segurança por design
Quando bem usado, o PaaS pode paradoxalmente resultar em **aplicações mais seguras** do que as equivalentes em IaaS, porque:
- O fornecedor gere patches e atualizações de runtime de forma automática e contínua
- A abstração da infraestrutura elimina uma classe inteira de vulnerabilidades relacionadas com configuração de servidores
- O modelo serverless, em particular, elimina a possibilidade de atacantes "persistirem" num servidor comprometido (não há servidor para persistir)
- Ferramentas de análise de segurança estática de código (SAST), testes de dependências, e integração com pipelines de CI/CD (ver `01_eficiencia_operacional_entrega_software.md`, na pasta DevOps_I) permitem detectar vulnerabilidades antes da aplicação chegar a produção

---

## Resumo em uma frase

> A segurança em ambientes de nuvem exige uma mudança de mentalidade — do perímetro físico para a identidade e configuração — com desafios distintos em cada modelo: no SaaS o controlo é mínimo e a confiança no fornecedor é central, no IaaS o controlo é máximo mas a responsabilidade operacional também, e no PaaS a infraestrutura é protegida pelo fornecedor mas a segurança da aplicação e das suas dependências continua a ser responsabilidade do developer.

---

## Conceitos relacionados para estudar a seguir

- **OWASP Top 10** — as dez vulnerabilidades de aplicações web mais comuns e como as mitigar, directamente relevante para a segurança de aplicações PaaS e SaaS
- **DevSecOps** — a integração de práticas de segurança no ciclo de desenvolvimento (CI/CD, ver `01_eficiencia_operacional_entrega_software.md`), tornando a segurança uma responsabilidade partilhada entre desenvolvimento e operações desde o início
- **CASB (Cloud Access Security Broker)** — ferramentas de visibilidade e controlo sobre o uso de serviços SaaS numa organização, especialmente para combater o Shadow IT
- **Zero Trust Architecture** — o modelo de segurança moderno que assume que nenhum utilizador ou dispositivo é de confiança por defeito, verificando continuamente cada pedido de acesso
- **CIS Benchmarks e AWS Security Hub** — frameworks de boas práticas de configuração segura para ambientes AWS, com verificação automatizada do cumprimento dessas práticas