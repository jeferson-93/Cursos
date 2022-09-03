
function verificar() {
    var inicioCampo = window.document.querySelector('#inicio').value
    var fimCampo = window.document.querySelector('#fim').value
    var passoCampo = window.document.querySelector('#passo').value
    var numeros = window.document.querySelector('#numeros')
    // var contar = window.document.querySelector('#contar')

    let texto

    if (inicioCampo == "" || passoCampo == "" || fimCampo == "") {
        numeros.innerHTML = 'Valores inválidos'
    } else {
        var inicio = Number(inicioCampo)
        var passo = Number(passoCampo)
        var fim = Number(fimCampo)

        if (passo <= 0) {
            window.alert(`Passo ${passo} inválido, consideraremos o ${inicio} como passo`)
            texto = exibirNumeros(inicio, inicio, fim)
            numeros.innerHTML = texto
        } else {
            texto = exibirNumeros(inicio, passo, fim)
            numeros.innerHTML = texto
        }
    }

}


function exibirNumeros(inicio, passo, fim) {
    var numeroSomado = inicio
    var textoNumeros = ""

    if (inicio > fim) {
        while (numeroSomado > fim) {
            textoNumeros += `${numeroSomado} &#128073; `
            numeroSomado -= passo
        }
    } else {
        while (numeroSomado < fim) {
            textoNumeros += `${numeroSomado} &#128073; `
            numeroSomado += passo
        }
    }
    return textoNumeros + '&#128128;'
}

