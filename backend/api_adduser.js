/*
 * addUser.js - PUT
 *
 * /addUser/:email
 * This is a file for adding users to the SQL database. That is,
 * we are creating an entry in users, as well as in assets.
 *
 *
 * */

const dbConnection = require('./database.js');

//
// addUser
exports.addUser = async (req, res) => {

  const cid = "1006579254303-v3hj0kl0fgkk0qiehc5n63r5vjsafkfh.\
              apps.googleusercontent.com";

  try {
    const email = req.params.email;
    const uid = getUserId(email);

    // Case 1: In the event that a user doesn't exist, then we simply
    // add a new entry for their profile within the user database as well as
    // the scoring database.
    if (uid === null) {
      const finalId = await newUser(uid);
    }

    // Case 2: Otherwise, return their id
    else {
      res.status_code(200).json({
        "message": "Found user!",
        "data": uid,
      });
    }


  }

  catch (err) {
    res.status_code(400).json({
      "message": "Could not add user",
      "data": err,
    });
  }

};

const getUserId = (userid) => {
  return new Promise((resolve, reject) => {
    const selectQuery =  "SELECT userid FROM users \
                        WHERE email = ? ";

    const params = [userid];

    dbConnection.query(selectQuery, params, (error, results, fields) => {
      if ( error ) {
        console.log("**ERROR", error.message);
        reject(error);
      } else {
        if ( results.length === 0 ) {
          resolve(results[0].userid);
        }
      }
    });
  });
};

//
// newUser
const newUser = (userid, email) => {

  return new Promise((resolve, reject) => {

  const insertQueryUser = "INSERT INTO users (uid, email) \
                       VALUES (?, ?)";

  const params = [userid, email];

  const insertQueryScore= "INSERT INTO scores (uid, score, date) \ ";


  dbConnection.query(insertQueryUser, params, (error, results, fields) => {
    if ( error ) {
      console.log("**ERROR: Could not insert into users. Aboring");
      reject(error);
    } else {
      console.log(`Successfully added ${userid}`);
      resolve(userid);
    }
  });
});

}

//
// newScore
const newScore = (userid, score, date) => {
  const insertQueryScore= "INSERT INTO scores (uid, score, date) \
                          VALUES (?, ?, ?)";
  const params = [userid, score, date.currentDate()];



}
