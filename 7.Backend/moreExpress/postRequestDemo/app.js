var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req,res){
    var friends = ["Kaja", "James", "Jessi", "Rajeev", "Emma", "Suki", "Sangi"]
    res.render("friends", {friends: friends});
});

app.post("/addFriend", function(req, res){
    res.send("You have reached the post route!");
});

app.listen(8000, process.env.IP, function(){
    console.log("Listening for Post Request");
});