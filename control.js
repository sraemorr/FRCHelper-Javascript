var http = require('http');
var url = require('url');
var fs = require('fs');
var request = require('request');
var formatter = require('./formatter.js');
var server;

server = http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;
    //Router for accessing different pages
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
server.listen(3000);


// use socket.io
var io = require('socket.io').listen(server);

//define public variables api interaction
var event;
var match;
var year = "2014";
var rankings = [];
var apiRankings = "";
var apiMatch = "";

// define interactions with client
io.sockets.on('connection', function(socket){
    //send data to client
    //receive client data
    socket.on('submit', function(msg){
       var stuff = msg;
        event = msg.event;
        match = msg.match;
        apiRankings = "rankings" + "/" + year + "/" + event;

        //Define API callback function
        function callback(error, response, body) {
            if(error){
                console.log(error);
            }
            if (!error && response.statusCode == 200) {
                rankings = JSON.parse(body);
                io.emit('rankings', formatter.formatRankings(rankings));
                console.log("Rankings are emitted." + rankings.Rankings[0].Rank);
                var pretty = formatter.formatRankings(rankings);
                console.log(pretty);
                //        console.log(info.stargazers_count + " Stars");
                //       console.log(info.forks_count + " Forks");
            }
            else {
                console.log("Received Response Code: " + response.statusCode);
                console.log(response.statusText);
            }
        }

        //Get data from API
        request({
            url: 'http://private-1246e-frceventsprelimapitraffic.apiary-proxy.com/api/'+ apiRankings + '?8',
            headers: {'Accept': 'application/json', 'Authorization': 'Token communitysampletoken'}
        }, callback);

    }); //End of socket on submit function
/*    socket.on('event', function(msg){
        event = io.emit('event', msg);
        apiPath = rankings + "/" + year + "/" + msg;
        console.log(apiPath);
    });

    socket.on('match', function(msg){
        match = io.emit('match', msg);
        console.log(msg);
    });*/

    //recieve client data
/*    socket.on('client_data', function(data){
        //process.stdout.write(data.letter);
    });*/
});

