const prompt = require("prompt-sync")({ sigint: true });

function somaNumerosPositivosRetornaSomatorio (numeroInteiro) {

let resultadoSomatorio = 0;
   for(let i = 1; i < numeroInteiro; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            resultadoSomatorio += i
        }
   }
    return resultadoSomatorio;
}

const numeroInteiro = prompt("Informe um número inteiro: ")

console.log("O somatório dos números é: ", somaNumerosPositivosRetornaSomatorio(numeroInteiro))