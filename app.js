var express = require('express');
var app = express();
const fetch = require('node-fetch');


client_id = "o6cufaoDMCc52BXz5Ffwf3TAlYZwsojg3oSA04_6jNOYaS7tlltN2GmEuHv9E0zz"
client_secret = "dj4nMCMImvgq1NGGrkkF-TBF55yUROyoPylyOBKVGZN0vdidGYraQypyWVX-5Df6_w49DiWwqOddD7Y9YXtqhg"
access_token = "oZ9Oq3vmbyim-CU8MtDA6YacFAOcyfyGKTR1V0HUI4vxE8PAV7pPF5KPhNVEPmt7"

app.get('/', function (req, res) {
  var url ='https://api.genius.com;
  var headers = {
    "Content-Type": "application/json",
    "client_id": client_id,
    "client_secret": client_secret,
    "credentials": access_token
  }
  var data = {
    "name": "Wade Wilson",
    "occupation": "Murderer",
    "age": "30 (forever)"
  }
  fetch(url, { method: 'GET', headers: headers, body: data})
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

