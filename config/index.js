// import dotenv from "dotenv/config";
require("dotenv").config()
import express from "express";
import Db from "../lib/db/conn"
import ApiV1Routes from "../api/api.v1"
// dotenv.config(); //load enviroment
const app = express();
Db();

app.use("/api/v1",ApiV1Routes);


export default app;