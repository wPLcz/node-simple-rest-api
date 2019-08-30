const express = require('express');
const path = require('path');
const rootDirectory = require('./utility/path');
const sourceFile = require(path.join(rootDirectory, 'json-folder', 'sample.json'))
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// creating default root route
app.get('/', (req, res, next) => {
    res.send(sourceFile);
});

console.log(`running the server at "http://localhost: ${port}/"`);
app.listen(port);