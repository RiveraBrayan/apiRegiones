const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const bp = require('body-parser')

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../static')))

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

module.exports = app;
 