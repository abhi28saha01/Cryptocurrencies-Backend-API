const express = require('express');
const router = express.Router();

const {getCryptocurrencyData} = require('../controller/getCryptoDataController');
const {priceConversion} = require('../controller/priceController');
const {listOfCompanies} = require('../controller/coinHoldersController')

router.get('/crypto/data',getCryptocurrencyData);
router.post('/crypto/price/convert',priceConversion);
router.get('/crypto/list/companies',listOfCompanies)

module.exports = router;