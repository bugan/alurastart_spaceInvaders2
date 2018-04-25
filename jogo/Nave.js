const tempoParaRecarregar = 60;
let imagemNave;
let posicaoNave;
let podeAtirar = true;
let cronometroRecarregar = tempoParaRecarregar;
function atualizarNave(){
    //centralizando a posição da nave
    posicaoNave.x = mouseX - imagemNave.width / 2;
    recarregarMissil();
}

function desenharNave(){
    //desenhar a nave
    image(imagemNave, posicaoNave.x, posicaoNave.y);
}

function atirar(){
    if(podeAtirar){
        podeAtirar = false;
        posicoesMisseis.push(createVector(mouseX - imagemMissil.width / 2, posicaoNave.y));
    }
}

function recarregarMissil(){
    if(podeAtirar == false){
        cronometroRecarregar -= 1;
        if(cronometroRecarregar < 0){
            podeAtirar = true;
            cronometroRecarregar = tempoParaRecarregar;
        }
    }
}