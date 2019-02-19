const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/', (request, response, next) => {
  queries
    .listTheCeremonyPics()
    .then(ceremony => {
      response.json({
        ceremony
      })
      console.log('this is ceremony route')
    })
    .catch(next)
})

module.exports = router