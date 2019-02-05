import mongoose from "mongoose";

let conn = mongoose.connect(`mongodb://${process.env.MONGOOSE_HOST_DEV}:${process.env.MONGOOSE_PORT_DEV}/${process.env.MONGOOSE_DATABASE}`,{useNewUrlParser: true});



let db  = conn.connection;


db.on("error",(err)=>{
    console.error(err);
    process.exit(1)
});

db.on("open", ()=>console.log(`Database started...`))



export default ()=>(conn);