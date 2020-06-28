const covidStatusByDateModel = require('../../common/db/models/covidStatusByDateModel');

const getAllQuiresByISOCode = async (isoCode) =>
    covidStatusByDateModel.find({
        iso_code: isoCode,
    });

module.exports = { getAllQuiresByISOCode };
