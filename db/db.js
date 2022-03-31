const Sequilize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequilize = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const Task = require("./Task")(sequilize);

const db = {};
db.Sequilize = Sequilize;
db.sequilize = sequilize;
db.task = Task;

module.exports = db;
