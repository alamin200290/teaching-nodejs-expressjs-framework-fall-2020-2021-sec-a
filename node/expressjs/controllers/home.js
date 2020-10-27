const express 	= require('express');
const router 	= express.Router();


router.get('/', (request, response)=>{
	var user = {name: 'XYZ', id: '12112'};
	response.render('home/index', user);
});


module.exports = router;

