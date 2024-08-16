require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');


const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

configViewEngine(app, express);

app.use('/', webRoutes)

connection.query(
    'SELECT * from Users u', (err, result, field) => {
        console.log('error>>>>', err);
        console.log('result>>>>', result);
        // console.log('field>>>>', field);
    }
)

app.listen(port, hostname, () => {
    console.log(`Sever running at http://${hostname}:${port}/`);
})