var express = require("express"); 
var app = express(); 
var path = require("path");
app.use(express.static("public"));
app.get('/',function(req,res){ 
  res.sendFile(path.join(__dirname+'/public/html/index.html'));  
});
app.get('/awesome',function(req,res){ 
    res.sendFile(path.join(__dirname+'/public/html/awesome.html'));  
  });
app.listen(8080); 
console.log("Server running at Port 8080");