const { response } = require('express')
const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>weather</h1>')

})


app.get('/help', (req, res) =>{
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('About')
})
cls
app.get('/weather', (req, res) => {
    res.send('Your Weather')
})
//app.com
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})