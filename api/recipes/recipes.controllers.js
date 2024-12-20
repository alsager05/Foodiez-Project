const Category = require("../models/Category");
const recipe = require("../models/recipe");

exports.recipesGet = async (req, res) => {
  try {
    const recipes = await recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.recipesCreate = async (req, res) => {
  try {
    if (req.file) {
      console.log("object");
      req.body.image = req.file.path;
    }
    // create a new recipe related to the category
    const newRecipe = await recipe.create(req.body);

    // to add the recipe to the category
    await Category.findByIdAndUpdate(req.body.category, {
      $push: { recipes: newRecipe._id },
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.reciepeUpdate = async (req, res) => {
  const { reciepeId } = req.params;
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const foundreciepe = await reciepeId.findById(reciepeId);
    await foundreciepe.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.reciepeDelete = async (req, res) => {
  const { reciepeId } = req.params;
  try {
    const foundReciepe = await recipe.findById(reciepeId);
    await foundReciepe.deleteOne();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.addIngredientToRecipe = async (req, res) => {
  const { reciepeId, ingredientId } = req.params;
  const recipe = await recipe.findById(reciepeId);
  const updatedRecipe = await recipe.updateOne({
    $push: { ingredients: ingredientId },
  });
  res.status(200).json(updatedRecipe);
};
