//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const login				= require('./controllers/login');
const logout			= require('./controllers/logout');
const home				= require('./controllers/home');
const app				= express();
const port				= 3000;

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'hello', saveUninitialized: true, resave: false}));
app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);

//router
app.get('/', (req, res)=>{
	res.send('Welcome');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});