// Aqui temos que o this aponta para o global numa função, se for no contexto do browser o global é igual a window
let comparacomThis = function jeferson (param){
    console.log(`let comparacomThis = function(${param}){ this == param = ${this == param} }`)
}

comparacomThis(global)
comparacomThis(this)

const obj = {}
comparacomThis = comparacomThis.bind(obj)
comparacomThis(global)
comparacomThis(obj)


// Aqui temos que o this dentro de uma função arrow irá sempre apontar para o contexto lexico no qual ele foi criado, e mesmo o bind não pode mudar isso.
let comparacomThisArrow = param => console.log(`let comparacomThisArrow = ${param} => { this == param = ${this == param} }`)
comparacomThisArrow(global)
comparacomThisArrow(module.exports)

comparacomThisArrow = comparacomThisArrow.bind(obj)
comparacomThisArrow(obj)
comparacomThisArrow(module.exports)