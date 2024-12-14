const express = require("express");
const {
  categoryGet,
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} = require("./category.controllers");
const router = express.Router();

router.get("/", categoryGet);
router.post("", categoryCreate);
router.put("/:categoryId", categoryUpdate);
router.delete("/categoryId", categoryDelete);
module.exports = router;
