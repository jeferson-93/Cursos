// ARMAZENAR UMA FUNÇÃO NUMA VARIÁVEL   

const soma = function imprimirSoma(a, b) {
    return a + b
}

console.log(soma(1, 3))

// Armazenando uma funcao arrow em uma variavel
const subtrair = (a, b) => {
    return a - b
}

console.log(subtrair(4, 7))

// retorno implicito, apenas quando o bloco possuir somente 1 linha
const adicao = (a, b) => a + b

console.log(adicao(2, 7))