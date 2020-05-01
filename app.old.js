const http = require("http");

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let json = {
        uno: "uno",
        dos: "2",
        tres: [1,2,3,4],
        cuatro: {
            "a": "hola",
            "b": "mundo"
        },
        url: req.url
    }
    res.write( JSON.stringify(json) );
    res.end();
}).listen(8080);

console.log("Escuchando en el puerto 8080");