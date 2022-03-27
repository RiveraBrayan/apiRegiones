const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '74.208.102.187',
    user: 'queries',
    password: 'regionescompetitivas',
    database: 'coder_web'
  });
}