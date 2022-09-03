function calcular() {
    let numero = document.querySelector('#numero')
    let tabuada = document.querySelector('#tabuada')

    let multiplicador = Number(numero.value)
    if (numero.value.length == 0) {
        window.alert('Digite algum número')
    } else {
    for (let i = 0; i <= 10; i++){
        tabuada.innerHTML += `<br>${multiplicador} * ${i} = ${multiplicador * i} `
    }}
}