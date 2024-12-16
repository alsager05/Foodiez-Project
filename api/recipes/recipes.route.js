const express = require("express");
const {
  recipesGet,
  recipesCreate,
  reciepeUpdate,
  reciepeDelete,
  addIngredientToRecipe,
} = require("./recipes.controllers");
const upload = require("../../multer");
const router = express.Router();

router.get("/", recipesGet);
router.post("", upload.single("image"), recipesCreate);
router.put("/:recipeId", upload.single("image"), reciepeUpdate);
router.delete("/recipId", reciepeDelete);
router.post("/:recipeId/add/:ingredientId", addIngredientToRecipe);

module.exports = router;
