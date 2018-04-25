const velocidadeLaser = 5;
let imagemLaser;
let lasers = new Array();

function atualizarLasers() {
    for (let i = lasers.length - 1; i >= 0; i--) {
        lasers[i].y += velocidadeLaser;
    }
}

function desenharLasers() {
    for (let laser of lasers) {
        image(imagemLaser, laser.x, laser.y);
    }
}

function verificarColisoesLasers() {
    for (let i = lasers.length - 1; i >= 0; i--) {
        if (colidiu(lasers[i], 10, 30, posicaoNave, 100, 100)) {
            cenaAtual = cenas.gameOver;
        }
    }
}