import http from "http";
import app from "../index"

http.createServer(app).listen(process.env.PORT,()=>console.log(`Zedflix catalogue started on ${process.env.PORT}`))