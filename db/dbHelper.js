const sqlite = require('sqlite3').verbose();
const user = require('./user');

class DbHelper {
  constructor() {
    this.db = null;
  }

  closeDb() {
    console.log('closeDb');
    this.db.close();
  }

  findUser(username, password, callback) {
    const resolve = callback || null;
    const stmt = this.db.prepare(user.getUserId);
    stmt.get(username, password, (err, userid) => {
      console.log(userid);
      if (!userid) { resolve; }
    });
    stmt.finalize();
  }

  insertUser(displayName, username, password) {
    const stmt = this.db.prepare(user.insertUser);
    stmt.run(displayName, username, password, '', '', '');
    stmt.finalize();
  }

  createDb() {
    console.log('createDb blog.db');
    this.db = new sqlite.Database('./blog.db');
  }

  openDb() {
    this.createDb();
  }
}

module.exports = { DbHelper };
