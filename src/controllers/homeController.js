const connection = require('../config/database')
const { getAllUser, addUser, getUser } = require('../services/CRUDService')

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

const getEditPage = async (req, res) => {
    const id = req.params.id;
    const result = await getUser(id);
    res.render('edit.ejs', { user: result });
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body
    const result = await addUser(email, name, city);
    res.send('create successsfull')
}

module.exports = {
    getHomepage, getTest, postCreateUser, getCreate, getEditPage
}