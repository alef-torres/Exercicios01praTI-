// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let notaDeAnalise = Number(prompt('Digite a nota para que seja avaliada: '));

if (notaDeAnalise < 4) {
  console.log("Reprovado")
} else if (notaDeAnalise >= 5 && notaDeAnalise <= 7) {
  console.log("Recuperação")
} else if (notaDeAnalise > 8) {
  console.log("Aprovado")
}