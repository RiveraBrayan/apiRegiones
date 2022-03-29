const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors());
// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// middlewares
app.use(express.static(path.join(__dirname, '../static')))


module.exports = app;
 