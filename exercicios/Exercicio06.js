// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

let ladoA = Number(prompt("Digite o lado A do triangulo: "));
let ladoB = Number(prompt("Digite o lado B do triangulo: "));
let ladoC = Number(prompt("Digite o lado C do triangulo: "));

if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
  console.log("Este triangulo é Isósceles.")
}

if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
  console.log("Este triangulo é Escaleno.")
}

if (ladoA == ladoB && ladoB == ladoC && ladoA == ladoC) {
  console.log("Este triangulo é Equilátero.")
}