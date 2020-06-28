const mongoose = require('mongoose');
const COUNTRY_CODES = require('./../../../constants/COUNTRY_CODES');
mongoose.set('debug', true);

const covidStatusByDateSchema = {
    iso_code: {
        type: 'string',
        enum: COUNTRY_CODES,
        required: [true, 'iso code is required'],
    },
    location: { type: 'string' },
    date: {
        type: 'date',
    },
    total_cases: { type: 'number' },
    new_cases: { type: 'number' },
    total_deaths: { type: 'number' },
    new_deaths: { type: 'number' },
    total_tests: { type: 'number' },
    new_tests: { type: 'number' },
    // tests_units: { type: 'string' },
    cvd_death_rate: { type: 'number' },
    hospital_beds_per_thousand: { type: 'number' },
};

module.exports = mongoose.model(
    'covid_status_by_date',
    covidStatusByDateSchema,
    'covid_status_by_date',
);
