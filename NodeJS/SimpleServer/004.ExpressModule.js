const express = require('express')
const app = express()

app.set('port', process.env.PORT || 8080)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/mainpage.html')
})

app.listen(app.get('port'), () => {
    console.log('listening on', app.get('port'))
})