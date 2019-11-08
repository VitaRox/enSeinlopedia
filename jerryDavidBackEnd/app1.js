// Imports: require calls;
// Compare and contrast this to the non-Express-using way of doing this;
const express = require("express");
const mysql = require("mysql");
// Do we need this?  Seemed to help to have 'app' defined, which tutorial def did NOT mention;
var app=express();

//Database connection
app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : ' ',
        database : 'seinfeld'
    });
    res.locals.connect();
    next();
});
// Not sure what's going on with this;
app.use('/', index);
app.use('/users', users);
module.exports(app);

// Don't know if this is necessary;
let config = require('./config.js');

// Create connection to schema (i think);
let connection = mysql.createConnection(config);
connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log(res);
    console.log('Connected to the MySQL server.');
});

/*
 Var to represent string representing SQL query;
 Rename 'sql' 'epiQuery' to distinguish it;
 I believe this section will have several local vars ('let') designed
 to represent SQL queries.  This one returns episodes a character is in.
*/
let epiQuery = 'SELECT episodeTitle,synopsis '
          +' FROM episodes '
          + 'JOIN majorCharacters '
          + 'ON ((CONCAT(majorCharacters_firstName," ",majorCharactersLastName);'
connection.query(epiQuery, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
    // This part will return results of query?
    console.log(results);
});

// Shut down network connection;
connection.end();