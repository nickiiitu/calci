const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    console.log(__dirname);
res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var r=n1+n2;
    res.send("the result is "+r);
});

app.listen(3000,function(){
    console.log("listen");
});
