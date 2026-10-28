
# Orientação a Objetos em JavaScript

---

## 1. Conceitos de Orientação a Objetos

### O que é Programação Orientada a Objetos

A **Programação Orientada a Objetos (POO)**, ou **Object-Oriented Programming (OOP)**, é um paradigma de programação que organiza o software em torno de objetos que possuem dados e comportamentos.

Um **objeto** pode representar uma entidade do mundo real ou um conceito do sistema, como:

- Um utilizador.
- Um produto.
- Uma conta bancária.
- Um veículo.
- Um pedido.
- Uma reserva.

Cada objeto pode possuir:

- **Atributos (Attributes):** representam características ou dados.
- **Métodos (Methods):** representam comportamentos ou ações.

### Exemplo — Objeto de um carro

```text
                 CARRO
                   |
          +--------+--------+
          |                 |
          v                 v
       ATRIBUTOS          MÉTODOS
          |                 |
      - marca           - acelerar()
      - modelo          - travar()
      - velocidade      - ligar()
      - cor             - desligar()
```

Em JavaScript:

```js
const carro = {
    marca: "Ford",
    modelo: "Focus",
    velocidade: 0,

    acelerar() {
        this.velocidade += 10;
    }
};

carro.acelerar();

console.log(carro.velocidade); // 10
```

A palavra-chave `this` permite aceder às propriedades do objeto no contexto da chamada do método.

### Os quatro pilares da POO

A programação orientada a objetos é frequentemente apresentada através de quatro princípios fundamentais:

1. **Encapsulamento (Encapsulation):** controlar o acesso ao estado interno dos objetos.
2. **Herança (Inheritance):** reutilizar e especializar comportamentos existentes.
3. **Abstração (Abstraction):** representar apenas os aspetos relevantes de uma entidade.
4. **Polimorfismo (Polymorphism):** permitir diferentes implementações de uma mesma operação.

### Vantagens da Orientação a Objetos

- Organização do código.
- Reutilização de funcionalidades.
- Melhor separação de responsabilidades.
- Facilidade de manutenção.
- Modelagem de entidades complexas.
- Maior capacidade de expansão dos sistemas.

A POO não é obrigatória em todos os programas. JavaScript também suporta programação funcional e outros estilos de programação.

---

## 2. Definição de Classes e Objetos

### O que é uma Classe

Uma **classe (Class)** é uma estrutura utilizada para definir como determinados objetos serão criados e quais comportamentos irão disponibilizar.

Podemos considerar uma classe como um modelo para construir objetos.

### Classe vs. Objeto

| Classe | Objeto |
|---|---|
| Define uma estrutura | Representa uma instância |
| Descreve atributos e métodos | Contém os valores da instância |
| Utiliza `class` | Geralmente é criado com `new` |
| Exemplo: `Pessoa` | Exemplo: uma pessoa específica |

### Criando uma classe

```js
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}
```

Neste exemplo:

- `class Pessoa` declara a classe.
- `constructor()` inicializa o objeto.
- `this.nome` e `this.idade` armazenam propriedades da instância.
- `apresentar()` define um método.

### Criando objetos com `new`

A palavra-chave **`new`** permite criar uma instância da classe.

```js
const pessoa1 = new Pessoa("Dani", 25);
const pessoa2 = new Pessoa("Maria", 30);

console.log(pessoa1.apresentar());
// Olá, sou Dani e tenho 25 anos.

console.log(pessoa2.apresentar());
// Olá, sou Maria e tenho 30 anos.
```

Cada objeto possui os seus próprios valores de `nome` e `idade`.

### O método `constructor()`

O **construtor (Constructor)** é executado durante a criação de uma instância com `new`.

É utilizado principalmente para inicializar propriedades.

```js
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirProduto() {
        return `${this.nome}: R$ ${this.preco}`;
    }
}

const produto = new Produto("Notebook", 3500);

console.log(produto.exibirProduto());

// Notebook: R$ 3500
```

### A palavra-chave `this`

Em métodos tradicionais de uma classe, quando chamados através da instância, `this` refere-se ao objeto que recebe a chamada.

```js
class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

const conta = new Conta("Dani", 100);

conta.depositar(50);

console.log(conta.saldo); // 150
```

**Atenção:** em JavaScript, o valor de `this` depende da forma como um método é chamado. Se o método for separado do objeto, pode perder essa referência.

