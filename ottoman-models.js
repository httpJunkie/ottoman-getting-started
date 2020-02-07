const ottoman = require('ottoman')

ottoman.bucket = require('./app').bucket

const getNewDate = () => new Date()

let PersonModel = ottoman.model('person', {
  timestamp: {
    type: 'Date',
    default: getNewDate()
  },
  name: {
    first: 'string',
    last: 'string',
  },
  email: 'string',
  comments: [{ ref: 'Comment' }]
})

var CommentModel = ottoman.model('Coment', {
  timestamp: {
    type: 'Date',
    default: getNewDate()
  },
  message: 'string'
})

module.exports.PersonModel = PersonModel
module.exports.CommentModel = CommentModel