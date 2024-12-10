const { model, Schema } = require('mongoose');

const RecipeSchema = new Schema(
    {
     name: {type: String},
     rate: {type: Number},
     image: {type: String},
    })

    module.exports = model('Recipe', RecipeSchema);