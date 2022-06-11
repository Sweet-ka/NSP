// (async () => {
//     let rev = await (fetch("./reviews.json"));
//     console.log(await rev.json());
// })()
import { module } from './pages/module.js';

module.start();

const mysql = require("mysql2");
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "пароль_от_сервера"
});
 
connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
});
