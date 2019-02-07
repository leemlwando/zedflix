// import express from "express";
// import CreateErrors from "http-errors";

// import  Fetch from "../lib/controllers/fetch";

const express = require("express");
const createErrors = require("http-errors");
const Fetch  = require("../lib/controllers/fetch");
const Create = require("../lib/controllers/create");
const router  = express.Router();

/**
 * @{fetch} id | ids
 * @{returns} media files
 */

 router.get("/", (req,res,next)=>{
     let {id} = req.query
     Fetch.fetchOne({id},(err,media)=>res.json(err || media));
    
 })

 router.post("/",(req,res,next)=>Create.createOne(null,(err,media)=>res.json(err || media)))

// export default router;

module.exports = router;
