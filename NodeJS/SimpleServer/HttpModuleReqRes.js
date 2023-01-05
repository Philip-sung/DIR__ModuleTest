const http = require('http')

http.createServer((req, res) => {
    console.log(req.method, req.url)
    console.log("*****************")
    console.log(res.method, req.url)
}).listen(8080, () => {
    console.log("Listening on 8080")
})