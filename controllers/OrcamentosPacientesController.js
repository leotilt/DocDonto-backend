const Budget = require("../models/Budget");
const { Op } = require("sequelize");

class OrcamentosPacientesController {
  async createBudget(req, res) {
    try {
      const budget = await Budget.findOne({
        where: {
          [Op.or]: [
            { valorCobrado: req.body.valorCobrado },
            { valorDesconto: req.body.valorDesconto },
            { status: req.body.status },
          ],
        },
      });
      if (budget) {
        res
          .status(400)
          .json({ mensagem: "Já existe uma Orçamento com esses dados" });
      } else {
        const newBudget = await Budget.create({
          valorCobrado: req.body.valorCobrado,
          valorDesconto: req.body.valorDesconto,
          status: req.body.status,
        });
        res.json({ mensagem: "Orçamento inserido com sucesso", newBudget });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensagem: "Erro ao inserir Orçamento" + error });
    }
  }

  async readBudgets(req, res) {
    try {
      const Budgets = await Budget.findAll();
      res.json(Budgets);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar Orçamentos" });
    }
  }

  async updateBudget(req, res) {
    try {
      const Budget = await Budget.findByPk(req.params.id);
      if (!Budget) {
        res.status(404).json({ message: "Orçamento não encontrado" });
      }

      const updatedData = {
        valorCobrado: req.body.valorCobrado,
        valorDesconto: req.body.valorDesconto,
        status: req.body.status,
      };
      let isChanged = false;
      Object.keys(updatedData).forEach((key) => {
        if (updatedData[key] !== Budget[key]) {
          isChanged = true;
        }
      });
      if (isChanged) {
        const updated = await Budget.update(updatedData);
        res.json({ message: "Orçamento atualizado com sucesso", updated });
      } else {
        res
          .status(200)
          .json({ message: "Nenhuma alteração foi feita no orçamento" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao atualizar Orçamento" });
    }
  }

  async deleteBudget(req, res) {
    try {
      const Budget = await Budget.findByPk(req.params.id);
      if (!Budget) {
        res.status(404).json({ message: "Orçamento não encontrado" });
      }
      await Budget.destroy();
      res.json({ message: "Orçamento deletado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao deletar Orçamento" });
    }
  }
}

module.exports = new OrcamentosPacientesController();
