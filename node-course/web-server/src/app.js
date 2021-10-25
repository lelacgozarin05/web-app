const { response } = require('express')
const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')

})


app.get('/help', (req, res) => {
    res.send([{ 
        name: 'lelac'
    }, {
        name: 'maricar'
    }])
})



app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('Your Weather')
})
//app.com
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})