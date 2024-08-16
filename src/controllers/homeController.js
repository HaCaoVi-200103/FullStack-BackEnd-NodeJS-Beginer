const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * from Users u', (err, result, field) => {
            users = result
            console.log('result>>>>', result);
        }
    )

    console.log("Check user>>>", users);

    res.send('Hello Express vs ICao Vy!!!<br/> <a href="test">Test Page</a>')
}

const getTest = (req, res) => {
    res.render('sample.ejs');

}

module.exports = {
    getHomepage, getTest
}