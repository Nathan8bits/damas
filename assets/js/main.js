import {TabuleiroDamaJs} from './tabuleiroVirtual.js'
import { tabuCss } from './tabuleiroCss.js';

const tabuVir = new TabuleiroDamaJs();
tabuCss.posicionarTodas(tabuVir._peca);


let pecaClicada = {
    posicao: [-1, -1],
    index: -1,
}

//inicializando as celulas
for(let i = 0; i < 64; i++) {
    tabuCss.celulasHtml[i].addEventListener("click", ()=> {
        console.log(`celula: ${i%8}, ${(i - (i%8))/8}`)
    })
}

let todasPecas = document.querySelectorAll(".fa-circle");
console.log("todas pecas: " + todasPecas)
console.log(tabuCss.pecasHtml);
//inicializando as peças


for(let i =0; i < 24; i++) {
    tabuCss.pecasHtml[i].addEventListener("click", () => {
        console.log("peça clicada")
        
        pecaClicada.posicao[0] = tabuVir._peca[i].posicao[0];
        pecaClicada.posicao[1] = tabuVir._peca[i].posicao[1];
        pecaClicada.index = i;

        console.log(tabuCss.pecasHtml[i])
        console.log(pecaClicada);
    })
}

//const tabuCss = new TabuleiroCss(tabuVir._peca, document.querySelector(".mapa"))

console.log(tabuVir);
console.log(tabuCss);


//tabuCss.posicionar(tabuVir._peca[0], 
 //                 [tabuVir._peca[0].posicao[0], tabuVir._peca[0].posicao[1]])
 console.log("(main)peca: " + tabuVir._peca[0].posicao)
 tabuCss.reposicionar(0, tabuVir._peca[0], 
                    [3, 4])
