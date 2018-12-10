const fs = require('fs')
///usr/lib/node_modules/learnyounode/node_apidoc/fs.html
const file = fs.readFileSync(process.argv[2], 'utf8').toString().split("\n");
file.pop()

process.stdout.write(`${file.length.toString()}\n`);
