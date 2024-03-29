const express = require("express");
const trabajosControllers = require('../controllers/trabajosControllers')
const router = express.Router();

router.post("/", trabajosControllers.crearTrabajo);
router.get("/", trabajosControllers.verTrabajos);
router.get("/:id", trabajosControllers.verTrabajosPorId);
router.put("/:id", trabajosControllers.editarTrabajo);

module.exports = router