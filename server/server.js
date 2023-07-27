const express = require('express')
const app = express()

app.use(express.static(`public`))
app.use(express.static(`${__dirname}/public`))  // middleware just functions that run in between the request and the response.
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'a5e4a9c05d5e4ac094fd4e43c8033f12',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.listen(4000, () => console.log(`server running on 4000`))

//npm init -y : set up a package.json file
//npm i express: to get to express package installed
// use express to set up api endpoint