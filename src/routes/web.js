const express = require('express')
const router = express.Router();
const { getHomepage, getTest, postCreateUser } = require('../controllers/homeController')

// router.Method(/route , function)
router.get('/', getHomepage)
router.get('/test', getTest)

router.post('/create-user', postCreateUser)

module.exports = router;