var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'clinics'
    // your connection details here
});

var sql = "INSERT INTO clinicF (vaccines, Quantity) VALUES ?";

var values =[
  ['NEVIRAPINE', 134],
  ['STAVUDINE', 123],
  ['ZIDOTABINE', 12]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});


/***

clinic table - name & id & phone_nr

clinic_stock - clinic_id, meds_id, qty

medicine - name & id strength - '100mg'

***/
