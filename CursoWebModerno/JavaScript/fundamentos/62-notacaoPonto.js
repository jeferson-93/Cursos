
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Olá'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //O THIS torna public este atributo, de modo que ele pode ser invocado fora da function.
    this.exec = function(){
        console.log('Exec....')
    }
    let nome2 = ('gustavo')
}

const obj2 = new Obj('thiago')
const obj3 = new Obj('Jeff')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
console.log(obj2.nome2) // 'undefined' é exibido no console