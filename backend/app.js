/*
 * app.js
 *
 * This is the entrypoint for the backend API.
 *
 * */

const express = require('express');
const app = express();

const dbConnection = require('./database.js');
const config = require('./config.js');

const addUser = require('./api_adduser.js');
const getScore = require('./api_getscore.js');
const addScore = require("./api_addscore.js");

// Routes
app.get('/getScore', getScore.getScore); // GET - getScore
app.put('/addUser', addUser.addUser); // PUT - addUser
app.put('/addScore', addScore.addScore); // PUT - addScore
