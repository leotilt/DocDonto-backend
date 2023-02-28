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

const Budget = sequelize.define("orcamento_pacientes", {
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
