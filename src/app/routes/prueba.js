const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/noticias', (req, res) => {
    connection.query('SELECT * FROM noticias', (err, result) => {
      res.send(
        result
     );
    });
  });


  
  app.get('/sesiones', (req, res) => {
    connection.query('SELECT * FROM sesiones', (err, result) => {
      res.send(
        result
     );
    });
  });


  app.get('/news', (req, res) => {
    connection.query('SELECT * FROM noticias', (err, result) => {
      res.render('news/news', {
        fors: result
      });
    });
  });

  app.post('/news', (req, res) => {
    const { valor1, valor2, valor3 } = req.body;
    connection.query('INSERT INTO pruebaApi SET ? ',
      {
        valor1,
        valor2,
        valor3
      }
    , (err, result) => {
      
    });
  });


  app.post('/insert', (req, res) => {
    // const { title, news } = req.body;
    const valor1 = "pruebaApi"
    const valor2 = "segundovalorprueba"
    const valor3 = 1
    connection.query('INSERT INTO pruebaapi SET ? ',
      {
        valor1,
        valor2,
        valor3
      }
    , (err, result) => {
      res.redirect('/news');
    });
  });
};
