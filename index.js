require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.use(async (req, res, next) => {
//     console.log("Incoming request: ", req);
//     console.log("\n\n\n\nres: ", res);
//     next();
// });


app.get('/', async (req, res) => {
    return res
        .status(200)
        .send('hello world');
});

// Invalid route
app.get('*', async (req, res) => {
    return res
        .status(404)
        .send('404d');
});

const port = process.env.DEP_ENV === 'production' ? (process.env.PORT || 80) : 3000;

const server = app.listen(port, function () {
    console.log('Server started on port: ', port);
})