### Métodos estáticos — `static`

Os **métodos estáticos (Static Methods)** pertencem à classe e são chamados diretamente através dela.

```js
class Calculadora {
    static somar(a, b) {
        return a + b;
    }
}

console.log(Calculadora.somar(10, 5)); // 15
```

Não precisamos criar um objeto `Calculadora` para executar o método estático.

### Exemplo prático — Classe Aluno

```js
class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }

        const soma = this.notas.reduce(
            (total, nota) => total + nota, 0
        );

        return soma / this.notas.length;
    }

    verificarSituacao() {
        return this.calcularMedia() >= 7
            ? "Aprovado"
            : "Reprovado";
    }
}

const aluno = new Aluno("Dani", [8, 7, 9]);

console.log(aluno.calcularMedia());    // 8
console.log(aluno.verificarSituacao()); // Aprovado
```

Este exemplo combina POO com arrays, funções e operadores estudados nos módulos anteriores.

---

## 3. Herança e Encapsulamento

### O que é Herança

A **herança (Inheritance)** permite criar uma classe baseada em outra, reutilizando ou especializando propriedades e comportamentos.

A classe que serve de base é frequentemente chamada de **superclasse (Superclass)**.

A classe que herda é chamada de **subclasse (Subclass)**.

Em JavaScript, utilizamos a palavra-chave `extends`.

### Exemplo de Herança

```js
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        return "Som de animal";
    }
}

class Cachorro extends Animal {
    latir() {
        return "Au au!";
    }
}

const cachorro = new Cachorro("Rex");

console.log(cachorro.nome);       // Rex
console.log(cachorro.emitirSom()); // Som de animal
console.log(cachorro.latir());     // Au au!
```

A classe `Cachorro` herda os comportamentos definidos na classe `Animal`.

### Representação da Herança

```text
              ANIMAL
                |
       +--------+--------+
       |                 |
       v                 v
   CACHORRO            GATO
       |                 |
       v                 v
    latir()            miar()
```

As subclasses podem possuir comportamentos próprios e reutilizar os comportamentos herdados.

### Utilizando `super()`

A palavra-chave **`super`** permite aceder ao construtor ou aos métodos da classe base.

```js
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        return `Olá, sou ${this.nome}.`;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cargo) {
        super(nome);
        this.cargo = cargo;
    }

    apresentar() {
        return `${super.apresentar()} Trabalho como ${this.cargo}.`;
    }
}

const funcionario = new Funcionario("Dani", "Desenvolvedora");

console.log(funcionario.apresentar());

// Olá, sou Dani. Trabalho como Desenvolvedora.
```

Em construtores de subclasses, é necessário chamar `super()` antes de utilizar `this`.

### O que é Encapsulamento

O **encapsulamento (Encapsulation)** consiste em reunir dados e comportamentos numa estrutura e controlar como o estado interno pode ser acedido ou modificado.

O objetivo é proteger determinadas informações e evitar alterações inadequadas.

Em JavaScript moderno, podemos criar campos privados utilizando `#`.

### Campos privados

```js
class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    consultarSaldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }
}

const conta = new ContaBancaria(100);

conta.depositar(50);

console.log(conta.consultarSaldo()); // 150
```

O campo `#saldo` não pode ser acedido diretamente fora da classe.

```js
// console.log(conta.#saldo);
// SyntaxError
```

### Getters e Setters

Os **getters** e **setters** permitem definir regras para a leitura e alteração de propriedades.

```js
class Produto {
    #preco;

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    get preco() {
        return this.#preco;
    }

    set preco(valor) {
        if (typeof valor !== "number" || !Number.isFinite(valor) || valor < 0) {
            throw new Error("O preço deve ser um número válido e não negativo.");
        }

        this.#preco = valor;
    }
}

const produto = new Produto("Mouse", 80);

console.log(produto.preco); // 80

produto.preco = 100;

console.log(produto.preco); // 100
```

Embora sejam definidos como métodos especiais, getters e setters são utilizados através da sintaxe de propriedades.

### Herança vs. Encapsulamento

| Herança | Encapsulamento |
|---|---|
| Reutiliza e especializa comportamentos | Controla o acesso aos dados |
| Utiliza `extends` | Pode utilizar campos privados `#` |
| Estabelece relações entre classes | Protege o estado interno |
| Exemplo: `Funcionario extends Pessoa` | Exemplo: `#saldo` |

