// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let numero01 = Number(prompt("Digite o 1° valor: "));
let numero02 = Number(prompt("Digite o 2° valor: "));

if (numero01 > numero02) {
  console.log(`O número ${numero01} é maior que ${numero02}`)
} else {
  console.log(`O número ${numero02} é maior que ${numero01}`)
}