const Relatorio = require("../models/Relatorio");
const Excel = require("exceljs");

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

  async gerarRelatorio(req, res) {
    try {
      const relatorios = await Relatorio.findAll({
        attributes: ["id", "nome", "valor"],
      });

      // Cria o arquivo Excel
      const workbook = new Excel.Workbook();
      const worksheet = workbook.addWorksheet("Relatorio");

      // Escreve os cabeçalhos das colunas
      worksheet.columns = [
        { header: "ID", key: "id" },
        { header: "Nome", key: "nome" },
        { header: "Valor", key: "valor" },
      ];
      relatorios.forEach((relatorio) => {
        worksheet.addRow({
          id: relatorio.id,
          nome: relatorio.nome,
          valor: relatorio.valor,
        });
      });
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );

      res.setHeader(
        "Content-Disposition",
        "attachment; filename=relatorio.xlsx"
      );
      await workbook.xlsx.write(res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensagem: "Erro ao buscar impostos" + error });
    }
  }
}

module.exports = new RelatorioController();
