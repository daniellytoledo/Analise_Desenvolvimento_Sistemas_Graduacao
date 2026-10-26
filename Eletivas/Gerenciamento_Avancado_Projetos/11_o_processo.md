
# O Processo

> Este ficheiro dá continuidade à Gestão das Partes Interessadas apresentada em `10_partes_interessadas.md`, abordando a **Gestão de Aquisições em Projetos (Project Procurement Management)**. O objetivo é compreender como as compras e contratações afetam os custos, conhecer os principais tipos de contratos utilizados no Brasil, identificar os documentos necessários para solicitar propostas aos fornecedores e entender os procedimentos de liquidação e encerramento de contratos e fases do projeto.

---

## 1. Importância das Compras — como as aquisições impactam os custos

### O que é a Gestão de Aquisições

A **Gestão de Aquisições (Project Procurement Management)** envolve os processos necessários para adquirir produtos, serviços ou resultados de fornecedores externos à equipa do projeto.

Nem todos os recursos necessários estão disponíveis internamente. Por isso, as organizações frequentemente precisam contratar serviços, comprar equipamentos ou adquirir licenças.

**Exemplos em projetos de TI:**

- Contratação de serviços cloud.
- Compra de computadores e servidores.
- Aquisição de licenças de software.
- Contratação de consultorias.
- Serviços externos de testes e segurança.
- Contratação de desenvolvimento especializado.

### O impacto das compras no orçamento

As aquisições afetam diretamente o orçamento desenvolvido em `06_orcamento.md`.

Uma compra mal planeada pode provocar:

- Custos superiores aos previstos.
- Atrasos na entrega.
- Dependência de fornecedores.
- Despesas adicionais de manutenção.
- Necessidade de alterações contratuais.

**Exemplo:**

Uma empresa precisa de infraestrutura para alojar uma aplicação.

| Alternativa | Custo inicial | Custo mensal |
|---|---:|---:|
| Servidor próprio | R$ 15.000 | R$ 500 |
| Serviço cloud | R$ 0 | R$ 1.200 |

Considerando 12 meses, sem outros custos:

```text
Servidor próprio:

15.000 + (500 × 12) = R$ 21.000


Serviço cloud:

1.200 × 12 = R$ 14.400
```

Neste cenário hipotético, o serviço cloud apresenta menor custo no primeiro ano.

Contudo, a decisão também deve considerar desempenho, segurança, escalabilidade, manutenção e **Custo Total de Propriedade (TCO)**.

### Processos de Gestão de Aquisições

Na abordagem por processos do PMBOK® 6ª edição, existem três processos principais:

1. **Planear a Gestão das Aquisições:** decidir o que comprar, quando e como contratar.
2. **Conduzir as Aquisições:** solicitar propostas, selecionar fornecedores e celebrar contratos.
3. **Controlar as Aquisições:** acompanhar o desempenho, administrar alterações e encerrar contratos.

```text
IDENTIFICAR NECESSIDADE
         |
         v
DECIDIR COMPRAR OU PRODUZIR
         |
         v
SELECIONAR FORNECEDOR
         |
         v
FORMALIZAR CONTRATO
         |
         v
ACOMPANHAR ENTREGA
         |
         v
VERIFICAR CONFORMIDADE
         |
         v
ENCERRAR CONTRATO
```

### Análise Make or Buy

A **Make-or-Buy Analysis** consiste em avaliar se determinado trabalho deverá ser realizado internamente ou adquirido externamente.

| Fazer internamente (Make) | Comprar ou contratar (Buy) |
|---|---|
| Maior controlo direto | Acesso a especialistas |
| Necessita de competências internas | Pode acelerar determinadas entregas |
| Pode exigir contratação e formação | Cria dependência de fornecedores |
| Maior controlo sobre o conhecimento | Pode reduzir investimentos iniciais |

A decisão deve considerar custos, prazo, riscos, qualidade e competências disponíveis.

---

## 2. Tipos de Contrato no Brasil — conhecer os mais utilizados

### O que é um contrato

Um **contrato** é um acordo que estabelece obrigações e direitos entre as partes envolvidas.

Na gestão de projetos, os contratos definem aspetos como:

- Objeto da contratação.
- Preço e condições de pagamento.
- Prazos.
- Responsabilidades.
- Critérios de aceitação.
- Garantias.
- Penalidades e condições de encerramento.

### Contratos de Preço Fixo (Fixed-Price)

O fornecedor compromete-se a entregar o objeto contratado por um preço previamente estabelecido, conforme as condições acordadas.

**Exemplo:**

Uma empresa contrata o desenvolvimento de um website por R$ 20.000.

**Vantagem:** maior previsibilidade de custos para o cliente.

**Risco:** alterações de escopo podem exigir renegociação.

### Contratos por Tempo e Material (Time and Materials — T&M)

