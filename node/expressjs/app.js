//declaration
const express 	= require('express');
//const ejs		= require('ejs');
const app 		= express();

//config
app.set('view engine', 'ejs');

//middleware


//route
app.get('/', (request, response)=>{
	console.log('requested url /');
	//response.send('home.html', {name: alamin});
});

app.get('/home', (request, response)=>{

	var user = {name: 'XYZ', id: '12112'};
	response.render('home/index', user);
});


//server startup
app.listen(3000, (error)=> {
	console.log('express server started at 3000 port');
});