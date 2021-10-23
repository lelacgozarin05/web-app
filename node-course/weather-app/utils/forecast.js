const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=219da365f95c1be075845313a174325f&query=' + longitude + ',' + latitude +'&units=f' 

    request({ url: url, json: true }, (error, response) => {
            if (error) {
                    callback('unable to connect to weather service', undefined)
            } else if (response.body.error) {
                    callback('unable to find location', undefined)
            } else {
                    callback(undefined, response.body.current.weather_descriptions[0] + " It is Currently " + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out ')
            }
          })
    }

module.exports = forecast