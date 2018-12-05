var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "First Post", author: "Sugi"},
        {title: "My adorable pet bunny", author: "Pakki"},
        {title: "My bike commute to work", author: "Santos"}
    ];
    res.render("posts", {posts: posts});
});

app.listen(8000, process.env.IP , function(){
    console.log("Server is listening!");
});