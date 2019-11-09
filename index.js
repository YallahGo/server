// Dependencies
const express = require('express');

// Modules
const Routes = require('./routes');
const Headers = require('./headers')

// Init server
const app = express();

// Routes
app.use('/', Routes);

// Headers
app.use(Headers)



// Listen server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is run on ${port}`);
})