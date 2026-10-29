
# Modularização e Procedimentos

A **modularização** é uma técnica de programação que consiste em dividir um algoritmo em partes menores, organizadas e independentes, chamadas de módulos.

Esses módulos permitem separar responsabilidades, evitar a repetição de instruções e facilitar a compreensão e manutenção dos programas.

Uma das principais formas de aplicar a modularização é através dos **procedimentos**, que representam conjuntos de instruções organizadas para executar tarefas específicas.

Neste módulo, serão abordados:

1. Modularização e a importância dos procedimentos.
2. Procedimentos sem parâmetros.
3. Análise de algoritmos e resolução de problemas semelhantes.

---

## 1. Modularização e Procedimentos

### O que é modularização?

A **modularização** consiste em dividir um programa em partes menores, cada uma responsável por uma tarefa específica.

Em vez de desenvolver todas as instruções dentro de um único bloco, podemos organizar o código em módulos reutilizáveis.

### Exemplo de programa sem modularização

Imagine um programa que precisa apresentar uma mensagem de boas-vindas em diferentes momentos.

```python
print("====================")
print("BEM-VINDO AO SISTEMA")
print("====================")

print("Menu principal")

print("====================")
print("BEM-VINDO AO SISTEMA")
print("====================")
```

Nesse exemplo, o mesmo conjunto de instruções aparece mais de uma vez.

Isso pode dificultar a manutenção do código.

### Exemplo com modularização

```python
def exibir_boas_vindas():
    print("====================")
    print("BEM-VINDO AO SISTEMA")
    print("====================")


exibir_boas_vindas()

print("Menu principal")

exibir_boas_vindas()
```

Agora, as instruções foram organizadas num único bloco reutilizável.

Sempre que precisamos apresentar a mensagem, chamamos `exibir_boas_vindas()`.

### Importância da modularização

A modularização contribui para:

- Organizar o código.
- Reduzir a duplicação de instruções.
- Facilitar a manutenção.
- Melhorar a legibilidade.
- Permitir a reutilização.
- Simplificar a identificação de erros.
- Facilitar os testes.
- Separar responsabilidades.

### Exemplo de organização

```text
           PROGRAMA PRINCIPAL
                   |
        +----------+----------+
        |          |          |
        v          v          v
   PROCEDIMENTO PROCEDIMENTO PROCEDIMENTO
      MENU       CADASTRO     RELATÓRIO
```

Cada procedimento pode executar uma tarefa específica.

---

### O que é um procedimento?

Um **procedimento** é um bloco de instruções identificado por um nome, criado para executar determinada tarefa.

Os procedimentos podem ser chamados em diferentes momentos do algoritmo.

Na abordagem clássica da lógica de programação, um procedimento executa instruções sem devolver diretamente um valor de retorno.

### Exemplo em pseudocódigo

```text
Procedimento ExibirMensagem()

    Escrever "Olá, mundo!"

FimProcedimento


Início

    ExibirMensagem()

Fim
```

Nesse exemplo:

1. O procedimento `ExibirMensagem` é definido.
2. O programa principal inicia.
3. O procedimento é chamado.
4. A mensagem é apresentada.
5. A execução retorna ao programa principal.

### Exemplo em Python

```python
def exibir_mensagem():
    print("Olá, mundo!")


exibir_mensagem()
```

**Saída:**

```text
Olá, mundo!
```

Em Python, utilizamos a palavra-chave `def` para definir funções.

A linguagem não possui uma palavra-chave específica para procedimentos. Por convenção, podemos utilizar funções sem retorno explícito para representar procedimentos.

Nesse caso, a função retorna implicitamente `None`.

---

### Procedimento vs. Função

Na lógica de programação tradicional, procedimentos e funções possuem uma diferença conceitual.

| Procedimento | Função |
|---|---|
| Executa uma tarefa | Executa uma tarefa e pode produzir um valor |
| Não devolve diretamente um valor de retorno | Pode devolver um resultado |
| Pode apresentar mensagens ou alterar estados | Pode realizar cálculos e devolver valores |
| É chamado pelo nome | Também é chamado pelo nome |

### Exemplo de procedimento em Python

```python
def exibir_mensagem():
    print("Bem-vindo!")


exibir_mensagem()
```

### Exemplo de função com retorno em Python

```python
def calcular_soma():
    return 10 + 5


resultado = calcular_soma()

print(resultado)
```

