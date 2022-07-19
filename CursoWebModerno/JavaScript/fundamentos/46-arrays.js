//Em JS o array é heterogeneo e não possui tamanho fixo, very diferente from Java
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // ao chamar um indice inexistente do array obtemos undefined

valores[4] = 43
valores[10] = 'X' //voce pode inserir itens em indices que não existiam antes.
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') //insere dados no fim de um array
console.log(valores)

console.log(valores.pop()) //este método apaga o ultimo item do array
delete valores[0] //deleta um item num indice expecífico
console.log(valores)

console.log(typeof valores)

/*
push
pop
delete
typeof
*/