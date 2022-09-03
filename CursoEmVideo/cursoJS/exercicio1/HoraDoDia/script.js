
function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#foto')
    var data = new Date();
    var hora = data.getHours()
    hora = 1
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora <= 12) {
        img.src =  "dia.png"
        document.body.style.background = '#667c93'
    } else if (hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#cb6213'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#1d2d34'
    }
}
