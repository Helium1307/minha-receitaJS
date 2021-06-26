const express = require('express');
const router = express.Router();
const RegisterController = require('../controller/RegisterController');

router.get("/",  RegisterController.get);
router.post("/", RegisterController.post);
router.put("/", RegisterController.put);
router.delete("/:registroId", RegisterController.delete);

module.exports = router;