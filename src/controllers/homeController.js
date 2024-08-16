const connection = require('../config/database')

const getHomepage = (req, res) => {
    connection.query('SELECT * from Users u ', (err, result) => {
        return res.render('home.ejs')

    })
}

const getTest = (req, res) => {
    res.render('sample.ejs');
}

const getCreate = (req, res) => {
    res.render('create.ejs');
}

const postCreateUser = (req, res) => {
    const { email, name, city } = req.body
    connection.query(
        `INSERT into Users(email, name, city)
        values(?, ?, ?)`, [email, name, city], (err, result) => {
        console.log(result);
        res.send('create successsfull')
    }
    )
}

module.exports = {
    getHomepage, getTest, postCreateUser, getCreate
}