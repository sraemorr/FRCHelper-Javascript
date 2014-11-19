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
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
server.listen( port, ipaddress, function() {
    console.log((new Date()) + ' Server is listening on port 3000');
});


// use socket.io
var io = require('socket.io').listen(server);

//define public variables api interaction
var event;
var match;
var year = "2014";
var rankings = [];
var matches = [];
var apiRankings = "";
var apiMatch = "";

// define interactions with client
io.sockets.on('connection', function(socket){
    socket.on('submit', function(msg){     //receive client data

        var stuff = msg;
        event = msg.event;
        match = msg.match;
        apiRankings = "rankings" + "/" + year + "/" + event;
        apiMatch = "matches" + "/" + year + "/" + event + "?qual";

        //Define rankings API callback function
        function callbackRankings(error, response, body) {
            if(error){
                console.log(error);
            }
            if (!error && response.statusCode == 200) {
                rankings = JSON.parse(body);
                io.emit('rankings', formatter.formatRankings(rankings)); //send rankings data
                console.log("Rankings are emitted.");
                var pretty = formatter.formatRankings(rankings);
                console.log(pretty);
            }
            else {
                console.log("Received Response Code: " + response.statusCode);
                console.log(response.statusText);
            }
        }

        //Get rankings from API
        request({
            url: 'http://private-1246e-frceventsprelimapitraffic.apiary-proxy.com/api/'+ apiRankings,
            headers: {'Accept': 'application/json', 'Authorization': 'Token communitysampletoken'}
        }, callbackRankings);


        //Define match API callback function
        function callbackMatch(error, response, body) {
            if(error){
                console.log(error);
            }
            if (!error && response.statusCode == 200) {
                matches = JSON.parse(body);
                io.emit('match', match); //send match data
                io.emit('matchJSON', matches);
                console.log("Match is emitted.");
                console.log(formatter.getMatch(matches, match));
            }
            else {
                console.log("Received Response Code: " + response.statusCode);
                console.log(response.statusText);
            }
        }

        //Get match from API
        request({
            url: 'http://private-1246e-frceventsprelimapitraffic.apiary-proxy.com/api/'+ apiMatch,
            headers: {'Accept': 'application/json', 'Authorization': 'Token communitysampletoken'}
        }, callbackMatch);
    }); //End of socket on submit function
});