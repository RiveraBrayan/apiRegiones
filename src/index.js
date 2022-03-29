const app = require('./config/server');
const apps = require('./app/pruebas/prueba');

// require('./app/pruebas/pruebajson')(app); 
// require('./app/pruebas/prueba')(app); 
require('./app/routes/encuestas')(app); 
 

// starting the server
app.listen(app.get('port'), () => {
  console.log('http://localhost:3000', app.get('port')); 
}); 
