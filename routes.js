const { PersonModel, CommentModel } = require('./ottoman-models')

// const PersonModel = require('./models').PersonModel
// const CommentModel = require('./models').CommentModel

const router = function (app) {

  app.get('/person', (req, res) => {
    PersonModel.find({}, (err, people) => {
      return err
        ? res.status(400).send(err)
        : res.send(people)
    })
  })

  app.get('/person/:id', (req, res) => {

  })
  app.post('/person/', (req, res) => {
    const person = new PersonModel({
      name: {
        first: req.body.name.first,
        last: req.body.name.last
      },
      email: req.body.email
    })
    person.save(err => {
      return err
        ? res.status(400).send(err)
        : res.send(result)
    })
  })
  app.get('/comment', (req, res) => {

  })

}

// export our routes
module.exports = router
