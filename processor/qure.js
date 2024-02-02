const mysql = require('mysql');
// const pool  = mysql.createPool({
//     host     : 'localhost',   // database address
//     user     : 'dev_pathway',    // user
//     password : 'pathway110',  // password
//     database : 'dev_pathway'  // database
// });

// var mysql = require('mysql');
const pool  = mysql.createPool({
   host     : '34.133.83.69',   // database address
   //socketPath: '/cloudsql/pathway-bash:us-central1:mupath',
   user     : 'root',
   //port: 3306,    // user
   password : 'Pathway@02',  // password
   database : 'MU_Pathway'
});


//connect to databse
let fn_query = function( sql, values ) {
    // return a Promise
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
            if ( err ) {
              reject( err );
              console.log(err);
            } else {
              resolve( rows )
            }
            // kill connection
            connection.release()
          })
        }
      })
    })
}

module.exports = fn_query;
