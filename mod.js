'use strict';

const fs = require('fs');
var async = require('async');
var spawn = require('child_process').spawn;

var filename = process.argv[2];

if (!filename) {
    throw Error('no filename');
}

fs.watch(filename, function() {
let ls = spawn('ls', ['-lh', filename]); ls.stdout.pipe(process.stdout);
});
