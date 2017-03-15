var http = require('http');

http.creatServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hellow World\n');

}).listen(3000,'127.0.0.1');