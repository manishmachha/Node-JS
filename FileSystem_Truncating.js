var fs = require('fs');
var buf=new Buffer.alloc(100);

fs.open('hello.txt','r+',(err,fd)=>{
    console.log("Going to open an existing file");
    if(err){
        console.log(err);
    }
    console.log("File opened successfully");

    fs.ftruncate(fd,10,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("File truncated successfully");
    })
})