import dataBase from './config/dataBaseConfig.js'
import express from 'express'
import routes from './routes/index.js'
import peoples from './models/people.js'

const app = express()

app.use(express.json())

routes(app)

export default app