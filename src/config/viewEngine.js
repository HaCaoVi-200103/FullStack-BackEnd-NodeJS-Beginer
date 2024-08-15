const path = require('path');

const configViewEngine = (app, express) => {
    //config template engine
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    //config static file
    app.use(express.static(path.join('./src', 'public')));
    app.use(express.static(path.join('./src', 'assets')));
}

module.exports = configViewEngine;