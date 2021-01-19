const http = require('http');
const os = require('os')

console.log("Kubia server starting...");

var requestCount = 0;

var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    if(++requestCount >= 5) {
        response.writeHead(500);
        response.end("Some internal error has occurred! This is pod " + os.hostname() + "\n");
        return ;
    }
    response.writeHead(200);
    response.end("This is v3 running in pod " + os.hostname() + "\n");
}

var www = http.createServer(handler)
www.listen(9090);