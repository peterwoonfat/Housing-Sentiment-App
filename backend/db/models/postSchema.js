const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postsSchema = new Schema({
   _id: mongoose.Schema.Types.ObjectId,
   text: String,
   url: String,
   keyword: String,
});

const PostModel = mongoose.model("Post", postsSchema);

module.exports = PostModel;
