
const request = require ("request")
const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=eb2733f37563dd12392aa6ef1c9b3aac&query=12.67037,%20123.88527'+latitude + ','+ longitude+'&units=m'
    request({url, json:true},(error,{body}) => { if (error) {
        callback('Sorry! Unable to connect to weather service!',undefined) 
        }else if (body.error) {
         callback('unable to find location',undefined)
        }else{
        callback(undefined, body.current.temperature + ' \xB0C      ' + body.current.weather_descriptions [0])
        }
        })
        request({url, json:true},(error,{body}) => { if (error) {
                callback('Sorry! Unable to connect to weather service!',undefined) 
                }else if (body.error) {
                 callback('Unable to find location',undefined)
                }else{
                callback(undefined, body.current.temperature + ' \xB0C      ' + body.current.weather_descriptions [0])
                }
        })
}                
module.exports = forecast