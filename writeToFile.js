var http=require("http");
var fs=require("fs");
var post=require("querystring");

var server=http.createServer();

server.on("request", function(req,res){
    
    //req.url="/index.html"
    if(req.url.indexOf("form.html")>-1)
        {
        fs.readFile(__dirname+req.url,function(err,data){
        res.writeHead(200,{"content-type":"text/html","company-name":"intuitioninc"})
        if(err)
            {
                res.write("<h2>The file is not available</h2>");
            }
        else{
                res.write(data);
            
            }
        res.end();
    })
        }
            else{
                var body="";
                req.on("data",function(data){
                 body+=data;   
                })
            
            req.on("end",function(){
                        console.log("body====>"+body);
                        var postData=post.parse(body)
                        
                        fs.writeFile("Dummy.txt",postData.toString, function(err){
                            if(err)
                            res.write("<h1> Error occured while writing to file</h1>");
                            else
                                  res.end("Data successfully written to file");
                        })
        
        })
        
    }
    
});
server.listen(8000);
