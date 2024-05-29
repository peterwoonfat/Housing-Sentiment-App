const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trend = new Schema({
   _id: mongoose.Schema.Types.ObjectId,
   keyword: String,
   value: Number,
});

const trendModel = mongoose.model("Word", trend);

module.exports = trendModel;
