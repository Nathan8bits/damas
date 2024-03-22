import {TabuleiroDamaJs} from './tabuleiroVirtual.js'
import { tabuCss } from './tabuleiroCss.js';

const tabuVir = new TabuleiroDamaJs();
tabuCss.posicionarTodas(tabuVir._peca);
console.log(tabuVir);
console.log(tabuCss);

//iniciando peca clicada com valores invalidos
let pecaClicada = {
    peca: 0,
    index: 3,
}

//inicializando as celulas
for(let i = 0; i < 64; i++) {
    tabuCss.celulasHtml[i].addEventListener("click", ()=> {
        console.log(`celula: ${i%8}, ${(i - (i%8))/8}`);
        console.log(pecaClicada);
        console.log(tabuCss.celulasHtml[ ((i - (i%8))/8)*8 + i%8].children.length)

        if(pecaClicada.peca.posicao != [i%8, (i - (i%8))/8]
            && pecaClicada.peca != 0 ) {
                tabuCss.reposicionar(pecaClicada.index, 
                                    pecaClicada.peca, 
                                    [i%8, (i - (i%8))/8]);
        }
    })
}

console.log(tabuCss.pecasHtml);

//inicializando as peças
for(let i =0; i < 24; i++) {
    tabuCss.pecasHtml[i].addEventListener("click", () => {
        console.log("peça clicada")
        
        pecaClicada.peca = tabuVir._peca[i];
        //pecaClicada.posicao[0] = tabuVir._peca[i].posicao[0];
        //pecaClicada.posicao[1] = tabuVir._peca[i].posicao[1];
        pecaClicada.index = i;

        console.log(tabuCss.pecasHtml[i])
        console.log(pecaClicada);
    })
}


 console.log("(main)peca: " + tabuVir._peca[0].posicao)
 
 let p = [2, 4]
 tabuCss.reposicionar(pecaClicada.index, tabuVir._peca[0], p)
