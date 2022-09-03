let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)


for(let pos = 0; pos < num.length; pos++) {
    console.log(`(FOR) a posiçao ${pos} tem o valor ${num[pos]}`)
}


for (let pos in num) {
    console.log(`(FOR IN) a posiçao ${pos} tem o valor ${num[pos]}`)
}

// vetor é a mesma coisa que array, seria meio que a tradução

// num.push(7) adiciona elemento num vetor
// num.length informa o tamanho do array
// num.sort() ordena o array do menor para o maior