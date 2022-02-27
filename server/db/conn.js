const { MongoClient } = require("mongodb");
const Db = process.env.MONGODB_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      if (db) {
        _db = db.db("employees");
        console.log;
      }
      return callback(err);
    });
  },
  getDb: () => _db,
};
