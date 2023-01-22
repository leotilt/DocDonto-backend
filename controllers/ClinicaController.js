const Clinic = require("../models/Clinic");
const { Op } = require("sequelize");

class ClinicController {
  async createClinic(req, res) {
    try {
      const clinic = await Clinic.findOne({
        where: {
          [Op.or]: [
            { endereco: req.body.endereco },
            { CNPJ: req.body.CNPJ },
            { nome: req.body.nome },
          ],
        },
      });
      if (clinic) {
        res
          .status(400)
          .json({ mensagem: "Já existe uma clinica com esses dados" });
      } else {
        const newClinic = await Clinic.create({
          nome: req.body.nome,
          CNPJ: req.body.CNPJ,
          endereco: req.body.endereco,
        });
        res.json({ mensagem: "Clinica inserido com sucesso", newClinic });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensagem: "Erro ao inserir Clinica" + error });
    }
  }

  async readClinics(req, res) {
    try {
      const Clinics = await Clinic.findAll();
      res.json(Clinics);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar Clinicas" });
    }
  }

  async updateClinic(req, res) {
    try {
      const clinic = await Clinic.findByPk(req.params.id);
      if (!clinic) {
        res.status(404).json({ message: "Clinica não encontrado" });
      }

      const updatedData = {
        nome: req.body.nome,
        CNPJ: req.body.CNPJ,
        endereco: req.body.endereco,
      };
      let isChanged = false;
      Object.keys(updatedData).forEach((key) => {
        if (updatedData[key] !== clinic[key]) {
          isChanged = true;
        }
      });
      if (isChanged) {
        const updated = await clinic.update(updatedData);
        res.json({ message: "Clinica atualizado com sucesso", updated });
      } else {
        res
          .status(200)
          .json({ message: "Nenhuma alteração foi feita na clínica" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao atualizar Clinica" });
    }
  }

  async deleteClinic(req, res) {
    try {
      const clinic = await Clinic.findByPk(req.params.id);
      if (!clinic) {
        res.status(404).json({ message: "Clinica não encontrado" });
      }
      await clinic.destroy();
      res.json({ message: "Clinica deletado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao deletar Clinica" });
    }
  }
}

module.exports = new ClinicController();
