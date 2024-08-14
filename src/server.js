// const http = require('http')

// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello Word && ICAOVY');
// })

// server.listen(port, hostname, () => {
//     console.log(`Sever running at http://${hostname}:${port}/`);
// })
require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const path = require('path')

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
    res.send('Hello Express vs ICao Vy!!!')
})

app.get('/test', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Sever running at http://${hostname}:${port}/`);
})