const pgp = require("pg-promise")()
const { join } = require('node:path')

const db = pgp("postgres://postgres:123@localhost:5432/SGC") //Mudar de acordo com o sistema

module.exports = db