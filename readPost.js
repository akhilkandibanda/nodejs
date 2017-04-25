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
                        console.log("body=====>"+body);
                        var postData=post.parse(body)
            
            
                        fs.readFile(__dirname+ req.url,function(err,data){
                        res.writeHead(200,{"content-type":"text/html","company-name":"intuitioninc"})
                        console.log("After writing the header");
                        
                        if(err)
                        {
                           res.write("<h2>The file is not available</h2>");
                        }
                        else{
                             res.write("<h1> Name:"+postData.user+"</h1>");
                             res.write("<h1> Last Name:"+postData.lastname+"</h1>");
                             res.write("<h1> City:"+postData.city+"</h1>");
                             console.log("writing the file contents to browser")
                            
                              res.write(data);
            
                            }
        res.end();
        
        })
        
        })
    }
});

server.listen(8000);