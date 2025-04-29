// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

let peso = prompt("Digite o seu peso: ");
let altura = prompt("Digite a sua altura: ");
let IMC = peso / (altura * altura);

if (IMC < 18.4) {
  console.log(`Seu IMC é ${IMC.toFixed(2)} e você está com baixo peso`)
} else if (IMC > 18.5 && IMC < 24.5) {
  console.log(`Seu IMC é ${IMC.toFixed(2)} e você está com peso normal`)
} else if (IMC > 25 && IMC < 29) {
  console.log(`Seu IMC é ${IMC.toFixed(2)} e você está com sobrepeso`)
} else {
  console.log(`Seu IMC é ${IMC.toFixed(2)} e você está com obesidade`)
}
