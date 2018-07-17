// get the http module:
const http = require('http');
// fs module allows us to read and write content for responses!!
const fs = require('fs');
//creating a http server
const server = http.createServer(function (request,response) {
//see what URLS clients are requesting
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('index.html','utf8',function(errors,contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
    });
}
else if (request.url === "/dojos/new") {
    fs.readFile('dojos.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
    });
}
else if (request.url === "/ninjas") {
    fs.readFile('ninjas.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
    });
}
else {
    response.end('File not found!!!');
}
});

server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
