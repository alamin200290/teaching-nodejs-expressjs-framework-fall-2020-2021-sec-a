const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{

	//req.session.uname = "";
	res.cookie['username'] = "";
	res.redirect('/login');
});


module.exports = router;



