
require('dotenv').config()
const { user, pass } = process.env

const express = require('express')
const couchbase = require('couchbase')
const bodyParser = require('body-parser')
const ottoman = require('ottoman')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cluster  = new couchbase.Cluster("couchbase://localhost")
console.log(user +" " + pass)
      cluster.authenticate(user, pass)

const bucket = cluster.openBucket("ottoman-example")
      bucket.operationTimeout = 120 * 1000

// for use in `models.js` and `routes.js`
module.exports.bucket = bucket

// import routes for use in our initialized `app` object
const routes = require('./routes')(app)

// point ottoman at our bucket
ottoman.bucket = bucket;

// ensure we use the indexes that ottoman expects
// ie. every index in your schema exists in Couchbase
ottoman.ensureIndices(function(err) {
  if (err) return console.error(err);
  var server = app.listen(3000, () => {
    console.log(`listening on port ${server.address().port}`)
  })
})