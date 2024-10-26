const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url, req.method);

    // set header content type
    // basically tell the browser what data it will recieve
    res.setHeader("Content-Type", "text/html");

    // views is the dir where we store html content for our site
    // we evaluate which piece of html content we should send to the browser
    let path = "./views/";
    switch (req.url) {
        case "/":   // index - homepage
            path += "index.html";
            res.statusCode = 200;   // status: success
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;   // status: success
            break;
        case "/account":
            path += "account.html";
            res.statusCode = 200;   // status: success
            break;
        case "/chat":
            path += "chat.html";
            res.statusCode = 200;   // status: success
            break;
        case "/sell":
            path += "sell.html";
            res.statusCode = 200;   // status: success
            break;
        case "/shop":
            path += "shop.html";
            res.statusCode = 200;   // status: success
            break;
        case "/signup":
            path += "signup.html";
            res.statusCode = 200;   // status: success
            break;
        default:    // 404 - invalid address
            path += "404.html";
            res.statusCode = 404    // status: not found
            break;
    }

    // send an html file to the browser for viewing
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);          // passes data to browser normally
        }
    })
});

server.listen(3000, "localhost", () => {
    console.log('listening for requests on port 3000');
});
