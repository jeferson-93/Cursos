// Só por curiosidade, não suar hoisting,
// içamento das variaveis criadas com o var para o início do bloco.

// hoisting só funciona com VAR
console.log(a)
var a = 2 // a criação da váriavel vai para o topo do bloco, mas a atribuição só ocorre nesta linha msm
console.log(a)

// Hoisting não funciona com LET
console.log(b)
let b = 3
console.log(b)