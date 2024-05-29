const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PostModel = require("./db/models/postSchema");
const terms = require("./terms");
const TrendsModel = require("./db/models/trend");
// const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.get("/api/postCount", async (req, res) => {
   try {
      const postCount = await PostModel.find().count();
      res.status(200).json({
         postCount: postCount,
      });
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: "Failed to fetch data."});
   }
});

app.get("/api/randomPost", async (req, res) => {
   try {
      const postCount = await PostModel.find().count();
      const randomIndex = Math.floor(Math.random() * postCount);
      const item = await PostModel.findOne().skip(randomIndex);
      res.status(200).json({
         post: item.text,
      });
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: "Failed to fetch data."});
   }
});

app.post("/api/keywords", async (req, res) => {
   try {
      const keywords = JSON.parse(req.body.keywords);
      console.log("POST received: " + keywords);
      const posts = [];
      const keywordArray = [];
      const countsArray = [];
      for (let kword of keywords) {
         console.log("kword: " + kword);
         kword = kword.toLowerCase();
         const count = await PostModel.countDocuments({keyword: kword});
         keywordArray.push(kword);
         countsArray.push(count);
         // posts.push({keyword: kword, count: count});
      }
      posts.push(keywordArray);
      posts.push(countsArray);
      console.log("posts: ");
      console.log(posts);
      res.status(200).json({posts: posts});
   } catch (err) {
      console.error(err.message);
      res.status(500).send("Failed to fetch data");
   }
});

app.get("/api/wordcloud", async (req, res) => {
   try {
      const data = [];

      for (const kword of terms.terms) {
         const tempKeyword = kword.toLowerCase();
         const count = await PostModel.countDocuments({keyword: tempKeyword});
         const doc = await TrendsModel.findOne({keyword: tempKeyword});

         if (doc) {
            data.push({text: kword, value: count, cValue: doc.value});
         } else {
            data.push({text: kword, value: count, cValue: 0});
         }
      }

      res.status(200).json(data);
   } catch (err) {
      console.error(err.message);
      res.status(500).send("Failed to fetch data");
   }
});

module.exports = app;
