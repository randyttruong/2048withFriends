/*
 * api_getscore.js - GET
 *
 * /getScore/:email/:all
 *
 * This is an API HTTP GET request that allows users to retrieve their
 * last score. One can only get their score if and only if they have
 * already created an entry within the database.
 * */

const dbConnection = require('./database.js');

//
// getScore
exports.getScore = (res, req) => {
  try {

    const email = req.params.email;
    const getAll = req.params.all;


    const cid = "1006579254303-v3hj0kl0fgkk0qiehc5n63r5vjsafkfh.apps.\
                googleusercontent.com";

    const exists = inDatabase(email);

    // Base Case 1: If the user doesn't exist in the db, then just
    // send http 400
    if ( exists === false ) {
      res.status_code(400).json({
        "message": "User not found",
        "data": -1,
      })
    }
    // Otherwise, retrieve score based on input

    else {

      if ( getAll === null || getAll === false ) {
        const score = retrieveLast(email);
        res.status_code(200).json({
          "message": "Score retrieved successfully",
          "data": score,
        });
      } else {
      }

    }

  } catch (error) {
    res.status_code(400).json({
      "message": "Unable to retrieve scores",
      "data": error.message,
    })
  }
}

//
// inDatabase
const inDatabase = (email) => {
  return new Promise((resolve, reject) => {

    const selectQuery = "SELECT * from users WHERE email = ?";
    const params = [email,];

    dbConnection.query(selectQuery, params, (error, results, fields) =>
      {
        if (error) {
          console.log("**ERROR: Query unsuccessful. Aborting.");
          reject(error);

        } else {
          console.log("Query successful.");

          if ( results.length === 0 ) {
            console.log("No user found.");
            resolve(false);
          } else {
            resolve(true);
          }

        }
      });

  });

}

//
// retrieveLast
const retrieveLast = (email, userid) => {
  return new Promise((resolve, reject) => {
    const selectQuery = "SELECT score from scores WHERE email = ?, userid = ? ORDER BY date DESC";
    const params = [email, userid];

    dbConnection.query(selectQuery, params,
                       (error, results, fields) => {

                         if ( error ) {
                           console.log("**ERROR: Unable to retrieve from scores. Aborting") ;
                           reject(error);
                         } else {
                           if ( results.length === 0 ) {
                             console.log("No results found.") ;
                             resolve(results);
                           } else {
                             console.log("Results found.");
                             resolve(results[0]);
                           }
                         }

                       });
  });
}

//
// retrieveAll
const retrieveAll = (email, userid) => {
  return new Promise((resolve, reject) => {
    const selectQuery = "SELECT score from scores WHERE email = ?, userid = ? ORDER BY date DESC";
    const params = [email, userid];

    dbConnection.query(selectQuery, params,
                       (error, results, fields) => {

                         if ( error ) {
                           console.log("**ERROR: Unable to retrieve from scores. Aborting") ;
                           reject(error);
                         } else {
                           if ( results.length === 0 ) {
                             console.log("No results found.") ;
                             resolve(results);
                           } else {
                             console.log("Results found.");
                             resolve(results);
                           }
                         }

                       });
  });
}

