# AWS Well-Architected Framework

## Introdução ao framework

O **AWS Well-Architected Framework** é um pacote de ferramentas, boas práticas e perguntas-guia desenvolvido pela AWS para ajudar arquitetos e equipas técnicas a **construir a melhor arquitetura de nuvem possível para a sua empresa** — ou seja, sistemas que sejam seguros, eficientes, resilientes e economicamente sustentáveis.

Diferente do [AWS CAF](./02_aws_caf_framework_adocao_nuvem.md) (que trata da adoção da nuvem a nível organizacional — negócio, pessoas, governança), o Well-Architected Framework é mais **técnico e de arquitetura**: assume que a empresa já decidiu ir para a nuvem, e foca-se em *como desenhar bem* essa infraestrutura.

Na prática, funciona como um checklist estruturado em forma de perguntas (ex: "como é que o sistema recupera de falhas?", "os custos estão otimizados?", "os dados estão protegidos?"), que ajuda a identificar riscos e pontos de melhoria numa arquitetura antes — ou depois — de ela ser colocada em produção.

> Este framework é aplicado tanto no desenho de novos sistemas como na revisão de sistemas já existentes na nuvem (as chamadas *Well-Architected Reviews*).

---

## A influência do framework para os projetos

O Well-Architected Framework tem um impacto direto nos **projetos de migração** e nas mudanças que eles provocam dentro da empresa.

Quando uma organização decide migrar sistemas para a AWS, o framework entra como uma camada de avaliação e orientação que:

- **Ajuda a validar decisões de arquitetura antes da migração**, evitando erros caros de corrigir depois (ex: escolher uma arquitetura que não escala, ou que não tem redundância suficiente).
- **Provoca mudanças no desenho original do projeto**, já que muitas vezes um sistema pensado para rodar num servidor físico tradicional precisa de ser redesenhado para aproveitar bem os recursos da nuvem (ex: separar componentes, adicionar auto-scaling, rever como os dados são armazenados).
- **Serve de base para consultorias técnicas**: consultores e arquitetos de soluções AWS usam o framework como um guia comum de avaliação, permitindo comparar diferentes arquiteturas com os mesmos critérios objetivos.
- **Orienta decisões de prioridade**: nem sempre é possível otimizar tudo ao mesmo tempo (custo, performance, segurança), então o framework ajuda a equipa a decidir conscientemente onde vale mais a pena investir esforço, dependendo dos objetivos do projeto.

Ou seja, o framework não é apenas um documento teórico — ele influencia ativamente **as decisões técnicas tomadas ao longo de um projeto de migração ou modernização**, moldando como o sistema final vai ficar desenhado.

---

## Os 6 pilares do Well-Architected Framework

Todo o framework é estruturado em torno de **6 pilares**, que representam áreas-chave a avaliar em qualquer arquitetura na nuvem:

| Pilar | Foco principal |
|---|---|
| **1. Excelência Operacional** (Operational Excellence) | Executar e monitorizar sistemas para entregar valor de negócio, e melhorar processos e procedimentos continuamente |
| **2. Segurança** (Security) | Proteger dados, sistemas e ativos através de gestão de risco e controlo de acesso |
| **3. Fiabilidade** (Reliability) | Garantir que o sistema funciona corretamente e de forma consistente, recuperando-se de falhas e picos de procura |
| **4. Eficiência de Performance** (Performance Efficiency) | Usar os recursos de TI de forma eficiente, mantendo a eficiência à medida que a procura muda e a tecnologia evolui |
| **5. Otimização de Custos** (Cost Optimization) | Evitar gastos desnecessários e obter o melhor valor possível pelo dinheiro investido |
| **6. Sustentabilidade** (Sustainability) | Minimizar o impacto ambiental das cargas de trabalho executadas na nuvem |

> Nota: os primeiros 5 pilares fazem parte do framework desde o início; o pilar de **Sustentabilidade** foi adicionado mais recentemente, refletindo a crescente preocupação com o impacto ambiental da computação em larga escala.

---

## Melhores práticas para redes bem arquitetadas

Uma parte central do framework — especialmente relevante no pilar de **Fiabilidade** e **Segurança** — são as boas práticas para desenhar **redes bem arquitetadas** dentro da AWS. Estas práticas servem frequentemente como embasamento técnico para consultorias e avaliações de arquitetura já existentes.

