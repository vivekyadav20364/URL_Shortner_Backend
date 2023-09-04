const express=require("express");
const router=express.Router();
const {handleGenerateId,handleAnalytic}=require("../controllers/url");

router.post('/',handleGenerateId);
router.get('/analytic/:shortId',handleAnalytic);

module.exports=router;