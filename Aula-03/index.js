const Calculadora = require('./calculadora');

const n1 = 2;
const n2 = true;

var sum = Calculadora.soma(n1, n2);
var sub = Calculadora.sub(n1, n2);
var mult = Calculadora.mult(n1, n2);
var div = Calculadora.div(n1, n2);
var pow = Calculadora.pow(n1, n2);

console.log('Soma:', sum);
console.log('Subtracao:', sub);
console.log('Multiplicacao:', mult);
console.log('Divisao:', div);
console.log('Potenciacao:', pow);