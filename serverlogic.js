var port = process.env.C9_PORT || 13853; /* Change 13087 to the port specified for your app */

var http = require('http');
var url = require ('url');

function start(route, handle){
function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+pathname+" received.");
    
    request.setEncoding("utf8");
    
    request.addListener("data", function(postDataChunk){
        
        postData += postDataChunk;
        console.log("Received POST data chunk '"+
        postDataChunk +"'.");
    });
    
    request.addListener("end", function(){
        route(handle, pathname, response, postData);
    });
    
}

http.createServer(onRequest).listen(port);

console.log("Server has started.");
}

exports.start=start;

//http://www.nodebeginner.org/#handling-post-requests