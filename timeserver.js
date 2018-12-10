const net     =   require('net'),
      port    =   process.argv[2] || 8800,
      date    =   new Date(),
      moment  =   require('moment-timezone'),
      server  =   net.createServer((socket)  =>  {
        socket.write(`${moment().format('YYYY-MM-DD hh:mm')}\n`)
        socket.end()
      })

server.listen(port, () => console.log(`>:v`))
