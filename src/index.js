const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

const request = require("supertest");
const assert = require("assert");

const port = 3001
const db = require('./config/db')  // Connect data
const route = require('./routes')

// Fix req.body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Connect Database
db.connect()

// Khi xài cookies thì phải có cors config này với url là của FE
// app.use(cors({
//     origin: ["*", "http://localhost:3000/", "https://main--harmonious-tarsier-7abd94.netlify.app/"],
// }))

// Your origin prop in cors({})
app.use(cors({
    origin: [
        "https://main--harmonious-tarsier-7abd94.netlify.app/", "http://localhost:3000/"
    ],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
    origin: true,
}))


app.use(cookieParser())
app.use(express.json())

// Routes init
route(app)

// Test get all topic
// request(app)
//   .get("/api/v1/topic")
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//     else console.log('It should respond with 200 success API Get All Topic')
// });

// Test api get all user
// request(app)
//   .get("/api/v1/user")
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//     else console.log('It should respond with 200 success API Get All User')
// });

// describe("TEST planets", () => {
//   describe("GET /planets", () => {
//     test("It should respond with 200 success", async () => {
//       await request(app)
//         .get("/api/v1/topic")
//         .expect("Content-Type", /json/)
//         .expect(200);
//     });
//   });
// });

app.listen(process.env.PORT || port, () => {
    console.log(`App listening on port ${port}`)
})
