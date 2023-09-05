const express=require('express');
const app=express();
const urlRouter=require('./routers/urlRouter');
const connectDB=require('./connect');
const URL =require("./models/dbmodel");
const cors=require("cors");
const dotenv=require('dotenv');
dotenv.config();

connectDB();
app.use(cors());

app.use(express.json());
app.use('/url',urlRouter);

app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    console.log(shortId);
    const entry=await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{visitedCount:{timestamp:Date.now()}},
        },
    );
   //console.log("entry is :",entry);
    res.redirect(entry.redirectURL);
});
//app.get('/',(req,res)=>res.send("Hello there"));
app.listen(4040,()=>console.log("server is running on http://localhost:4040"));