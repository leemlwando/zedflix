import mongoose from "mongoose";

const Schema  = mongoose.Schema;


// const MediaSchema = new Schema({
//     poster:String, //media poster
//     metadata:Object, //media metadata
//     location:String, //location of media
//     type:{enum:["video","image", "audio"]}, //image | video | audio,
// });




// const mongoose  = require("mongoose");

// const Schema = mongoose.Schema;


const MediaSchema = new Schema({
    media_parent_id:{type:Schema.Types.ObjectId},
    media_title:String,
    media_year_release:{type:Date},
    media_duration:Number,
    media_genre:[],
    media_rating:[],
    media_director:[],
    media_votes:Number,
    media_gross:{},
    medi_cast:[],
    media_poster:String, //media poster
    media_metadata:Object, //media metadata
    media_storage_url:String, //location of media
    type:{enum:["video","image", "audio"]}, //image | video | audio,
});


// module.exports = {MediaSchema};
export default {MediaSchema};