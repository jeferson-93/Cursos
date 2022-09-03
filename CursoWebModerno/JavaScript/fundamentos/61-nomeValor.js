// par nome/valor
const saudacao = 'Olá' // contexto lexico 1

function exec(){
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}


// Objetos são grupos aninhados de nome/valor
const outraSaudacao = {
    saudacao: 'Olá 2', // contexto lexico 3
    despedida: 'tchau',
    endereco: {
        rua: 'caio ribeiro',
        numero: '157'
    }
}


console.log(saudacao)
console.log(exec())
console.log(outraSaudacao)