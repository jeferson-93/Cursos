// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function divisao(dividendo, divisor) {
    console.log(`${dividendo} / ${divisor} = ${Math.floor(dividendo/divisor)} e o resto é ${dividendo%divisor}`)
}

divisao(8,3)