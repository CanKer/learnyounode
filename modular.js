let modular = require('./filteredls'),
    dir     = process.argv[2],
    ext     = process.argv[3]

let callback = function(err, data) {
  if(err) throw err;
  else    console.log(data.join('\n'));
}

modular(dir, ext, callback)
