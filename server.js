const { auth } = require('./service/authentication');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                           // parse application/json

app.post('/register', (req, res, next) => {
  auth.registerNewUser(req.body.displayName, req.body.username, req.body.password, (error) => {
    if (error != null) {
      res.send(error);
    } else {
      res.send('hello');
    }
    next();
  });
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
