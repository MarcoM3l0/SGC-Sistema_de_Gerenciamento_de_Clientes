const fastify = require('fastify')


const ClienteRepositorio = require('./clientes/ClienteRepositorio')
const ClienteServico = require('./clientes/ClienteServico')
const ClienteControlador = require('./clientes/ClienteControlador')
const db = require('./database')
const Rotas = require('./servicos/Rotas')

const app = fastify({ logger: true })

const clienteRepositorio = new ClienteRepositorio()
const clienteServico = new ClienteServico(clienteRepositorio)
const clienteControlador = new ClienteControlador(clienteServico)

const rota = new Rotas()




app.get('/', async (request, reply) => {
    const {code, body} = await clienteControlador.indice(request)
    reply.code(code).send(body)
})

app.get('/api/rota', async (request, reply) => {
    const body = await rota.clacularRota()
    reply.send(body)
})

app.post("/api/clientes", async (request, reply) => {
    const { code, body } = await clienteControlador.salvar(request)
    reply.code(code).send(body)
})



module.exports = app