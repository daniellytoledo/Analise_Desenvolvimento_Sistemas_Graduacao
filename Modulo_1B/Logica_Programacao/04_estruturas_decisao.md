
# Estruturas de Decisão

As **estruturas de decisão**, também conhecidas como **estruturas condicionais**, permitem que um algoritmo execute diferentes instruções de acordo com determinadas condições.

Até aqui, os algoritmos apresentados seguiram principalmente uma sequência de instruções. Entretanto, muitos problemas exigem que o programa avalie informações antes de decidir quais operações executar.

Por exemplo:

- Verificar se um aluno foi aprovado.
- Identificar se um número é positivo ou negativo.
- Determinar se uma pessoa é maior de idade.
- Validar o acesso de um usuário.
- Aplicar descontos conforme o valor de uma compra.

As estruturas de decisão são fundamentais para implementar regras de negócio e controlar o fluxo de execução dos programas.

---

## 1. Comandos de Decisão

### O que são comandos de decisão?

Os **comandos de decisão** são instruções que permitem executar diferentes blocos de código conforme o resultado de uma condição lógica.

As condições normalmente produzem dois resultados possíveis:

- **Verdadeiro (`True`)**
- **Falso (`False`)**

O algoritmo utiliza esse resultado para determinar qual instrução será executada.

### Exemplo conceitual

Imagine um sistema que verifica a idade de uma pessoa.

```text
Se idade >= 18
    Apresentar "Maior de idade"
Senão
    Apresentar "Menor de idade"
```

O programa avalia a condição `idade >= 18` e executa a instrução correspondente.

### Estruturas condicionais

As principais estruturas de decisão são:

1. Decisão simples.
2. Decisão composta.
3. Decisão encadeada.
4. Decisão aninhada.
5. Decisão múltipla.

---

### 1.1 Decisão Simples — SE

A **decisão simples** executa um bloco de instruções apenas quando determinada condição é verdadeira.

Se a condição for falsa, o bloco é ignorado e o programa continua a execução.

### Sintaxe em pseudocódigo

```text
Se condição então
    instrução
FimSe
```

### Exemplo

```text
Início

    Ler idade

    Se idade >= 18 então
        Escrever "Maior de idade"
    FimSe

Fim
```

### Implementação em Python

```python
idade = 20

if idade >= 18:
    print("Maior de idade")
```

**Saída:**

```text
Maior de idade
```

Em Python, a palavra-chave `if` representa o comando `Se`.

### Fluxo de decisão simples

```text
       INÍCIO
          |
          v
    +-------------+
    | CONDIÇÃO?   |
    +-------------+
      /         \
    SIM         NÃO
     |           |
     v           |
 EXECUTAR        |
  BLOCO          |
     |           |
     +-----+-----+
           |
           v
       CONTINUAR
```

---

### 1.2 Decisão Composta — SE / SENÃO

A **decisão composta** permite executar um bloco quando a condição é verdadeira e outro quando é falsa.

### Sintaxe em pseudocódigo

```text
Se condição então
    instrução_verdadeira
Senão
    instrução_falsa
FimSe
```

### Exemplo

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

### Implementação em Python

```python
idade = 16

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")
```

**Saída:**

```text
Menor de idade
```

### Fluxo de decisão composta

```text
          INÍCIO
             |
             v
       +------------+
       | CONDIÇÃO?  |
       +------------+
        /          \
      SIM          NÃO
       |            |
       v            v
    BLOCO A      BLOCO B
       |            |
       +------+-----+
              |
              v
          CONTINUAR
```

---

### 1.3 Decisão Encadeada — SE / SENÃO SE / SENÃO

A **decisão encadeada** permite avaliar várias condições em sequência.

É utilizada quando existem mais de duas possibilidades de resultado.

### Sintaxe em pseudocódigo

```text
Se condição1 então
    instrução1
Senão se condição2 então
    instrução2
Senão
    instrução3
FimSe
```

### Exemplo

Um sistema classifica uma nota da seguinte forma:

- Nota maior ou igual a 7: aprovado.
- Nota maior ou igual a 5 e menor que 7: recuperação.
- Nota menor que 5: reprovado.

### Pseudocódigo

```text
Início

    Ler nota

    Se nota >= 7 então
        Escrever "Aprovado"
    Senão se nota >= 5 então
        Escrever "Recuperação"
    Senão
        Escrever "Reprovado"
    FimSe

Fim
```

