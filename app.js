const express = require("express");
const mongoose = require("mongoose");
const Account = require("./models/account");
const Item = require("./models/item");


// express app
const app = express();


// attempt to connect to mdb. listening occurs here
const dbURI = "mongodb+srv://program:program_password12345@uncc-hackathon.uvolh.mongodb.net/uncc-hackathon";
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3000);
        console.log("app: success, listening for requests on port 3000");
    })
    .catch((err) => console.log(err));


// register view engine - unused
// app.set("view engine", "ejs");


// middleware - log each request
app.use((req, res, next) => {
    console.log("new request made:");
    console.log("hostname: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();
});


// mongoose and mongo sandbox routes
app.get("/add-account", (req, res) => {
    const account = new Account({
        username: "newUser",
        password: "password",
        description: "i am a student",
        currentGrade: "undefinedGrade",
        reputation: 0
    });
    account.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

app.get("/add-item", (req, res) => {
    const item = new Item({
        name: "itemName",
        description: "itemDescription",
        price: 0,
        category: "generic",
        image: "imageLink"
    });
    item.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

app.get("/all-accounts", (req, res) => {
    Account.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/all-items", (req, res) => {
    Item.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/single-account", (req, res) => {
    Account.findById("671d5737749935b54e3bd50e")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/single-item", (req, res) => {
    Item.findById("671d59213e178c88b7537c96")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});


// routes
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
