const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const $PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res, next) => {
  try {
    res.send('/GET/ to api');
  } catch (error) {
    next(error);
  }
});

app.get('*', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  } catch (error) {
    next(error);
  }
});

app.listen($PORT, () => {
  console.log('server is listening at', $PORT);
});
