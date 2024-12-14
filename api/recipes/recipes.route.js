const express = require("express");
const {
  recipesGet,
  recipesCreate,
  reciepeUpdate,
  reciepeDelete,
  addIngredientToRecipe,
} = require("./recipes.controllers");
const router = express.Router();

router.get("/", recipesGet);
router.post("", recipesCreate);
router.put("/:recipeId", reciepeUpdate);
router.delete("/recipId", reciepeDelete);
router.post("/:recipeId/add/:ingredientId", addIngredientToreciepe);

module.exports = router;
