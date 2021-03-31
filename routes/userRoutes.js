const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// TODO: creating routes for users
router.route("/").get(userController.bye);

module.exports = router;
