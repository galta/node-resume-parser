const args = require('minimist')(process.argv.slice(2));
const { processPdfByUrl } = require('./processPdfByUrl.js');
const url = args?.url;

if (!url) {
    console.log('Error - Missing --url=[url] parameter');
    process.exit();
}

const main = async (uri) => {
    try {
        const pdfInformation = await processPdfByUrl(uri);
        console.log(pdfInformation);
            
    } catch (error) {
        console.log({ error: error.message || error});
    }
    process.exit(); 
}

main(url);

// process.exit();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.static('public'))

// app.get('/', async (req, res, next) => {
//     try {

//         // Check for query param: pdf
//         if (!req.query.pdf){
//             res.status(400).send('Error:  Missing ?pdf= parameter');
//             return; 
//         }

//         const pdfUri = req.query.pdf;
//         const pdfInformation = await processPdfByUrl(pdfUri);
//         res.send(pdfInformation);

//     } catch (error) {
//         next(error);
//     }
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })