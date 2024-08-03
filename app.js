const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if(!address){
    console.log('Please provide an address!!!')
}else{
    geocode(address,(error, geoResponse)=>{
        if(error){
         return console.log(error)
        }
     
       forecast(geoResponse.latitude, geoResponse.longitude,(error, forecastResponse)=>{
         if(error){
             return console.log(error)
         }
         console.log('Location:', geoResponse.location)
         console.log('Response: ', forecastResponse)
     
     })
     
     })
}

