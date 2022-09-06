import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://fabio:123@redecompass.jlrxjik.mongodb.net/compassProject")

let dataBase = mongoose.connection
dataBase.on("error", console.log.bind(console,'Erro de conexão'))
dataBase.once("open", () => {
  console.log('conexão com o banco concluida')
})
export default dataBase