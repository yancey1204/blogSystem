const sqlite = require('sqlite3').verbose();
const userService = require('../db/userService');
const db = new sqlite.Database('./blog.db');

const auth = {
  registerNewUser: (displayName, username, password, callback) => {
    db.get(userService.getUsername, username, password, (err, row) => {
      if (!row) {
        db.run(userService.insertUser, displayName, username, password, '', '', '');
      } else { callback(`${row.username} already exists`); }
    });
  },
};

module.exports = { auth };
