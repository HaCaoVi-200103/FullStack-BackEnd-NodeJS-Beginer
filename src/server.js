require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const mysql = require('mysql2')


const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

configViewEngine(app, express);

app.use('/', webRoutes)

//test connection
const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    }
)

connection.query(
    'SELECT * from Users u', (err, result, field) => {
        console.log('error>>>>', err);
        console.log('result>>>>', result);
        console.log('field>>>>', field);
    }
)

app.listen(port, hostname, () => {
    console.log(`Sever running at http://${hostname}:${port}/`);
})