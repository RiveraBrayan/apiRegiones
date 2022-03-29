const dbConnection = require("../../config/dbConnection");
const _ = require('underscore');

module.exports = (app) => {
  const connection = dbConnection();
  const movies = require('../../sample.json');

  app.get('/movies', (req, res) => {
      res.json(movies);
  });
  
  app.post('/movies', (req, res) => {
      const id = movies.length + 1;
      const { title, director, year, rating } = req.body;
      const newMovie = { ...req.body, id };
      if (id && title && director && year && rating) {
          movies.push(newMovie);
          res.json(movies);
      } else {
          res.status(500).json({error: 'There was an error.'});
      }
  });
  
  app.put('/movies/:id', (req, res) => {
      const { id } = req.params;
      const { title, director, year, rating } = req.body;
      if (id && title && director && year && rating) {
          _.each(movies, (movie, i) => {
              if (movie.id === id) {
                  movie.title = title;
                  movie.director = director;
                  movie.year = year;
                  movie.rating = rating;
              }
          });
          res.json(movies);
      } else {
          res.status(500).json({error: 'There was an error.'});
      }
  });
  
  app.delete('/movies/:id', (req, res) => {
      const {id} = req.params;
      if (id) {
          _.each(movies, (movie, i) => {
              if (movie.id == id) {
                  movies.splice(i, 1);
              }
          });
          res.json(movies);
      }
  });
  
};
