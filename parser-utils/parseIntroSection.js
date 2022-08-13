const linesDelimiters = ' \n';

module.exports.parseIntroSection = (introSection) => {
    const rows = introSection.split(linesDelimiters).map((row => row.trim()));

    // Check Intro Section
    if (rows?.length !== 6 || rows[1] !== '') {
        throw `Error - Wrong Intro Format`;
    }

    return {
        fullName: rows[0],
        address1: rows[2],
        address2: rows[3],
        email: rows[4],
        phone: rows[5],
    }
}