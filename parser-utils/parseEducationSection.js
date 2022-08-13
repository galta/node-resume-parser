const linesDelimiters = ' \n';

module.exports.parseEducationSection = (education) => {
    const rows = education.split(linesDelimiters).map((row => row.trim()));
    return rows.map((row) => {
        const rowParts = row.split('–');
        return {
            title: rowParts[0]?.trim(),
            duration: rowParts[1]?.trim()
        }
    })
}