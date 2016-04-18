'use strict';

const fs = require('fs');
/** If readFile() is successful, then err will be false. Otherwise the err parameter will contain an Error object */
/** uncaught exception in Node will halt the program by escaping the event loop */
fs.readFile('target.txt', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
