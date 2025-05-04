// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let entrada;
let acumulador = 0;
let contador = 0;
let media = 0;

while (true) {
  entrada = Number(prompt("Digite o numero decimal: "));
  if (entrada == 0) {
    media = acumulador / contador;
    console.log(`A media dos numero é igual a ${media}`)
    break;
  }
  acumulador += entrada;
  contador++;
}