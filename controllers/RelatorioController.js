const Relatorio = require("../models/Relatorio");

class RelatorioController {
  async getAll(req, res) {
    try {
      const Relatorios = await Relatorio.findAll({
        attributes: ["id", "nome", "valor"],
      });
      res.json(Relatorios);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensagem: "Erro ao buscar impostos" + error });
    }
  }
}
module.exports = new RelatorioController();
