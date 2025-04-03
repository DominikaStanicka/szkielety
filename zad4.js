const http = require('http');
const url = require('url');

// pole trójkąta wzorem Herona
function obliczPoleHerona(bokA, bokB, bokC) {
    let p = (bokA + bokB + bokC) / 2;
    return Math.sqrt(p * (p - bokA) * (p - bokB) * (p - bokC));
}

// czy z boków można zbudować trójkąt
function czyTrojkatMozliwy(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

// Tworzenie serwera
const serwer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    let z = url.parse(req.url, true).query;//pobranie z url i zmiana na float
    let bokA = parseFloat(z.a);
    let bokB = parseFloat(z.b);
    let bokC = parseFloat(z.c);

    if (isNaN(bokA) || isNaN(bokB) || isNaN(bokC)) {// sprawdzenie czy liczby są liczbami
        return res.end("Podaj poprawne liczby dla a, b i c. Przykład: /?a=3&b=4&c=5");
    }
    if (bokA <= 0 || bokB <= 0 || bokC <= 0) {
        return res.end("Długości boków muszą być większe od zera.");
    }
    if (!czyTrojkatMozliwy(bokA, bokB, bokC)) {
        return res.end("Z podanych boków nie można zbudować trójkąta.");
    }

    // Obliczanie pola i wysłanie odpowiedzi
    let pole = obliczPoleHerona(bokA, bokB, bokC);
    res.end(`Pole trojkata wynosi: ${pole}`);
});

// Uruchomienie serwera na porcie 3000
serwer.listen(3000, () => console.log("Serwer działa na http://localhost:3000"));
