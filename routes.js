const express = require('express');
const Router = express.Router();

// seeded data
const data = require('./seed/data')

Router.get('/cities', (req, res) => {
  responseData = data.cities
  res.send(responseData)
})


Router.get('/places/:cityId', (req, res) => {
  responseData = data.palces[req.params.cityId]
  res.send(responseData)
})


module.exports = Router

