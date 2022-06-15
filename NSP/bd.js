const mysql = require('mysql2');
const config = require('./config/default.json');

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
const connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    database: config.database.database,
    password: config.database.password,
    port: config.port
});
 
connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
});

const sql = `SELECT * FROM users`;
const sqladd = (login, email, password, avatar) => {
   return `INSERT INTO users(login, email, password, avatar) VALUES ('${login}', '${email}', '${password}', '${avatar}')`;
}
const sss = sqladd('asdf', 'asdf@mail.ru', 'asddfgg', '');
console.log(sss)

 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});


// exports.add = (sql) => {
//     connection.query(sql, function(err, results) {
//         if(err) console.log(err);
//         console.log(results);
//     })
// }

// add(sss);
connection.end();
