const app = require('./config/server');
const apps = require('./app/routes/prueba');

require('./app/routes/prueba')(app); 

// starting the server
app.listen(app.get('port'), () => {
  console.log('http://localhost:3000', app.get('port')); 
}); 
