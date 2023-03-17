const Sequelize = require("sequelize");
const database = require("../config/database");

const Budget = database.define("orcamento_pacientes", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  valorCobrado: Sequelize.STRING,
  valorDesconto: Sequelize.STRING,
  status: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = Budget;
