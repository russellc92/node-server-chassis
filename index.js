require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', async (req, res) => {
    console.log('Incoming request: ', req);

    return res
        .status(200)
        .send('hello world');
});

const port = process.env.DEP_ENV === 'production' ? (process.env.PORT || 80) : 3000;

const server = app.listen(port, function () {
    console.log('Server started on port: ', port);
})