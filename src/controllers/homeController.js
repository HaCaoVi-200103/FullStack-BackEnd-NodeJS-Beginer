const connection = require('../config/database')
const { getAllUser, addUser } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    const result = await getAllUser();
    return res.render('home.ejs', { listUser: result })

}

const getTest = (req, res) => {
    res.render('sample.ejs');
}

const getCreate = (req, res) => {
    res.render('create.ejs');
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body
    const result = await addUser(email, name, city);
    res.send('create successsfull')
}

module.exports = {
    getHomepage, getTest, postCreateUser, getCreate
}