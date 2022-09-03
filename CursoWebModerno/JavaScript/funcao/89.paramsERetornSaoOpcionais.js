function area (altura, largura) {
    let area = altura * largura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2,2)) // Tudo OK aqui
console.log(area(2)) // retorna NaN
console.log(area()) // retorna NaN
console.log(area(2, 3, 44, 17)) // ignora a partir do 2 parametro
console.log(area(5,5)) // exibe a mensagem e retorn undefined

// Por padrão se a função não tiver retorno e ela for invocada para obtenção de retorno o padrão é undefined

function aleatoria() {}
let minhaVariavel = aleatoria()
console.log('aqui temos o que a function retornou ', minhaVariavel)