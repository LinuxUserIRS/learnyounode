var fs=require('fs');
var path = require('path');
module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function(err, list){
    if(err) return callback(err);
    else{
        var array=[];
        for(var i=0; i<list.length; i++){
            if(path.extname(list[i]) == ("."+extension)) array.push(list[i]);
        }
        return callback(null, array);
    }
})
}