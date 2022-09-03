let dobro = function (a) {
    return 2 + a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //arrow function de 1 linha o retorno é implicito

console.log(dobro(Math.PI ))


let saudacao = () => 'Olá' //arrow function sem parametro
saudacao = _ => 'Olá' // o _ significa que há um parametro, pode ser escrito desta forma e na hora de chamar a função não ser passado nenhum parametro, o que é aceitável em JS

console.log(saudacao())

//Arrow function são funções que executam pequenos trechos de código, no entanto nada empede de que seja um grande bloco caso queira.