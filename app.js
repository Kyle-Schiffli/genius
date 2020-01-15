var express = require('express');
var app = express();
const fetch = require('node-fetch');


var client_id = "o6cufaoDMCc52BXz5Ffwf3TAlYZwsojg3oSA04_6jNOYaS7tlltN2GmEuHv9E0zz"
var client_secret = "dj4nMCMImvgq1NGGrkkF-TBF55yUROyoPylyOBKVGZN0vdidGYraQypyWVX-5Df6_w49DiWwqOddD7Y9YXtqhg"
var access_token = "oZ9Oq3vmbyim-CU8MtDA6YacFAOcyfyGKTR1V0HUI4vxE8PAV7pPF5KPhNVEPmt7"
var song_title = "";
var artist_name = "";
var url ='https://api.genius.com/search';

app.get('/', function (req, res) {

  var headers = {
    'Authorization': 'Bearer ' + access_token
  }
  var data = {
    'q': song_title + ' ' + artist_name
  }
  fetch(url, { method: 'GET', headers: headers, params: data})
    .then((res) => {
       return res.json()
  })
  .then((json) => {
    console.log(json);
    res.send(json)
  });


});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
