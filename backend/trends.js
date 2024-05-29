const googleTrends = require("google-trends-api");

const TrendModel = require("./db/models/trend.js");
const mongoose = require("mongoose");

const {terms} = require("./terms");

/**
 * Polls google trends data using terms.js
 * @return {Object}
 * An object containing the updated trend values for each keyword.
 */
async function pollTrends() {
   console.log("Polling trends for keywords");
   await getAllTrends(terms);
   console.log("Finished polling trends");
}

/**
 * Gets the Google Trends data for the given keywords
 * updates the database with the results.
 * @param {Array} keywords
 * An array of strings representing the keywords to search for.
 * @return {Object}
 * An object containing the updated trend values for each keyword.
 */
async function getAllTrends(keywords) {
   const trends = {};

   for (let i = 0; i < keywords.length; i++) {
      const options = {
         keyword: keywords[i],
         startTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
         granularTimeResolution: true,
      };

      try {
         const tempKeyword = keywords[i].toLowerCase();
         // Pull and format googleTrends results
         const results = await googleTrends.interestOverTime(options);
         const dataPoints = JSON.parse(results)
            .default.timelineData
            .map((entry) => isNaN(entry.value[0]) ? 0 : entry.value[0]);

         // Calculates average then rounds it
         const averageValue = dataPoints
            .reduce((sum, value) => sum + value, 0) / dataPoints
            .length;
         const roundedAverage = isNaN(averageValue) ? 0 : Math.
            round(averageValue);

         console.log(`${keywords[i]}: ${roundedAverage}`);

         trends[keywords[i]] = roundedAverage;

         const existingTrend = await TrendModel
            .findOne({keyword: tempKeyword});

         if (existingTrend) {
            existingTrend.value = roundedAverage;
            await existingTrend.save(); // update existing trend

            console.log(`Trend for '${keywords[i]}' updated in database.`);
            console.log(existingTrend);
         } else {
            const trend = new TrendModel({
               _id: new mongoose.Types.ObjectId(),
               keyword: tempKeyword,
               value: roundedAverage,
            });

            await trend.save(); // save new trend

            console.log(`Trend for '${keywords[i]}' added to database.`);
            console.log(trend);
         }
      } catch (err) {
         console.error(`Error retrieving trends for ${keywords[i]}`, err);
      }
   }

   console.log("All trends:", trends);
   return trends;
}

module.exports = {pollTrends, getAllTrends};
