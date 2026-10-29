
# Introdução a Algoritmos

A **Lógica de Programação** é uma das bases fundamentais do desenvolvimento de software, pois permite organizar o raciocínio necessário para resolver problemas através de instruções lógicas.

Antes de aprender uma linguagem de programação, é importante compreender como os algoritmos funcionam e como podem ser utilizados para representar soluções.

Neste módulo, serão apresentados os conceitos iniciais de algoritmos, suas características, formas de representação e importância para o desenvolvimento de sistemas.

---

## 1. Algoritmos — Conceitos Iniciais

### O que é um algoritmo?

Um **algoritmo** é uma sequência finita e organizada de instruções utilizadas para resolver um problema ou executar determinada tarefa.

Cada instrução representa uma ação que deve ser realizada para alcançar um resultado.

Os algoritmos não são exclusivos da programação. Também estão presentes em diversas atividades do cotidiano.

**Exemplos:**

- Preparar uma refeição.
- Calcular a média de notas.
- Realizar uma compra.
- Organizar uma lista de nomes.
- Verificar se um número é par.
- Efetuar um pagamento.
- Autenticar um usuário num sistema.

### Exemplo de algoritmo no cotidiano

Considere o processo de preparar um café.

```text
1. Iniciar
2. Colocar água no recipiente
3. Aquecer a água
4. Colocar o café no filtro
5. Despejar a água sobre o café
6. Servir o café
7. Finalizar
```

Esse exemplo representa uma sequência de instruções que devem ser executadas numa determinada ordem.

### Algoritmos na programação

Na programação, os algoritmos descrevem os passos necessários para que um computador execute uma tarefa.

**Exemplo:**

Um sistema precisa calcular a média de duas notas.

O algoritmo pode ser representado da seguinte forma:

```text
1. Iniciar
2. Ler a primeira nota
3. Ler a segunda nota
4. Somar as notas
5. Dividir o resultado por 2
6. Apresentar a média
7. Finalizar
```

Posteriormente, essa sequência pode ser implementada numa linguagem de programação, como Python, Java ou JavaScript.

---

## 2. Características de um Algoritmo

Um algoritmo deve apresentar características que permitam compreender e executar corretamente as instruções.

### Finitude

O algoritmo deve possuir um número finito de etapas e terminar após a execução das instruções previstas.

### Clareza

As instruções devem ser compreensíveis e evitar ambiguidades.

**Exemplo:**

Instrução pouco clara:

```text
Calcular os valores.
```

Instrução mais clara:

```text
Somar os dois números informados.
```

### Sequência lógica

As instruções devem estar organizadas numa ordem adequada.

**Exemplo:**

Para calcular uma média, primeiro precisamos obter os valores e depois realizar o cálculo.

### Entrada de dados

Os **dados de entrada** representam as informações necessárias para executar o algoritmo.

**Exemplo:**

```text
Nota 1 = 8
Nota 2 = 6
```

### Processamento

O **processamento** corresponde às operações realizadas sobre os dados.

**Exemplo:**

```text
Média = (8 + 6) / 2
```

### Saída de dados

A **saída** representa o resultado produzido pelo algoritmo.

**Exemplo:**

```text
Média = 7
```

### Resumo das características

| Característica | Descrição |
|---|---|
| Finitude | Possui um término definido |
| Clareza | Instruções precisas e compreensíveis |
| Sequência lógica | Etapas organizadas adequadamente |
| Entrada | Informações recebidas |
| Processamento | Operações realizadas |
| Saída | Resultados produzidos |

Nem todos os algoritmos precisam receber dados externos ou apresentar resultados visualmente, mas os conceitos de entrada, processamento e saída são importantes para compreender o funcionamento de muitos programas.

---

## 3. Entrada, Processamento e Saída

Um modelo fundamental da lógica de programação é conhecido como **Entrada → Processamento → Saída**.

```text
+----------------+
|    ENTRADA     |
|                |
| Dados iniciais |
+----------------+
         |
         v
+----------------+
| PROCESSAMENTO  |
|                |
| Operações      |
+----------------+
         |
         v
+----------------+
|     SAÍDA      |
|                |
| Resultado      |
+----------------+
```

