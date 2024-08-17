const connection = require('../config/database')
const { getAllUser, addUser, getUser, editUser, deleteUser } = require('../services/CRUDService')

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
    res.render('edit.ejs', { user: result.length > 0 ? result[0] : {} });
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body
    const result = await addUser(email, name, city);
    res.send('create successsfull')
}

const postEditUser = async (req, res) => {
    const { id, email, name, city } = req.body;
    const result = await editUser(id, email, name, city)
    res.redirect('/')
}

const postDeleteUSer = async (req, res) => {
    const id = req.params.id;
    const result = await getUser(id);
    res.render('delete.ejs', { user: result.length > 0 ? result[0] : {} });
}

const postDelete = async (req, res) => {
    const { id } = req.body;
    await deleteUser(id);
    res.redirect('/')
}

module.exports = {
    getHomepage, getTest, postCreateUser, getCreate, getEditPage, postEditUser, postDeleteUSer, postDelete
}