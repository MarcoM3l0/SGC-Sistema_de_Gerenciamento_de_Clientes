class ClienteControlador {
    constructor(servico) {
        this.servico = servico
    }

    async indice(request){
        const clientes = await this.servico.encontrarTudosClientes(request)
        return {code: 200, body: { clientes } }
    }

    async salvar(request) {
        const { nome, email, telefone, coordenadas} = request.body
        
        if(!nome || !email || !telefone || !coordenadas){
            return { code: 400, body: {message: 'Todos os campus devem está preenchidos!'}}
        }

        const cliente = await this.servico.criarCliente({nome, email, telefone, coordenadas})

        return { code: 201, body: { message: "Cliente cadastrado com sucesso!", cliente} }
    }

}

module.exports = ClienteControlador