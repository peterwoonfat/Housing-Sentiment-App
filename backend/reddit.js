const axios = require("axios");
// const natural = require("natural");
// const tfidf = new natural.TfIdf();
// const { application } = require('express');
// const tokenizer = new natural.WordTokenizer();
// const stopwords = require("stopword");
const terms = require("./terms");
const PostModel = require("./db/models/postSchema.js");
const mongoose = require("mongoose");

/**
* @param {list} keywords
* @param {string} amountPerKeyword
* @return {list}
*/
function getPostsWithKeywords(keywords, amountPerKeyword) {
   return new Promise((resolve, reject) => {
      try {
         const posts = [];
         const promises = [];

         const num = Number(amountPerKeyword);
         if (isNaN(num) || num < 0 || num > 100) {
            resolve(posts);
         }

         for (let word of keywords) {
            if (word.length == 0) {
               continue;
            }

            word = word.toLowerCase();
            console
               .log("Searching Reddit for posts containing word(s): " +
               word);
            const term = word.replace(" ", "+");
            const promise = axios
               .get(
                  "https://www.reddit.com/search.json?limit=" +
                              amountPerKeyword + "&q=" +
                              term + "&type=comment")
               .then((response) => {
                  console.log("Handling Reddit response");
                  const items = response.data.data.children;
                  items.forEach(function(item) {
                     if (item.data) {
                        if (item.data.selftext &&
                  item.data.permalink) {
                           posts.push({
                              text: item.data.selftext,
                              url: item.data.permalink,
                              keyword: word,
                           });
                        }
                     }
                  });
               });
            promises.push(promise);
         }

         Promise.all(promises).then(() => {
            console.log("Returning posts");
            resolve(posts);
         });
      } catch (error) {
         console.error(error);
         reject(error);
      }
   });
}

/**
* @param {list} posts
* @return {list}
*/
// function filterPosts(posts) {
//    let allPosts = "";
//    const processed = [];
//    const words = [];

//    try {
//       posts.forEach((post) => {
//          allPosts += post;
//       });

//       allPosts = allPosts.toLowerCase();
//       const filteredText = stopwords.
//          removeStopwords(allPosts.split(" ")).
//          join(" ");
//       tfidf.addDocument(filteredText);

//       tokenizer
//          .tokenize(filteredText)
//          .forEach(
//             function freq(word) {
//                if (+word ||
//                   word.length < 3 ||
//                   ~processed.indexOf(word)) return;

//                words.push({
//                   word: word,
//                   score: tfidf.tfidf(word, 0),
//                });
//             });
//    } catch (error) {
//       console.error(error);
//    }

//    return words;
// }

/**
 * function polls reddit for posts with keywords and saves them to the database
 */
async function pollReddit() {
   console.log("Polling Reddit...");

   getPostsWithKeywords(terms.terms,
      "10")
      .then((posts) => {
         console.log("Reddit posts retrieved");
         posts.forEach((post) => {
            PostModel.findOne({url: post.url, keyword: post.keyword},
               (err, doc) => {
                  if (err) {
                     console.error(err);
                     return;
                  }

                  if (!doc) {
                     const item = new PostModel({
                        _id: new mongoose.Types.ObjectId(),
                        text: post.text,
                        url: post.url,
                        keyword: post.keyword,
                     });
                     item.save().
                        then(() => {
                           console.log("Item saved to database");
                        })
                        .catch((err) => {
                           console.log("Could not save item to database: " +
                           err);
                        });
                  } else {
                     console.log("Post already saved");
                  }
               });
         });
      })
      .catch((error) => {
         console.error(error);
      });
}

module.exports = {pollReddit, getPostsWithKeywords};
