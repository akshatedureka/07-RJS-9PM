const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const app = express();

//MIME Type
app.use(express.json());
app.use(cors());


//create reference variable by using mongodb library
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable
//where "ashokIT" used to connect to mongodb database


//create the post request
app.post("/login",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@07reactjs.i39e5.mongodb.net/07reactjs?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("07reactjs");
            db.collection("login_details").find({"uname":req.body.uname,"upwd":req.body.upwd}).toArray((err,array)=>{
                if(err) throw err;
                else{
                   if(array.length>0){
                       res.send({"login":"success"});
                   }else{
                       res.send({"login":"fail"});
                   } 
                }
            })
        }
    });
});

app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});

