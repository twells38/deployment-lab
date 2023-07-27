const express = require('express')
const app = express()

app.use(express.static(`public`))
app.use(express.static(`${__dirname}/public`))  // middleware just functions that run in between the request and the response.

app.listen(4000, () => console.log(`server running on 4000`))

//npm init -y : set up a package.json file
//npm i express: to get to express package installed
// use express to set up api endpoint