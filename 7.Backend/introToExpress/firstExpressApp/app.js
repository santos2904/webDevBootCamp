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

app.get("")
app.listen(8000, process.env.IP , function(){
    console.log("Server has started");
});


 