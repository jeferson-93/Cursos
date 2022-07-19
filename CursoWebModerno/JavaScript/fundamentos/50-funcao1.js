// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) 
imprimirSoma(2) // o JS permite e exibe um NaN, pois a atributo não informado é predefinido como undefined
imprimirSoma()
imprimirSoma(3, 6, 7, 8) //é ignorado os valores adicionais não estipulados na assinatura da função

// Funão com retorno

function soma(a, b = 1){ //é possível determinar um valor padrão (b = 1)
    return a + b
}

console.log(soma(1))
console.log(soma(3, 4))
console.log(soma())