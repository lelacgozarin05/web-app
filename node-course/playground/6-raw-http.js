const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=219da365f95c1be075845313a174325f&query=45,-75&units=f' 

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()