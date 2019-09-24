const express = require('express');
const getMeme = require('./models/getMeme');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(cors())

getMeme.run();

setInterval(() => {
    getMeme.run();
}, 600000)

// creating default root route for api request
app.get('/', (req, res) => {
    console.log(getMeme.memeData);
    res.json(getMeme.memeData);
});

console.log(`running the server at "http://localhost: ${port}/"`);
app.listen(port);