**Saída:**

```text
15
```

O comando `return` permite devolver um resultado ao ponto em que a função foi chamada.

**Importante:** em Python, ambos os exemplos são tecnicamente funções. A distinção entre procedimento e função é principalmente conceitual.

---

## 2. Procedimentos sem Parâmetros

### O que são parâmetros?

Os **parâmetros** são informações declaradas na definição de um procedimento ou função para receber valores fornecidos durante a chamada.

Entretanto, nem todos os procedimentos precisam de parâmetros.

### O que é um procedimento sem parâmetros?

Um **procedimento sem parâmetros** é um bloco de instruções que não recebe argumentos através da sua chamada.

As instruções podem utilizar valores definidos internamente, apresentar mensagens ou realizar outras operações.

### Sintaxe em pseudocódigo

```text
Procedimento NomeProcedimento()

    instruções

FimProcedimento
```

### Sintaxe em Python

```python
def nome_procedimento():
    instrucoes
```

Os parênteses vazios `()` indicam que nenhum parâmetro foi declarado.

---

### Exemplo 1 — Apresentar uma mensagem

**Pseudocódigo:**

```text
Procedimento BoasVindas()

    Escrever "Bem-vindo ao sistema!"

FimProcedimento


Início

    BoasVindas()

Fim
```

**Python:**

```python
def boas_vindas():
    print("Bem-vindo ao sistema!")


boas_vindas()
```

**Saída:**

```text
Bem-vindo ao sistema!
```

### Exemplo 2 — Apresentar um menu

Um procedimento pode ser utilizado para organizar a apresentação de um menu.

```python
def exibir_menu():
    print("====== MENU ======")
    print("1 - Cadastrar")
    print("2 - Consultar")
    print("3 - Sair")


exibir_menu()
```

**Saída:**

```text
====== MENU ======
1 - Cadastrar
2 - Consultar
3 - Sair
```

### Exemplo 3 — Exibir números

Um procedimento pode conter estruturas de repetição.

```python
def exibir_numeros():
    for numero in range(1, 6):
        print(numero)


exibir_numeros()
```

**Saída:**

```text
1
2
3
4
5
```

Esse exemplo combina modularização com a estrutura `for`.

### Exemplo 4 — Utilizar estruturas de decisão

Um procedimento também pode conter comandos condicionais.

```python
def verificar_idade():
    idade = 20

    if idade >= 18:
        print("Maior de idade")
    else:
        print("Menor de idade")


verificar_idade()
```

**Saída:**

```text
Maior de idade
```

A variável `idade` foi definida dentro do procedimento.

---

### Chamadas de procedimentos

Um procedimento pode ser chamado diversas vezes durante a execução.

```python
def exibir_linha():
    print("--------------------")


exibir_linha()
print("Cadastro de clientes")
exibir_linha()
print("Lista de clientes")
exibir_linha()
```

**Saída:**

```text
--------------------
Cadastro de clientes
--------------------
Lista de clientes
--------------------
```

### Definição vs. Chamada

É importante compreender a diferença entre definir e executar um procedimento.

**Definição:**

```python
def exibir_mensagem():
    print("Olá!")
```

Esse código define o procedimento, mas não executa o seu conteúdo imediatamente.

**Chamada:**

```python
exibir_mensagem()
```

A chamada faz com que as instruções sejam executadas.

---

## 3. Fluxo de Execução de um Procedimento

Quando um procedimento é chamado, o programa transfere o controlo para o bloco correspondente.

Após a execução, o fluxo retorna ao ponto seguinte à chamada.

### Exemplo

```python
def apresentar_mensagem():
    print("Dentro do procedimento")


print("Início do programa")

apresentar_mensagem()

print("Fim do programa")
```

**Saída:**

```text
Início do programa
Dentro do procedimento
Fim do programa
```

### Representação do fluxo

```text
        INÍCIO DO PROGRAMA
                |
                v
      Executar instruções
                |
                v
       Chamar procedimento
                |
                v
     +--------------------+
     |    PROCEDIMENTO   |
     |                    |
     | Executar instruções|
     +--------------------+
                |
                v
      Retornar ao programa
                |
                v
       Continuar execução
                |
                v
               FIM
```

### Procedimentos dentro de procedimentos

Um procedimento também pode chamar outro.

