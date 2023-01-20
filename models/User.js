const Sequelize = require("sequelize");
const sequelize = new Sequelize("projetoXdb", "root", "63524100", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: Sequelize.STRING,
  telefone: Sequelize.STRING,
  email: Sequelize.STRING,
  CPF: Sequelize.STRING,
  CRO: Sequelize.STRING,
  permissao: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = User;
