const quantidadeAliens = 5;
const chanceAtirar = 0.003;

let imagensAlien = new Array();
let aliens = new Array();
let deslocamentoAlien = 0;
let velocidadeAlien = 2;

function adicionarDisparosDosAliens() {
    for (let i = 0; i < aliens.length; i++) {
        if (alienEstaMorto(aliens[i])) {
            continue;
        }

        if (deveAtirar()) {
            let posicao = calcularPosicaoAlien(i);
            posicao.x += 50;
            posicao.y += 50;
            lasers.push(posicao);
        }
    }
}

function alienEstaMorto(fantasia) {
    return fantasia == -1;
}

function desenhaAlien() {
    for (let i = 0; i < quantidadeAliens; i = i + 1) {
        let numeroFantasia = aliens[i];
        //se o numero da fantasia for diferente(!=) de -1 
        if (alienEstaMorto(numeroFantasia) == false) {
            //desenha o alien
            let posicao = calcularPosicaoAlien(i);
            image(imagensAlien[numeroFantasia], posicao.x, posicao.y);
        }
    }
}

function deveAtirar() {
    return Math.random() < chanceAtirar;
}

function calcularPosicaoAlien(indiceAlien) {
    let posicao = createVector();
    posicao.x = indiceAlien * 100 + deslocamentoAlien;
    posicao.y = 150;
    return posicao;
}

function movimentarAlien() {
    deslocamentoAlien = deslocamentoAlien + velocidadeAlien;
    let posicaoUltimoAlien = calcularPosicaoAlien(quantidadeAliens - 1);
    let posicaoPrimeiroAlien = calcularPosicaoAlien(0);
    let imagemUltimoAlien = imagensAlien[0];
    if (posicaoUltimoAlien.x + imagemUltimoAlien.width > 900 || posicaoPrimeiroAlien.x < 0) {
        velocidadeAlien = velocidadeAlien * -1;
    }
}

function todoMundoMorto() {
    for (let alien of aliens) {
        if (!alienEstaMorto(alien)) {
            return false;
        }
    }
    return true;
}