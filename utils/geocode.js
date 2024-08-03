const request = require('postman-request')

const geocode = (address , callback) => {
    const geoURL = 'https://api.mapbox.com/search/geocode/v6/forward?q='+encodeURIComponent(address)+'&access_token=pk.eyJ1IjoicHJpeWFzNTY5MyIsImEiOiJjbHhybnVsYjQxNDg1MnFxeW14eHVkeXE1In0.nyJ1M_fZnQOO-aIz2IXX9w&limit=1'
    
    request({url : geoURL, json:true}, (error, response)=>{
        if (error){
           callback("Unable to connect to internet", undefined)
        }else if(response.body.features.length==0){
           callback('Unable to find the location',undefined)
        }else{
           callback(undefined, {
             longitude: response.body.features[0].geometry.coordinates[0],
             latitude :response.body.features[0].geometry.coordinates[1],
             location: response.body.features[0].properties.full_address
           })
         
        }

    })
}

module.exports = geocode