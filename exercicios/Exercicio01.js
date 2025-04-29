// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let numeroParaVerificar = Number(prompt('Digite o número para verificar se é par ou impar: '));

if (numeroParaVerificar % 2 == 0) {
  console.log("O número é par.")
} else {
  console.log("O número é impar")
}

