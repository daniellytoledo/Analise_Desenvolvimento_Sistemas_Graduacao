
# Variáveis e Constantes

As **variáveis, constantes e operadores** são elementos fundamentais da lógica de programação, pois permitem armazenar informações, representar valores e realizar operações durante a execução de algoritmos.

As variáveis armazenam ou referenciam valores que podem mudar, enquanto as constantes representam valores que devem permanecer fixos.

Os operadores permitem realizar cálculos matemáticos, comparar informações e construir expressões lógicas.

Neste módulo, serão abordados:

1. **Variáveis e Constantes:** conceitos, declaração, atribuição e utilização.
2. **Operadores:** operadores aritméticos, relacionais, lógicos e de atribuição.

---

## 1. Variáveis e Constantes

### O que é uma variável?

Uma **variável** é um identificador associado a um valor que pode ser alterado durante a execução de um algoritmo.

As variáveis permitem armazenar e manipular informações necessárias para o funcionamento de um programa.

**Exemplos:**

- Nome de um usuário.
- Idade.
- Preço de um produto.
- Quantidade em estoque.
- Resultado de um cálculo.
- Estado de uma operação.

### Representação de uma variável

Considere a variável `idade`:

```text
+------------------+
| Variável: idade  |
+------------------+
| Valor: 20        |
+------------------+
```

Durante a execução, o valor pode ser alterado:

```text
idade <- 20

idade <- 21
```

A variável passa a representar o valor `21`.

### Declaração de variáveis

A **declaração** consiste em definir uma variável e, em determinadas linguagens, indicar o tipo de dado que poderá armazenar.

**Exemplo em pseudocódigo:**

```text
nome: caractere
idade: inteiro
altura: real
aprovado: logico
```

Nesse exemplo:

- `nome` representa uma informação textual.
- `idade` representa um número inteiro.
- `altura` representa um número real.
- `aprovado` representa um valor lógico.

### Variáveis em Python

Em Python, não é necessário declarar previamente o tipo da variável.

```python
nome = "Ana"
idade = 20
altura = 1.65
aprovado = True
```

Os tipos correspondentes são:

| Variável | Valor | Tipo |
|---|---|---|
| `nome` | `"Ana"` | `str` |
| `idade` | `20` | `int` |
| `altura` | `1.65` | `float` |
| `aprovado` | `True` | `bool` |

Python utiliza **tipagem dinâmica**, permitindo que uma variável passe a referenciar valores de diferentes tipos.

### Atribuição de valores

A **atribuição** consiste em associar um valor ou o resultado de uma expressão a uma variável.

Em pseudocódigo, é comum utilizar o símbolo:

```text
<-
```

**Exemplo:**

```text
numero <- 10
```

Em Python, utiliza-se o operador `=`.

```python
numero = 10
```

### Atualização de variáveis

Uma variável pode ter o seu valor modificado.

```python
contador = 1

contador = contador + 1

print(contador)
```

**Saída:**

```text
2
```

O programa utiliza o valor anterior, soma uma unidade e atribui o resultado novamente à variável.

### Inicialização de variáveis

A **inicialização** acontece quando uma variável recebe o seu primeiro valor.

**Exemplo:**

```python
total = 0
```

Nesse caso, a variável `total` foi inicializada com o valor zero.

Em Python, é necessário atribuir um valor antes de utilizar uma variável numa expressão.

### Identificadores

Os **identificadores** são os nomes utilizados para reconhecer variáveis, constantes e outros elementos de um programa.

Em Python, os identificadores:

- Podem conter letras, números e `_`.
- Não podem começar por números.
- Não podem conter espaços.
- Não podem utilizar palavras reservadas.
- Diferenciam maiúsculas de minúsculas.

### Exemplos de identificadores

**Válidos:**

```python
nome_usuario = "Ana"
idade = 20
valor_total = 150
produto1 = "Computador"
```

**Inválidos:**

```python
# 1produto = "Computador"
# nome completo = "Ana"
# valor-total = 150
# class = 10
```

Os exemplos inválidos estão comentados para evitar erros de sintaxe.

### Boas práticas na criação de variáveis

É recomendado utilizar nomes que indiquem claramente o significado das informações.

**Pouco descritivo:**

```python
x = 100
y = 5
z = x * y
```

**Mais descritivo:**

```python
preco = 100
quantidade = 5

valor_total = preco * quantidade
```

O segundo exemplo facilita a leitura e a manutenção do código.

### Convenção snake_case

Em Python, uma convenção comum para nomear variáveis é o **snake_case**.

As palavras são escritas em letras minúsculas e separadas por `_`.

**Exemplos:**

```python
nome_completo = "Maria Silva"
preco_produto = 50
quantidade_estoque = 100
```

---

### O que é uma constante?

