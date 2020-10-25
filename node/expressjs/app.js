const express 	= require('express');
const app 		= express();

app.get('/', (request, response)=>{
	console.log('requested url /');
	response.send('<h1>Express web server works...</h1>');
});

app.get('/home', (request, response)=>{
	console.log('requested url /home');
	response.send('Home page');
})

app.listen(3000, (error)=> {
	console.log('express server started at 3000 port');
});