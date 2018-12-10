const http  = require('http'),
      port  = process.argv[2]
      moment= require('moment-timezone'),
      server= http.createServer((req, res)  =>  {
        let unixTime  = (date)  =>  {return {"unixtime": moment(date).valueOf()}},
            parseTime = (unix)  =>  {return {"hour": moment(unix.unixtime).hour(),"minute": moment(unix.unixtime).minute(),"second": moment(unix.unixtime).second()}}

        let url   = (req.url && req.url.includes("?")) ? req.url.split("?") : [req.url],
            time  = (url.length >= 2) ? url[1].split("=").pop() : null
            url   = url.shift()

        let response  = (req.method === 'GET' && url !== '/api/parsetime' && time)
                      ? unixTime(time)
                      : parseTime(unixTime(time))

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(response))
      })
      server.listen(port, ()  => console.log(":v"))
