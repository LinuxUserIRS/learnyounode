<<<<<<< HEAD
var fs = require('fs');
var path = require('path');
sum=0;
fs.readdir(process.argv[2], function(err, list){
    if (err) throw err;
    else{
        for(var i=0; i<list.length; i++){
            var ext = "."+process.argv[3];
            if(path.extname(list[i]) == ext){
=======
var fs=require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, list){
    if(err) throw err;
    else{
        for(var i=0; i<list.length; i++){
            if(path.extname(list[i]) == ("."+process.argv[3])){
>>>>>>> a590c30bd27876ea4b92837e2bcc25497d4e5f1c
                console.log(list[i]);
            }
        }
    }
});