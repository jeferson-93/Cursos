informarHoras()
setImagem()

function informarHoras() {
    var horario = window.document.querySelector('#horario')
    var agora = new Date()
    var hora = agora.getHours()
    horario.innerHTML = `Agora são ${hora} horas`
    return hora
}

function setImagem(){
    var hora =  13 
    var divImagem = window.document.querySelector('#imagem')
    var corpo = window.document.querySelector('body')
    var imagem, cor
    if (hora < 12) {
        imagem = 'dia.jpg'
        cor = 'yellow'
    } else if (hora < 18) {
        imagem = 'tarde.jpg'
        cor = 'orange'
    } else {
        imagem = 'noite.jpg'
        cor = 'darkblue'
    }
    divImagem.innerHTML = `<img src="${imagem}" width="200px" height="200px">`
    corpo.style.backgroundColor = `${cor}`
    
    document.querySelector('img').style.borderRadius = '50%'
}
