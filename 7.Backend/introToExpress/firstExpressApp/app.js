var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Scarborough uplink successful. Welcome Back Commander.");
});

app.get("/execute", function(req, res){
    res.send("Exeggutor.png");
});

app.get("/shutdown", function(req, res){
    res.send("Initiating Shutdown sequence...");
});

app.get("/r/:subredditName", function(req, res){
    res.send("Welcome to this subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    res.send("Welcome to the comment section");
});

app.get("*", function(req,res){
    res.send("404 not found!");
})

app.get("")
app.listen(8000, process.env.IP , function(){
    console.log("Server has started");
    console.log("On the browser, go to:");
    console.log("http://localhost:8000/");
    console.log("http://localhost:8000/execute");
    console.log("http://localhost:8000/shutdown");
});


 