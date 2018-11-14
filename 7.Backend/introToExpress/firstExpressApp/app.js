var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("hallo wold");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.listen(8000, process.env.IP , function(){
    console.log("Server has started");
});


 