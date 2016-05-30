const { DbHelper } = require('../db/dbHelper');
const dbHelper = new DbHelper();

dbHelper.openDb();

class User {
  constructor() {
    this.display_name = null;
    this.username = null;
    this.password = null;
    this.external_token = null;
    this.external_source = null;
    this.token = null;
  }

  createUser(displayName, username, password) {
    dbHelper.insertUser(displayName, username, password);
  }

  findUser(username, password) {
    dbHelper.findUser(username, password);
  }

  registerNewUser(displayName, username, password) {
    dbHelper.registerNewUser(displayName, username, password);
  }
}

module.exports = { User };
