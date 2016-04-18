'use strict';

const fs = require('fs');

fs.writeFile('mod/target.txt', 'a modified stream', function(err) {
  if (err) {
    throw err;
  }
  console.log('file saved');
})
