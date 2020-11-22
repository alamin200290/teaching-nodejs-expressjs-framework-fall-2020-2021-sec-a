var express 	= require('express');
var exSession 	= require('express-session');
var exUpload 	= require('express-fileupload');
var bodyParser 	= require('body-parser');
var app 		= express();

//config
app.set('view engine', 'ejs');


//middleware
app.use(exUpload());
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));


app.get('/upload', function(req, res){
	res.render("upload");
});

app.post('/upload', function(req, res){
	var file = req.files.myfile;

	if(file.mv('/assets/'+file.name)){
		res.send('success');
	}else{
		res.send('error');
	}
});

app.listen(3000, function(){
	console.log('express http server started at...3000');
});