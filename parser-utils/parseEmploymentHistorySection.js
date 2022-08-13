const sectionsDelimiters = ' \n \n';
const linesDelimiters = ' \n';

const extractCompanyAndDates = (companyAndDatesLine) => {
    const lineParts = companyAndDatesLine.replace('–', '-').split('-').map(line => line.trim());
    const datesPart = lineParts.pop();
    const company = lineParts.join(' - ');
    const dates = datesPart.split(' to ');
    const startDate = dates[0];
    const endDate = dates[1];
    return [company, startDate, endDate];
}

const extractSectionData = (section) => {
    const sectionLines = section.split(linesDelimiters);

    const title = sectionLines.shift()
    const companyAndDatesLine = sectionLines.shift();
    const experienceLines = sectionLines.map(line => line.replace('• ', '').trim());

    const [company, startDate, endDate] = extractCompanyAndDates(companyAndDatesLine);

    return {
        "start-date": startDate,
        "end-date": endDate,
        title,
        description: experienceLines.join(' • '),
        company
    }
}


module.exports.parseEmploymentHistorySection = (employmentHistorySection) => {
    const sections = employmentHistorySection.split(sectionsDelimiters).map((row => row.trim()));
    return sections.map((section) => extractSectionData(section));
}
