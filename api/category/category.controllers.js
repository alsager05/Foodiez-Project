const Category = require("../models/Category");

exports.categoryGet = async (req, res) => {
  try {
    const categories = await Category.find().populate("recipes");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.categoryCreate = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.categoryUpdate = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const foundCategory = await Category.findById(categoryId);
    await foundCategory.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.categoryDelete = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const foundCategory = await Category.findById(categoryId);
    await foundCategory.deleteOne();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
