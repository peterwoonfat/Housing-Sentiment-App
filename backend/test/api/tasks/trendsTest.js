const chai = require("chai");
const expect = chai.expect;
const TrendModel = require("../../../db/models/trend.js");
const {getAllTrends} = require("../../../trends.js");
const { connect, close } = require('./connect');

describe("getAllTrends()", () => {
    before(async function() {
        await connect();
      });
    
      after(async function() {
        await close();
      });
      
    it("Should have no trends in DB", async () => {
        const trendCount = await TrendModel.countDocuments();
        expect(trendCount).to.equal(0);
    });

    it("Should add 3 trends to DB", async () => {
      const keywords = ["test1", "test2", "test3"];
      await getAllTrends(keywords);

      const trendCount = await TrendModel.countDocuments();
      expect(trendCount).to.equal(3);

      const trend1 = await TrendModel.findOne({keyword: "test1"});
      expect(trend1).to.not.be.null;

      const trend2 = await TrendModel.findOne({keyword: "test2"});
      expect(trend2).to.not.be.null;

      const trend3 = await TrendModel.findOne({keyword: "test3"});
      expect(trend3).to.not.be.null;
   });

   it("Should update 3 trends to DB", async () => {
    const keywords = ["test1", "test2", "test3"];
    await getAllTrends(keywords);

    const trendCount = await TrendModel.countDocuments();
    expect(trendCount).to.equal(3);

    const trend1 = await TrendModel.findOne({keyword: "test1"});
    expect(trend1).to.not.be.null;

    const trend2 = await TrendModel.findOne({keyword: "test2"});
    expect(trend2).to.not.be.null;

    const trend3 = await TrendModel.findOne({keyword: "test3"});
    expect(trend3).to.not.be.null;
 });

});
