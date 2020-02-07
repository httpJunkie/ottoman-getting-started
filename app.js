
require('dotenv').config()
const { user, pass } = process.env

const express = require('express')
const couchbase = require('couchbase')
const bodyParser = require('body-parser')
const ottoman = require('ottoman')

// initialize express
const app = express()

// setup body-parser to handle json body requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// establish connection to couchbase one node cluster 
const cluster = new couchbase.Cluster("couchbase://localhost")
      cluster.authenticate(user, pass)
// open the specific bucket we provisioned with our docker script
const bucket = cluster.openBucket('ottoman-example')

// ensure we can use our bucket in `models.js` and `routes.js`
module.exports.bucket = bucket

// import routes for use in our initialized `app` object
const routes = require('./routes.js')(app)

// set up ottoman by pointing it at our bucket
ottoman.bucket = bucket;

// ensure we use the indexes that ottoman expects
// ie. every index in your schema exists in Couchbase
ottoman.ensureIndices(function(err) {
  if (err) return console.error(err);
  var server = app.listen(8888, () => {
    console.log(`listening on port ${server.address().port}`)
  })
})