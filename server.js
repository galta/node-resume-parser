const express = require('express');
const { processPdfByUrl } = require('./processPdfByUrl.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/parser/', async (req, res, next) => {
    try {

        // Check for query param: pdf
        if (!req.query.pdf){
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