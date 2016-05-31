const dbHelper = require('../db/dbHelper');

const auth = {
  registerNewUser: (displayName, username, password, callback) => {
    dbHelper.findUser(username, password, (err, row) => {
      if (!row) {
        dbHelper.insertUser(displayName, username, password);
      } else { callback(`${row.username} already exists`); }
    });
  },
};

module.exports = { auth };
