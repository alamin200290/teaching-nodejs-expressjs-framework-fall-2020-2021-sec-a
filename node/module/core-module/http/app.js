const http 	= 	require('http');
const fs	=	require('fs');

const server = http.createServer((request, response)=>{
	
	console.log(request.url);
	console.log(request.method);
	//response.write('<h1>Node Http Server works...</h1>');
	//response.end();

	if(request.url == '/'){
		response.write("this is index page");
		response.end();

	}else if( request.url == '/home'){
		var content = fs.readFileSync('home.html');
		response.write(content.toString());
		response.end();
	
	}else{
		response.write("404 not found!");
		response.end();
	}
});

server.listen(3000);
console.log('server started at 3000...');