```python
def exibir_titulo():
    print("Sistema de Gestão")


def exibir_menu():
    exibir_titulo()
    print("1 - Cadastrar")
    print("2 - Sair")


exibir_menu()
```

**Saída:**

```text
Sistema de Gestão
1 - Cadastrar
2 - Sair
```

Esse tipo de organização permite criar programas compostos por vários módulos.

---

## 4. Variáveis Locais e Escopo

### O que é escopo?

O **escopo** determina onde uma variável pode ser acessada dentro de um programa.

Em procedimentos, é importante compreender o conceito de variável local.

### Variáveis locais

Uma **variável local** é definida dentro de um procedimento ou função e pertence ao seu escopo local.

### Exemplo

```python
def apresentar_nome():
    nome = "Maria"
    print(nome)


apresentar_nome()
```

**Saída:**

```text
Maria
```

A variável `nome` foi criada dentro da função.

### Acesso fora do procedimento

```python
def apresentar_nome():
    nome = "Maria"
    print(nome)


apresentar_nome()

# print(nome)  # NameError
```

A tentativa de acessar `nome` fora da função provoca um erro, pois a variável não está definida nesse escopo.

### Variáveis globais

Uma variável global é definida no escopo do módulo e pode ser consultada por funções desse módulo.

```python
mensagem = "Bem-vindo!"


def apresentar_mensagem():
    print(mensagem)


apresentar_mensagem()
```

**Saída:**

```text
Bem-vindo!
```

### Boas práticas

É recomendado evitar dependências desnecessárias de variáveis globais, pois elas podem dificultar:

- A manutenção.
- Os testes.
- A reutilização.
- A identificação de alterações de estado.

Procedimentos bem organizados devem possuir responsabilidades claras.

---

## 5. Análise de Algoritmos

### O que significa analisar um algoritmo?

**Analisar um algoritmo** significa compreender a sua estrutura, as operações realizadas e os resultados produzidos.

Essa capacidade permite identificar a lógica utilizada numa solução e aplicá-la a problemas semelhantes.

### Etapas da análise

Uma análise pode considerar:

1. Objetivo do algoritmo.
2. Dados utilizados.
3. Variáveis declaradas.
4. Operações realizadas.
5. Estruturas de decisão.
6. Estruturas de repetição.
7. Procedimentos chamados.
8. Resultado produzido.

### Exemplo de algoritmo

```python
def apresentar_resultado():
    numero1 = 10
    numero2 = 5

    soma = numero1 + numero2

    print(soma)


apresentar_resultado()
```

### Análise

| Elemento | Descrição |
|---|---|
| Procedimento | `apresentar_resultado()` |
| Variáveis | `numero1`, `numero2`, `soma` |
| Operação | Adição |
| Entrada | Valores definidos internamente |
| Processamento | `numero1 + numero2` |
| Saída | Resultado apresentado por `print()` |

**Saída:**

```text
15
```

### Identificação da lógica

O algoritmo segue a sequência:

```text
       INÍCIO
          |
          v
   Definir valores
          |
          v
    Calcular soma
          |
          v
  Apresentar resultado
          |
          v
         FIM
```

---

## 6. Resolução de Problemas Semelhantes

### Reutilização de soluções

Uma das vantagens de compreender a lógica de um algoritmo é conseguir aplicar o mesmo raciocínio em situações diferentes.

Por exemplo, um algoritmo utilizado para somar dois números pode ser adaptado para calcular:

- O total de produtos.
- A soma de despesas.
- A quantidade acumulada.
- O total de pontos de um jogo.

### Exemplo 1 — Soma de números

```python
def calcular_total():
    numero1 = 10
    numero2 = 20

    total = numero1 + numero2

    print(total)


calcular_total()
```

**Saída:**

```text
30
```

### Exemplo 2 — Soma de preços

Utilizando a mesma estrutura lógica:

```python
def calcular_total_compra():
    preco1 = 50
    preco2 = 30

    total = preco1 + preco2

    print(f"Total: R$ {total:.2f}")


calcular_total_compra()
```

**Saída:**

```text
Total: R$ 80.00
```

A estrutura do algoritmo permanece semelhante, mas os dados representam outro problema.

### Comparação

| Elemento | Soma de números | Soma de preços |
|---|---|---|
| Entrada | Dois valores | Dois preços |
| Processamento | Adição | Adição |
| Saída | Total numérico | Valor da compra |
| Estrutura | Procedimento | Procedimento |

