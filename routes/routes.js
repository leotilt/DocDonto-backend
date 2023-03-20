const express = require("express");
const router = express.Router();
const PacienteController = require("../controllers/PacienteController");
const ClinicController = require("../controllers/ClinicaController");
const OrcamentosPacientesController = require("../controllers/OrcamentosPacientesController");
const RelatorioController = require("../controllers/RelatorioController");

// Rotas PacienteController
router.post("/createPaciente", PacienteController.createPacient);
router.get("/paciente", PacienteController.readPacient);
router.put("/pacienteUpdate/:id", PacienteController.updatePacient);
router.delete("/pacienteDelete/:id", PacienteController.deletePacient);

// Rotas ClinicaController
router.post("/createClinic", ClinicController.createClinic);
router.get("/clinic", ClinicController.readClinics);
router.put("/clinic/:id", ClinicController.updateClinic);
router.delete("/clinic/:id", ClinicController.deleteClinic);

// Rotas OrcamentosPacientesController
router.post("/createBudget", OrcamentosPacientesController.createBudget);
router.get("/budget", OrcamentosPacientesController.readBudgets);
router.put("/budget/:id", OrcamentosPacientesController.updateBudget);
router.delete("/budget/:id", OrcamentosPacientesController.deleteBudget);
// Rotas RelatoioController
router.get("/relatorios", RelatorioController.getAll);
router.get("/gerar-relatorio", RelatorioController.gerarRelatorio);

module.exports = router;
