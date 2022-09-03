
function verificar() {
    var anoNascimento = document.querySelector('#anoNascimento')
    var radioMasc = document.querySelector('input[type="radio"][value="Masculino"]').checked
    var radioFem = document.querySelector('input[type="radio"][value="Feminino"]').checked
    var frase = document.querySelector('#frase')
    var foto = document.querySelector('#fotoIdade')
    var idade = anoNascimento.value
    var imagem, textoIdade
    var sexo = radioMasc ? 'Homem' : 'Mulher'

    if (!validarAno(idade) || !validarSexo(radioMasc, radioFem)) {
        alert('Preencha os dados corretamente')
    } else {
        anosIdade = calcularIdade(idade)
        frase.innerHTML = `Detectamos ${sexo} com ${anosIdade} anos`
        foto.src = `${escolherFoto(anosIdade, sexo)}.png`
    }

   
}

function validarAno(ano){
    if (ano == undefined) {
        return false
    } else if (ano < 1922 || ano > 2022) {
        return false
    } else {
        return true
    }
}

function validarSexo (homem, mulher) {
    if (homem || mulher) {
        return true
    } else {
        return false
    }
}

function calcularIdade(idade) {
    var data = new Date()
    var ano = data.getFullYear()
    return ano - idade
}

function escolherFoto(idade, sexo) {
    var genero = sexo == 'Homem' ? 'Boy' : 'Girl'
    var foto
    if (idade < 2) {
        foto = 'baby'
    } else if (idade < 12) {
        foto = 'child'
    } else if (idade < 18) {
        foto = 'teen'
    } else if (idade < 55) {
        foto = 'adult'
    } else {
        foto = 'old'
    }

    return `${foto}${genero}`
}