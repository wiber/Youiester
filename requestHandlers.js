var querystring=require("querystring");

function start(response){
    console.log("Request Handler 'start' was called.");
    var body='<html>'+
    '<head>'+
    '<script src="http://code.onilabs.com/apollo/0.12/oni-apollo.js "></script>'+
    '<script type="text/sjs">'+
    'require("github:wiber/youiester/master/frontent/youiestbox.sjs");'+ 
    '</script>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<div id="youiest" API_KEY="AapOfugaFhcaMjVaQXrN0w" twitter_user="wiber"></div>'+
    '<form action="upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("You've sent: "+ querystring.parse(postData).text);
    response.end();
}

var pileoftweets= [];
function dropin(response, postData){
    console.log("Request handler 'dropin' was called.");
    pileoftweets.unshift(postData);
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("You've sent: "+ querystring.parse(postData).text);
    response.end();
}

exports.start=start;
exports.upload=upload;
exports.upload=dropin;