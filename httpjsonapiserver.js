var http = require('http');
var url = require('url');

var parseTime = function(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

var unixTime = function(time){
    return {unixtime: time.getTime()}
}

var decideFormat = function(url){
    if (url.pathname=='/api/parsetime'){
        return parseTime(new Date(url.query.iso));
    }else{
        //Unix time
        return unixTime(new Date(url.query.iso))
    }
}



http.createServer(function(req, res){
    if(req.method=='GET'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(decideFormat(url.parse(req.url, true))));
    }
}).listen(process.argv[2]);