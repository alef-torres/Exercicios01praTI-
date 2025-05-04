// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//   10) utilizando um loop for.

const prompt = require('prompt-sync')();

let numeroMultiplicador = Number(prompt("Digite o numero multiplicador para formar a tabuada: "))

for (let i = 1; i < 11; i++) {
  console.log(`${i} x ${numeroMultiplicador} = ${i * numeroMultiplicador}`)
}