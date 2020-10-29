const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	if(req.session.uname != ""){
		res.render('home/index', {name: 'alamin', id:'123'});		
	}else{
		res.redirect('/login');
	}
});

module.exports = router;

//url design eg. /logout -> get or post request
//adding middleware to app.js
//creating controller/router  eg. router.get(), router.post()
//creating VIEWS
//sending response -> json, ejs
