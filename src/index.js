const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

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
        "https://main--harmonious-tarsier-7abd94.netlify.app/",
    ],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
    origin: true,
}))


app.use(cookieParser())
app.use(express.json())

// Routes init
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
