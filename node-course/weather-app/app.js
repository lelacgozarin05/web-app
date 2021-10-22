const request = require('request')

 const url = 'http://api.weatherstack.com/current?access_key=219da365f95c1be075845313a174325f&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => { 
        console.log(response.body.current.weather_descriptions[0] + " It is Currently " + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out ')
 })
 
// geocoding

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGVsYWNnb3phcmkwNTE5IiwiYSI6ImNrdXcwNWgxMzJia2QydnBnZWxjdmtlYWoifQ.bSqHCksoG8qFNvDYMfOjcw'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
console.log(latitude,longitude)
})