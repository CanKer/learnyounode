const fs = require('fs')
///usr/lib/node_modules/learnyounode/node_apidoc/fs.html
fs.readFile(process.argv[2], 'utf8', (err, data)  =>  {
  file = data.toString().split("\n");
  file.pop()
  process.stdout.write(`${file.length.toString()}\n`);
})
