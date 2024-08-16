const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getTest = (req, res) => {
    res.render('sample.ejs');
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
    getHomepage, getTest, postCreateUser
}