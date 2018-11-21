var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Toronto uplink successful. Welcome Back Commander.");
});

app.get("/execute", function(req, res){
    res.send("Exeggutor.png");
});

app.get("/shutdown", function(req, res){
    res.send("Initiating Shutdown sequence...");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send("Welcome to the front page of the internet")
});

app.get("*", function(req,res){
    res.send("404 not found!");
})

app.get("")
app.listen(8000, process.env.IP , function(){
    console.log("Server has started");
    console.log("On the browser, go to:");
    console.log("http://localhost:8000/");
    console.log("http://localhost:8000/phr33st0ffpl0x/404");
    console.log("http://localhost:8000/execute");
    console.log("http://localhost:8000/r/type_anything_here");
    console.log("http://localhost:8000/shutdown");
});


 