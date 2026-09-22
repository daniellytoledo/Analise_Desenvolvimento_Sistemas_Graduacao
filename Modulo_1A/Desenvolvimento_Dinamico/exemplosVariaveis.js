// exemplo de uso de var, let e const em JavaScript
const externo = "Olá! Eu sou uma constante global.";

// declaração de uma variável usando var
function exemploVar() {
    if (true) {
        var mensagem = "Olá! Eu sou uma var."
    }
    console.log(mensagem);
}

// chamando a função exemploVar
exemploVar();

// exemplo de erro e correção
var mensagem1 = "Olá, dani! Eu sou um escopo externo"
console.log(mensagem1);

// declaração de uma variável usando let
function exemploLet() {
    if (true) {
        let mensagem = "Olá! Eu sou um let."
        console.log(mensagem);
    }
}

// chamando a função exemploLet
exemploLet();

// exemplo de erro e correção (não pode possuir o mesmo nome de uma var externa, por isso precisa mudar a primeira var lá em cima para mensagem1)
let mensagem = "Olá! Eu sou um let externo";
console.log(mensagem);

// declaração de uma constante usando const
function exemploConstante() {
    const mensagem = "Olá! Eu sou uma constante";
    console.log(mensagem);
}

// chamando a função exemploConstante
exemploConstante();

// exemplo externo de const
console.log(externo);

// exemplo externo tentar alterar constante global (var constante tem valor fixo, não dá pra mudar, logo vai dar erro)
externo = "Nova mensagem do externo.";

// demonstrando um comentário explicativo de uma função
/**
 * Subtrai o segundo número do primeiro.
 * @param {number} a - O número do qual subtrair.
 * @param {number} b - O número a ser subtraído.
 * @return {number} o resultado da subtração.
 * @exemple
 * // exemplo de uso:
 * let resultado = subtrair(10, 4);
 * console.log(resultado); // 6
 */
function subtrair(a, b) {
    return a - b;
}

