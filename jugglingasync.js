const https = require('https'),
      http  = require('http'),
      first = process.argv[2],
      second= process.argv[3],
      third = process.argv[4]

http.get(first, (response)  =>  {
  let phrase = "", phrases = new Array()
  response.on("data", (data)  => {
    phrase += data.toString()
  }).on("end", () =>  {
    phrases.push(phrase)
    phrase = ""
    http.get(second, (response) =>  {
      response.on("data", (data)  =>  {
        phrase += data.toString()
      }).on("end", () =>  {
        phrases.push(phrase)
        phrase = ""
        http.get(third, (response)  =>  {
          response.on("data", (data) =>  {
            phrase += data.toString()
          }).on("end", () =>  {
            phrases.push(phrase)
            // console.log('phrases: ', phrases);
            phrases.forEach(phrase => console.log(phrase))
          })
        })
      })
    })
    })
  response.on("error", console.error)
}).on("error", console.error)
