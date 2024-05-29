const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const { connect, close } = require('./connect');
const app = require("../../../app.js");
const PostModel = require("../../../db/models/postSchema");

chai.use(chaiHttp);

describe("POST /api/keywords", () => {
  beforeEach(async function() {
    await connect();
  });

  afterEach(async function() {
    await close();
  });

  it("should return the count of posts for each keyword", async () => {
    // add some test data to the database
    const testData = [
      { text: "post with keyword1", keyword: "keyword1" },
      { text: "post with keyword2", keyword: "keyword2" },
      { text: "post with keyword2", keyword: "keyword2" },
      { text: "post with keyword3", keyword: "keyword3" },
    ];
    await PostModel.insertMany(testData);

    const keywords = ["keyword1", "keyword2", "keyword3"];

    const response = await chai
      .request(app)
      .post("/api/keywords")
      .send({ keywords: JSON.stringify(keywords) });

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      posts: [["keyword1", "keyword2", "keyword3"], [1, 2, 1]],
    });
  });

  it("should return an error if the request body is not valid", async () => {
    const response = await chai.request(app).post("/api/keywords").send({});

    expect(response.status).to.equal(500);
    expect(response.text).to.equal("Failed to fetch data");
  });
});