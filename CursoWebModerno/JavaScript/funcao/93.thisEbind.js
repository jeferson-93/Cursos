const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        console.log(this.saudacao) //O this é necessário neste contexto.
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //O this aqui perderá a referencia pois estará fora do contexto pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) //Agora o this será resolvido para pessoa, pois o bind é o método responsável para vincular o this a um objeto.
falarDePessoa()

/*
O que é e para que serve o BIND?
é um método nativo de funções que serve para vincular o this a um objeto, assim, toda vez que você usar esta função
e se ela possuir um this no seu código, ele apontará para o objeto que vinculamos no BIND.
*/ 