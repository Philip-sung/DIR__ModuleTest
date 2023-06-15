import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { createCipheriv, createHash } from 'crypto'

//Function that get password as parameter and return hash value of it.
function hashPW(pw) {
    return createHash('sha256').update(pw).digest('base64').toString();
}

//create express object, and attach four global middleware.
const app = express();
//if {extended : true} - use qs external library to parse / else quarystring basic library
app.use(bodyParser.urlencoded({ extended: true }));
//convert json type document to JS object
app.use(bodyParser.json());
//convert cookie header to req.cookies property
app.use(cookieParser('MAGICString'));
//create session
app.use(session());

app.get('/restricted', function (req,res){
    if(req.session.user){
        res.send('<h2>' + req.session.success + '</h2>' +
        '<p>You have entered the restricted section<p><br>' +
        '<a href="/logout">logout</a>'
        );
    }
    else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
})

app.get('/logout', function(req,res){
    req.session.destroy(function(){
        res.redirect('/login');
    })
})

app.get('/login', function(req,res){
    let response = '<form method="POST">' +
    'Username: <input type="text" name="username"><br>' +
    'Password: <input type="password" name="password"><br>' +
    '<input type="submit" value="Submit"></form>'
    if(req.session.user){
        res.redirect('/restricted');
    }
    else if(req.session.error){
        response += '<h2>' + req.session.error + '<h2>';
    }
    res.type('html');
    res.send(response);
});

app.post('/login', function(req, res){
    let user = {name:req.body.username, password:hashPW("myPass")};
    if (user.password === hashPW(req.body.password)) {
        req.session.regenerate(function(){
            req.session.user = user;
            req.session.success = 'Authenticated as ' + user.name;
            res.redirect('/restricted');
        });
    }
    else {
        req.session.regenerate(function(){
            req.session.error = 'Authentication failed.';
            res.redirect('/restricted');
        });
    }
});

app.listen(80);