### Exemplo prático

Imagine um programa que calcula a área de um retângulo.

**Entrada:**

```text
Base = 5
Altura = 4
```

**Processamento:**

```text
Área = Base × Altura
```

**Saída:**

```text
Área = 20
```

### Representação do algoritmo

```text
Início

    Ler base
    Ler altura

    area <- base * altura

    Escrever area

Fim
```

A seta `<-` representa a atribuição de um valor a uma variável em algumas notações de pseudocódigo.

---

## 4. Formas de Representar Algoritmos

Os algoritmos podem ser representados de diferentes formas.

Entre as principais estão:

1. Linguagem natural.
2. Pseudocódigo.
3. Fluxograma.
4. Linguagem de programação.

### Linguagem natural

A **linguagem natural** utiliza frases comuns para descrever as instruções.

**Exemplo:**

```text
1. Solicitar dois números.
2. Somar os números.
3. Apresentar o resultado.
```

**Vantagem:** facilidade de compreensão.

**Limitação:** pode apresentar ambiguidades.

### Pseudocódigo

O **pseudocódigo** utiliza uma estrutura semelhante à programação, mas não depende obrigatoriamente da sintaxe de uma linguagem específica.

É utilizado para representar a lógica de um algoritmo antes da implementação.

**Exemplo:**

```text
Início

    Ler numero1
    Ler numero2

    soma <- numero1 + numero2

    Escrever soma

Fim
```

### Fluxograma

O **fluxograma** é uma representação gráfica das etapas de um algoritmo.

Utiliza símbolos para representar operações, entradas, saídas e decisões.

### Principais símbolos

| Símbolo | Finalidade |
|---|---|
| Oval | Início ou fim |
| Retângulo | Processamento |
| Paralelogramo | Entrada ou saída |
| Losango | Decisão |
| Seta | Direção do fluxo |

### Exemplo de fluxograma

```text
       +----------+
       |  INÍCIO  |
       +----------+
            |
            v
    /----------------\
   / Ler dois números \
   \                  /
    \----------------/
            |
            v
      +-----------+
      | Somar os  |
      | números   |
      +-----------+
            |
            v
    /----------------\
   / Exibir resultado \
   \                  /
    \----------------/
            |
            v
       +----------+
       |   FIM    |
       +----------+
```

### Linguagem de programação

Uma linguagem de programação permite implementar o algoritmo através de instruções que podem ser executadas por um computador com as ferramentas adequadas.

**Exemplo em Python:**

```python
numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))

soma = numero1 + numero2

print("Resultado:", soma)
```

O código realiza as seguintes operações:

1. Solicita dois números.
2. Converte os valores para números.
3. Calcula a soma.
4. Apresenta o resultado.

### Comparação das representações

| Representação | Característica |
|---|---|
| Linguagem natural | Descrição através de frases |
| Pseudocódigo | Estrutura lógica próxima da programação |
| Fluxograma | Representação gráfica |
| Linguagem de programação | Implementação executável |

---

## 5. Algoritmos e Lógica de Programação

### O que é lógica de programação?

A **lógica de programação** corresponde à aplicação de princípios de raciocínio lógico para organizar instruções capazes de resolver problemas computacionais.

Envolve:

- Identificação do problema.
- Organização das informações.
- Definição das operações.
- Construção de sequências.
- Tomada de decisões.
- Repetição de instruções.
- Verificação dos resultados.

### Diferença entre algoritmo e programa

Embora estejam relacionados, os conceitos são diferentes.

**Algoritmo:** sequência de instruções que descreve a solução de um problema.

**Programa:** implementação de instruções numa linguagem de programação para execução num ambiente computacional.

| Algoritmo | Programa |
|---|---|
| Descreve a solução | Implementa a solução |
| Pode ser representado em pseudocódigo | Utiliza uma linguagem de programação |
| Independe de uma linguagem específica | Depende de uma implementação |
| Foca na lógica | Inclui lógica e detalhes técnicos |

### Exemplo

**Algoritmo:**

```text
Início

    Ler idade

    Se idade >= 18 então
        Escrever "Maior de idade"
    Senão
        Escrever "Menor de idade"
    FimSe

Fim
```

