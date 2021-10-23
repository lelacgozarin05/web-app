const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//  const url = 'http://api.weatherstack.com/current?access_key=219da365f95c1be075845313a174325f&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => { 
//     if (error){
//         console.log('Unable to Connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//     console.log(response.body.current.weather_descriptions[0] + " It is Currently " + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out ')
//     } 
// })


 geocode('Boston' , (error, data) => {
     console.log('error',Error)
     console.log('data',data)
  })

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  }) 