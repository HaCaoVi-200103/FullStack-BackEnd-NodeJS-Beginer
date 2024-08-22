const express = require('express');
// const { getAllUsers } = require('../controllers/APIController');
const APIController = require('../controllers/APIController');
const router = express.Router();
const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers)
    router.post('/create-user', APIController.CreateUser)

    return app.use('/api/v1/', router)
}

module.exports = initAPIRoute;