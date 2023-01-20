const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/submitform", UserController.createUser);
router.get("/users", UserController.readUsers);

module.exports = router;
