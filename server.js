const express = require('express');
const { processPdfByUrl } = require('./processPdfByUrl.js');
var fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

// Display README.md file for server's root
app.get('/', async (req, res, next) => {
    var file = fs.readFileSync(path.join(__dirname, '/README.md'), 'utf8');
    res.send(marked(file.toString()));
})

app.get('/parser/', async (req, res, next) => {
    try {

        // Check for query param: pdf
        if (!req.query.pdf) {
            res.status(400).send('Error:  Missing ?pdf= parameter');
            return;
        }

        const pdfUri = req.query.pdf;
        const pdfInformation = await processPdfByUrl(pdfUri);
        res.send(pdfInformation);

    } catch (error) {
        next(error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})