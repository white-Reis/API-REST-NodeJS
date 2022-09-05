import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://fabio:123@redecompass.jlrxjik.mongodb.net/compassProject")

let dataBase = mongoose.connection

export default dataBase