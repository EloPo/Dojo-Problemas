const escolherJogador1 = '';
const escolherJogador2 = '';

function calculandoJogada(){
    const jogadas = ['pedra', 'papel', 'tesoura'];
    const numero = Math.floor(Math.random()*3);
    this.escolherJogador1 = jogadas[numero];
    this.escolherJogador2 = jogadas[numero];
}

function regrasJogo(escolherJogador1, escolherJogador2){

  if (escolherJogador1 == escolherJogador2){
    return 'Empate';
  }else if (escolherJogador1 == 'pedra' && escolherJogador2 == 'papel' ||
    escolherJogador1 == 'papel' && escolherJogador2 == 'pedra' ||
    escolherJogador1 == 'tesoura' && escolherJogador2 == 'papel'
  ){
    return 'Jogador 1';
  }else if(escolherJogador1 == 'pedra' && escolherJogador2 == 'tesoura' ||
    escolherJogador1 == 'papel' && escolherJogador2 == 'tesoura' ||
    escolherJogador1 == 'tesoura' && escolherJogador2 == 'pedra'
  ){
    return 'Jogador 2';
  }
}
