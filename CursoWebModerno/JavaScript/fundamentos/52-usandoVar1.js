{
    {
        {
            { 
                var texto = 'Legal'
            }

        }   
    }
}
console.log(texto)

function escrever() {
    var local = 'Bacana'
    console.log(local)
}

escrever()
console.log(local)

// Uma variável VAR vai estar visivel mesmo fora do escopo, só não se for uma function
// Uma VAR se não for criada no contexto de uma function, ela estará disponível para o Window do Browser, ou seja, pode ser acessada de qualquer lugar.