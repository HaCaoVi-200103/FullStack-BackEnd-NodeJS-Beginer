const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * from Users u', (err, result, field) => {
            users = result
            console.log('result>>>>', result);
            res.send(JSON.stringify(users))

        }
    )


}

const getTest = (req, res) => {
    res.render('sample.ejs');

}

module.exports = {
    getHomepage, getTest
}