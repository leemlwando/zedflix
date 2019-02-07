// import {Media} from "../db";
const {Media}  = require("../db");



const createOne = (id,callback)=>{

         return Media.create({
                    media_title:"test file",
                    media_year_release:new Date(),
                    media_duration:10,
                    media_genre:[],
                    media_rating:[],
                    media_director:[],
                    media_votes:10,
                    media_gross:{},
                    medi_cast:[],
                    media_poster:"https://via.placeholder.com/150/771796", //media poster
                    media_metadata:"https://via.placeholder.com/150/771796", //media metadata
                    media_storage_url:"https://via.placeholder.com/150/771796", //location of media
                    type:"image", //image | video | audio,})
                })
                 .then(_media=>{
                    if(!_media){
                        return callback({success:false})
                    }

                    callback(null,_media)
                }).catch(err=>callback(err))
        
}

const fetchBulk = ()=>{}

// export default {fetchBulk,fetchOne}

module.exports = {createOne}