---

## 4. Abstração e Polimorfismo

### O que é Abstração

A **abstração (Abstraction)** consiste em representar os aspetos essenciais de uma entidade, escondendo detalhes que não precisam de ser conhecidos por quem utiliza a funcionalidade.

O objetivo é reduzir a complexidade.

**Exemplo:**

Quando utilizamos um método para realizar um pagamento, não precisamos necessariamente conhecer todos os detalhes internos do processamento.

```js
class Pagamento {
    processar(valor) {
        if (valor <= 0) {
            return "Valor inválido.";
        }

        return `Pagamento de R$ ${valor} processado.`;
    }
}

const pagamento = new Pagamento();

console.log(pagamento.processar(100));
```

O utilizador do método conhece a operação disponibilizada, mas não precisa de depender de todos os detalhes da implementação.

### Abstração com classes em JavaScript

JavaScript não possui uma palavra-chave nativa `abstract` para declarar classes abstratas.

Entretanto, podemos criar estruturas que representam uma interface comum e impedir determinadas utilizações através de verificações.

```js
class Forma {
    calcularArea() {
        throw new Error("O método calcularArea() deve ser implementado.");
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

const quadrado = new Quadrado(5);

console.log(quadrado.calcularArea()); // 25
```

Neste exemplo, a classe `Forma` estabelece uma operação que as subclasses podem implementar.

A restrição é definida por convenção e pelo código, não por um mecanismo nativo de classes abstratas.

### O que é Polimorfismo

O **polimorfismo (Polymorphism)** permite que diferentes objetos respondam à mesma operação de maneiras diferentes.

O nome significa, de forma simplificada, "muitas formas".

### Exemplo de Polimorfismo

```js
class Animal {
    emitirSom() {
        return "Som genérico";
    }
}

class Cachorro extends Animal {
    emitirSom() {
        return "Au au!";
    }
}

class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }
}

const animais = [
    new Cachorro(),
    new Gato()
];

for (const animal of animais) {
    console.log(animal.emitirSom());
}

// Au au!
// Miau!
```

Ambas as subclasses possuem o método `emitirSom()`, mas apresentam comportamentos diferentes.

Esse comportamento é conhecido como **sobrescrita de método (Method Overriding)**.

### Representação do Polimorfismo

```text
              emitirSom()
                  |
         +--------+--------+
         |                 |
         v                 v
      CACHORRO            GATO
         |                 |
         v                 v
       "Au au!"          "Miau!"
```

### Polimorfismo em aplicações reais

Considere uma aplicação que permite diferentes formas de pagamento.

```js
class PagamentoCartao {
    processar(valor) {
        return `Pagamento de R$ ${valor} realizado com cartão.`;
    }
}

class PagamentoPix {
    processar(valor) {
        return `Pagamento de R$ ${valor} realizado com Pix.`;
    }
}

function finalizarCompra(formaPagamento, valor) {
    return formaPagamento.processar(valor);
}

const cartao = new PagamentoCartao();
const pix = new PagamentoPix();

console.log(finalizarCompra(cartao, 100));
console.log(finalizarCompra(pix, 100));
```

A função `finalizarCompra()` utiliza o mesmo método, independentemente do tipo de pagamento.

Esse exemplo demonstra também uma característica importante de JavaScript: objetos podem ser utilizados de forma polimórfica quando apresentam os métodos esperados, mesmo sem existir uma relação de herança entre as classes.

### Os quatro pilares da POO — comparação

| Pilar | Objetivo | Exemplo |
|---|---|---|
| **Encapsulamento** | Controlar o acesso ao estado interno | Campo privado `#saldo` |
| **Herança** | Reutilizar e especializar comportamentos | `Cachorro extends Animal` |
| **Abstração** | Esconder complexidade e expor operações relevantes | Método `processar()` |
| **Polimorfismo** | Permitir diferentes implementações | `emitirSom()` em diferentes classes |

---

## 5. Exemplo Prático — Sistema de Funcionários

Vamos combinar os conceitos estudados num exemplo simples de gestão de funcionários.

