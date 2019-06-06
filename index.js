const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const environment = require('./config').environment;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
  res.json({ "status": "OK!" });
});

app.listen(process.env.PORT);