const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const {connect, close} = require("./connect");
const app = require("../../../app.js");
const terms = require("../../../terms");

chai.use(chaiHttp);

describe("GET /api/wordcloud", () => {
   beforeEach(async function() {
      await connect();
   });

   afterEach(async function() {
      await close();
   });

   it("should return the wordcloud data on a GET request", async () => {
      const response = await chai
         .request(app)
         .get("/api/wordcloud");

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array").with.lengthOf(terms.terms.length);
   });
});
