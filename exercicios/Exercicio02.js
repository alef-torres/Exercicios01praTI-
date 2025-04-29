// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//   adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//   controle if-else

const prompt = require('prompt-sync')();

while (true) {

  let idadeDaPessoa = Number(prompt("Digite a idade da pessoa para saber se ela é adolecente, adulto ou idoso: "))

  if (idadeDaPessoa < 12 && idadeDaPessoa >= 0) {
    console.log("Essa pessoa é criança.");
    break;
  } else if (idadeDaPessoa >= 12 && idadeDaPessoa <= 18) {
    console.log("Essa pessoa é adolecente.");
    break;
  } else if (idadeDaPessoa >= 18 && idadeDaPessoa <= 65) {
    console.log("Essa pessoa é adulta");
    break;
  } else if (idadeDaPessoa > 65) {
    console.log("Essa pessoa é idosa");
    break;
  } else {
    console.log("Entrada de dados erra ou idade negativa, tente novamente.")
  }
}