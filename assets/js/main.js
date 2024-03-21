import {TabuleiroDamaJs} from './tabuleiroVirtual.js'
import { tabuCss } from './tabuleiroCss.js';

const tabuVir = new TabuleiroDamaJs();
//const tabuCss = new TabuleiroCss(tabuVir._peca, document.querySelector(".mapa"))



console.log(tabuVir);
console.log(tabuCss);
console.log(tabuVir._peca[0].posicao[0])
console.log(tabuCss.peca[1])



tabuCss.posicionarTodas(tabuVir._peca);
//tabuCss.posicionar(tabuVir._peca[0], 
 //                 [tabuVir._peca[0].posicao[0], tabuVir._peca[0].posicao[1]])
 tabuCss.posicionar(tabuVir._peca[0], 
                    [3, 4])

 /*
tabuCss.peca[
    tabuVir._peca[0].posicao[1]*8 
    + tabuVir._peca[0].posicao[0]
].innerHTML = tabuVir._peca[0].jogador;
*/