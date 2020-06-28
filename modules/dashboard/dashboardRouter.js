const express = require('express');

const router = express.Router();
const dashboardService = require('./dashboardService');

router.get('/:isoCode', async (req, res, next) => {
    try {
        const data = await dashboardService.getAllDataByCountry(
            req.params.isoCode,
        );
        res.status(200).json({ success: true, data });
    } catch (e) {
        console.log(e);
        next(e);
    }
});

router.get('/:isoCode/deathsPerDate', async (req, res, next) => {
    try {
        const data = await dashboardService.getDeathsPerDateForACountry(
            req.params.isoCode,
        );
        res.status(200).json({ success: true, data });
    } catch (e) {
        console.log(e);
        next(e);
    }
});

module.exports = router;
