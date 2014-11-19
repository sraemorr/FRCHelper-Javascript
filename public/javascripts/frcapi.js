/**
 * Created by Steph on 11/3/2014.
 */
var request = require('request');

var options = {
    url: 'http://private-anon-40cb499ae-frceventsprelim.apiary-mock.com/'+ ,
    headers: {
        'Accept': 'application/json'
    }
};

function callback(error, response, body) {
    if(error){
        console.log(error);
    }
    if (!error && response.statusCode == 200) {
 //       var info = JSON.parse(body);
        console.log(body);
//        console.log(info.stargazers_count + " Stars");
 //       console.log(info.forks_count + " Forks");
    }
    else {
        console.log("Received Response Code: " + response.statusCode);
        console.log(response.statusText);
    }
}
request(options, callback);