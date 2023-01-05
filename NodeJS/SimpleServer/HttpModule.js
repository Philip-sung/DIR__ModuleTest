const http = require('http')
const fs = require('fs').promises

const server = http.createServer(async (req, res) => {
    try {
    const f = await fs.readFile('./html/mainpage.html')
    res.writeHead(200, {'Content-Type' : 'text.html; charset = utf-8'})
    res.end(f)
    } catch (err) {
        console.error(err)
        res.writeHead(500, {'Content-Type' : 'text.html; charset = utf-8'})
        res.write()
        res.end(err.message);
    }
}).listen(8080)

server.on('listening', () => {
    console.log('Listening on port 8080.')
})