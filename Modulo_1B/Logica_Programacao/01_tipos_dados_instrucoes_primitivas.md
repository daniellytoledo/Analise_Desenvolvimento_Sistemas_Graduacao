
# Tipos de Dados e Instruções Primitivas

Os **tipos de dados e as instruções primitivas** são conceitos fundamentais da lógica de programação, pois permitem representar informações e definir as operações básicas que um algoritmo deve executar.

Ao desenvolver um programa, precisamos compreender como os dados são armazenados, quais operações podem ser realizadas e como as informações são recebidas e apresentadas ao usuário.

Neste módulo, serão abordados:

- Tipos de dados.
- Variáveis e constantes.
- Identificadores.
- Operadores.
- Expressões.
- Instruções de atribuição.
- Instruções de entrada e saída.
- Conversão de tipos de dados.

---

## 1. Tipos de Dados e Instruções Primitivas

### O que são tipos de dados?

Os **tipos de dados** representam categorias utilizadas para classificar os valores manipulados por um algoritmo.

Cada tipo determina a natureza das informações e influencia quais operações podem ser realizadas.

Os tipos primitivos mais comuns no estudo inicial de algoritmos são:

1. Inteiro.
2. Real.
3. Caractere ou cadeia de caracteres.
4. Lógico.

### Tipos de dados primitivos

| Tipo | Descrição | Exemplo |
|---|---|---|
| Inteiro | Números sem parte decimal | `10`, `-5`, `0` |
| Real | Números com possibilidade de parte decimal | `3.14`, `8.5` |
| Caractere | Um símbolo individual | `'A'` |
| Cadeia de caracteres | Sequência de caracteres | `"Olá, mundo!"` |
| Lógico | Valores verdadeiro ou falso | `verdadeiro`, `falso` |

A representação e os nomes dos tipos podem variar conforme a linguagem de programação.

---

## 2. Tipo Inteiro

O tipo **inteiro** representa números que não possuem parte decimal.

Pode armazenar:

- Números positivos.
- Números negativos.
- Zero.

**Exemplos:**

```text
10
-25
0
150
```

### Aplicações

Os números inteiros são utilizados para representar:

- Idade.
- Quantidade de produtos.
- Número de alunos.
- Contadores.
- Quantidade de tentativas.

### Exemplo em pseudocódigo

```text
idade: inteiro

idade <- 20

Escrever idade
```

### Exemplo em Python

```python
idade = 20

print(idade)
```

Em Python, os números inteiros são representados pelo tipo `int`.

---

## 3. Tipo Real

O tipo **real** representa números que podem possuir parte decimal.

É utilizado quando é necessário trabalhar com valores que não são necessariamente inteiros.

**Exemplos:**

```text
3.14
8.5
-2.75
10.0
```

### Aplicações

Os números reais podem representar:

- Altura.
- Peso.
- Temperatura.
- Médias.
- Medidas.
- Resultados de divisões.

### Exemplo em pseudocódigo

```text
altura: real

altura <- 1.75

Escrever altura
```

### Exemplo em Python

```python
altura = 1.75

print(altura)
```

Em Python, o tipo `float` é normalmente utilizado para representar números de ponto flutuante.

**Importante:** valores `float` possuem precisão limitada e podem apresentar pequenas diferenças de representação. Para cálculos financeiros que exigem precisão decimal, podem ser utilizados tipos específicos, como `Decimal` em Python.

---

## 4. Tipo Caractere e Cadeia de Caracteres

Os dados do tipo **caractere** representam símbolos, como letras, números escritos como texto e sinais especiais.

Uma **cadeia de caracteres**, também chamada de *string*, representa uma sequência de caracteres.

### Exemplos

```text
"A"
"Olá"
"Daniel"
"123"
"Rua Principal"
```

### Diferença entre número e texto

Observe:

```text
123
```

Representa um valor numérico inteiro.

Enquanto:

```text
"123"
```

Representa uma sequência de caracteres.

Essa diferença influencia as operações realizadas.