### Implementação em Python

```python
nota = 6

if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

**Saída:**

```text
Recuperação
```

### Como funciona o elif?

Em Python, `elif` é uma combinação de `else` e `if`.

O programa avalia as condições em sequência e executa o bloco correspondente à primeira condição verdadeira.

Quando um bloco é executado, os restantes da mesma cadeia são ignorados.

---

### 1.4 Decisão Aninhada

Uma **decisão aninhada** acontece quando existe uma estrutura condicional dentro de outra.

É utilizada quando uma decisão depende de uma condição anterior.

### Exemplo

Um sistema verifica se uma pessoa possui idade suficiente e se tem autorização para entrar.

### Pseudocódigo

```text
Início

    Ler idade
    Ler possui_autorizacao

    Se idade >= 18 então

        Se possui_autorizacao então
            Escrever "Entrada permitida"
        Senão
            Escrever "Autorização necessária"
        FimSe

    Senão
        Escrever "Idade insuficiente"
    FimSe

Fim
```

### Implementação em Python

```python
idade = 20
possui_autorizacao = True

if idade >= 18:
    if possui_autorizacao:
        print("Entrada permitida")
    else:
        print("Autorização necessária")
else:
    print("Idade insuficiente")
```

**Saída:**

```text
Entrada permitida
```

### Cuidados com decisões aninhadas

A utilização excessiva de estruturas aninhadas pode dificultar a leitura do código.

Quando possível, condições relacionadas podem ser combinadas através de operadores lógicos.

---

### 1.5 Decisão Múltipla — ESCOLHA / CASO

A **decisão múltipla** permite selecionar uma entre várias alternativas com base no valor de uma expressão.

Em pseudocódigo, é comum utilizar a estrutura `Escolha / Caso`.

### Sintaxe em pseudocódigo

```text
Escolha opção

    Caso 1:
        instrução1

    Caso 2:
        instrução2

    Caso contrário:
        instrução_padrao

FimEscolha
```

### Exemplo

```text
Início

    Ler opcao

    Escolha opcao

        Caso 1:
            Escrever "Cadastrar usuário"

        Caso 2:
            Escrever "Consultar usuário"

        Caso 3:
            Escrever "Excluir usuário"

        Caso contrário:
            Escrever "Opção inválida"

    FimEscolha

Fim
```

### Estrutura match/case em Python

A partir do Python 3.10, existe a estrutura `match/case`, que permite realizar correspondência de padrões.

Para valores simples, pode ser utilizada de forma semelhante a uma estrutura de escolha.

```python
opcao = 2

match opcao:
    case 1:
        print("Cadastrar usuário")

    case 2:
        print("Consultar usuário")

    case 3:
        print("Excluir usuário")

    case _:
        print("Opção inválida")
```

**Saída:**

```text
Consultar usuário
```

O símbolo `_` representa um padrão genérico que corresponde aos valores não tratados anteriormente.

**Importante:** `match/case` possui funcionalidades mais amplas do que uma simples estrutura `switch`, incluindo correspondência de padrões estruturais.

---

## 2. Operadores Utilizados nas Decisões

As estruturas condicionais utilizam frequentemente operadores relacionais e lógicos.

### Operadores relacionais

| Operador | Significado | Exemplo |
|---|---|---|
| `==` | Igual | `idade == 18` |
| `!=` | Diferente | `idade != 18` |
| `>` | Maior | `idade > 18` |
| `<` | Menor | `idade < 18` |
| `>=` | Maior ou igual | `idade >= 18` |
| `<=` | Menor ou igual | `idade <= 18` |

### Operadores lógicos

| Operador | Significado |
|---|---|
| `and` | E |
| `or` | OU |
| `not` | NÃO |

### Exemplo com AND

```python
idade = 20
possui_documento = True

if idade >= 18 and possui_documento:
    print("Acesso permitido")
else:
    print("Acesso negado")
```

As duas condições precisam ser verdadeiras.

### Exemplo com OR

```python
cliente_premium = False
possui_cupom = True

if cliente_premium or possui_cupom:
    print("Desconto disponível")
else:
    print("Desconto indisponível")
```

Pelo menos uma das condições deve ser verdadeira.

### Exemplo com NOT

```python
conta_bloqueada = False

if not conta_bloqueada:
    print("Conta ativa")
else:
    print("Conta bloqueada")
