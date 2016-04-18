'use strict';

const fs = require('fs');
var async = require('async');
var spawn = require('child_process')
  .spawn;

var filename = process.argv[2];

if (!filename) {
  throw Error('no filename');
}

fs.watch(filename, function() {
  /** @type {childprocess} [spawns a new childprocess] */
  let ls = spawn('ls', ['-lh', filename]);

  /** output @type {buffer} [buffer for outputstream] */
  let output = '';

  /**
   *  Event listeners. Callback invoked on event dispatch. Since the Stream class inherits from EventEmitter, we can listen for events from the child process’s standard output stream.
   */
  ls.stdout.on('data', function(chunk) {
    output += chunk.toString();
  })

  ls.on('close', function() {
    let parts = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]]);
  })
});
