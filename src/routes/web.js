const express = require('express')
const router = express.Router();
const { getHomepage, getTest, postCreateUser, getCreate, getEditPage } = require('../controllers/homeController');

// router.Method(/route , function)
router.get('/', getHomepage)
router.get('/test', getTest)
router.get('/create', getCreate)
router.get('/edit/:id', getEditPage)

router.post('/create-user', postCreateUser)

module.exports = router;