O pagamento depende do tempo trabalhado e dos recursos utilizados, conforme as taxas contratadas.

**Exemplo:**

```text
Consultor de software:

Valor por hora: R$ 150

Horas trabalhadas: 80

Custo = 150 × 80

Total = R$ 12.000
```

**Vantagem:** flexibilidade quando o trabalho não está completamente definido.

**Risco:** menor previsibilidade do custo final, exigindo acompanhamento e limites de gastos.

### Contratos de Custos Reembolsáveis (Cost-Reimbursable)

O contratante reembolsa custos elegíveis do fornecedor e pode pagar uma remuneração adicional conforme o contrato.

São úteis em determinados projetos com elevada incerteza e maior dificuldade de estimar os custos antecipadamente.

Exigem controlo rigoroso das despesas.

### Comparativo dos contratos

| Tipo | Principal característica | Aplicação |
|---|---|---|
| Preço fixo | Valor previamente acordado | Escopo bem definido |
| Tempo e material | Pagamento conforme utilização | Consultorias e serviços evolutivos |
| Custos reembolsáveis | Reembolso de despesas elegíveis | Projetos com incerteza elevada |

### Contratos e contratações públicas no Brasil

No Brasil, as contratações privadas seguem as regras jurídicas aplicáveis à sua natureza, enquanto as contratações públicas estão sujeitas a regimes específicos.

A **Lei nº 14.133/2021** estabelece normas gerais para licitações e contratos administrativos, com regras sobre seleção de fornecedores, execução e fiscalização contratual.

Entre os regimes previstos para obras e serviços de engenharia estão a empreitada por preço unitário, a empreitada por preço global e a contratação integrada.

Não se deve confundir **tipo de remuneração contratual** com **modalidade de licitação**.

---

## 3. Tipos de Processos de Compras — o que pedir aos fornecedores

### O processo de seleção de fornecedores

Depois de identificar a necessidade de aquisição, a organização deve procurar fornecedores capazes de atender aos requisitos.

O processo pode envolver:

1. Identificação da necessidade.
2. Definição dos requisitos.
3. Pesquisa de fornecedores.
4. Solicitação de informações ou propostas.
5. Avaliação das alternativas.
6. Negociação.
7. Formalização da contratação.

### Documentos utilizados nas aquisições

**RFI — Request for Information**

Solicitação de informações.

Utilizada quando a organização precisa de conhecer soluções, capacidades e alternativas disponíveis no mercado.

**Exemplo:** perguntar quais serviços de infraestrutura cloud um fornecedor disponibiliza.

**RFQ — Request for Quotation**

Solicitação de cotação de preços.

Adequada quando os produtos ou serviços já possuem especificações suficientemente claras.

**Exemplo:** solicitar preços para 10 computadores com configurações definidas.

**RFP — Request for Proposal**

Solicitação de proposta.

Utilizada quando a organização pretende avaliar soluções técnicas e comerciais para uma necessidade.

**Exemplo:** solicitar propostas para desenvolver um sistema ERP personalizado.

### RFI vs. RFQ vs. RFP

| Documento | Objetivo | Pergunta principal |
|---|---|---|
| RFI | Obter informações | O que o fornecedor oferece? |
| RFQ | Obter preços | Quanto custa? |
| RFP | Avaliar propostas | Como o fornecedor resolverá o problema? |

### Critérios de seleção

A escolha do fornecedor não deve considerar exclusivamente o menor preço.

Outros critérios importantes são:

- Capacidade técnica.
- Experiência.
- Prazo de entrega.
- Qualidade.
- Suporte.
- Garantias.
- Segurança.
- Condições contratuais.
- Custo total.

### Compras na Administração Pública

No Brasil, a Lei nº 14.133/2021 prevê cinco modalidades de licitação:

- **Pregão:** aquisição de bens e serviços comuns, conforme as condições legais.
- **Concorrência:** contratação de bens e serviços especiais e de obras e serviços de engenharia nos casos previstos.
- **Concurso:** escolha de trabalhos técnicos, científicos ou artísticos.
- **Leilão:** alienação de bens.
- **Diálogo competitivo:** contratações que exigem diálogo com licitantes para desenvolver alternativas capazes de atender às necessidades da Administração.

Também existem hipóteses legais de contratação direta, como dispensa e inexigibilidade de licitação.

As modalidades de licitação são procedimentos jurídicos específicos e não equivalem aos documentos comerciais RFI, RFQ e RFP.

---

## 4. Liquidação e Encerramentos — encerrar fases e contratos

### O que é a liquidação

A **liquidação da despesa**, no contexto da Administração Pública brasileira, é a etapa destinada a verificar o direito do credor ao recebimento, considerando os documentos e as condições da contratação.

Em termos práticos, envolve verificar se o bem ou serviço foi fornecido conforme o contratado antes de proceder ao pagamento correspondente.

