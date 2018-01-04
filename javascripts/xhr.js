"use strict";


let manipulateData = require('./manipulatexhrdata');
let getWeather = require('./getWeatherData');
let APIKey = require('./secretKey');

const parseMsgData = (data) => {
    console.log(data);
    manipulateData(data);
};

$.ajax({
    url: "https://word-spit.firebaseio.com/messages/messages.json"
})
.done(parseMsgData);

// const collectWeatherData = (data) => {
//     console.log(data);
//     getWeather.gatherWeather(data);
// };

// $.ajax({
//     url: `http://api.wunderground.com/api/${APIKey}/conditions/q/TN/Nashville.json`
// })
// .done(collectWeatherData);
