import {TabuleiroDamaJs} from './tabuleiroVirtual.js'
import { tabuCss } from './tabuleiroCss.js';

const tabuVir = new TabuleiroDamaJs();
tabuCss.resetarTodasPecas(tabuVir._peca);
console.log(tabuVir);
console.log(tabuCss);

//iniciando peca clicada com valores invalidos
let pecaClicada = {
    peca: 0,
    index: 3,
    movimentoPosssiveis: [],
}

//inicializando as celulas
for(let i = 0; i < 64; i++) {
    tabuCss.celulasHtml[i].addEventListener("click", ()=> {
        console.log(`celula: ${i%8}, ${(i - (i%8))/8}`);
        console.log(pecaClicada);
        //console.log(tabuCss.celulasHtml[ ((i - (i%8))/8)*8 + i%8].children.length)
        
        if(pecaClicada.peca.posicao != [i%8, (i - (i%8))/8]
        && pecaClicada.peca != 0 ) {
            tabuCss.posicionar(pecaClicada.index, 
                                            pecaClicada.peca, 
                                            [i%8, (i - (i%8))/8]);
            
        }
    })
}

//inicializando as peças
for(let i =0; i < 24; i++) {
    tabuCss.pecasHtml[i].addEventListener("click", () => {
        console.log("peça clicada")
        
        pecaClicada.peca = tabuVir._peca[i];
        pecaClicada.index = i;
        pecaClicada.movimentoPosssiveis = tabuVir.movimentoPosssiveis(i);

        //console.log(tabuVir.movimentoPosssiveis(i));
        console.log(pecaClicada);
    })
}