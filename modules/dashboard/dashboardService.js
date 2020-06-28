const dashboardRepository = require('./dashboardRepository');
const dashboardManger = require('./processData/dashboardManager');

const getAllDataByCountry = async (isoCode) => {
    try {
        return dashboardRepository.getAllQuiresByISOCode(isoCode);
    } catch (error) {
        console.log(error);
        return error;
    }
};

const getDeathsPerDateForACountry = async (isoCode) => {
    try {
        const allDataForTheCountry = await dashboardRepository.getAllQuiresByISOCode(
            isoCode,
        );
        return dashboardManger.getDeathsPerDate(allDataForTheCountry);
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = { getAllDataByCountry, getDeathsPerDateForACountry };
