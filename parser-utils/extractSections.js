
const splitByStrings = (str, splitFrom, splitTo) => {
    if (splitFrom === '') {
        return str.split(splitTo)?.[0]?.trim();
    }
    if (splitTo === '') {
        return str.split(splitFrom)?.[1]?.trim();
    }
    return str.split(splitFrom).pop().split(splitTo)[0]?.trim();
}

module.exports.extractSections = (pdfText) => {

    // Check Sections structure
    const educationPos = pdfText.indexOf('EDUCATION');
    const employmentHistoryPos = pdfText.indexOf('EMPLOYMENT HISTORY');
    if (educationPos === -1 || employmentHistoryPos === -1 || educationPos > employmentHistoryPos) {
        throw `Error - Wrong Resume Format - Can't extract sections`;
    }
    
    const intro = splitByStrings(pdfText, '', 'EDUCATION');
    const education = splitByStrings(pdfText, 'EDUCATION', 'EMPLOYMENT HISTORY');
    const employmentHistory = splitByStrings(pdfText, 'EMPLOYMENT HISTORY', '');

    return {
        intro,
        education,
        employmentHistory
    }
}