// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function isEquilatero(lado1, lado2, lado3) {
    if ((lado1 === lado2) && (lado2 === lado3)){
        return true
    }
    return false
}

function isEscaleno(lado1, lado2, lado3) {
    if ((lado1 !== lado2) && (lado2 !== lado3) && (lado1 !== lado3)){
        return true
    }
    return false
}



function tipoTriangulo(lado1, lado2, lado3) {
    if ()
    if (isEquilatero(lado1, lado2, lado3)) {
        console.log(lado1, lado2, lado3, 'Triango Equilatero')
    } else if (isIsoceles(lado1, lado2, lado3)) {
        console.log(lado1, lado2, lado3, 'Triango Isóceles')
    } else if (isEscaleno(lado1, lado2, lado3)) {
        console.log(lado1, lado2, lado3, 'Triango Escanelo')
    } else {
        console.log('tem algo estranho')
    }
}

tipoTriangulo(1, 2, 3)
tipoTriangulo(2,2,2)
tipoTriangulo(3,3,5)
tipoTriangulo(5,a,8)

function isIsoceles(lado1, lado2, lado3) {
    if ((lado1 === lado2) || (lado1 === lado3) || (lado3 === lado2)){
        return true
    }
    return false
}