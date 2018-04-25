let imagemNave;
let posicaoNave;
function atualizarNave(){
    //centralizando a posição da nave
    posicaoNave.x = mouseX - imagemNave.width / 2;
}

function desenharNave(){
    //desenhar a nave
    image(imagemNave, posicaoNave.x, posicaoNave.y);
}

function atirar(){
    posicoesMisseis.push(createVector(mouseX - imagemMissil.width / 2, posicaoNave.y));
}