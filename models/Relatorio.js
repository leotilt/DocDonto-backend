const Sequelize = require("sequelize");
const database = require("../config/database");

const Relatorio = database.define("impostos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Relatorio;
