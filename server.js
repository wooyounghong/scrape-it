const express = require('express');
const app = express();

const $PORT = process.env.PORT || 5000;

app.get('/api', (req, res, next) => {
  try {
    res.send('/GET/ to api');
  } catch (error) {
    next(error);
  }
});

app.get('*', (req, res, next) => {
  try {
    res.send('root page');
  } catch (error) {
    next(error);
  }
});

app.listen($PORT, () => {
  console.log('server is listening at', $PORT);
});