```js
class Funcionario {
    #salario;

    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    get salario() {
        return this.#salario;
    }

    set salario(valor) {
        if (typeof valor !== "number" || !Number.isFinite(valor) || valor < 0) {
            throw new Error("Salário inválido.");
        }

        this.#salario = valor;
    }

    calcularBonus() {
        return this.#salario * 0.05;
    }

    apresentar() {
        return `Funcionário: ${this.nome}`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, linguagem) {
        super(nome, salario);
        this.linguagem = linguagem;
    }

    calcularBonus() {
        return this.salario * 0.10;
    }

    apresentar() {
        return `${super.apresentar()} | Linguagem: ${this.linguagem}`;
    }
}

class Designer extends Funcionario {
    calcularBonus() {
        return this.salario * 0.08;
    }
}

const funcionarios = [
    new Desenvolvedor("Dani", 4000, "JavaScript"),
    new Designer("Ana", 3500)
];

for (const funcionario of funcionarios) {
    console.log(funcionario.apresentar());
    console.log(`Bônus: R$ ${funcionario.calcularBonus()}`);
}
```

### Conceitos aplicados

**Classe e Objeto**

`Funcionario`, `Desenvolvedor` e `Designer` são classes.

Os elementos armazenados no array `funcionarios` são objetos.

**Herança**

`Desenvolvedor` e `Designer` herdam de `Funcionario`.

**Encapsulamento**

O campo `#salario` possui acesso privado e pode ser consultado ou alterado através de getters e setters.

**Abstração**

O código que utiliza os funcionários precisa apenas de conhecer os métodos disponibilizados.

**Polimorfismo**

Cada tipo de funcionário pode implementar a sua própria regra de cálculo do bônus através do método `calcularBonus()`.

---

## 6. Boas Práticas de Orientação a Objetos

### Utilizar nomes descritivos

As classes devem possuir nomes que representem claramente as entidades ou responsabilidades.

```js
class Usuario {}
class Produto {}
class Pedido {}
```

### Evitar classes com responsabilidades excessivas

Uma classe não deve concentrar funcionalidades sem relação entre si.

Por exemplo, uma classe `Usuario` não deveria ser responsável simultaneamente pela autenticação, envio de e-mails, gestão de pagamentos e geração de relatórios.

### Proteger o estado interno

Utilizar encapsulamento para impedir alterações inadequadas em propriedades importantes.

### Evitar herança desnecessária

A herança deve representar uma relação coerente entre entidades.

Em determinadas situações, a **composição** é uma alternativa melhor.

**Exemplo:**

Em vez de criar uma classe que herda de várias estruturas apenas para reutilizar funcionalidades, podemos utilizar objetos especializados como propriedades de outros objetos.

### Priorizar legibilidade

A utilização de classes não significa que o código será automaticamente melhor.

O objetivo da POO é organizar responsabilidades e facilitar a manutenção.

---

## Resumo em uma frase

> A Programação Orientada a Objetos em JavaScript é um paradigma que organiza o código através de classes e objetos, reunindo atributos e métodos e aplicando quatro princípios fundamentais: encapsulamento para controlar o acesso aos dados, herança para reutilizar comportamentos, abstração para simplificar a utilização de funcionalidades e polimorfismo para permitir diferentes implementações de uma mesma operação, contribuindo para a organização, reutilização e manutenção de sistemas.

---

## Conceitos relacionados para estudar a seguir

- **Prototype Chain** — compreender como JavaScript utiliza protótipos para partilhar propriedades e métodos entre objetos.

- **Herança Prototípica** — estudar o funcionamento da herança em JavaScript para além da sintaxe `class`.

- **Composição vs. Herança** — compreender quando utilizar objetos compostos em vez de hierarquias de classes.

- **Getters e Setters** — aprofundar o controlo sobre leitura e alteração de propriedades.

- **Métodos Estáticos** — utilizar `static` para definir operações pertencentes à classe.

- **Princípios SOLID** — conhecer boas práticas para organizar classes, interfaces e responsabilidades.

- **Design Patterns** — estudar padrões de projeto como Factory, Singleton, Strategy e Observer.

- **TypeScript e Interfaces** — compreender como TypeScript acrescenta tipagem estática e contratos estruturais ao desenvolvimento orientado a objetos.

- **POO no Desenvolvimento Backend** — aplicar classes e objetos em aplicações Node.js, Express e NestJS.
