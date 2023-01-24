//Import express module
const express = require('express')
const app = express()

//Set port env
app.set('port', process.env.PORT || 8080)

//Import shared middleware
//app.use(commonMiddleware)

//Routing
app.get('/', (req,res,next) => {
    res.send('Hello, World!')
    next()
})

const myLogger = function(req, res,next) {
    console.log("LOGGED")
    next()
}

//404 Request handling middleware
//app.get((err, req, res, n ext) => {})

//Error handling middleware
//app.use((err, req, res, next) => {})

app.use(myLogger)

app.listen(8080)