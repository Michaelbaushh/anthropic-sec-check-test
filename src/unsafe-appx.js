// 🚨 Unsicherer Code – nur zu Testzwecken - hi
const express = require('express');
const app = express();
const mysql = require('mysql');

// Unsicher: keine Eingabevalidierung, direkte String-Konkatenation
app.get('/login', function (req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testdb'
  });

  const username = req.query.username;
  const password = req.query.password;

  // 🔥 SQL-Injection-Risiko!
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  connection.query(query, function (error, results) {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Test app running on port 3000');
});
