var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'clinics'
    // your connection details here
});

var sql = "INSERT INTO clinicB (vaccines, Quantity) VALUES ?";

var values =[
  ['NEVIRAPINE', 1],
  ['STAVUDINE', 12],
  ['ZIDOTABINE', 1]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
