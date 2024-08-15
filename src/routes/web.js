const express = require('express')
const router = express.Router();
const { getHomepage, getTest } = require('../controllers/homeController')

// router.Method(/route , function)
router.get('/', getHomepage)
router.get('/test', getTest)

module.exports = router;