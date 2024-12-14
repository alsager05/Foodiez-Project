const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: { type: String },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
});

module.exports = model("Recipe", RecipeSchema);
