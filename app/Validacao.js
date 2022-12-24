function VerificarChuteValido(chute) {
    const numero = +chute

    if (chuteInválido(numero)) {
        elemChute.innerHTML += '<div>Valor Inválido</div>';
        document.querySelector('.box').classList.add('chuteInvalido')

        return
    }
    if (verificaRange(numero)) {
        document.querySelector('.box').classList.add('chuteInvalido')
        elemChute.innerHTML += `<div>Número fora do range definido.<br><br>${menorValor} < Seu Chute < ${maiorValor}<div>`

        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1 class="hint-text">Você acertou!<br>
        O número secreto era: <br><br>${numeroSecreto}</h1>
        <button id="jogar-novamente" class="btn-jogar" href="#">Jogar Novamente!</button>  
        `
    }
    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
            document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }
    else if (numero > numeroSecreto) {
        elemChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>
        `
    } else {
        elemChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>
        `
    }

}

function verificaRange(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInválido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})