const express = require("express");
const { signup, login, profile } = require("../controller/script");
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/profile/:id", profile);

module.exports = router;
