//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var items=["Wake Up","Make Bed"];
var workItems=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, res)
{
    res.sendFile(__dirname+"/index.html");
});
app.get("/votes", function(req, res)
{
    res.sendFile(__dirname+"/index2.html");
});




app.listen(process.env.PORT || 4000, function(){
  console.log("Server started on port 4000.");
});
