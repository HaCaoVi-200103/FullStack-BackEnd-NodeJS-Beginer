const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getTest = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    console.log("check form>>>", req.body);

    res.send('create new user')

}

module.exports = {
    getHomepage, getTest, postCreateUser
}