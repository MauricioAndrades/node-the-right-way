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

  /** Event listeners. Callback invoked on event dispatch. Since the Stream class inherits from EventEmitter, we can listen for events from the child process’s standard output stream. */

  /** A Buffer is Node’s way of representing binary data. It points to a blob of memory allocated by Node’s native core, outside of the JavaScript engine. Buffers can’t be resized and they require encoding and decoding to convert to and from JavaScript strings. */

  ls.stdout.on('data', function(chunk) {
    output += chunk.toString();
  })

  /** Like Stream, the ChildProcess class extends EventEmitter, so we can add listeners to it, as well. */

  /** After a child process has exited and all its streams have been flushed, it emits a close event. When the callback printed here is invoked, we parse the output data by splitting on sequences of one or more whitespace characters (using the regular expression /\s+/). Finally, we use console.dir() to report on the first, fifth, and ninth fields (indexes 0, 4, and 8), which correspond to the permis- sions, size, and file name, respectively. */
  ls.on('close', function() {
    let parts = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]]);
  })
});
