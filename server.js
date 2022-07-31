var express=require("express");
var app=express();

app.get("/",(req,res)=>{
    res.send(
        
        "<h1>Preetam Sales<h1>"
        
    );
});

app.get("/aboutus",(req,res)=>{
    res.send(
        
        "<h1>We are the best in the market<h1>"
        
    );
});

var server=app.listen(9000);
console.log("preetam sales on port 9000");