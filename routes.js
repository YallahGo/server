const express = require('express');
const Router = express.Router();

Router.get('/countries', (req, res) => {
  res.send(200)
})


module.exports = Router

