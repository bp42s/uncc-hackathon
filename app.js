const express = require("express");


// express app
const app = express();

// register view engine
app.set("view engine", "ejs");


// listen for requests
app.listen(3000, "localhost", () => {
    console.log('App: Listening for requests on port 3000');
});


// requests
app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/account", (req, res) => {
    res.sendFile("./views/account.html", { root: __dirname });
});

app.get("/chat", (req, res) => {
    res.sendFile("./views/chat.html", { root: __dirname });
});

app.get("/sell", (req, res) => {
    res.sendFile("./views/sell.html", { root: __dirname });
});

app.get("/signup", (req, res) => {
    res.sendFile("./views/signup.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404 or error
app.use((req, res) => {
    res.status(404).res.sendFile("./views/404.html", { root: __dirname });
});