```

O operador `not` inverte o valor lógico da condição.

---

## 3. Exemplos de Estruturas de Decisão

### Exemplo 1 — Número Positivo, Negativo ou Zero

Um algoritmo recebe um número e determina a sua classificação.

### Pseudocódigo

```text
Início

    Ler numero

    Se numero > 0 então
        Escrever "Positivo"
    Senão se numero < 0 então
        Escrever "Negativo"
    Senão
        Escrever "Zero"
    FimSe

Fim
```

### Python

```python
numero = -5

if numero > 0:
    print("Positivo")
elif numero < 0:
    print("Negativo")
else:
    print("Zero")
```

**Saída:**

```text
Negativo
```

---

### Exemplo 2 — Número Par ou Ímpar

Um número inteiro é par quando o resto da divisão por 2 é igual a zero.

### Pseudocódigo

```text
Início

    Ler numero

    Se numero MOD 2 = 0 então
        Escrever "Número par"
    Senão
        Escrever "Número ímpar"
    FimSe

Fim
```

### Python

```python
numero = 7

if numero % 2 == 0:
    print("Número par")
else:
    print("Número ímpar")
```

**Saída:**

```text
Número ímpar
```

O operador `%` devolve o resto da divisão.

---

### Exemplo 3 — Cálculo de Desconto

Um sistema oferece um desconto de 10% para compras com valor igual ou superior a R$ 200.

### Pseudocódigo

```text
Início

    Ler valor_compra

    Se valor_compra >= 200 então
        desconto <- valor_compra * 0.10
    Senão
        desconto <- 0
    FimSe

    valor_final <- valor_compra - desconto

    Escrever valor_final

Fim
```

### Python

```python
valor_compra = 250

if valor_compra >= 200:
    desconto = valor_compra * 0.10
else:
    desconto = 0

valor_final = valor_compra - desconto

print(f"Valor final: R$ {valor_final:.2f}")
```

**Saída:**

```text
Valor final: R$ 225.00
```

---

### Exemplo 4 — Verificação de Login

Um sistema verifica se o usuário informou credenciais correspondentes aos valores esperados.

### Python

```python
usuario = "admin"
senha = "1234"

if usuario == "admin" and senha == "1234":
    print("Login autorizado")
else:
    print("Credenciais inválidas")
```

**Saída:**

```text
Login autorizado
```

Este é apenas um exemplo didático de condições lógicas. Sistemas reais não devem armazenar senhas em texto simples nem autenticar usuários por comparação direta com credenciais fixas no código.

---

### Exemplo 5 — Classificação por Faixa Etária

Um programa classifica a idade de uma pessoa utilizando diferentes condições.

### Python

```python
idade = 25

if idade < 0:
    print("Idade inválida")
elif idade < 12:
    print("Criança")
elif idade < 18:
    print("Adolescente")
elif idade < 60:
    print("Adulto")
else:
    print("Idoso")
```

**Saída:**

```text
Adulto
```

As faixas utilizadas são ilustrativas e não representam necessariamente classificações legais ou oficiais.

---

### Exemplo 6 — Sistema de Reservas

Imagine uma aplicação que verifica se determinado horário está disponível.

### Pseudocódigo

```text
Início

    Ler horario_disponivel

    Se horario_disponivel então
        Escrever "Reserva confirmada"
    Senão
        Escrever "Horário indisponível"
    FimSe

Fim
```

### Python

```python
horario_disponivel = True

if horario_disponivel:
    print("Reserva confirmada")
else:
    print("Horário indisponível")
```

**Saída:**

```text
Reserva confirmada
```

Numa aplicação real, seria necessário verificar a disponibilidade no sistema e registar a reserva de forma segura.

---

## 4. Operador Condicional Ternário

O **operador condicional ternário** permite representar determinadas decisões de forma resumida.

Em Python, utiliza-se uma expressão condicional com a seguinte estrutura:

```python
valor_se_verdadeiro if condicao else valor_se_falso
```

### Exemplo tradicional

```python
idade = 20

if idade >= 18:
    resultado = "Maior de idade"
else:
    resultado = "Menor de idade"

print(resultado)
```

### Exemplo com expressão condicional

```python
idade = 20

resultado = "Maior de idade" if idade >= 18 else "Menor de idade"

