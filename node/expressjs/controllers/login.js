const express 	= require('express');
const router 	= express.Router();


router.get('/', (request, response)=>{
	response.render('login/index');
});

router.post('/', (request, response)=>{
	//response.render('login/index');
	response.redirect('/home');
});


module.exports = router;

