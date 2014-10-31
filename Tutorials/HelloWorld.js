/**
 * Created by Steph on 10/30/2014.
 */

var fs = require('fs');
var list;
var array = Array;
var output;
fs.readdir(process.argv[2], function(err, list){
    if (err) throw err;
    list=list.toString();
    array = list.split('\n');
    for(var i=0; i<array.length; i++){
        var str = array[i].toString();
        var check = process.argv[3].toString();
        if (str.contains(check)){
            console.log(str);
        }
    }
});
//file = file.toString();

