var http=require("http")
var server=http.createServer();

server.on("request",function(req,res){
          
          console.log("Hello World");
          res.writeHead(200,{"Content-Type":"text/html"})
          res.write("This is nodejs Application")
          res.end("<h1> Hello World</h1>");
          });
server.listen(3000);