### Exemplo em pseudocódigo

```text
nome: caractere

nome <- "Maria"

Escrever nome
```

Em alguns ambientes educacionais, o tipo `caractere` é utilizado tanto para um símbolo quanto para uma cadeia de texto.

### Exemplo em Python

```python
nome = "Maria"

print(nome)
```

Em Python, o tipo `str` representa strings.

### Concatenação

A **concatenação** consiste em unir cadeias de caracteres.

**Exemplo em Python:**

```python
nome = "Maria"
sobrenome = "Silva"

nome_completo = nome + " " + sobrenome

print(nome_completo)
```

**Saída:**

```text
Maria Silva
```

O operador `+` pode ser utilizado para concatenar strings em Python.

---

## 5. Tipo Lógico ou Booleano

O tipo **lógico**, também conhecido como **booleano**, representa dois valores possíveis:

- Verdadeiro.
- Falso.

É utilizado principalmente em verificações e tomadas de decisão.

### Exemplo em pseudocódigo

```text
aprovado: logico

aprovado <- verdadeiro

Escrever aprovado
```

### Exemplo em Python

```python
aprovado = True

print(aprovado)
```

Em Python, o tipo lógico é representado por `bool`.

Os valores são escritos como:

```python
True
False
```

### Aplicações

O tipo booleano pode representar:

- Usuário autenticado.
- Produto disponível.
- Pagamento confirmado.
- Reserva ativa.
- Aluno aprovado.

### Exemplo

```python
idade = 20

maior_de_idade = idade >= 18

print(maior_de_idade)
```

**Saída:**

```text
True
```

A expressão `idade >= 18` é avaliada e produz um resultado lógico.

---

## 6. Variáveis

### O que é uma variável?

Uma **variável** é uma identificação utilizada para armazenar ou referenciar um valor que pode ser alterado durante a execução de um algoritmo.

Cada variável possui um nome, também chamado de identificador.

### Exemplo

```text
idade <- 18
```

Posteriormente:

```text
idade <- 19
```

O valor associado à variável foi atualizado.

### Representação

```text
+------------------+
| Variável: idade  |
+------------------+
| Valor: 19        |
+------------------+
```

### Declaração de variáveis

Em determinadas linguagens e ambientes de pseudocódigo, é necessário declarar o tipo das variáveis antes de utilizá-las.

**Exemplo:**

```text
nome: caractere
idade: inteiro
altura: real
aprovado: logico
```

### Exemplo em Python

```python
nome = "Ana"
idade = 22
altura = 1.68
aprovado = True
```

Python possui tipagem dinâmica, ou seja, não é necessário declarar previamente o tipo da variável.

O tipo está associado ao objeto referenciado, e a variável pode passar a referenciar valores de outros tipos.

### Alteração de valores

```python
contador = 1

contador = contador + 1

print(contador)
```

**Saída:**

```text
2
```

A instrução utiliza o valor anterior de `contador`, soma uma unidade e atribui o resultado novamente à variável.

---

## 7. Constantes

### O que é uma constante?

Uma **constante** representa um valor que não deve ser alterado durante a execução de um programa.

É utilizada para representar informações que precisam permanecer estáveis.

**Exemplos:**

- Valor de PI.
- Quantidade máxima de tentativas.
- Taxas fixas definidas para determinada operação.
- Limites estabelecidos pelo programa.

### Exemplo em pseudocódigo

```text
PI = 3.14159
```

### Exemplo em Python

```python
PI = 3.14159

print(PI)
```

Em Python, nomes escritos em letras maiúsculas são utilizados por convenção para indicar constantes.

Entretanto, a linguagem não impede que esses valores sejam alterados.

### Variáveis vs. Constantes

| Variável | Constante |
|---|---|
| Pode ter o valor alterado | Deve manter o valor definido |
| Representa informações variáveis | Representa valores fixos |
| Exemplo: quantidade de produtos | Exemplo: PI |

---

## 8. Identificadores

### O que são identificadores?

