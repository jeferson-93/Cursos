let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} 

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Número ${num.value} add`
        lista.appendChild(opt)
        res.innerHTML = ''
    } else {
        window.alert('valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
    res.innerHTML += `A média dos valores digitados é ${media}.</p>`
}