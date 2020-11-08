const express 	= require('express');
const mysql 	= require('mysql');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('home/index', {name: 'alamin', id:'123'});
});


router.get('/userlist', (req, res)=>{

	var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  database : 'node1',
	  user     : 'root',
	  password : ''
	});
	 
	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	  console.log('connected as id ' + connection.threadId);
	});

	var sql = "select * from user ";
	connection.query(sql , function (error, results) {
		res.render('home/userlist', {users: results});
	});
	
	connection.end(function(err) {
	  console.log('connection end...');
	});
})

module.exports = router;