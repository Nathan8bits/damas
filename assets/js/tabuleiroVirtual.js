export class TabuleiroDamaJs {
    _peca 
    //struct [24][4] int, int, char, char
    _jogador 
    //boolean

    constructor() {
        this._jogador = new Array(2);
        this._jogador[0] = true;
        this._jogador[1] = false;

        this._peca = new Array(24);
        for(let i = 0; i < 24; i++) {
            let x, y, j;

            let posiUniValor;
            
            if(i <= 11) {
                if(i % 8 < 4) {
                    posiUniValor = i*2 + 1;
                } else if(i % 8 >= 4) {
                    posiUniValor = i*2;
                }
                j = 'a';
                
            } else if (i > 11 && i < 24) {
                posiUniValor = 16;
                if(i % 8 < 4) {
                    posiUniValor += i*2 + 1;
                } else if(i % 8 >= 4) {
                    posiUniValor += i*2;
                }
                j = 'b';
            }
            y = (posiUniValor - (posiUniValor%8)) / 8;
            x = posiUniValor % 8;
            
            this._peca[i] = {
                posicao: [x, y],
                jogador: j,
                tipo: "peao", //peao ou dama
            }
        }
    }


    movimentoPosssiveis(index) {  //indexPeça
        let moviPossiveis = [];
        let indexMovPossiveis = -1;
        for (let x = -1; x < 2; x++) {
            for(let y = -1; y < 2; y++) {
                if(x != 0 && y != 0 
                    && this.opcaoValida([this._peca[index].posicao[0] + x, this._peca[index].posicao[1] + y])) {
                        indexMovPossiveis++;
                        moviPossiveis[indexMovPossiveis] = [this._peca[index].posicao[0] + x, this._peca[index].posicao[1] + y];
                } else if(this.opcaoValida([this._peca[index].posicao[0] + 2*x, this._peca[index].posicao[1] + 2*y])
                          && this.retornarJogador([this._peca[index].posicao[0] + x, this._peca[index].posicao[1] + y]) != null 
                          && this.retornarJogador([this._peca[index].posicao[0] + x, this._peca[index].posicao[1] + y]) != this._peca[index].jogador) {
                            indexMovPossiveis++;
                            moviPossiveis[indexMovPossiveis] = [this._peca[index].posicao[0] + 2*x, this._peca[index].posicao[1] + 2*y];
                }
            }
        }

        if(indexMovPossiveis == -1) {
            return null;
        } else {
            return moviPossiveis;
        }
    }

    opcaoValida(p) {
        for(let i = 0; i < 24; i++) {
            if(this._peca[i].posicao[0] == p[0] && this._peca[i].posicao[1] == p[1] 
                || p[0] < 0 || p[0] >= 8 || p[1] < 0 || p[1] >= 8){
                return false;
            }
        }

        return true;
    }

    retornarJogador(p) {
        for(let i = 0; i < 24; i++) {
            if(this._peca[i].posicao[0] == p[0] && this._peca[i].posicao[1] == p[1]){
                return this._peca[i].jogador;
            }
        }

        return null;
    }
}