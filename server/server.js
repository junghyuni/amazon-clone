const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET - retrieve data from the server
app.get('/', (req, res) => {
  res.json('hello amazon');
});

// POST - send data from frontend to backend
app.post('/', (req, res) => {
  console.log(req.body.name);
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on PORT", 3000);
  }
})