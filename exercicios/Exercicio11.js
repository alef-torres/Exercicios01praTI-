// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();
let total = 0;

for (let i = 0; i < 5; i++) {
  let numeroAtualLoop = Number(prompt("Digite o numero: "))
  total += numeroAtualLoop;
}
console.log(`A soma do total foi de ${total}`)