// const {Med}  = require("../methods");
// import mongoose from "mongoose";
// import {MediaSchema} from "../methods";
const {MediaSchema} = require("../methods")
const mongoose = require("mongoose");







const Media = mongoose.model("Media",MediaSchema);





module.exports = {Media};

// export default {Media}