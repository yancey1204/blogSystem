const sqlite = require('sqlite3').verbose();
const userService = require('./userService');

class DbHelper {
  constructor() {
    this.db = new sqlite.Database('./blog.db');
  }

  closeDb() {
    this.db.close();
  }

  findUser(username, password, callback) {
    const stmt = this.db.prepare(userService.getUsername);
    stmt.get(username, password, callback);
  }

  insertUser(displayName, username, password, callback) {
    const stmt = this.db.prepare(userService.insertUser);
    stmt.run(displayName, username, password, '', '', '', callback);
  }
}

module.exports = new DbHelper();
