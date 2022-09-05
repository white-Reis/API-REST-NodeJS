import express from 'express'
import routes from './routes/index.js'
import dataBase from './config/dataBaseConfig.js'

dataBase.on("error", console.log.bind(console,  'Erro de conexão'))
dataBase.once("open", () => {
  console.log('conexão com o banco concluida')
})

const main = express()
main.use(express.json())
routes(main)

export default main