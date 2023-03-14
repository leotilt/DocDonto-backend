const express = require("express");
const router = express.Router();
const PacienteController = require("../controllers/PacienteController");
const ClinicController = require("../controllers/ClinicaController");
const OrcamentosPacientesController = require("../controllers/OrcamentosPacientesController");

// Rotas UserController
router.post("/submitform", PacienteController.createUser);
router.get("/users", PacienteController.readUsers);
router.put("/users/:id", PacienteController.updateUser);
router.delete("/users/:id", PacienteController.deleteUser);

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

module.exports = router;
