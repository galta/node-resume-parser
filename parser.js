const pdfParse = require('pdf-parse');
const fetch = require('node-fetch');


const { extractSections } = require('./parser-utils/extractSections');
const { parseIntroSection } = require('./parser-utils/parseIntroSection');
const { parseEducationSection } = require('./parser-utils/parseEducationSection');
const { parseEmploymentHistorySection } = require('./parser-utils/parseEmploymentHistorySection');

const readPdf = async (uri) => {
    try {
        const response = await fetch(uri);
        if (response.status !== 200) {
            throw `Error - Can't fetch file. [${uri}] [status: ${response.status}]`;
        }

        // Check if file is PDF file
        const responseText = await response.text();
        if (responseText.substring(0,5) !== '%PDF-') {
            throw `Error - File is not a PDF file. [${uri}] [status: ${response.status}]`;
        }

        const data = await pdfParse(response);

        return data;
    } catch (error) {
        throw error;
    }
}

module.exports.processPdf = async (uri) => {
    try {
        const data = await readPdf(uri);
        const pdfSections = extractSections(data?.text);

        const intro = parseIntroSection(pdfSections.intro);
        const education = parseEducationSection(pdfSections.education);
        const employmentHistory = parseEmploymentHistorySection(pdfSections.employmentHistory);

        const pdfInformation = {
            "contact-info": {
                "name": intro.fullName
            },
            "experience": employmentHistory
        }

        return pdfInformation;
    } catch (error) {
        throw error;
    }
}
