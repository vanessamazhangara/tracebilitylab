// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '5b8706b87f7b46689f0f897f671a3f30',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static('public'))


const countries = [];


app.get('/', (req, res) => {
    rollbar.log("Hello, you reached the GET enpoint")
    res.sendFile('index.html')
})

app.post('/api/country', (req, res) => {
    const {name} = req.body
    countries.push(name)
    res.status(200).send(countries)
    
   

//    try {
//         if (name === "") {
//         rollbar.error("Someone tired to enter no name")
//         res.status(400).send('must provide a country')
//      } else {
//         rollbar.log('Name submitted succesfully')
//         res.status(200).send(countries)
//     }
// } catch (err) {
//     console.log(err)
//     rollbar.error(err)
//   }

});
const port = process.env.PORT || 5050
app.listen(port, () => console.log(`server is running on port ${port}`));