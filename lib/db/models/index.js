// const {MediaSchema}  = require("../methods");
import {MediaSchema} from "../methods";
// const mongoose = require("mongoose");
import mongoose from "mongoose";






const Media = mongoose.model("Media",MediaSchema);





// module.exports = {Media};

export default {Media}