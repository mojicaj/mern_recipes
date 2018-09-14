let mongoose = require('mongoose')

const server = 'ds157522.mlab.com:57522'
const database = 'jm_dev'
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let Ingredient = new mongoose.Schema({
    measurement: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }

})

let RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    servings: {
        type: String,
        required: true,
        unique: true
    },
    prep: String,
    cook: String, 
    ingredients: 
    {
        type: [Ingredient],
        required: true,
        unique: true
    },
    instructions: {
        type: String,
        required: true
    },
    image: String
})

module.exports = mongoose.model('Recipe', RecipeSchema)
