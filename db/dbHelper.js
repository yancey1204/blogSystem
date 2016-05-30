const sqlite = require('sqlite3').verbose();

class DbHelper {
  constructor() {
    this.db = null;
  }

  closeDb() {
    console.log('closeDb');
    this.db.close();
  }

  findUser(displayName, username, password, callback) {
    const resolve = callback || null;
    const sql = `SELECT id FROM users
                 WHERE  username = ? AND password = ?`;
    const stmt = this.db.prepare(sql);
    stmt.get(username, password, (err, userid) => {
      if (!userid) { resolve(displayName, username, password); }
    });
    stmt.finalize();
  }

  insertUser(displayName, username, password) {
    const sql = `INSERT INTO users
                    (display_name, username, password, external_token, external_source, token)
                VALUES (?, ?, ?, ?, ?, ?)`;
    const stmt = this.db.prepare(sql);
    stmt.run(displayName, username, password, '', '', '');
    stmt.finalize();
  }

  registerNewUser(displayName, username, password) {
    this.findUser(displayName, username, password, this.insertUser.bind(this));
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
