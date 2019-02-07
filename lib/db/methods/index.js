const {MediaSchema} = require("../schema");
// import {MediaSchema} from "../schema/index";
// console.log(MediaSchema)
MediaSchema.methods.saveMedia = function(media,callaback){

};

MediaSchema.methods.deleteMedia = function(medialId,callaback){

};


MediaSchema.methods.editOne = function(MediaId,callaback){};

MediaSchema.methods.BulkEdit = function(MediaIds,callaback){};

MediaSchema.methods.fetchOne = function(MediaId,callaback){};

MediaSchema.methods.BulkFetch = function(MediaIds,callaback){};


module.exports  = {MediaSchema};

// export default {MediaSchema};


