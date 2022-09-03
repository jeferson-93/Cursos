const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// Apenas para informação, não utilizar break com rótulo
externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}


// break (FOR / WHILE / SWITCH)
//Continue (FOR / WHILE)
// Qual a diferença? o break sai do laço o continue pula para próxima repetição do laço