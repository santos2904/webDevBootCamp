var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Welcome to the homepage!</h1><h2>This is a H2</h2>");
});

app.listen(8000, process.env.IP , function(){
    console.log("Server is listening!");
});