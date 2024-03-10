const db = require("../database")
const Cliente = require("./Cliente")

class ClienteRepositorio{
    constructor() {
        this.db = db
    }

    async encontrarTudos() {
        const processamentoDadosClientes = await this.db.manyOrNone('SELECT id, nome, email, telefone, coordenadas FROM clientes')
        return processamentoDadosClientes.map( cliente => new Cliente(cliente))
    }
    
    async criar(cliente) {
        await this.db.none('INSERT INTO clientes (nome, email, telefone, coordenadas) VALUES (${nome}, ${email}, ${telefone}, ${coordenadas})',
        cliente)
    }
}

module.exports = ClienteRepositorio