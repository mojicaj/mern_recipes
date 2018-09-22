let mongoose = require("mongoose");

const server = process.env.DB_SERVER;
const database = process.env.DB;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose
  .connect(`mongodb://${user}:${password}@${server}/${database}`)
  .catch(err => console.error(err));

let Ingredient = new mongoose.Schema({
  measurement: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

let RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  servings: {
    type: String,
    required: true
  },
  prep: String,
  cook: String,
  ingredients: {
    type: [Ingredient],
    required: true,
    unique: true
  },
  instructions: {
    type: String,
    required: true
  },
  image: String
});

module.exports = mongoose.model("Recipe", RecipeSchema);
