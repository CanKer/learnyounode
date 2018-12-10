const http    = require('http'),
      fs      = require('fs'),
      port    = process.argv[2] || 8800,
      text    = process.argv[3],
      map = require('through2-map'),
      server  =  http.createServer((req, res) => {
        if (req.method === 'POST') {
          console.log('pipe: ', req.pipe);
          req.pipe(map((chunk)  => {
            return chunk.toString().toUpperCase();
          })).pipe(res);
        }
      })

server.listen(port, () => console.log(`Puerto: ${port}`))
