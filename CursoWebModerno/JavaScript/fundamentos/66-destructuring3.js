//usando o destrcturing de objeto como parametro de uma função
function rand({ min = 0, max = 1000 }){ //já settando o valor padrão caso não informado.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40} //criando um objeto
console.log(rand(obj))
console.log(rand({ min: 995 }))
console.log(rand({}))
console.log(rand())