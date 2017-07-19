var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'clinics'
    // your connection details here
});

var sql = "INSERT INTO clinicI (vaccines, Quantity) VALUES ?";

var values =[
  ['NEVIRAPINE', 7],
  ['STAVUDINE', 3],
  ['ZIDOTABINE', 5]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
