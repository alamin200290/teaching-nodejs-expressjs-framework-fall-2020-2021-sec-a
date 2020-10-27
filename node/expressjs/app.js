//declaration
const express 		= require('express');
const login 		= require('./controllers/login');
const home 			= require('./controllers/home');
const logout 		= require('./controllers/logout');
const app 			= express();

//config
app.set('view engine', 'ejs');


//middleware
app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);


//route
app.get('/', (request, response)=>{
	response.send('This is index page');
});


//server startup
app.listen(3000, (error)=> {
	console.log('express server started at 3000 port');
});