const getHomepage = (req, res) => {
    res.send('Hello Express vs ICao Vy!!!')
}

const getTest = (req, res) => {
    res.render('sample.ejs');

}

module.exports = {
    getHomepage, getTest
}