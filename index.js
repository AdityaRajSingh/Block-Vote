//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://adityarajsingh:adityarajsingh@cluster0-lwl9n.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true});



const partySchema = new mongoose.Schema({
  name: {
      type: String,
  },
  votes: Number,
});

const Party=mongoose.model("Party",partySchema);





app.get("/", function(req, res)
{
    res.sendFile(__dirname+"/index.html");
});

app.put('/:partyName',function(req,res)
{
    const name=req.params.partyName;
    Party.updateOne({name:name},{ $inc: { votes: 1 } })
    .exec()
    .then(vote=>{
        res.json(vote).status(200);
    })

})



app.get('/votes',function(req,res)
{
    Party.find()
    .exec()
    .then(parties=>{
        res.json(parties).status(200);
    })
});


app.get("/votecount", function(req, res)
{
    res.sendFile(__dirname+"/index2.html");
});


app.listen(process.env.PORT || 4000, function(){
  console.log("Server started on port 4000.");
});
