const app = require("./app")

const PORT = process.env.PORT || 3000

const start = () => {
    try {
        app.register(require('@fastify/cors'))
        app.listen({ port: PORT })
        app.log.info(`servidor em execucao em http://localhost:${PORT}`)
    } catch (error) {
        app.log.error
        process.exit(1)
    }
}

start()