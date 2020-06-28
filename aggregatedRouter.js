const express = require('express');
const router = express.Router();

const dashboard = require('./modules/dashboard/dashboardRouter');

router.use('/dashboard', dashboard);
module.exports = router;
