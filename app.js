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
      cluster.authenticate(user, pass)

const bucket = cluster.openBucket("ottoman-example")
      bucket.operationTimeout = 120 * 1000

module.exports.bucket = bucket
ottoman.bucket = bucket;

const routes = require('./routes')(app)

ottoman.ensureIndices(function(err) {
  if (err) return console.error(err);
  var server = app.listen(3000, () => {
    console.log(`listening on port ${server.address().port}`)
  })
})
