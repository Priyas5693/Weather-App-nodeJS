const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=57d05fa7e98c14097d9fd52bad284774&query='+longitude+','+latitude
        request({url:url, json:true}, (error, response)=>{
        if (error){
          callback("Unable to connect to internet", undefined)
         }else if(response.body.error){
          callback('Unable to connect to URL', undefined)
         }else{
          callback(undefined, 'it is currently '+response.body.current.temperature+' but it feels like '+response.body.current.feelslike)
        }
    })
}

module.exports=forecast