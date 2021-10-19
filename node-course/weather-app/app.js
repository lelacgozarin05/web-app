const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=219da365f95c1be075845313a174325f&query=37.8267,-122.4233'

request({ url: url }, (error, response) => { 
    const data =JSON.parse(response.body)
    console.log(data.current)
})