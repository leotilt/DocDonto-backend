const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const ClinicController = require("../controllers/ClinicaController");
const OrcamentosPacientesController = require("../controllers/OrcamentosPacientesController");

// Rotas UserController
router.post("/submitform", UserController.createUser);
router.get("/users", UserController.readUsers);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

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
