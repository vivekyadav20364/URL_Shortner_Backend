const shortid = require("shortid");
const URL=require('../models/dbmodel');
const handleGenerateId=async (req,res)=>{
  const url=req.body.url;
  if(!url){
    res.status(400).json("Please pass URL");
  }
  const resp=await URL.find({redirectURL:url});
  //console.log(resp);
 if(resp.length!=0){
  return res.json({id:resp[0].shortId});
 }

  const shortId = shortid();
  await URL.create({
   shortId:shortId,
   redirectURL:url,
   visitedCount:[],
  });
  return res.json({id:shortId});
}

const handleAnalytic=async(req,res)=>{
  const shortId=req.params.shortId;
  const result=await URL.findOne({shortId});
  return res.json({
    Totalclicks:result.visitedCount.length,
    Analytics:result.visitedCount,
  }) ;
}

module.exports={
    handleGenerateId,handleAnalytic,
}