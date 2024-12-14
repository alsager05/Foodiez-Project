const express = require("express");
const {
  ingredientGet,
  ingredientCreate,
  ingredientUpdate,
  ingredientDelete,
} = require("./ingredient.controllers");
const router = express.Router();

router.get("/", ingredientGet);
router.post("", ingredientCreate);
router.put("/:ingredientId", ingredientUpdate);
router.delete("/ingredientId", ingredientDelete);
module.exports = router;
