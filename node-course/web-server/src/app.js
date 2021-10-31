const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

//for index.hbs
app.get('',(req,res)=>{
res.render('index',{ 
    title: 'Weather Forecast',
    name: '@lelacgozarin2021'
})
})

app.get('/', (req, res) => {
    res.render('index',{ 
    })
})

app.get('/index', (req, res) => {
    res.render('index',{ 
    })
})

//for about.hbs
app.get("/about",(req,res)=>{
    res.render('about',{
        title: 'About us',
        name: '@lelacgozarin2021'
    })
})

//for help.hbs
app.get("/help",(req,res)=>{
    res.render('help',{
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: '@lelacgozarin2021'
    })
})


//for weather data
app.get('/weather',(req,res) =>{
    if(!req.query.address){
return res.send({
    error: 'You must provide an address!'
        })
    }

     geocode(req.query.address, (error, { latitude, longitude, location } = {}) =>{
if (error) {
   return res.send({error})
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
      return res.send({error})
   }

   res.send({
       forecast: forecastData,
       location,
       address:req.query.address
   })
})
})
})
 
//product
 app.get('/products', (req, res) => {
 if (!req.query.search) {
    return res.send({
        error: 'You must provide a search term'
    })
 }

     console.log(req.query)
    res.send({
        products: []
     })
 })

//related 404 errors
app.get('/help/*', (req, res) => {
    res.render('404',{
        title: '404',
        name: '@lelacgozarin2021',
        errorMessage: 'Help article not found'
    })
})

//404 page
app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        name:'@lelacgozarin2021',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
    })
