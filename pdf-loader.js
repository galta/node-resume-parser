const pdfParse = require('pdf-parse');
const fetch = require('node-fetch');

module.exports.loadPdfByUri = async (uri) => {
    try {
        const response = await fetch(uri).catch(error => { throw `Error - Can't fetch file. [${uri}]`; });
        if (response.status !== 200) {
            throw `Error - Can't fetch file. [${uri}] [status: ${response.status}]`;
        }

        // Check if file is PDF file
        const responseText = await response.text();
        if (responseText.substring(0, 5) !== '%PDF-') {
            throw `Error - File is not a PDF file. [${uri}] [status: ${response.status}]`;
        }

        const data = await pdfParse(response);

        return data;
    } catch (error) {
        throw error;
    }
}
