const Paciente = require("../models/Paciente");
const { Op } = require("sequelize");

class PacienteController {
  async createPacient(req, res) {
    try {
      const user = await Paciente.findOne({
        where: {
          [Op.or]: [{ CPF: req.body.CPF }],
        },
      });
      if (user) {
        res
          .status(400)
          .json({ mensagem: "Já existe um usuário com esses dados" });
      } else {
        const newPaciente = await Paciente.create({
          nome: req.body.nome,
          CPF: req.body.CPF,
          responsavel: req.body.responsavel ? true : false,
        });
        res.json({ mensagem: "Usuário inserido com sucesso", newPaciente });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensagem: "Erro ao inserir usuário" + error });
    }
  }

  async readPacient(req, res) {
    try {
      const Pacientes = await Paciente.findAll();
      res.json(Pacientes);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar usuários" });
    }
  }

  async updatePacient(req, res) {
    try {
      const paciente = await Paciente.findByPk(req.params.id);
      if (!paciente) {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
      const updated = await paciente.update({
        nome: req.body.nome || paciente.nome,
        CPF: req.body.CPF || paciente.CPF,
        responsavel:
          req.body.responsavel !== undefined
            ? req.body.responsavel
            : paciente.responsavel,
      });
      res.json({ message: "Usuário atualizado com sucesso", updated });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao atualizar usuário" });
    }
  }

  async deletePacient(req, res) {
    try {
      const user = await Paciente.findByPk(req.params.id);
      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
      await user.destroy();
      res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar usuário" + error });
    }
  }
}
module.exports = new PacienteController();
