import {Media} from "../db";



const fetchOne = (id,callback)=>{
 
         Media.get({_id:id})
            .then(_media=>callback(null,_media)).catch(err=>callback(err))
   
}

const fetchBulk = ()=>{}

export default {fetchBulk,fetchOne}