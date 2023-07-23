const request = require("request")

const url = "http://api.weatherstack.com/current?access_key={API_KEY}&query=Mumbai"

request({uri:url},(e,res) => {
    console.log(res);
})