/*
 * addUser.js
 *
 * This is a file for adding users to the SQL database. That is,
 * we are creating an entry in users, as well as in assets.
 *
 *
 * */

const dbConnection = require('./database.js');
exports.addUser = async (req, res) => {

  const cid = "1006579254303-v3hj0kl0fgkk0qiehc5n63r5vjsafkfh.apps.googleusercontent.com";

  try {
    const uid = getUserId(cid);

    // Case 1: In the event that a user doesn't exist, then we simply
    // add a new entry for their profile within the user database as well as
    // the scoring database.
    if (uid === null) {
      await newUser(uid);
    }


  }

  catch (err) {
    res.status_code(400).json({
      "message": "Could not add user",
      "data": err,
    });
  }

};

const getUserId = async (userid) => {
  const selectQuery =  "SELECT userid FROM users \
                        WHERE email = ? ";

  const params = [userid];

  await dbConnection.query(selectQuery, params, (error, results, fields) => {
    if ( error ) {
      console.log("**ERROR", error.message):
      reject(error);
    } else {
      if ( results.length === 0 ) {
        resolve(results[0].userid);
      }
    }
  });
};

const newUser = async (userid) => {
  const insertQueryUser = "INSERT INTO users (uid, email) \
                       VALUES (?, ?)";

  params = [userid, email];

  const insertQueryScore= "INSERT INTO scores (uid, score, date) \"


  await dbConnection.query(insertQueryUser, params, (error, results, fields) => {
    if ( error ) {
      console.log("**ERROR: Could not insert into users. Aboring");
      reject(error);
    } else {
      console.log(`Successfully added ${uid}`);
      resolve(userid);
    }
  });
}

const newScore = async (userid, score) => {
  const insertQueryScore= "INSERT INTO scores (uid, score, date) \
                          VALUES (?, ?)";
  params =
}
