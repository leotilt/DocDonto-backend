const express = require("express");
const router = express.Router();
const PacienteController = require("../controllers/PacienteController");
const ClinicController = require("../controllers/ClinicaController");
const OrcamentosPacientesController = require("../controllers/OrcamentosPacientesController");
const RelatorioController = require("../controllers/RelatorioController");

// Rotas PacienteController
router.post("/createPaciente", PacienteController.createUser);
router.get("/paciente", PacienteController.readUsers);
router.put("/pacienteUpdate/:id", PacienteController.updateUser);
router.delete("/pacienteDelete/:id", PacienteController.deleteUser);

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

module.exports = router;
