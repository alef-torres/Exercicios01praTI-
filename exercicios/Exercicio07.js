// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let numeroDeMacasCompradas = Number(prompt("Digite a quantidade de maças que você quer comprar: "));

if (numeroDeMacasCompradas < 12) {
  let valorTotalAPagar = numeroDeMacasCompradas * 0.3;
  console.log(`O valor total da compra é de ${valorTotalAPagar}`)
}
if (numeroDeMacasCompradas > 12) {
  let valorTotalAPagar = numeroDeMacasCompradas * 0.25;
  console.log(`O valor total da compra é de ${valorTotalAPagar}`)
}




