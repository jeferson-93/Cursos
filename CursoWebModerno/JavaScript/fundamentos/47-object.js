// um objeto é um conjunto de itens chave-valor
// o objeto também comporta outros objetos e funções
// seus atributos podem ser criados de forma literal ou de forma dinamica, como feito no prod1

const prod1 = {}
prod1.nome = "Celular"
prod1.preco = 150.00
prod1['Desconto maximo'] = 90 //É possível criar o nome de um item do objeto com espaços, no entanto não é aconselhável.

console.log(prod1)

const prod2 = {
    nome: "Batedeira",
    preco: 89,
    descricaoTecnica: {
        potencia: '254kw',
        voltagem: 220
    }
}

console.log(prod2)

// Um objeto não é o mesmo que um Json, segue exemplo abaixo:
'{"nome": "jeferosn", "altura": 1.75}'