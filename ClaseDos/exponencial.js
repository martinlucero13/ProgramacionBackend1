//Como funciona el operador exponencial

const precio = 1000;
const tasInteres = 1.05 //5%
const cuotas = 12;

const totalPagar = precio * tasInteres ** cuotas; // con ** estoy haciendo el operador exponencial

console.log(totalPagar.toFixed(2))//toFixexed(2) dice que voy a dejar dos numero despues de la coma

