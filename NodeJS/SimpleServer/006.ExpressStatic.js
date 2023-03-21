const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/html'));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/html/mainpage.html')
});

app.listen(app.get('port'), ()=> {
    console.log('Running on PORT '+ app.get('port'))
});