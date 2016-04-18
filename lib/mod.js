'require strict';

const fs = require('fs');
var async = require('async');

fs.watch('bin/watchme.txt', function(){
    console.log('file changed');
});
