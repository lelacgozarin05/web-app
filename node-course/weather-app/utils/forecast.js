const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=eb2733f37563dd12392aa6ef1c9b3aac&query=12.67037,%20123.88527' + longitude + ',' + latitude +'&units=f' 

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