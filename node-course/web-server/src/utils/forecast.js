const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=219da365f95c1be075845313a174325f&query=' + longitude + ',' + latitude +'&units=f' 

    request({ url: url, json: true }, (error, { body}) => {
            if (error) {
                    callback('unable to connect to weather service', undefined)
            } else if (body.error) {
                    callback('unable to find location', undefined)
            } else {
                    callback(undefined, body.current.weather_descriptions[0] + " It is Currently " + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out ')
            }
          })
    }

module.exports = forecast