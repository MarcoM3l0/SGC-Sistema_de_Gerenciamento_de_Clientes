const Cliente = require("./Cliente")

class ClienteServico {
    constructor(repositorio){
        this.repositorio = repositorio
    }

    async encontrarTudosClientes(){
        return await this.repositorio.encontrarTudos()
    }

    async criarCliente({ nome, email, telefone, coordenadas}){
        const novoCliente = new Cliente(nome, email, telefone, coordenadas)

        const todosClientes = await this.repositorio.encontrarTudos()
        const sobreposicaoCliente = todosClientes.find((cliente) => {
            return (
                cliente.coodernada === novoCliente.coordenadas
            )
        })

        if(sobreposicaoCliente) {
            throw new Error("A casa informada já está cadastrada!")
        }

        await this.repositorio.criar(novoCliente)
        return novoCliente
    }
}

module.exports = ClienteServico