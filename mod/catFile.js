#!/usr/bin/env node --harmony
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);

/** to run it: ./cat.js <file_name> */