Nas contratações privadas, também existem processos de conferência e aprovação de faturas, embora as regras não sejam necessariamente iguais às da despesa pública.

### Exemplo de liquidação

Uma empresa contrata um fornecedor para desenvolver um módulo de software.

```text
CONTRATO ASSINADO
        |
        v
SERVIÇO EXECUTADO
        |
        v
ENTREGA DO MÓDULO
        |
        v
VERIFICAÇÃO DOS REQUISITOS
        |
        v
ACEITAÇÃO DA ENTREGA
        |
        v
CONFERÊNCIA DA FATURA
        |
        v
PAGAMENTO CONFORME CONTRATO
```

Se a entrega não cumprir os requisitos, poderá ser necessário solicitar correções antes da aceitação e do pagamento, de acordo com as condições contratuais.

### Encerramento de Contratos

O **encerramento contratual** envolve verificar o cumprimento das obrigações e formalizar a conclusão da relação contratual, quando aplicável.

As principais atividades podem incluir:

- Confirmar a entrega dos produtos ou serviços.
- Verificar os critérios de aceitação.
- Conferir pagamentos.
- Resolver pendências contratuais.
- Documentar o desempenho do fornecedor.
- Arquivar os documentos.
- Formalizar o encerramento.

### Encerramento de Fases do Projeto

Um projeto pode ser dividido em fases, como:

```text
INICIAÇÃO
    |
    v
PLANEAMENTO
    |
    v
DESENVOLVIMENTO
    |
    v
TESTES
    |
    v
IMPLANTAÇÃO
    |
    v
ENCERRAMENTO
```

Ao terminar uma fase, o gestor deve verificar se os objetivos e entregáveis previstos foram alcançados.

**Exemplo — Encerramento da fase de desenvolvimento:**

- Funcionalidades previstas implementadas.
- Código integrado no repositório.
- Revisões concluídas.
- Documentação atualizada.
- Pendências registadas.
- Entregáveis preparados para a próxima fase.

O encerramento de uma fase não significa necessariamente o encerramento de todos os contratos do projeto.

### Encerramento do Projeto

O encerramento formal do projeto deve considerar:

**Aceitação dos entregáveis**

Confirmar que os resultados foram recebidos e aceites pelos responsáveis.

**Documentação**

Consolidar informações técnicas e administrativas.

**Lições aprendidas (Lessons Learned)**

Registar experiências positivas, dificuldades e oportunidades de melhoria.

**Libertação de recursos**

Reatribuir equipas, equipamentos e outros recursos.

**Relatório final**

Apresentar os resultados alcançados e os principais desvios em relação ao planeamento.

### Checklist de encerramento

```text
[ ] Entregáveis verificados
[ ] Critérios de aceitação cumpridos
[ ] Pendências tratadas ou encaminhadas
[ ] Contratos analisados e encerrados
[ ] Pagamentos conferidos
[ ] Documentação arquivada
[ ] Lições aprendidas registadas
[ ] Recursos libertados
[ ] Encerramento formal comunicado
```

Um projeto pode terminar por conclusão, cancelamento ou outras razões. Em qualquer situação, o encerramento deve ser documentado adequadamente.

---

## Resumo em uma frase

> A Gestão de Aquisições em Projetos organiza as compras e contratações necessárias à execução do trabalho, avaliando o impacto financeiro das decisões de compra, selecionando modelos contratuais adequados, utilizando documentos como RFI, RFQ e RFP para comunicar requisitos aos fornecedores e estabelecendo procedimentos de controlo, liquidação e encerramento para garantir que as entregas sejam verificadas, as obrigações cumpridas e os resultados formalmente documentados.

---

## Conceitos relacionados para estudar a seguir

- **Gestão de Fornecedores (Vendor Management)** — avaliar desempenho, qualidade e cumprimento contratual dos fornecedores.

- **Análise Make or Buy** — aprofundar critérios financeiros e estratégicos para decidir entre produzir internamente ou contratar terceiros.

- **Lei nº 14.133/2021** — conhecer os fundamentos das licitações e dos contratos administrativos no Brasil.

- **Service Level Agreement (SLA)** — compreender acordos de nível de serviço e indicadores de disponibilidade, desempenho e suporte.

- **Gestão de Contratos de Software** — estudar cláusulas relacionadas com propriedade intelectual, licenciamento, manutenção e suporte.

- **Encerramento e Lições Aprendidas** — compreender a importância de documentar resultados e experiências para melhorar projetos futuros.

---

## Referências

- Project Management Institute (PMI). *PMBOK® Guide*, 6ª edição — Gestão das Aquisições do Projeto.
- Brasil. [Lei nº 14.133, de 1º de abril de 2021 — Lei de Licitações e Contratos Administrativos](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm).
- Tribunal de Contas da União (TCU). [Licitações e Contratos — Orientações e Jurisprudência](https://licitacoesecontratos.tcu.gov.br/).
