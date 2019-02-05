import express from "express";
import CreateErrors from "http-errors";
const router  = express.Router();
import  Fetch from "../lib/controllers/fetch";

/**
 * @{fetch} id | ids
 * @{returns} media files
 */

 router.get("/", (req,res,next)=>{
   
      Fetch.fetchOne(null,(media)=>res.json(media));
    
 })

export default router;
