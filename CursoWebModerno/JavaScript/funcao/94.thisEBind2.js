// Aqui o this não irá apontar para o idade de pessoa pois está fora de contexto, e o resultado será NaN
function Pessoa(){
    this.idade = 0


    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000); //1000 milisegundos, este é o intervalo
}

new Pessoa


// Aqui a fim de the o this não varie é chamado o BIND ao fim da função
function Pessoa1(){
    this.idade = 0


    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000);
}

new Pessoa1


// Aqui é criada uma constante que recebe o valor de this, assim ele não irá variar.
function Pessoa2(){
    this.idade = 0

    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000); 
}

new Pessoa2