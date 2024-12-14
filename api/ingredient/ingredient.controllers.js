const Ingredient = require("../../models/Ingredient");

exports.ingredientGet = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.ingredientCreate = async (req, res) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.ingredientUpdate = async (req, res) => {
  const { ingredientId } = req.params;
  try {
    const foundIngredient = await Ingredient.findById(ingredientId);
    await foundIngredient.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.ingredientDelete = async (req, res) => {
  const { ingredientId } = req.params;
  try {
    const foundIngredient = await recipe.findById(ingredientId);
    await foundIngredient.deleteOne();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
