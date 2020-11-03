const express 	= require('express');
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

	var students = [
		['1', 'alamin', 'abc@gmail.com', '1243'],
		['2', 'pqr', 'pqr@gmail.com', '1243'],
		['3', 'xyz', 'xyz@gmail.com', '1243']
	];
	res.render('home/userlist', {users: students});
})

module.exports = router;