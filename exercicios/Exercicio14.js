// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while

const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um numero inteiro positivo: "));
let fatorial = 1;

if (numero < 0) {
  console.log("Nao existe fatorial de numero negativo.");
} else {
  while (numero > 1) {
    fatorial *= numero;
    numero--;
  }
  console.log(`O fatorial do numero e: ${fatorial}`);
}
