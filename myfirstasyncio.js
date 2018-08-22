var fs = require('fs');
var str = fs.readFile(process.argv[2], 'utf8', function(err, str){
    if (err) throw err;
    else{
        str = str.split('\n');
        console.log(str.length-1);
    }
});