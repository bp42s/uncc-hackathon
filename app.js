const express = require("express");
const mongoose = require("mongoose")


// express app
const app = express();

// connection string to mongodb
const dbURI = "mongodb+srv://program:program@uncc-hackathon.uvolh.mongodb.net";
//mongoose.connect(dbURI);

// register view engine - unused
// app.set("view engine", "ejs");


// listen for requests
app.listen(3000, "localhost", () => {
    console.log('App: Listening for requests on port 3000');
});

// middleware - log each request
app.use((req, res, next) => {
    console.log("new request made:");
    console.log("hostname: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();
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

app.get("/index", (req, res) => {
    res.redirect("/");
});

app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/sign-up", (req, res) => {
    res.redirect("/signup");
});

// 404 or error
app.use((req, res) => {
    res.sendFile("./views/404.html", { root: __dirname });
});
