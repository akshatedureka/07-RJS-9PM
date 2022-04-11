const express = require("express");
const cors = require("cors");

const app = express();
//where "app" is the rest object
//where "app" object used to develop rest services


//enable cors policy
app.use( cors() );


app.use(express.json());


//read the token (header part)
const middleware = (req,res,next)=>{
    const allHeaders = req.headers;
    if(allHeaders.token == "reactjs"){
        next();
    }else{
        res.json({"message":"unauthorized user"});
    }
};


//create post request
app.post("/login",[middleware],(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    if(email == "ashokit" && password == "ashokit123"){
        res.json({"login":"success"})
    }else{
        res.json({"login":"fail"});
    }    
});


app.listen(8080,()=>{
    console.log("server listening the port no . 8080");
});



