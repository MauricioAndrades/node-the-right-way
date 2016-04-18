'require strict';

const fs = require('fs');
var async = require('async');

var filename = process.argv[2];

if (!filename) {
    throw Error('no filename');
}

fs.watch(filename, function(){
    console.log(filename + ' ' + 'file changed');
});
