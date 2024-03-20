let tabuCssInicializado = false;

export let tabuCss = {
    //criarTabuleiro: criarTabuleiro(),
    peca: criarTabuleiro(),
    //peça e destino
    posicionar: (peca, posiCss) => {
        tabuCss.peca[posiCss[1]*8 + posiCss[0]].innerHTML = peca.jogador;
    },
    posicionarTodas: (peca) => {
        for(let i = 0; i < 24; i++) {
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
            celula.setAttribute("class", "celulaTd")
            celula.innerHTML = `{${x},${y}}`;
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