const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs') //how are views are handled - via EJS
app.use(express.static('public')) //public folder hosts all our static files
//replaces body parser - body from requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//separating our different routers
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
//using environment variable for the PORT
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    