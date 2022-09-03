//Ponto importante deste exemplo, o uso do Arguments (ele é um array nativo da function que salva os paramentros que a função recebeu)

function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3, 4))
console.log(soma(1, 'teste'))
