// import {Media} from "../db";
const {Media}  = require("../db");



const fetchOne = (params,callback)=>{
   if(!params){
      return callback({success:false, message:"please provide a valid message"})
   }
         return Media.findOne({_id:params.id})
            .then(_media=>callback(null,_media)).catch(err=>callback(err))
   
}

const fetchBulk = (params,callback)=>{
   if(!params){
      return callback({success:false, message:"please provide a valid message"})
   }
   return Media.find(params.search || {})
            .skip(params.skip || 0)
            .sort(params.sort || 1)
            .limit(params.limit || 10) //limit to fetching 10 at any one point
            .then(_media=>callback(null,_media)).catch(err=>callback(err))
}

// export default {fetchBulk,fetchOne}

module.exports = {fetchBulk,fetchOne}