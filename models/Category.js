const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: { type: String },
});

module.exports = model("Recipe", RecipeSchema);
