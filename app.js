const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=1da43c2e1c5495d4d4eabcb424194b75&query=Mumbai"

request({uri:url},(e,res) => {
    console.log(res);
})