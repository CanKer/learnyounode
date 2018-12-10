const fs = require('fs'),
      path = require('path')

module.exports = function (dir, ext, cb) {
  fs.readdir(dir,['utf8'], (err, files)  =>  {
    return (err)  ? cb(err)
                  : cb(null, files.filter(file => path.extname(file) === `.${ext}`))


  })
}
