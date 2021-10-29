const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=219da365f95c1be075845313a174325f&query=' + latitude + ',' + longitude +'&units=m' 
       
    request({url: url, json: true }, (error, { body}) => {
            if (error) {
                    callback('Unable to connect to the Internet', Undefined)
            } else if (body.error) {
                    callback('Unable to find location', Undefined)
            } else {
        
                    callback(undefined,body.location.localtime + '' + body.current.temperature + '\xB0' + 'c' + ' ' + body.current.weather_descriptions [0] + '') // degress out. It feels like ' + body.current.feelslike + ' degress out ')
            }
          })
    }

module.exports = forecast