Algumas das práticas mais relevantes:

### Segmentação e isolamento
- Usar **VPCs (Virtual Private Clouds)** para isolar ambientes (ex: produção, desenvolvimento, testes) uns dos outros.
- Dividir a rede em **sub-redes públicas e privadas**: recursos que não precisam de acesso direto à internet (ex: bases de dados) devem ficar em sub-redes privadas.

### Redundância e alta disponibilidade
- Distribuir recursos por **múltiplas Zonas de Disponibilidade (AZs)** dentro de uma região, para que a falha de uma AZ não derrube o sistema inteiro.
- Usar **balanceadores de carga (Load Balancers)** para distribuir o tráfego entre várias instâncias, aumentando a resiliência.

### Segurança de rede
- Aplicar **Security Groups** (firewall a nível de instância) e **NACLs — Network Access Control Lists** (firewall a nível de sub-rede) seguindo o princípio do menor privilégio.
- Usar **VPNs ou AWS Direct Connect** para ligações seguras entre a rede on-premise da empresa e a AWS, em vez de expor recursos diretamente à internet pública.

### Monitorização de rede
- Ativar **VPC Flow Logs** para registar e analisar o tráfego de rede, útil tanto para segurança como para diagnóstico de problemas.
- Usar o **CloudWatch** para monitorizar métricas de rede (latência, throughput, erros) e configurar alarmes.

### Escalabilidade de rede
- Desenhar a rede pensando em crescimento futuro (ex: definir intervalos de IP na VPC com margem suficiente para novas sub-redes).
- Usar **Auto Scaling Groups** em conjunto com a arquitetura de rede, para que novas instâncias sejam automaticamente distribuídas de forma equilibrada entre AZs.

---

## Princípios gerais para projetos em nuvem

Além dos 6 pilares, o Well-Architected Framework promove um conjunto de **princípios gerais de design**, aplicáveis à construção de praticamente qualquer projeto na nuvem, independentemente do pilar específico:

1. **Parar de adivinhar a capacidade necessária** — na nuvem, não é preciso prever com anos de antecedência quanta infraestrutura será necessária; pode-se escalar sob demanda.
2. **Testar sistemas em escala de produção** — a nuvem permite criar e destruir ambientes de teste que replicam fielmente a produção, sem custo fixo elevado.
3. **Automatizar para facilitar experimentação arquitetural** — usar Infrastructure as Code (ex: AWS CloudFormation, Terraform) para testar mudanças de forma rápida, segura e repetível.
4. **Permitir que a arquitetura evolua** — desenhar sistemas de forma modular, para que possam ser atualizados e melhorados ao longo do tempo sem necessidade de reconstruir tudo do zero.
5. **Basear decisões em dados** — usar métricas reais (via CloudWatch, por exemplo) para tomar decisões de arquitetura, em vez de suposições.
6. **Melhorar através de "game days" (simulações de eventos)** — simular falhas e cenários de stress de forma controlada, para validar se a arquitetura realmente aguenta situações adversas antes que elas aconteçam de verdade.

Estes princípios reforçam uma ideia central do framework: a nuvem permite um ciclo de melhoria muito mais rápido e barato do que a infraestrutura tradicional, e a arquitetura deve ser desenhada para aproveitar essa vantagem.

---

## Resumo em uma frase

> O AWS Well-Architected Framework é um conjunto de boas práticas organizado em 6 pilares (Excelência Operacional, Segurança, Fiabilidade, Performance, Custo e Sustentabilidade) que orienta a construção e revisão de arquiteturas na nuvem, influenciando diretamente as decisões técnicas tomadas em projetos de migração e modernização.

---

## Conceitos relacionados para estudar a seguir

- **AWS CAF** (framework complementar, focado na adoção organizacional da nuvem — ver [02_aws_caf_framework_adocao_nuvem.md](./02_aws_caf_framework_adocao_nuvem.md))
- **AWS Well-Architected Tool** (ferramenta gratuita na consola AWS para conduzir revisões formais de arquitetura)
- **Infrastructure as Code** (CloudFormation, Terraform)
- **Modelo de responsabilidade partilhada**
- **Estratégias de migração (os "6 Rs")**