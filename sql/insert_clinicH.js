var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'clinics'
    // your connection details here
});

var sql = "INSERT INTO clinicJ (vaccines, Quantity) VALUES ?";

var values =[
  ['NEVIRAPINE', 50],
  ['STAVUDINE', 23],
  ['ZIDOTABINE', 6]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
