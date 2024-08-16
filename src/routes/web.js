const express = require('express')
const router = express.Router();
const { getHomepage, getTest, postCreateUser, getCreate } = require('../controllers/homeController')

// router.Method(/route , function)
router.get('/', getHomepage)
router.get('/test', getTest)
router.get('/create', getCreate)

router.post('/create-user', postCreateUser)

module.exports = router;