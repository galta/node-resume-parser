const { extractSections } = require('./extractSections');
const { parseIntroSection } = require('./parseIntroSection');
const { parseEducationSection } = require('./parseEducationSection');
const { parseEmploymentHistorySection } = require('./parseEmploymentHistorySection');

module.exports.parsePdfTextContent = async (pdfTextContent) => {
    try {
        const pdfSections = extractSections(pdfTextContent);

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
