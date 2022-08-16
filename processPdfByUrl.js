
const { loadPdfByUri } = require('./pdf-loader');
const { parsePdfTextContent } = require('./parser-utils/parsePdfTextContent');

module.exports.processPdfByUrl = async (uri) => {
    try {
        const data = await loadPdfByUri(uri);
        const pdfInformation = parsePdfTextContent(data?.text);
        return pdfInformation;
    } catch (error) {
        throw error;
    }
}