Uma **constante** representa um valor que deve permanecer inalterado durante a execução de um programa.

É utilizada para representar informações consideradas fixas.

**Exemplos:**

- Valor aproximado de PI.
- Número máximo de tentativas.
- Limites estabelecidos pelo sistema.
- Valores fixos utilizados em cálculos.

### Exemplo em pseudocódigo

```text
PI = 3.14159
```

### Constantes em Python

Python não possui uma palavra-chave que impeça diretamente a alteração de variáveis convencionais.

Por convenção, constantes são representadas utilizando letras maiúsculas.

```python
PI = 3.14159

MAX_TENTATIVAS = 3

IDADE_MINIMA = 18
```

Embora esses valores possam ser modificados tecnicamente, a convenção indica que não devem ser alterados.

### Exemplo de utilização de constante

```python
PI = 3.14159

raio = 5

area = PI * raio ** 2

print(area)
```

**Saída:**

```text
78.53975
```

### Variáveis vs. Constantes

| Variáveis | Constantes |
|---|---|
| Podem receber novos valores | Devem manter o valor definido |
| Representam informações variáveis | Representam informações fixas |
| Podem ser atualizadas durante a execução | Não devem ser modificadas |
| Exemplo: `quantidade` | Exemplo: `PI` |

### Importância das constantes

A utilização de constantes contribui para:

- Melhorar a legibilidade.
- Evitar valores repetidos no código.
- Facilitar a manutenção.
- Reduzir erros.
- Centralizar valores de configuração.

### Exemplo prático

Imagine um programa que permite até três tentativas de acesso.

```python
MAX_TENTATIVAS = 3

tentativas = 0

tentativas += 1

print(f"Tentativas: {tentativas}/{MAX_TENTATIVAS}")
```

**Saída:**

```text
Tentativas: 1/3
```

Nesse exemplo:

- `MAX_TENTATIVAS` é uma constante por convenção.
- `tentativas` é uma variável que pode ser atualizada.

---

## 2. Operadores

### O que são operadores?

Os **operadores** são símbolos ou palavras utilizadas para realizar operações sobre valores e variáveis.

Esses valores são chamados de **operandos**.

**Exemplo:**

```text
10 + 5
```

Nesse caso:

- `10` é um operando.
- `+` é o operador.
- `5` é outro operando.

O resultado da expressão é `15`.

### Principais categorias de operadores

| Categoria | Finalidade |
|---|---|
| Aritméticos | Realizar cálculos matemáticos |
| Relacionais | Comparar valores |
| Lógicos | Combinar condições |
| Atribuição | Atribuir ou atualizar valores |

---

### 2.1 Operadores Aritméticos

Os **operadores aritméticos** permitem realizar operações matemáticas.

### Principais operadores em Python

| Operador | Operação | Exemplo | Resultado |
|---|---|---|---|
| `+` | Adição | `10 + 5` | `15` |
| `-` | Subtração | `10 - 5` | `5` |
| `*` | Multiplicação | `10 * 5` | `50` |
| `/` | Divisão | `10 / 5` | `2.0` |
| `//` | Divisão por piso | `10 // 3` | `3` |
| `%` | Resto da divisão | `10 % 3` | `1` |
| `**` | Potenciação | `2 ** 3` | `8` |

### Exemplo em Python

```python
a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)
```

**Saída:**

```text
13
7
30
3.3333333333333335
3
1
1000
```

### Divisão comum vs. divisão por piso

O operador `/` realiza a divisão comum.

```python
print(7 / 2)
```

**Saída:**

```text
3.5
```

O operador `//` realiza uma divisão com arredondamento para baixo.

```python
print(7 // 2)
```

**Saída:**

```text
3
```

Para números negativos:

```python
print(-7 // 2)
```

**Saída:**

```text
-4
```

Isso acontece porque o resultado é arredondado em direção ao infinito negativo.

### Operador de módulo

O operador `%` devolve o resto da divisão.

**Exemplo:**

```python
print(10 % 3)
```

**Saída:**

```text
1
```

Uma aplicação comum é verificar se um número inteiro é par ou ímpar.

```python
numero = 8

resto = numero % 2

print(resto)
```

**Saída:**

```text
0
```

Quando um número inteiro é divisível por 2 e o resto é zero, ele é par.

### Operador de potenciação

O operador `**` representa a potenciação.

```python
base = 2
expoente = 3

resultado = base ** expoente

print(resultado)
```

**Saída:**

```text
8
```

---

### 2.2 Operadores Relacionais

Os **operadores relacionais** são utilizados para comparar valores.

O resultado de uma comparação é normalmente um valor booleano:

- `True`
- `False`

### Operadores relacionais em Python

