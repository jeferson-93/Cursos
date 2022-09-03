// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

const operacoesMatematicasBasicas = function(numero1, numero2) {
    console.log(`numeros escolhidos ${numero1} e ${numero2}`)
    console.log('soma:', numero1 + numero2)
    console.log('subtração', numero1 - numero2)
    console.log('multiplicação', numero1 * numero2)
    console.log('divisao', numero1 / numero2)
}

operacoesMatematicasBasicas(3, 2)
operacoesMatematicasBasicas(10, 7)
