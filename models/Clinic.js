const Sequelize = require("sequelize");
const database = require("../config/database");

const Clinic = database.define("clinica_odonto", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: Sequelize.STRING,
  CNPJ: Sequelize.STRING,
  endereco: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = Clinic;