**Implementação em Python:**

```python
idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")
```

Os dois exemplos apresentam a mesma lógica, mas utilizam representações diferentes.

---

## 6. Estruturas Básicas dos Algoritmos

Na programação estruturada, três tipos fundamentais de estruturas de controlo são utilizados para organizar as instruções.

### Estrutura Sequencial

Executa instruções numa ordem determinada.

**Exemplo:**

```text
Início

    Ler numero1
    Ler numero2

    soma <- numero1 + numero2

    Escrever soma

Fim
```

### Estrutura Condicional

Permite executar instruções diferentes conforme determinada condição.

**Exemplo:**

```text
Início

    Ler nota

    Se nota >= 7 então
        Escrever "Aprovado"
    Senão
        Escrever "Reprovado"
    FimSe

Fim
```

### Estrutura de Repetição

Permite repetir instruções enquanto uma condição for satisfeita ou durante um número definido de vezes.

**Exemplo:**

```text
Início

    contador <- 1

    Enquanto contador <= 5 faça
        Escrever contador
        contador <- contador + 1
    FimEnquanto

Fim
```

O algoritmo apresenta os números de 1 a 5.

### Comparação

| Estrutura | Finalidade |
|---|---|
| Sequencial | Executar instruções em ordem |
| Condicional | Tomar decisões |
| Repetição | Executar instruções repetidamente |

Essas estruturas serão importantes no desenvolvimento de algoritmos mais complexos.

---

## 7. Importância dos Algoritmos no Desenvolvimento de Sistemas

Os algoritmos são fundamentais para o desenvolvimento de software porque descrevem a lógica utilizada para resolver problemas.

Estão presentes em diferentes tipos de aplicações.

### Sistemas Web

Algoritmos podem ser utilizados para:

- Validar formulários.
- Autenticar utilizadores.
- Processar pagamentos.
- Organizar informações.
- Aplicar regras de negócio.

### Bancos de Dados

Podem auxiliar em:

- Pesquisa de informações.
- Ordenação.
- Filtragem.
- Processamento de resultados.
- Validação de dados.

### Aplicações Móveis

Podem ser utilizados para:

- Processar interações.
- Organizar notificações.
- Validar informações.
- Controlar funcionalidades.

### Inteligência Artificial

Os algoritmos são utilizados em tarefas como:

- Classificação de dados.
- Identificação de padrões.
- Previsões.
- Processamento de informações.
- Aprendizagem de máquina.

### Exemplo no Desenvolvimento de Software

Imagine uma aplicação de gestão de reservas.

Quando um cliente solicita um horário, o sistema precisa:

1. Receber a data e o horário pretendidos.
2. Consultar os horários disponíveis.
3. Verificar se o horário está livre.
4. Confirmar a reserva, caso esteja disponível.
5. Informar a indisponibilidade, caso contrário.

**Pseudocódigo:**

```text
Início

    Ler data
    Ler horario

    Verificar disponibilidade

    Se horario_disponivel então
        Registrar reserva
        Escrever "Reserva confirmada"
    Senão
        Escrever "Horário indisponível"
    FimSe

Fim
```

Esse exemplo demonstra como um algoritmo pode representar uma regra de negócio utilizada numa aplicação real.

---

## Resumo

Um **algoritmo** é uma sequência finita de instruções utilizadas para resolver um problema ou executar determinada tarefa.

Os algoritmos devem apresentar instruções claras e organizadas, podendo envolver entrada de dados, processamento e produção de resultados.

Podem ser representados através de linguagem natural, pseudocódigo, fluxogramas ou linguagens de programação.

A **lógica de programação** permite estruturar o raciocínio utilizado na criação dessas soluções, utilizando estruturas sequenciais, condicionais e de repetição.

**Em síntese:** compreender algoritmos é fundamental para aprender programação, pois antes de implementar uma solução numa linguagem específica é necessário entender quais instruções devem ser executadas e em que ordem.

---

## Referências para Estudo

- [Python — Documentação Oficial](https://docs.python.org/3/)
- [VisuAlg — Ambiente para Aprendizagem de Algoritmos](https://visualg.com.br/)
- [Portugol Studio — UNIVALI](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
