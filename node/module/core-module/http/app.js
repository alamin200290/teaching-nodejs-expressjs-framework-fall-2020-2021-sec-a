const http 	= 	require('http');
const fs	=	require('fs');

const server = http.createServer((request, response)=>{
	
	console.log(request.url);
	console.log(request.method);
	//response.write('<h1>Node Http Server works...</h1>');
	//response.end();

	if(request.url == '/'){
		
		response.writeHead(200, {'content-type' : 'text/plain'});
		response.write("<h1>this is index page</h1>");
		response.end();

	}else if( request.url == '/home'){
		/*var content = fs.readFileSync('home.html');
		response.write(content.toString());
		response.end();*/

		fs.createReadStream('home.html').pipe(response);
	
	}else{
		response.write("404 not found!");
		response.end();
	}
});

server.listen(3000);
console.log('server started at 3000...');