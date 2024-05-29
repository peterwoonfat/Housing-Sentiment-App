const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app.js");
const PostModel = require("../../../db/models/postSchema");
const { connect, close } = require('./connect');

describe("Testing routes for /api/postCount", function() {
  
  beforeEach(async function() {
    await connect();
  });

  afterEach(async function() {
    await close();
  });

  it("GET post count when db has no posts", async () => {
    // Send a request to the endpoint
    const response = await request(app).get("/api/postCount");

    //Checks post count if it is equal to 0
    const postCount = response.body.postCount;
    expect(response.status).to.equal(200);
    expect(postCount).to.equal(0);
    console.log("Post Count:");
    console.log(postCount);

    return Promise.resolve();
  });

   it("GET post count when db has posts", async () => {
    // Insert test data into the in-memory database
    const testData = [
      { text: "Test post 1" },
      { text: "Test post 2" },
      { text: "Test post 3" },
    ];
    await PostModel.insertMany(testData);

    // Send a request to the endpoint
    const response = await request(app).get("/api/postCount");

    //Checks post count if it is equal to 3
    const postCount = response.body.postCount;
    expect(response.status).to.equal(200);
    expect(postCount).to.equal(3);
    console.log("Post Count:");
    console.log(postCount);

    return Promise.resolve();
  });
});
