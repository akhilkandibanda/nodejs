var http=require("http");
var fs=require("fs");
var url=require("url");

var server=http.createServer();

server.on("request", function(req,res){
    console.log("current directory is:"+__dirname);
    var urlData=url.parse(req.url,true);
    //console.log("req:"+req.url);
    
    fs.readFile(__dirname+ urlData.pathname,function(err,data){
        res.writeHead(200,{"content-type":"text/html","company-name":"intuitioninc"})
        console.log("After writing the header");
        console.dir(urlData);
        if(err)
            {
                res.write("<h2>The file is not available</h2>");
            }
        else{
                res.write("<h1> Name:"+urlData.query.user+"</h1>");
                res.write("<h1> Last Name:"+urlData.query.lastname+"</h1>");
                res.write("<h1> City:"+urlData.query.city+"</h1>");
                console.log("writing the file contents to browser")
                res.write(data);
            
            }
        res.end();
    })
    console.log("after the readFile method");
});
server.listen(8000);