const express = require("express");
const router = express.Router();

const { userCreate, usersGet } = require("./users.contollers");

router.get("/", usersGet);

router.post("/signup", userCreate);

module.exports = router;
