// uma atribuição por referencia irá apontar para o mesmo endereço, enquanto uma atribuição por valor não.
const a = {}
const b = a // atribuição por referência
const c = 7
const d = c // atribuição por valor

// Null é diferente de Undefined
// Undefined seria uma váriavel não inicializada enquanto Null é um objeto sem referência.
let valor
console.log(valor)

valor = null
// console.log(valor.toString())  // Erro por acessar uma função de uma variável null

const produto = {}
console.log(produto)
console.log(produto.nome)

produto.nome = 'Sorvete'
console.log(produto.nome)

produto.nome = undefined
console.log(!!produto.nome)

produto.nome = null
console.log(produto.nome.a) // erro por acessar um atributo inexistente de um atributo null
