// Função em JS é First-Class Object (Citizens)
// Higher-order function
// a função é tratada como dado, ou seja, pode ser passada como parametro, devolvida no return ou inserida numa variável

// criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {}
fun2()
// Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// armazenar como atributo de objeto
const obj = {
    falar: function() {return 'opa'}
    }
console.log(obj.falar())

// Passar função como parametro
function exe(fun) {
    fun()
}
exe(obj.falar)

// Uma função pode retornar / conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,4)(5)