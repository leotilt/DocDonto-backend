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

const Clinic = sequelize.define("clinica_odonto", {
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
