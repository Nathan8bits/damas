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



    movimentoPosssiveis() {
        for (let x = -1; x < 2; x++) {
            for(let y = -1; y < 2; y++) {

            }
        }
    }

    opcaoValida() {
        return true;
    }

    retornarIndex(posicao) {
        for(let i = 0; i < 24; i++) {
            if(this._peca[i].posicao == posicao) {

                return i
            }
        }

        return [-1, -1];
    }
}