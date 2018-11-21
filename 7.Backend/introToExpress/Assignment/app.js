var express = require("express");
var app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The cow says 'Moo'"
// Visiting "/speak/dog" should print "The dog says 'Woof'"
// What does the fox say?
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "oink",
        cow: "Moo",
        dog: "woof",
        cat: "1H8UH00M4N",
        fish: "...",
        fox: "Ring ding ding dinge ringe ding!"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found. 404");
});

app.listen(8000, process.env.IP , function(){
    console.log("App has started");
});