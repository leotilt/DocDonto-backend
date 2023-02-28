require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "projetoXdb",
  "root",
  process.env.ROOT_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;