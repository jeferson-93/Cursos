function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados de tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'childBoy.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'teenBoy.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultBoy.png')
            } else {
                img.setAttribute('src', 'oldBoy.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'childGirl.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'teenGirl.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultGirl.png')
            } else {
                img.setAttribute('src', 'oldGirl.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com calculada: ${idade} anos`
        res.appendChild(img)
    }
}