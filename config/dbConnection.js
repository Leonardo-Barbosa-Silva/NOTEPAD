const mongoose = require('mongoose')
const app = require('../app')

const DB_USER = process.env.MONGO_USER
const DB_PASSWORD = encodeURIComponent(process.env.MONGO_PASSWORD)


module.exports = mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterpad.vftfeq8.mongodb.net/NOTEPAD?retryWrites=true&w=majority`
    )
    .then( () => {
        console.log('Database successfully connected...')
    })
    .catch( (err) => {
        console.log(err)
    })