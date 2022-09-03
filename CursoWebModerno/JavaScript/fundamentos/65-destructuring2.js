// Operador Destructuring (Array)

const [a] = [10]
console.log(a)


const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //pega o primeiro ignora o segundo, pega o terceiro, ignora o quarto, e pega o quinto e o sexto
console.log(n1, n3, n5, n6)

