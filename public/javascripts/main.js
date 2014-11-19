/**
 * Created by Steph on 11/4/2014.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var server;
var control = require('./control.js');

server = http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;
    switch (path){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Hello! Try the <a href="/index.html">Introduction Page</a></h1>');
            res.end();
            break;
        case '/nextmatch.html':
            fs.readFile(__dirname + path, function(err, data){
                if (err){
                    return send404(res);
                }
                res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'});
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case '/control.html':
            fs.readFile(__dirname + path, function(err, data){
                if (err){
                    return send404(res);
                }
                res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'});
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case '/index.html':
            fs.readFile(__dirname + path, function(err, data){
                if (err){
                    return send404(res);
                }
                res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'});
                res.write(data, 'utf8');
                res.end();
            });
            break;
        default: send404(res);
    }
});
send404 = function(res){
    res.writeHead(404);
    res.write('404');
    res.end();
};
server.listen(5000);


// use socket.io
var io = require('socket.io').listen(server);

//define public variables for export
var event;
var match;
var year = "2014";
var rankings = "rankings";


// define interactions with client
io.sockets.on('connection', function(socket){
    //send data to client

    socket.on('event', function(msg){
        io.emit('event', msg);
        console.log(msg);
    });

    socket.on('match', function(msg){
        io.emit('match', msg);
        console.log(msg);
    });

});

exports.rankings = rankings + "/" + year + "/" + event;