
require("dotenv").config()
const express = require("express");
require("./lib/db/conn")


// import ApiV1Routes from "../api/api.v1"
const ApiV1Routes  = require("./api/api.v1");
// dotenv.config(); //load enviroment
const app = express();


app.use("/api/v1",ApiV1Routes);


module.exports = app;
// export default app;