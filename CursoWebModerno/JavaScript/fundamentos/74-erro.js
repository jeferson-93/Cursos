function tratarErro(erro){
    // throw new Error('Deu ruim...')
    // throw 10
    // throw ('Assim também pode')
    // throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }

    //Podemos fazer todas estas tratativas
}
function colocarFraseEmCaps(pessoa) {
    try {
        console.log(pessoa.nome.toUpperCase().concat('!!!!'))
    } catch (error) {
        tratarErro(error)
    } finally {
        console.log('Final')
    }
}


const pessoa = {
    name: 'Rodrigo',
    idade: 89
}

colocarFraseEmCaps(pessoa)

// try
// catch
// finally
// throw