Os **identificadores** são nomes utilizados para reconhecer elementos de um programa, como:

- Variáveis.
- Constantes.
- Funções.
- Classes.
- Procedimentos.

### Boas práticas

Os identificadores devem ser claros e representar o significado das informações.

**Exemplos recomendados:**

```python
nome_cliente = "Ana"

idade_usuario = 25

preco_produto = 50.0

quantidade_estoque = 100
```

### Exemplos pouco descritivos

```python
a = "Ana"

x = 25

z = 50.0
```

Embora possam funcionar, nomes pouco claros dificultam a compreensão do código.

### Regras em Python

Os identificadores:

- Podem conter letras, números e `_`.
- Não podem começar por números.
- Não podem conter espaços.
- Não podem utilizar palavras reservadas.
- Diferenciam letras maiúsculas e minúsculas.

### Exemplos

**Válidos:**

```python
nome
idade_usuario
valor_total
produto1
```

**Inválidos:**

```python
# 1produto
# nome completo
# valor-total
# class
```

Esses exemplos estão comentados para não provocar erros de sintaxe.

---

## 9. Instruções Primitivas

### O que são instruções primitivas?

As **instruções primitivas** são operações básicas utilizadas na construção de algoritmos.

Permitem:

- Atribuir valores.
- Receber dados.
- Apresentar informações.
- Realizar operações matemáticas.
- Avaliar expressões.

Entre as instruções fundamentais estão:

1. Atribuição.
2. Entrada de dados.
3. Saída de dados.
4. Processamento de expressões.

### Instrução de atribuição

A **atribuição** permite associar um valor ou o resultado de uma expressão a uma variável.

Em muitos pseudocódigos, utiliza-se:

```text
<-
```

### Exemplo

```text
idade <- 20
```

Outro exemplo:

```text
numero1 <- 10
numero2 <- 5

soma <- numero1 + numero2
```

### Atribuição em Python

Em Python, a atribuição é realizada através do operador `=`.

```python
numero1 = 10
numero2 = 5

soma = numero1 + numero2

print(soma)
```

**Saída:**

```text
15
```

### Atribuição vs. Comparação

É importante distinguir os operadores:

| Operador | Significado em Python |
|---|---|
| `=` | Atribuição |
| `==` | Comparação de igualdade |

**Exemplo:**

```python
numero = 10

print(numero == 10)
```

**Saída:**

```text
True
```

---

## 10. Instruções de Entrada de Dados

### O que é entrada de dados?

A **entrada de dados** permite que um algoritmo receba informações necessárias para executar as operações.

Os dados podem ser obtidos através de:

- Teclado.
- Ficheiros.
- Bases de dados.
- APIs.
- Sensores.
- Interfaces de utilizador.

### Entrada em pseudocódigo

```text
Ler nome
```

### Exemplo

```text
Início

    Ler nome

    Escrever nome

Fim
```

### Entrada em Python

Em Python, podemos utilizar a função `input()`.

```python
nome = input("Digite seu nome: ")

print(nome)
```

A função `input()` retorna uma string.

### Entrada de números

Quando precisamos realizar cálculos, pode ser necessário converter o texto recebido para um tipo numérico.

**Exemplo:**

```python
idade = int(input("Digite sua idade: "))

print(idade)
```

Nesse exemplo:

- `input()` recebe o texto.
- `int()` converte o valor para inteiro.
- A variável `idade` passa a referenciar o número convertido.

### Entrada de números reais

```python
altura = float(input("Digite sua altura: "))

print(altura)
```

A conversão com `float()` espera um formato numérico válido, normalmente utilizando o ponto como separador decimal.

---

## 11. Instruções de Saída de Dados

### O que é saída de dados?

A **saída de dados** permite apresentar informações ou disponibilizar resultados produzidos pelo algoritmo.

Pode ocorrer através de:

- Ecrã.
- Ficheiros.
- Impressoras.
- Interfaces.
- Sistemas externos.

### Saída em pseudocódigo

