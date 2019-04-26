const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/17fc3661b4472b7554bf4f09f2d9f51d/' + 
                latitude +
                ',' + longitude + 
                '?units=si&lang=en'


    request({ url, json: true } , (error, {body} = {}) => {

        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + 
                                ' degrees. There is a ' 
                                + body.currently.precipProbability +'% chance of rain')
        }
    })
}

module.exports = forecast