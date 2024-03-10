const db = require("../database");

class Rotas {

    constructor() {
        this.db = db
    }
    
    async clacularRota() {

        const dados = await db.query('SELECT nome, coordenadas FROM clientes');
        
        const nome = dados.map(item => item.nome)
        const coordenadas = dados.map(item => item.coordenadas)

        const distanciaEntrePontos = calcularDistancia(coordenadas, nome)

       return distanciaEntrePontos;
    }

}

function calcularDistancia(coordenadas, nomes){
    const distanciaEntrePontos = []

    coordenadas.forEach((element, indice) => {
        
        const [numX, numY] = element.replace(/[()]/g, '').split(',');

        const parsedNumX = parseFloat(numX);
        const parsedNumY = parseFloat(numY);

        //Calcula a distância euclidiana usando a fórmula: d = raiz((x1-x2)^2 + (y1-y2)^2). 
        //como a partida sempre é do (0,0) fica assim a fórmula: d = raiz(x^2 + y^2).
        const distancia = Math.sqrt(Math.pow(parsedNumX, 2) + Math.pow(parsedNumY, 2))

        distanciaEntrePontos.push({index: indice, nome:nomes[indice] , valor: distancia })

    })

    distanciaEntrePontos.sort((a, b) => a.valor - b.valor)

    return distanciaEntrePontos

}


module.exports = Rotas