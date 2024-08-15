const getHomepage = (req, res) => {
    res.send('Hello Express vs ICao Vy!!!<br/> <a href="test">Test Page</a>')
}

const getTest = (req, res) => {
    res.render('sample.ejs');

}

module.exports = {
    getHomepage, getTest
}