export let tabuCss = {
    //criarTabuleiro: criarTabuleiro(),
    pecasHtml: [24],
    celulasHtml: criarTabuleiro(),
    resetarTodasPecas: (peca) => {
        for(let i = 0; i < 24; i++) {
            let pecaHtml = document.createElement("i");
            if(peca[i].jogador == "a") { //peças pretas
                pecaHtml.classList.add("fa-solid", "fa-circle", "pecaPreta");
            } else if (peca[i].jogador == "b") {
                pecaHtml.classList.add("fa-solid", "fa-circle", "pecaBranca");
            }
            tabuCss.pecasHtml[i] = pecaHtml;
            tabuCss.celulasHtml[peca[i].posicao[1]*8 + peca[i].posicao[0]].appendChild(tabuCss.pecasHtml[i]);
        }
        tabuCss.pecasHtml = document.querySelectorAll(".fa-circle");
    },

    posicionar: (index, peca, destino) => {
         //atualizando posicao da peça
         peca.posicao[0] = destino[0];
         peca.posicao[1] = destino[1];
         //posicionando a peça na celula de destino
         tabuCss.celulasHtml[destino[1]*8 + destino[0]].appendChild(tabuCss.pecasHtml[index]);
    },
}

function criarTabuleiro() {

    const matrizMapa = document.createElement("tab");
    
    for(let y = 0; y < 8; y++) {
        const linha = document.createElement("tr");

        for(let x = 0; x < 8; x++) {
            const celula = document.createElement("td");
            celula.classList.add("celulaTd");
            
            if( y%2 == 0 && x%2 == 1 
             || y%2==1 && x%2 == 0) {
                celula.classList.add("tabCelPreta");
            } else if( y%2 == 0 && x%2 == 0 
                    || y%2 == 1 && x%2 ==1) {
                celula.classList.add("tabCelBranca");
            } 
            celula.innerHTML = `{${x}, ${y}}`
            linha.appendChild(celula)
        }
    
        matrizMapa.appendChild(linha);
    }
    document.querySelector(".mapa").appendChild(matrizMapa);
    
    return document.querySelectorAll(".celulaTd");//array 64 posicoes
}