| Operador | Significado | Exemplo |
|---|---|---|
| `==` | Igual | `10 == 10` |
| `!=` | Diferente | `10 != 5` |
| `>` | Maior | `10 > 5` |
| `<` | Menor | `10 < 5` |
| `>=` | Maior ou igual | `10 >= 10` |
| `<=` | Menor ou igual | `5 <= 10` |

### Exemplo

```python
a = 10
b = 5

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)
```

**Saída:**

```text
False
True
True
False
True
False
```

### Atribuição vs. igualdade

Em Python, os operadores `=` e `==` possuem finalidades diferentes.

| Operador | Finalidade |
|---|---|
| `=` | Atribuir um valor |
| `==` | Verificar igualdade |

**Exemplo:**

```python
idade = 18

print(idade == 18)
```

**Saída:**

```text
True
```

### Exemplo prático

```python
idade = 20

maior_de_idade = idade >= 18

print(maior_de_idade)
```

**Saída:**

```text
True
```

O resultado da comparação é armazenado na variável `maior_de_idade`.

---

### 2.3 Operadores Lógicos

Os **operadores lógicos** permitem combinar ou negar condições.

São fundamentais para construir regras e estruturas condicionais.

Em Python, os principais operadores são:

- `and`
- `or`
- `not`

### Operador AND

O operador `and` representa a operação lógica **E**.

Quando utilizado com valores booleanos, o resultado será verdadeiro apenas quando as duas condições forem verdadeiras.

**Exemplo:**

```python
idade = 20
possui_documento = True

pode_entrar = idade >= 18 and possui_documento

print(pode_entrar)
```

**Saída:**

```text
True
```

### Tabela-verdade AND

| A | B | A AND B |
|---|---|---|
| Verdadeiro | Verdadeiro | Verdadeiro |
| Verdadeiro | Falso | Falso |
| Falso | Verdadeiro | Falso |
| Falso | Falso | Falso |

### Operador OR

O operador `or` representa a operação lógica **OU**.

Quando utilizado com valores booleanos, o resultado será verdadeiro se pelo menos uma das condições for verdadeira.

**Exemplo:**

```python
tem_desconto = False
possui_cupom = True

pode_aplicar_desconto = tem_desconto or possui_cupom

print(pode_aplicar_desconto)
```

**Saída:**

```text
True
```

### Tabela-verdade OR

| A | B | A OR B |
|---|---|---|
| Verdadeiro | Verdadeiro | Verdadeiro |
| Verdadeiro | Falso | Verdadeiro |
| Falso | Verdadeiro | Verdadeiro |
| Falso | Falso | Falso |

### Operador NOT

O operador `not` representa a operação lógica de **negação**.

Inverte o valor lógico de uma condição.

**Exemplo:**

```python
ativo = True

print(not ativo)
```

**Saída:**

```text
False
```

### Tabela-verdade NOT

| A | NOT A |
|---|---|
| Verdadeiro | Falso |
| Falso | Verdadeiro |

### Exemplo com múltiplas condições

```python
idade = 25
possui_cadastro = True
conta_bloqueada = False

acesso_permitido = (
    idade >= 18
    and possui_cadastro
    and not conta_bloqueada
)

print(acesso_permitido)
```

**Saída:**

```text
True
```

**Observação:** em Python, `and` e `or` também podem retornar operandos não booleanos. Nos exemplos apresentados, as expressões produzem valores booleanos.

---

### 2.4 Operadores de Atribuição

Os **operadores de atribuição** permitem associar valores a variáveis.

Em Python, o operador básico é:

```python
=
```

### Exemplo

```python
numero = 10
```

Também existem operadores de atribuição composta, que combinam operações com a atualização de uma variável.

### Principais operadores de atribuição

| Operador | Exemplo | Equivalente |
|---|---|---|
| `=` | `x = 10` | Atribuição |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |
| `//=` | `x //= 5` | `x = x // 5` |
| `%=` | `x %= 5` | `x = x % 5` |
| `**=` | `x **= 5` | `x = x ** 5` |

As equivalências são conceituais para operações simples; em determinadas situações, os operadores compostos podem apresentar diferenças de comportamento.

### Exemplo de incremento

```python
contador = 0

contador += 1

print(contador)
```

**Saída:**

```text
1
```

### Exemplo de decremento

```python
estoque = 10

estoque -= 2

print(estoque)
```

**Saída:**

```text
8
```

### Exemplo de multiplicação

```python
valor = 5

valor *= 3

print(valor)
```

**Saída:**

```text
15
```

---

## 3. Expressões

### O que é uma expressão?

Uma **expressão** é uma combinação de valores, variáveis e operadores que pode ser avaliada para produzir um resultado.

As expressões podem ser:

- Aritméticas.
- Relacionais.
- Lógicas.

### Expressão aritmética

```python
resultado = (10 + 5) * 2

print(resultado)
```

