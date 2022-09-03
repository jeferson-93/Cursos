let colecaoNumeros = []

function adicionar() {
    let num = document.getElementById('txtNumber')
    let slect = document.getElementById('valoresAdd')

    if (num.value.length == 0 || valorExistente(num.value, colecaoNumeros)) {
        window.alert('Valor invalido ou já encontrado na lista')
    } else if (Number(num.value) < 1 || Number(num.value) > 100 )  {
        window.alert('Só são aceitos números entre 1 e 100')
    } else {
        let opt = document.createElement('option')
        opt.innerHTML = `Valor ${num.value} adicionado.`
        slect.appendChild(opt)
        colecaoNumeros.push(Number(num.value))
    }

}

function valorExistente(valor, umArray) {
    for (let i in umArray) {
        if (valor == umArray[i]) {
            return true
        }
    }
    return false
}

function finalizar() {

    if (colecaoNumeros.length < 1) {
        window.alert('Adicione ao menos um valor antes de finalizar')
    } else {

        let fim = document.querySelector('#itensFinalizados')

        let tamanhoArray = colecaoNumeros.length
        let menorValor, maiorValor, media, soma = 0

        console.log(colecaoNumeros)
        colecaoNumeros.sort(Number)
        console.log(colecaoNumeros)

        maiorValor = colecaoNumeros[tamanhoArray - 1]
        menorValor = colecaoNumeros[0]

        for (let posicao in colecaoNumeros) {
            soma += colecaoNumeros[posicao]
        }


        media = soma / tamanhoArray

        fim.innerHTML = ""

        let tamanho = document.createElement('p')
        tamanho.innerHTML = `Ao todo, temos ${tamanhoArray} números cadastrados. <br>`
        fim.appendChild(tamanho)

        let maior = document.createElement('p')
        maior.innerHTML = `O maior valor informado foi ${maiorValor}. <br>`
        fim.appendChild(maior)

        let menor = document.createElement('p')
        menor.innerHTML = `O menor valor informado foi ${menorValor}. <br>`
        fim.appendChild(menor)

        let somados = document.createElement('p')
        somados.innerHTML = `Somando todos os valores, temos ${soma} <br>`
        fim.appendChild(somados)

        let mediaValor = document.createElement('p')
        mediaValor.innerHTML = `A média dos valores digitados é ${media}`
        fim.appendChild(mediaValor)
    }
}




