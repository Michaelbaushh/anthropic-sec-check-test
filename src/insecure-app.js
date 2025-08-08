// 🚨 Unsicherer Code mit SQL-Injection-Risiko-MIB

const express = require('express');
const app = express();
const mysql = require('mysql');

app.get('/user', function(req, res) {
  const connection = mysql.createConnection({ /* ... */ });
  const userId = req.query.id;
  const query = `SELECT * FROM users WHERE id = '${userId}'`; // 🔥 unsicher!
  
  connection.query(query, function(error, results) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000);