**Saída:**

```text
30
```

### Expressão relacional

```python
idade = 20

resultado = idade >= 18

print(resultado)
```

**Saída:**

```text
True
```

### Expressão lógica

```python
idade = 20
tem_autorizacao = True

resultado = idade >= 18 and tem_autorizacao

print(resultado)
```

**Saída:**

```text
True
```

---

## 4. Precedência de Operadores

### O que é precedência?

A **precedência de operadores** determina a ordem em que as operações de uma expressão são avaliadas.

Alguns operadores possuem prioridade sobre outros.

### Exemplo

```python
resultado = 10 + 5 * 2

print(resultado)
```

**Saída:**

```text
20
```

A multiplicação é realizada antes da adição.

### Uso de parênteses

Os parênteses permitem agrupar expressões e alterar a ordem de avaliação.

```python
resultado = (10 + 5) * 2

print(resultado)
```

**Saída:**

```text
30
```

### Ordem simplificada de precedência em Python

| Prioridade | Operadores |
|---|---|
| 1 | Expressões entre parênteses |
| 2 | Potenciação `**` |
| 3 | Operadores unários, conforme as regras da linguagem |
| 4 | `*`, `/`, `//`, `%` |
| 5 | `+`, `-` |
| 6 | Comparações |
| 7 | `not` |
| 8 | `and` |
| 9 | `or` |

A tabela é uma simplificação para estudo introdutório. Python possui outras categorias de operadores e regras específicas.

### Exemplo com operadores lógicos

```python
a = True
b = False
c = True

resultado = a or b and c

print(resultado)
```

**Saída:**

```text
True
```

O operador `and` possui maior precedência do que `or`.

A expressão é interpretada como:

```python
resultado = a or (b and c)
```

---

## 5. Exemplo Integrado

Imagine um sistema que verifica se um cliente pode receber determinado desconto.

### Regras

- O cliente deve possuir cadastro.
- O valor da compra deve ser igual ou superior a R$ 100.
- O desconto será de 10%.

### Pseudocódigo

```text
Início

    DESCONTO <- 0.10
    VALOR_MINIMO <- 100

    Ler valor_compra
    Ler possui_cadastro

    pode_receber_desconto <- 
        valor_compra >= VALOR_MINIMO
        E possui_cadastro

    Se pode_receber_desconto então
        valor_desconto <- valor_compra * DESCONTO
    Senão
        valor_desconto <- 0
    FimSe

    valor_final <- valor_compra - valor_desconto

    Escrever valor_final

Fim
```

### Implementação em Python

```python
DESCONTO = 0.10
VALOR_MINIMO = 100

valor_compra = 150.0
possui_cadastro = True

pode_receber_desconto = (
    valor_compra >= VALOR_MINIMO
    and possui_cadastro
)

if pode_receber_desconto:
    valor_desconto = valor_compra * DESCONTO
else:
    valor_desconto = 0

valor_final = valor_compra - valor_desconto

print(f"Valor final: R$ {valor_final:.2f}")
```

**Saída:**

```text
Valor final: R$ 135.00
```

### Conceitos utilizados

| Conceito | Aplicação |
|---|---|
| Variáveis | `valor_compra`, `valor_final` |
| Constantes por convenção | `DESCONTO`, `VALOR_MINIMO` |
| Operador relacional | `>=` |
| Operador lógico | `and` |
| Operador aritmético | `*`, `-` |
| Atribuição | `=` |
| Estrutura condicional | `if` e `else` |

Esse exemplo demonstra como variáveis, constantes e operadores podem ser utilizados em conjunto para implementar regras de negócio.

---

## Resumo

As **variáveis** permitem associar nomes a valores que podem ser alterados durante a execução de um algoritmo.

As **constantes** representam valores que devem permanecer fixos, contribuindo para a organização e a manutenção do código.

Os **operadores aritméticos** realizam cálculos matemáticos.

Os **operadores relacionais** comparam valores e produzem resultados lógicos.

Os **operadores lógicos** permitem combinar ou negar condições.

Os **operadores de atribuição** associam e atualizam valores em variáveis.

A **precedência de operadores** determina a ordem de avaliação das expressões.

**Em síntese:** compreender variáveis, constantes e operadores é essencial para construir algoritmos capazes de armazenar dados, realizar cálculos, comparar informações e aplicar regras lógicas.

---

## Referências para Estudo

- [Python — Tipos Integrados](https://docs.python.org/3/library/stdtypes.html)
- [Python — Expressões e Operadores](https://docs.python.org/3/reference/expressions.html)
- [Python — Modelo de Dados](https://docs.python.org/3/reference/datamodel.html)
- [Python — Guia de Estilo PEP 8](https://peps.python.org/pep-0008/)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
