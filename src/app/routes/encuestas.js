const dbConnection = require("../../config/dbConnection");

module.exports = (app) => {
  const connection = dbConnection();
  const movies = require('../../sample.json');

  // GET DATA
  app.get("/encuesta", (req, res) => {
     connection.query("SELECT * FROM pruebas.pruebaapi", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  // GET DATA WITH ID
  app.get("/encuesta/:id", (req, res) => {
    const { id } = req.params;
     connection.query(
      "SELECT * FROM pruebas.pruebaapi WHERE idpruebaApi = ?",
      [id],
      (err, rows, fields) => {
        if (rows != '') {
          res.json(rows[0]);
        } else {
          console.log("Not Found" );
        }
      }
    );
  });

  // DELETE DATA
  app.delete("/encuesta/:id", (req, res) => {
    const { id } = req.params;
     connection.query(
      "DELETE FROM pruebas.pruebaapi WHERE idpruebaApi = ?",
      [id],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Data Deleted" });
        } else {
          console.log(err);
        }
      }
    );
  });

  // INSERT DATA
  app.post("/encuesta", (req, res) => {
    const { valor1, valor2,valor3 } = req.body;
    console.log(valor1, valor2, valor3);

    const query = ` INSERT INTO pruebas.pruebaapi SET valor1 = ` + "'" + valor1 + "'" + ' , valor2 = ' + "'" + valor2 + "'" + ' , valor3 =' + "'" + valor3 + "'";
    // res.json({ query });

     connection.query(query, (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Data Saved" });
      } else {
        console.log(err);
      }
    });
   }); 

   //UPDATE DATA
  app.put("/encuesta/:id", (req, res) => {

    const { valor1, valor2,valor3 } = req.body;
    const idpruebaApi =  req.params.id;
    const query = `  UPDATE pruebas.pruebaapi SET valor1 = ` + "'" + valor1 + "'" + ' , valor2 = ' + "'" + valor2 + "'" + ' , valor3 =' + "'" + valor3 + "'" + ' WHERE idpruebaApi = ' + idpruebaApi;
    // res.json({ query });
    
     connection.query(query, (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Data Updated" });
      } else {
        console.log(err);
      }
    });
  });




//   //INSERT DATA WITH JSON DOCUMENT
//   app.post("/testing", (req, res) => {
//     for (let i = 0; i < movies.length; i++) {
//         const query = ` INSERT INTO pruebas.pruebaapi SET valor1 = ` + "'" + movies[i].valor1 + "'" + ' , valor2 = ' + "'" + movies[i].valor2 + "'" + ' , valor3 =' + "'" + movies[i].valor3 + "'";
//         connection.query(query, (err, rows, fields) => {
//           if (!err) {
//             console.log("Ok");
//           } else { 
//             console.log("Error");
//           }
//         });
//       }

//    }); 



};
