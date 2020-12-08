const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello world!");
});
app.post("/add",(req,res)=>{
    const body=req.body;
    const num1=body.num1;
    const num2=body.num2;
    const sumResult=num1+num2;
    if(num1<-1000000 || num2<-1000000 || sumResult <-1000000)
    {
        res.send(
            {
                status:"error",
                message: "Underflow"
            }
        );
    }
    else if(num1>1000000 || num2>1000000 || sumResult>1000000)
    {
        res.send(
            {
                status:"error",
                message: "Overflow"
            }
        );
    }
    else if(typeof num1=="string" || typeof num2=="string")
    {
        res.send(
            {
                status:"error",
                message: "Invalid data types"
            }
        );
    }
    else
    {
        res.send(
            {
                status: "success",
                message: "the sum of given two numbers",
                sum: num1+num2
            }
        );
    }
});

app.post("/sub",(req,res)=>{
    const body=req.body;
    const num1=body.num1;
    const num2=body.num2;
    const sumResult=num1-num2;
    if(num1<-1000000 || num2<-1000000 || sumResult <-1000000)
    {
        res.send(
            {
                status:"error",
                message: "Underflow"
            }
        );
    }
    else if(num1>1000000 || num2>1000000 || sumResult>1000000)
    {
        res.send(
            {
                status:"error",
                message: "Overflow"
            }
        );
    }
    else if(typeof num1=="string" || typeof num2=="string")
    {
        res.send(
            {
                status:"error",
                message: "Invalid data types"
            }
        );
    }
    else
    {
        res.send(
            {
                status: "success",
                message: "the difference of given two numbers",
                difference: num1-num2
            }
        );
    }
});


app.post("/multiply",(req,res)=>{
    const body=req.body;
    const num1=body.num1;
    const num2=body.num2;
    const sumResult=num1*num2;
    if(num1<-1000000 || num2<-1000000 || sumResult <-1000000)
    {
        res.send(
            {
                status:"error",
                message: "Underflow"
            }
        );
    }
    else if(num1>1000000 || num2>1000000 || sumResult>1000000)
    {
        res.send(
            {
                status:"error",
                message: "Overflow"
            }
        );
    }
    else if(typeof num1=="string" || typeof num2=="string")
    {
        res.send(
            {
                status:"error",
                message: "Invalid data types"
            }
        );
    }
    else
    {
        res.send(
            {
                status: "success",
                message: "the product of given two numbers",
                result: num1*num2
            }
        );
    }
});

app.post("/divide",(req,res)=>{
    const body=req.body;
    const num1=body.num1;
    const num2=body.num2;
    try{
        var sumResult=num1/num2;
    }catch(e){
        console.log(e);
    }
    if(num2==0)
    {
        res.send(
            {
                status:"error",
                message: "Cannot divide by zero"
            }
        );
    }
    else if(num1<-1000000 || num2<-1000000 || sumResult <-1000000)
    {
        res.send(
            {
                status:"error",
                message: "Underflow"
            }
        );
    }
    else if(num1>1000000 || num2>1000000 || sumResult>1000000)
    {
        res.send(
            {
                status:"error",
                message: "Overflow"
            }
        );
    }
    else if(typeof num1=="string" || typeof num2=="string")
    {
        res.send(
            {
                status:"error",
                message: "Invalid data types"
            }
        );
    }
    
    else
    {
        res.send(
            {
                status: "success",
                message: "the division of given two numbers",
                result: num1/num2
            }
        );
    }
});

app.listen(port);

module.exports = app;