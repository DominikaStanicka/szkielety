const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    switch (req.url) {
        case "/home":
            res.end("<h1>Strona domowa</h1>");
            break;
        case "/about":
            res.end("<h1>O mnie</h1>");
            break;
        default:
            res.statusCode = 404;
            res.end("<h1>404 - Nie znaleziono</h1>");
            break;
    }
});

server.listen(3000, () => console.log("Serwer działa na http://localhost:3000"));
