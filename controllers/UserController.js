const User = require("../models/User");
const { Op } = require("sequelize");

class UserController {
  async createUser(req, res) {
    try {
      const user = await User.findOne({
        where: {
          [Op.or]: [
            { email: req.body.email },
            { CPF: req.body.CPF },
            { CRO: req.body.CRO },
          ],
        },
      });
      if (user) {
        res
          .status(400)
          .json({ mensagem: "Já existe um usuário com esses dados" });
      } else {
        const newUser = await User.create({
          nome: req.body.nome,
          telefone: req.body.telefone,
          email: req.body.email,
          CPF: req.body.CPF,
          CRO: req.body.CRO,
          permissao: req.body.permissao,
        });
        res.json({ mensagem: "Usuário inserido com sucesso", newUser });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensagem: "Erro ao inserir usuário" + error });
    }
  }

  async readUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar usuários" });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
      const updated = await user.update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        CPF: req.body.CPF,
        CRO: req.body.CRO,
        permissao: req.body.permissao,
      });
      res.json({ message: "Usuário atualizado com sucesso", updated });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao atualizar usuário" });
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
      await user.destroy();
      res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao deletar usuário" });
    }
  }
}
module.exports = new UserController();
