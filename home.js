var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "sakila",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from city where city_id=3", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
