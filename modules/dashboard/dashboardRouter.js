const express = require('express');

const router = express.Router();


router.get('/', async(req, res, next) => {
    res.status(200).json({success: true, data : {name : 'hello world'}});
});


module.exports =router;
