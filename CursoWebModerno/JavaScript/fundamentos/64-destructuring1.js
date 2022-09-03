// Novo recurso do ES2015
//operador destructuring (objeto)

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // tire de dentro do objeto os atributos nome e idade, objeto pessoa
console.log( nome, idade)

//por padrao o nome da variavel deve ser o mesmo do atributo do objeto, no entanto, podemos alterar o nome conforme exemplo abaixo
const {nome: n, idade: i} = pessoa
console.log(n, i)

//O que acontece se tentarmos extrair atributos inexistentes no objeto?
const {sobrenome, bemHumorada = true} = pessoa  // estamos atribuindo um valor padrão para o atributo bemHumorada
console.log(sobrenome, bemHumorada)

//exemplo de como estrair atributos de um objeto de um objeto
const { endereco : {logradouro, numero, cep}} = pessoa 
console.log(logradouro, numero, cep)

//aqui dará erro pois não existe o objeto conta com estes atributos dentro do objeto pessoa
const { conta: {ag, numeroConta}} = pessoa
console.log(ag, numeroConta)