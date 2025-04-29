// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

let seuNome = prompt("Digite o seu nome: ");
let comprimento = Number(prompt("Escolha qual saudação você quer usar 1, 2, 3: "));

switch (comprimento) {
  case 1:
    console.log(`Bom dia, meu nome é ${seuNome}`)
    break;
  case 2:
    console.log(`Boa tarde, meu nome é ${seuNome}`)
    break;
  case 3:
    console.log(`Boa noite, meu nome é ${seuNome}`)
    break;
  default:
    break;
}

