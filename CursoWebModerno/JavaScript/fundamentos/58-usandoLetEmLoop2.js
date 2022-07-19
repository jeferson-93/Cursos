const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push( function() {
        console.log(i)
    }) 
}

funcs[2]()
funcs[3]()

//Vemos que com o uso de let o valor de i é gravado em cada iteração e não considera as atualizações posteriores.