print(resultado)
```

**Saída:**

```text
Maior de idade
```

### Vantagens

- Redução de código em decisões simples.
- Atribuição condicional numa expressão.
- Leitura direta quando a condição é curta.

### Cuidados

Expressões condicionais muito longas ou aninhadas podem dificultar a compreensão.

O uso de `if/else` convencional costuma ser mais adequado quando existem várias instruções ou condições complexas.

---

## 5. Importância da Indentação

A **indentação** representa o espaço utilizado no início das linhas para organizar os blocos de código.

Em Python, a indentação faz parte da sintaxe e determina quais instruções pertencem a cada estrutura.

### Exemplo correto

```python
idade = 20

if idade >= 18:
    print("Maior de idade")
    print("Acesso autorizado")

print("Fim do programa")
```

As duas primeiras mensagens estão dentro do bloco condicional, enquanto a última será executada independentemente da condição.

### Exemplo incorreto

```python
# Exemplo inválido:

# if idade >= 18:
# print("Maior de idade")
```

O exemplo não apresenta a indentação necessária para formar o bloco do `if`.

### Boas práticas

- Utilizar quatro espaços por nível de indentação.
- Evitar misturar tabulações e espaços.
- Manter condições claras.
- Evitar aninhamentos desnecessários.
- Utilizar nomes descritivos.

---

## 6. Comparação das Estruturas de Decisão

| Estrutura | Funcionamento | Python |
|---|---|---|
| Simples | Executa um bloco se a condição for verdadeira | `if` |
| Composta | Escolhe entre dois blocos | `if/else` |
| Encadeada | Avalia várias condições em sequência | `if/elif/else` |
| Aninhada | Utiliza uma decisão dentro de outra | `if` dentro de `if` |
| Múltipla | Seleciona alternativas através de padrões | `match/case` |
| Expressão condicional | Seleciona um valor conforme uma condição | `a if condição else b` |

---

## 7. Aplicações no Desenvolvimento de Sistemas

As estruturas de decisão são utilizadas em praticamente todas as áreas do desenvolvimento de software.

### Sistemas Web

- Validar formulários.
- Verificar permissões.
- Controlar o acesso a páginas.
- Apresentar mensagens.
- Aplicar regras de negócio.

### Bancos de Dados

- Verificar condições.
- Filtrar registos.
- Aplicar regras de processamento.
- Controlar operações.

### Comércio Eletrônico

- Aplicar descontos.
- Verificar disponibilidade.
- Calcular condições de entrega.
- Validar pedidos.
- Identificar estados de pagamento.

### Aplicações de Gestão

- Validar agendamentos.
- Verificar mensalidades.
- Controlar limites.
- Identificar estados de tarefas.
- Autorizar operações.

### Exemplo Integrado

Imagine um sistema de gestão de ginásios.

O programa precisa verificar se um cliente pode realizar uma reserva.

**Condições:**

- A mensalidade está ativa.
- Existem vagas disponíveis.
- A conta não está bloqueada.

### Python

```python
mensalidade_ativa = True
vagas_disponiveis = 5
conta_bloqueada = False

if (
    mensalidade_ativa
    and vagas_disponiveis > 0
    and not conta_bloqueada
):
    print("Reserva permitida")
else:
    print("Reserva não permitida")
```

**Saída:**

```text
Reserva permitida
```

Esse exemplo demonstra como diferentes condições podem ser combinadas para implementar uma regra de negócio.

---

## Resumo

As **estruturas de decisão** permitem controlar o fluxo de execução dos algoritmos através da avaliação de condições lógicas.

A **decisão simples (`if`)** executa um bloco quando uma condição é verdadeira.

A **decisão composta (`if/else`)** permite escolher entre dois caminhos.

A **decisão encadeada (`if/elif/else`)** avalia diferentes condições.

A **decisão aninhada** utiliza estruturas condicionais dentro de outras.

A **decisão múltipla (`match/case`)** permite selecionar alternativas com base na correspondência de padrões.

Os operadores relacionais e lógicos são utilizados para construir as condições que orientam essas decisões.

**Em síntese:** as estruturas condicionais tornam os programas capazes de reagir a diferentes situações, executar regras de negócio e produzir resultados conforme as informações recebidas.

---

## Referências para Estudo

- [Python — Controle de Fluxo](https://docs.python.org/3/tutorial/controlflow.html)
- [Python — Expressões Condicionais](https://docs.python.org/3/reference/expressions.html#conditional-expressions)
- [Python — Estrutura Match](https://docs.python.org/3/reference/compound_stmts.html#the-match-statement)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — Estruturas Condicionais em JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Conditionals)
