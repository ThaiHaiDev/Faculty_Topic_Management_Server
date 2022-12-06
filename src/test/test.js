const app = require("../index");
const request = require("supertest");

request(app)
  .get("/api/v1/topic")
  .expect(200)
  .end(function (err, res) {
    if (err) console.log(err);
  });
