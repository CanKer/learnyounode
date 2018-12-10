const https = require('https'),
      http  = require('http'),
      url   = process.argv[2]

http.get(url, (response)  =>  {
  let phrase = ""
  response.setEncoding('utf8')
  response.on("data", (data)  => {
    phrase += data
  }).on("end", () =>  {
      console.log(phrase.length)
      console.log(phrase);
    })
  response.on("error", console.error)
}).on("error", console.error)
