const velocidadeMissil = 5;
let imagemMissil;

let posicoesMisseis = new Array();

function desenhaMisseis() {

    //para cada item da minha lista -> desenhar aquele ator
    for (let posicao of posicoesMisseis) {
        image(imagemMissil, posicao.x, posicao.y);
    }

}

function movimentaMisseis() {
    //para cada posicao dentro da lista de posições -> mover o míssil para cima
    for (let posicao of posicoesMisseis) {
        posicao.y = posicao.y - velocidadeMissil;
    }
}

function verificaColisaoMisseis() {
    //para cada missil dentro do jogo
    for (let posicao of posicoesMisseis) {
        //verficar a colisao com todos os aliens
        for (let i = 0; i < quantidadeAliens; i = i + 1) {
            let posicaoAlienDaLista = calcularPosicaoAlien(i);
            let numeroFantasia = aliens[i];
            if (alienEstaMorto(numeroFantasia) == false) {
                let imagemAlien = imagensAlien[numeroFantasia];
                if (colidiu(posicao,  imagemMissil.width,  imagemMissil.height, posicaoAlienDaLista, imagemAlien.width, imagemAlien.height)){
                    //o alien está morto
                    aliens[i] = -1;
                    pontuacao = pontuacao + 10;
                }
            }
        }
    }
}