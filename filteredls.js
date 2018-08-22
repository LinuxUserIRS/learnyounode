var fs = require('fs');
var path = require('path');
sum=0;
fs.readdir(process.argv[2], function(err, list){
    if (err) throw err;
    else{
        for(var i=0; i<list.length; i++){
            var ext = "."+process.argv[3];
            if(path.extname(list[i]) == ext){
                console.log(list[i]);
            }
        }
    }
});