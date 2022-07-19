const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push( function() {
        console.log(i)
    }) 
}

funcs[2]()
funcs[3]()

//Vemos que o Var não permite que seja salvo o valor de i de cada iteração, ao chamar as funções o valor de i será o valor da ultima iteração