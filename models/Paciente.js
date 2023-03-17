const Sequelize = require("sequelize");
const database = require("../config/database");

const User = database.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: Sequelize.STRING,
  responsavel: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  CPF: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = User;
