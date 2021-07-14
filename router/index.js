const express = require('express');
const router = express.Router();
let dataJson = require('../mock/mock1');
let dataJson2 = require('../mock/mock2')

router.get('/', (req, res) => {
    res.send(dataJson2);
});
router.get('/mock', (req, res) => {
    res.send(dataJson);
});

module.exports = router;