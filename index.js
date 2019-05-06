const express = require('express');
const app = express()
const path = require('path');

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

let knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user : 'bookadmin',
      password : 'letmepass',
      database : 'book_club'
    }
})

var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/books', function(req, res) {
  res.send("Placeholder for all the books!")
});

app.get('/users', function(req, res){
  let users = knex.raw('SELECT * FROM users;')
  res.send(users);
});

app.listen(8080);