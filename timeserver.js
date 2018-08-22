var net = require('net');
var server = net.createServer(function listener(socket){
    var date = new Date();
    var str="";
    str=date.getFullYear()+"-"+"0"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n";
    socket.write(str);
    socket.end();
});
server.listen(process.argv[2]);