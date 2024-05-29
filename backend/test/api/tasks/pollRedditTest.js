const reddit = require("../../../reddit.js");
const chai = require("chai");
const expect = chai.expect;
//const {connect, close} = require("./connect");
//const sinon = require("sinon");
//const PostModel = require("../../../db/models/postSchema");

describe("getPostWithKeywords", () => {
   it("should return an array when given valid arguments", (done) => {
      const keywords = ["housing", "rent"];
      const amountPerKeyword = "10";

      reddit.getPostsWithKeywords(keywords, amountPerKeyword)
         .then((posts) => {
            expect(posts).to.be.an("array");

            for (const post of posts) {
               expect(post).to.have.property("text");
               expect(post).to.have.property("url");
               expect(post).to.have.property("keyword");

               expect(post.text).to.be.a("string");
               expect(post.url).to.be.a("string");
               expect(post.keyword).to.be.a("string");
            }

            done();
         });
   });

   it("should return an empty array when given invalid keywords", (done) => {
      const keywords = [""];
      const amountPerKeyword = "10";

      reddit.getPostsWithKeywords(keywords, amountPerKeyword)
         .then((posts) => {
            expect(posts).to.be.an("array");
            expect(posts.length).to.equal(0);
            done();
         });
   });

   it("should return an empty array when given invalid amountPerKeyword (-1)",
      (done) => {
         const keywords = ["housing"];
         const amountPerKeyword = "-1";

         reddit.getPostsWithKeywords(keywords, amountPerKeyword)
            .then((posts) => {
               expect(posts).to.be.an("array");
               expect(posts.length).to.equal(0);

               done();
            });
      });

   it("should return an empty array when given invalid amountPerKeyword (101)",
      (done) => {
         const keywords = ["housing"];
         const amountPerKeyword = "101";

         reddit.getPostsWithKeywords(keywords, amountPerKeyword)
            .then((posts) => {
               expect(posts).to.be.an("array");
               expect(posts.length).to.equal(0);

               done();
            });
      });

   it("should return an empty array when given invalid amountPerKeyword (abc)",
      (done) => {
         const keywords = ["housing"];
         const amountPerKeyword = "abc";

         reddit.getPostsWithKeywords(keywords, amountPerKeyword)
            .then((posts) => {
               expect(posts).to.be.an("array");
               expect(posts.length).to.equal(0);

               done();
            });
      });
});

/*
describe("pollReddit", () => {
   beforeEach(async function() {
      await connect();
      sinon.stub(console, "log");
      sinon.stub(console, "error");
   });

   afterEach(async function() {
      await close();
      sinon.restore();
   });

   it("should save a post to the database", async () => {
      const getPostsStub = sinon.stub().resolves([
         {text: "Test post 1", url: "https://www.reddit.com/post1", keyword: "test"},
      ]);
      sinon.replace(reddit, "getPostsWithKeywords", getPostsStub);

      await reddit.pollReddit();

      const testPost = await PostModel.findOne({url: "https://www.reddit.com/post1"});

      expect(testPost).to.have.property("keyword");
      expect(testPost).to.have.property("url");
      expect(testPost).to.have.property("text");

      expect(testPost.keyword).to.equal("test");
      expect(testPost.url).to.equal("https://www.reddit.com/post1");
      expect(testPost.text).to.equal("Test post 1");

      return Promise.resolve();
   });

   it("should not save a duplicate post to the database", async () => {
      const getPostsStub = sinon.stub().resolves([
         {text: "Test post 1", url: "https://www.reddit.com/post1", keyword: "test"},
      ]);
      sinon.replace(reddit, "getPostsWithKeywords", getPostsStub);

      await reddit.pollReddit();
      await reddit.pollReddit();

      const testPost = await PostModel.find({url: "https://www.reddit.com/post1"});

      expect(testPost.length).to.equal(1);

      return Promise.resolve();
   });
});
*/
