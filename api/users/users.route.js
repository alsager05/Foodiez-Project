const express = require("express");
const { usersGet, userCreate } = require("./users.controllers");
const router = express.Router();

router.get("/", usersGet);

router.post("/signup", userCreate);

module.exports = router;
