const args = require('minimist')(process.argv.slice(2));
const { processPdfByUrl } = require('./processPdfByUrl.js');
const pdf = args?.pdf;

if (!pdf) {
    console.log('Error - Missing --pdf=[url] parameter');
    process.exit();
}

const main = async (pdfUri) => {
    try {
        const pdfInformation = await processPdfByUrl(pdfUri);
        console.log(pdfInformation);
            
    } catch (error) {
        console.log({ error: error.message || error});
    }
    process.exit(); 
}

main(pdf);