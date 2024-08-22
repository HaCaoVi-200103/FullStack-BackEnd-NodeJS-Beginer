require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const initAPIRoute = require('./routes/api');
const initWebRoute = require('./routes/web');


const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config res.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
initWebRoute(app)
initAPIRoute(app);

configViewEngine(app, express);




app.listen(port, hostname, () => {
    console.log(`Sever running at http://${hostname}:${port}/`);
})