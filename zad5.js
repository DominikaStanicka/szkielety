// Zadanie 3.5

const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end(
        // stworz tu kod html o ponizszej tresci i strukturze
        //         "
        // Aplikacja w Node
        // To jest odpowiedź HTML
        // 1.
        // 2.
        // 3.
        // "

        `<!DOCTYPE html>
    <html>
        <head>
        <title>Aplikacja w Node</title>
        </head>
        <body>
        <h1>To jest odpowiedź HTML</h1>
        <ul>
            <li>1.</li>
            <li>2.</li>
            <li>3.</li>
        </ul>
        </body>
    </html>`

    )
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})