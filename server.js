const { User } = require('./userService/userController');

const express = require('express');
const app = express();
const PORT = 3000;

const user = new User();
// user.createUser('zhihui yan', 'yancey1204', '690664076');
user.findUser('yancey1204', '690664076');
// user.registerNewUser('zhihui yan', 'yancey1204', '690664076');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
