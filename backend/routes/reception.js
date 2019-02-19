const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/', (request, response, next) => {
  queries
    .listReceptionPics()
    .then(reception => {
      response.json({
        reception
      })
      console.log('this is reception route')
    })
    .catch(next)
})

module.exports = router
