const express = require('express')
const router = express.Router();
const { getHomepage, getTest, postCreateUser, getCreate, getEditPage, postEditUser, postDeleteUSer, postDelete } = require('../controllers/homeController');

// router.Method(/route , function)
const initWebRoute = (app) => {
    router.get('/', getHomepage)
    router.get('/test', getTest)
    router.get('/create', getCreate)
    router.get('/edit/:id', getEditPage)

    router.post('/create-user', postCreateUser)
    router.post('/edit-user', postEditUser)

    router.post('/delete-user/:id', postDeleteUSer)
    router.post('/delete-user', postDelete)

    return app.use('', router)
}

module.exports = initWebRoute
