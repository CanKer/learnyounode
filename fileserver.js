const http    = require('http'),
      fs      = require('fs'),
      port    = process.argv[2] || 8800,
      file    = process.argv[3],
      server  = http.createServer((req, res)  =>  {
        console.log(req.url);
        const stream = fs.createReadStream(file)
        stream.pipe(res)

      })

console.log('port', port);
console.log('file: ',file);

server.listen(port, ()  =>  console.log(`Puerto: ${port}`))
