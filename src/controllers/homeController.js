const connection = require('../config/database')
const { getAllUser } = require('../services/CRUDService')

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

    const [result, field] = await connection.query(
        `INSERT into Users(email, name, city)
         values(?, ?, ?)`, [email, name, city],
    )
    console.log("check result>>>: ", result);

    res.send('create successsfull')
}

module.exports = {
    getHomepage, getTest, postCreateUser, getCreate
}