```text
Escrever "Olá, mundo!"
```

### Saída em Python

```python
print("Olá, mundo!")
```

### Saída de variáveis

```python
nome = "Ana"
idade = 20

print(nome)
print(idade)
```

### Saída formatada

Em Python, podemos utilizar **f-strings** para apresentar valores juntamente com texto.

```python
nome = "Ana"
idade = 20

print(f"Meu nome é {nome} e tenho {idade} anos.")
```

**Saída:**

```text
Meu nome é Ana e tenho 20 anos.
```

### Entrada vs. Saída

| Entrada | Saída |
|---|---|
| Recebe informações | Apresenta resultados |
| Exemplo: `Ler` | Exemplo: `Escrever` |
| Python: `input()` | Python: `print()` |

---

## 12. Operadores Aritméticos

Os **operadores aritméticos** permitem realizar operações matemáticas.

### Principais operadores em Python

| Operador | Operação | Exemplo |
|---|---|---|
| `+` | Adição | `5 + 2` |
| `-` | Subtração | `5 - 2` |
| `*` | Multiplicação | `5 * 2` |
| `/` | Divisão | `5 / 2` |
| `//` | Divisão inteira por piso | `5 // 2` |
| `%` | Resto da divisão | `5 % 2` |
| `**` | Potenciação | `5 ** 2` |

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

### Resultados

```text
13
7
30
3.3333333333333335
3
1
1000
```

### Divisão inteira

O operador `//` realiza divisão com arredondamento para baixo.

**Exemplo:**

```python
print(7 // 2)
```

**Saída:**

```text
3
```

Para números negativos, o resultado também é arredondado para baixo:

```python
print(-7 // 2)
```

**Saída:**

```text
-4
```

### Resto da divisão

O operador `%` é utilizado para obter o resto da divisão.

**Exemplo:**

```python
print(10 % 3)
```

**Saída:**

```text
1
```

Esse operador é frequentemente utilizado para verificar se um número é par ou ímpar.

```python
numero = 8

print(numero % 2 == 0)
```

**Saída:**

```text
True
```

---

## 13. Operadores Relacionais

Os **operadores relacionais** permitem comparar valores.

O resultado normalmente é um valor lógico.

| Operador | Significado |
|---|---|
| `==` | Igual |
| `!=` | Diferente |
| `>` | Maior |
| `<` | Menor |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

### Exemplo

```python
a = 10
b = 5

print(a > b)
print(a < b)
print(a == b)
print(a != b)
```

**Saída:**

```text
True
False
False
True
```

Esses operadores são utilizados principalmente em estruturas condicionais.

---

## 14. Operadores Lógicos

Os **operadores lógicos** permitem combinar ou negar condições.

Em Python, os principais são:

- `and`
- `or`
- `not`

### Operador AND

O operador `and` produz verdadeiro quando ambas as condições são verdadeiras, considerando operandos booleanos.

```python
idade = 20
possui_documento = True

print(idade >= 18 and possui_documento)
```

**Saída:**

```text
True
```

### Operador OR

O operador `or` produz verdadeiro quando pelo menos uma das condições é verdadeira.

```python
tem_desconto = False
possui_cupom = True

print(tem_desconto or possui_cupom)
```

**Saída:**

```text
True
```

### Operador NOT

O operador `not` inverte o valor lógico da condição.

```python
ativo = True

print(not ativo)
```

**Saída:**

```text
False
```

### Tabela-verdade

| A | B | A AND B | A OR B |
|---|---|---|---|
| Verdadeiro | Verdadeiro | Verdadeiro | Verdadeiro |
| Verdadeiro | Falso | Falso | Verdadeiro |
| Falso | Verdadeiro | Falso | Verdadeiro |
| Falso | Falso | Falso | Falso |

Para valores booleanos, `not` apresenta o resultado inverso.

---

## 15. Expressões e Precedência de Operadores

### O que é uma expressão?

Uma **expressão** é uma combinação de valores, variáveis e operadores que produz um resultado.

Pode ser:

