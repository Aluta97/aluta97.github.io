var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'clinics'
    // your connection details here
});

var sql = "INSERT INTO clinicA (vaccines, Quantity) VALUES ?";

var values =[
  ['NEVIRAPINE', 12],
  ['STAVUDINE', 5],
  ['ZIDOTABINE', 6]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
