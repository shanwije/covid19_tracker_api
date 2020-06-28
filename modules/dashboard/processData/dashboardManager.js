const _ = require('lodash');

const getDeathsPerDate = (allData) => {
    return _.map(allData, (record) => ({
        total_deaths: _.get(record, 'total_deaths', 0),
        date: _.get(record, 'date', null),
    }));
};

const getPatientsPerDate = (allData) => {
    return _.map(allData, (record) => ({
        total_cases: _.get(record, 'total_cases', 0),
        date: _.get(record, 'date', null),
    }));
};

module.exports = { getDeathsPerDate, getPatientsPerDate };
