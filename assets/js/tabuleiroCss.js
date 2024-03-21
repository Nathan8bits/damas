let tabuCssInicializado = false;

export let tabuCss = {
    //criarTabuleiro: criarTabuleiro(),
    peca: criarTabuleiro(),
    //peça e destino
    posicionar: (peca, posiCss) => {
        let pecaHtml = document.createElement("i");
        //fa-solid fa-circle pecaBranca
        if(peca.jogador == "a") { //peças pretas
            pecaHtml.classList.add("fa-solid", "fa-circle", "pecaPreta");
        } else if (peca.jogador == "b") {
            pecaHtml.classList.add("fa-solid", "fa-circle", "pecaBranca");
        }
        tabuCss.peca[posiCss[1]*8 + posiCss[0]].appendChild(pecaHtml);
        //tabuCss.peca[posiCss[1]*8 + posiCss[0]].innerHTML = peca.jogador;
    },
    posicionarTodas: (peca) => {
        for(let i = 0; i < 24; i++) {
            console.log(`posicionarAll: ${i} p: ${peca[i].posicao[0]}, ${peca[i].posicao[1]};`)
            tabuCss.posicionar(peca[i], 
                [peca[i].posicao[0], peca[i].posicao[1]]);
        }
    },
}

function criarTabuleiro() {
    
    //const componentRoot = document.createElement("div");
    //componentRoot.setAttribute("class", "mapa");
    //let matrizCssFunction  = document.querySelector(".mapa");
    const matrizMapa = document.createElement("tab");
    //matrizMapa.setAttribute("class", "matrizMapa");
    
    for(let y = 0; y < 8; y++) {
        const linha = document.createElement("tr");
        
        for(let x = 0; x < 8; x++) {
            const celula = document.createElement("td");
            //celula.setAttribute("class", "celulaTd");
            celula.classList.add("celulaTd");
            //celula.setAttribute("class", "tabCelPreta");
           // celula.classList.add("tabCelPreta");
            
            if( y%2 == 0 && x%2 == 1) {
                celula.classList.add("tabCelPreta");
            } else if( y%2 == 0 && x%2 == 0) {
                celula.classList.add("tabCelBranca");
            } else if ( y%2 == 1 && x%2 ==1) {
                celula.classList.add("tabCelBranca");
            } else if (y%2==1 && x%2 == 0) {
                celula.classList.add("tabCelPreta");
            } 
            //celula.setAttribute("class", "tabCelPreta");
            //celula.innerHTML = `{${x},${y}}`;
            //celula.innerHTML = '█';
            linha.appendChild(celula)
        }
    
        matrizMapa.appendChild(linha);
    }
    document.querySelector(".mapa").appendChild(matrizMapa);
    
    return document.querySelectorAll(".celulaTd");
}

/*
export class  TabuleiroCss{
    _matrizCss
    _peca

    constructor(pecas, divMapa) {
        //this._matrizCss = document.querySelector(".mapa");
        this.criarTabuleiro();
    }

    criarTabuleiro() {
        //const componentRoot = document.createElement("div");
        //componentRoot.setAttribute("class", "mapa");
        //let matrizCssFunction  = document.querySelector(".mapa");
        const matrizMapa = document.createElement("tab");
        //matrizMapa.setAttribute("class", "matrizMapa");
        
        
        for(let y = 0; y < 8; y++) {
            const linha = document.createElement("tr");
    
            for(let x = 0; x < 8; x++) {
                const celula = document.createElement("td");
                celula.setAttribute("class", "celulaTd")
                celula.innerHTML = `${x}, ${y}`;
                linha.appendChild(celula)
            }
    
            matrizMapa.appendChild(linha);
        }
        //matrizCssFunction.appendChild(matrizMapa);
        //this._matrizCss = matrizCssFunction;
        //this._matrizCss.appendChild(document.querySelector(".celulaTd"));

        this._matrizCss = 0;
       // console.log(this._matrizCss);
    }
}
*/