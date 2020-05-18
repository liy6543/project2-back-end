const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());


let credentials = JSON.parse(fs.readFileSync('credentials.json','utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

function rowToObject(row){
	return{
   c_id:row.c_id,
   p_id:row.p_id,
	 year:row.year,
	 month: row.month,
	 day:row.day,
	 message: row.message,
	};
}

app.get('/get',(request, response) => {
 const query = 'SELECT * FROM Comments ORDER BY year DESC';
 connection.query(query, (error, rows) => {
	response.send({
	 ok: true,
	 comments: rows.map(rowToObject),
	});
    });
});

app.post('/post',(request, response) => {
 const query = 'INSERT INTO Comments(p_id,year,month,day,message) VALUES (?,?,?,?,?)';
 const params = [request.body.p_id,request.body.year,request.body.month,request.body.day,request.body.message];
 connection.query(query, params, (error, result) => {
	response.send({
	 ok: true,
	 id:result.insertId,
	});
});
});

const port = 3443;
app.listen(port, () => {
 console.log(`We're live on port ${port}!`);
});
