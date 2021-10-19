const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=219da365f95c1be075845313a174325f&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => { 
    console.log(response.body.current.weather_descriptions[0] + ". It is Currently " + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out')
})
