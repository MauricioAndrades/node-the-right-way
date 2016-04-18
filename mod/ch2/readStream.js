'use strict';

const fs = require('fs');
var stream = fs.createReadStream(process.argv[2]);

/** Here we use process.stdout.write() to echo data */
stream.on('data', function(chunk) {
  process.stdout.write(chunk);
});

/** When working with an EventEmitter, the way to handle errors is to listen for error events Since we’re listening for error events, Node invokes our handler (and then proceeds to exit normally). If you don’t listen for error events, but one happens anyway, Node will throw an exception. And as we saw before, an uncaught exception will cause the process to terminate. */
stream.on('error', function(err) {
  process.stderr.write("ERROR: " + err.message + "\n");
});