### Exemplo 3 — Aplicação com repetição

Considere um procedimento que apresenta os números de 1 a 5.

```python
def apresentar_numeros():
    for numero in range(1, 6):
        print(numero)


apresentar_numeros()
```

A mesma lógica pode ser utilizada para apresentar elementos de uma lista:

```python
def apresentar_produtos():
    produtos = ["Teclado", "Mouse", "Monitor"]

    for produto in produtos:
        print(produto)


apresentar_produtos()
```

**Saída:**

```text
Teclado
Mouse
Monitor
```

Ambos utilizam uma estrutura de repetição para percorrer uma sequência.

---

## 7. Organização de um Algoritmo Modularizado

Um algoritmo pode ser organizado em vários procedimentos, cada um com uma responsabilidade específica.

### Exemplo — Sistema de Gestão

```python
def exibir_titulo():
    print("===== SISTEMA DE GESTÃO =====")


def exibir_menu():
    print("1 - Cadastrar cliente")
    print("2 - Consultar clientes")
    print("3 - Sair")


def exibir_rodape():
    print("=============================")


def principal():
    exibir_titulo()
    exibir_menu()
    exibir_rodape()


principal()
```

**Saída:**

```text
===== SISTEMA DE GESTÃO =====
1 - Cadastrar cliente
2 - Consultar clientes
3 - Sair
=============================
```

### Organização do programa

```text
              PRINCIPAL
                 |
       +---------+---------+
       |         |         |
       v         v         v
    TÍTULO      MENU     RODAPÉ
```

### Benefícios dessa organização

- Cada procedimento possui uma responsabilidade.
- O código fica mais organizado.
- As alterações são mais simples.
- Os procedimentos podem ser reutilizados.
- A análise do funcionamento é facilitada.

### Responsabilidade única

Uma boa prática de modularização é procurar atribuir uma responsabilidade clara a cada procedimento.

Por exemplo:

```python
def exibir_menu():
    print("1 - Cadastrar")
    print("2 - Consultar")
    print("3 - Sair")
```

O procedimento concentra-se apenas na apresentação do menu.

Isso facilita a manutenção e a reutilização do código.

---

## 8. Vantagens e Limitações dos Procedimentos

### Vantagens

- Organização do programa.
- Reutilização de instruções.
- Redução de duplicação.
- Facilidade de manutenção.
- Melhor legibilidade.
- Separação de responsabilidades.
- Facilidade de testes e identificação de erros.

### Limitações

- Uma divisão excessiva pode dificultar a navegação pelo código.
- Procedimentos muito dependentes de variáveis globais podem ser difíceis de reutilizar.
- A ausência de parâmetros limita a flexibilidade em determinadas situações.
- Procedimentos mal definidos podem concentrar responsabilidades diferentes.

### Procedimentos com e sem parâmetros

| Sem parâmetros | Com parâmetros |
|---|---|
| Não recebe argumentos na chamada | Recebe argumentos |
| Pode trabalhar com valores internos | Pode receber valores externos |
| Adequado para tarefas fixas | Adequado para tarefas configuráveis |
| Exemplo: apresentar um menu | Exemplo: apresentar uma mensagem recebida |

O estudo dos parâmetros permite compreender formas mais flexíveis de reutilização dos módulos.

---

## Resumo

A **modularização** consiste em dividir um algoritmo em partes menores, organizadas e reutilizáveis.

Os **procedimentos** representam blocos de instruções responsáveis por executar tarefas específicas.

Os **procedimentos sem parâmetros** não recebem argumentos durante a chamada e podem realizar operações utilizando valores internos ou informações disponíveis no seu escopo.

Em Python, os procedimentos são normalmente representados por funções definidas com `def`, sem retorno explícito de valor.

A **análise de algoritmos** permite compreender as instruções, identificar as operações realizadas e reconhecer padrões de resolução.

A capacidade de identificar esses padrões facilita a adaptação de algoritmos para resolver problemas semelhantes.

**Em síntese:** a modularização contribui para desenvolver programas mais organizados, compreensíveis e fáceis de manter, enquanto a análise de algoritmos permite compreender e reutilizar soluções em diferentes situações.

---

## Referências para Estudo

- [Python — Definição de Funções](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
- [Python — Escopos e Namespaces](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces)
- [Python — Documentação Oficial](https://docs.python.org/3/)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — Funções em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
