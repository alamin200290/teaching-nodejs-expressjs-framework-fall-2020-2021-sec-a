const express 	= require('express');
const mysql 	= require('mysql');
const router 	= express.Router();




router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	//req.body.username 
	//req.body.password

	var connection = mysql.createConnection({
	  host     : 'localhost',
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





	/*if(){
		
		res.cookie('uname', 'alamin');
		res.redirect('/home');

	}else{
		res.redirect('/login');
	}*/
}); 


module.exports = router;



