const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: { type: String },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

module.exports = model("Category", CategorySchema);
