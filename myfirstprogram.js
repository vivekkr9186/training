var http=require('http');
var url=require('url');
var dt=new require('./myfirstmodule');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
//res.write("the current date and time is :"+dt.mydateTime());
res.write(req.url);
res.end('Hello World ');
}).listen(8080);