- Aritmética.
- Relacional.
- Lógica.

### Expressão aritmética

```python
resultado = 10 + 5 * 2

print(resultado)
```

**Saída:**

```text
20
```

A multiplicação possui precedência sobre a adição.

### Utilização de parênteses

```python
resultado = (10 + 5) * 2

print(resultado)
```

**Saída:**

```text
30
```

Os parênteses permitem modificar a ordem de avaliação.

### Ordem simplificada de precedência

| Prioridade | Operadores |
|---|---|
| 1 | Parênteses |
| 2 | Potenciação `**` |
| 3 | Operadores unários, conforme as regras da linguagem |
| 4 | Multiplicação, divisão e resto |
| 5 | Adição e subtração |
| 6 | Comparações |
| 7 | `not` |
| 8 | `and` |
| 9 | `or` |

A tabela apresenta uma visão introdutória. A precedência completa depende da linguagem.

---

## 16. Conversão de Tipos de Dados

### O que é conversão de tipos?

A **conversão de tipos** consiste em transformar um valor de determinado tipo noutro tipo compatível.

É importante quando os dados precisam de ser utilizados em operações diferentes.

### Conversão para inteiro

```python
numero = int("10")

print(numero)
```

### Conversão para real

```python
numero = float("10.5")

print(numero)
```

### Conversão para string

```python
idade = 20

texto = str(idade)

print(texto)
```

### Conversão para booleano

```python
print(bool(1))
print(bool(0))
```

**Saída:**

```text
True
False
```

### Comparação

| Função | Finalidade |
|---|---|
| `int()` | Converter para inteiro |
| `float()` | Converter para ponto flutuante |
| `str()` | Converter para string |
| `bool()` | Converter para booleano |

**Importante:** nem toda conversão é possível. Por exemplo, tentar converter `"abc"` diretamente para inteiro com `int()` provoca um erro.

---

## 17. Exemplo Integrado

Imagine um algoritmo que recebe duas notas e calcula a média de um aluno.

### Pseudocódigo

```text
Início

    nota1: real
    nota2: real
    media: real

    Ler nota1
    Ler nota2

    media <- (nota1 + nota2) / 2

    Escrever media

Fim
```

### Implementação em Python

```python
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))

media = (nota1 + nota2) / 2

print(f"Média: {media:.2f}")
```

### Funcionamento

1. O programa solicita a primeira nota.
2. Solicita a segunda nota.
3. Converte os valores para `float`.
4. Calcula a média.
5. Apresenta o resultado com duas casas decimais.

### Entrada, Processamento e Saída

```text
       ENTRADA
     Nota 1 e Nota 2
           |
           v
      PROCESSAMENTO
   Média = (N1 + N2) / 2
           |
           v
          SAÍDA
      Média calculada
```

Esse exemplo utiliza tipos de dados, variáveis, instruções de entrada e saída, operadores e atribuição.

---

## Resumo

Os **tipos de dados** permitem classificar os valores utilizados pelos algoritmos, como números inteiros, reais, textos e valores lógicos.

As **variáveis** permitem armazenar ou referenciar informações que podem mudar durante a execução, enquanto as **constantes** representam valores que devem permanecer fixos.

As **instruções primitivas** incluem operações fundamentais como atribuição, entrada, saída e processamento de expressões.

Os **operadores aritméticos, relacionais e lógicos** permitem realizar cálculos, comparar valores e construir condições.

A **conversão de tipos** permite transformar dados para que sejam utilizados corretamente nas operações.

**Em síntese:** compreender os tipos de dados e as instruções primitivas é essencial para construir algoritmos capazes de receber informações, processá-las e apresentar resultados corretamente.

---

## Referências para Estudo

- [Python — Tipos de Dados](https://docs.python.org/3/library/stdtypes.html)
- [Python — Funções Integradas](https://docs.python.org/3/library/functions.html)
- [Python — Expressões e Operadores](https://docs.python.org/3/reference/expressions.html)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — Gramática e Tipos em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
