//Podemos perceber que o this não irá variar uma vez que a arrow function está dentro do contexto de Pessoa, então ele mantém o valor do this, como esperado.
function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000); //1000 milisegundos, este é o intervalo
}

new Pessoa