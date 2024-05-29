const { connect, close } = require('./connect');
const { expect } = require("chai");
const app = require("../../../app.js");
const request = require('supertest');
const PostModel = require("../../../db/models/postSchema");

describe("GET /api/randomPost", () => {

  beforeEach(async function() {
    await connect();
  });

  afterEach(async function() {
    await close();
  });

  it("should return a random post", async () => {
    // Insert test data into the in-memory database
    const testData = [
      { text: "Test post 1" },
      { text: "Test post 2" },
      { text: "Test post 3" },
    ];
    await PostModel.insertMany(testData);

    // Send a request to the endpoint
    const response = await request(app).get("/api/randomPost");

    // Check that the response is successful and contains the correct post
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("post");
    console.log("Random Post:");
    console.log(response.body.post);
    expect(testData.some((post) => post.text === response.body.post))
        .to.be.true;

    return Promise.resolve();
  });

  it("should return an error if the database is empty", async () => {
  
    // Send a request to the endpoint
    const response = await request(app).get("/api/randomPost");
  
    // Check that the response is an error
    expect(response.status).to.equal(500);
    expect(response.body)
        .to.have.property("message", "Failed to fetch data.");

    return Promise.resolve();
  });
});
