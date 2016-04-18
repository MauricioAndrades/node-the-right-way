#!/usr/bin/env node --harmony
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);

/** to run it: ./cat.js <file_name> */

/** from root: mod/catFile.js app.js */

/** The code in cat.js does not bother assigning the fs module to a variable. The require() function returns a module object, so we can call methods on it directly. */
