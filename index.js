const express = require("express")

const logger = require('morgan')

//Import the Wiki Route
const wiki = require('./wiki')


// creates an express WeB application
const app = express()

const port = 3000

app.get('/', (req, res) => {
    

    res.send('Hello World')
})


app.listen(port, () => {
    console.log(`Your Express web App is listening on port ${port}`)
})

app.all("/secret", (req, res) => {
    res.send('You have reach secret location')
})


app.use(express.static("public"))



app.use(logger('dev'))

//This means if i get a request with url of '/wiki
// use the route named wiki to handle it
app.use('/wiki', wiki)
