const app = require("./app.js");
const db = require("./db/index.js");
const reddit = require("./reddit.js");
const trends = require("./trends.js")
// const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

db.connect()
   .then(() => {
      app.listen(PORT, () => {
         console.log("Listening on port: " + PORT);
      });

      reddit.pollReddit();
      setInterval(reddit.pollReddit, 30*60000);

      trends.pollTrends();
      setInterval(trends.pollTrends, 1000 * 60 * 60 * 24);
   });
