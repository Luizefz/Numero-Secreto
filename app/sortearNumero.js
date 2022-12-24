const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumAleatorio()

function gerarNumAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("Num secreto é: ", numeroSecreto)

const elemMenorValor = document.getElementById('menor-valor');
elemMenorValor.innerHTML = menorValor

const elemMaiorValor = document.getElementById('maior-valor');
elemMaiorValor.innerHTML = maiorValor