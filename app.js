const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const routes = require('./app/routes')
require('dotenv').config()
require('./config/dbConnection')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


app.use(routes)





app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})