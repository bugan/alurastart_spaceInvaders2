const cenas = {
    jogo: 0,
    gameOver: 1,
    vitoria: 2,
}
let cenaAtual = cenas.jogo;
let pontuacao = 0;
let deltaTime = 0;
let ultimoFrame = 0;

let trilhaSonora;
//preparando o ambiente de trabalho
//carrengado as fantasias do nosso jogo
function preload() {
    // carregando imagens
    trilhaSonora = loadSound("audio/Trilha.mp3");
    imagemNave = loadImage("imagens/Nave.png");

    imagemMissil = loadImage("imagens/Missil.png");
    imagemLaser = loadImage("imagens/Laser.png");

    imagensAlien.push(loadImage("imagens/Alien1.png"));
    imagensAlien.push(loadImage("imagens/Alien2.png"));
    imagensAlien.push(loadImage("imagens/Alien3.png"));
}

//Quando meu jogo começa
function setup() {
    // criando um palco com 900 de largura e 600 de altura
    createCanvas(900, 600);
    posicaoNave = createVector(400, 500);
    //trilhaSonora.loop();

    for (let i = 0; i < quantidadeAliens; i = i + 1) {
        //faça algo
        let numeroFantasia = Math.floor(random(imagensAlien.length));
        aliens.push(numeroFantasia);
    }

}

//desenhando nosso atores - igual ao bloco "sempre" do scracth
function draw() {
    calcularDeltaTime();
    
    // pintar o fundo do palco de cinza
    background(100);
    if (cenaAtual == cenas.vitoria) {
       atualizaCenaVitoria();
    } else if(cenaAtual == cenas.jogo){
       atualizarCenaJogo();
    }else if(cenaAtual == cenas.gameOver){
       atualizarCenaGameOver();
    }

}

function atualizarCenaJogo() {
    if(todoMundoMorto()){
        cenaAtual = cenas.vitoria;
    }
    movimentaMisseis();
    atualizarNave();
    desenharNave();
    verificaColisaoMisseis();
    movimentarAlien();
    desenhaAlien();
    desenhaMisseis();
    adicionarDisparosDosAliens();
    desenharLasers();
    atualizarLasers();
    verificarColisoesLasers();
    fill(255);
    textSize(30);
    textAlign(LEFT);
    text("Pontuação: " + pontuacao, 30, 80);
}

function atualizarCenaGameOver() {
    fill(255);
    textSize(80);
    textAlign(CENTER);
    text("Game Over", width/2, height/2);
}

function atualizaCenaVitoria(){
    fill(255);
    textSize(80);
    textAlign(CENTER, CENTER);
    text("Parabéns", width/2, height/2);
}

//quando o mouse for pressionado
function mousePressed() {
    if(cenaAtual != cenas.jogo){
        reiniciar();
    }else{
        atirar();
    }
    
}

function calcularDeltaTime() {
    let frameAtual = millis() / 1000;
    deltaTime = frameAtual - ultimoFrame;
    ultimoFrame = frameAtual;
}

function colidiu(posicaoObjeto, larguraObjeto, alturaObjeto, posicaoOutro, larguraOutro, alturaOutro) {

    if (posicaoObjeto.x > posicaoOutro.x + larguraOutro ||
        posicaoObjeto.x + larguraObjeto < posicaoOutro.x ||
        posicaoObjeto.y > posicaoOutro.y + alturaOutro ||
        posicaoObjeto.y + alturaObjeto < posicaoOutro.y
    ) {
        return false;
    }
    return true;
}

function estaForaDaTela(posicaoY) {
    return posicaoY > height || posicaoY < 0;
}

function reiniciar() {

    for (let i = 0; i < aliens.length; i++) {
        let numeroFantasia = Math.floor(random(imagensAlien.length));
        aliens[i] = numeroFantasia;
    }

     lasers = new Array();
     posicoesMisseis = new Array();

     pontuacao = 0;
    cenaAtual = cenas.jogo;
}