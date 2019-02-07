// import http from "http";
// import app from "../index"

const app = require("../app");
const http = require("http");

http.createServer(app).listen(process.env.PORT,()=>console.log(`Zedflix catalogue started on ${process.env.PORT}`)) 