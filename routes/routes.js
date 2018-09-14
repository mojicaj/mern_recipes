let RecipeModel = require('../model/recipes.model')
let express = require('express')
let router = express.Router()
let path = require('path')

// Home Page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/public/index.html'))
})

// Create a new recipe
router.post('/recipe', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing')
    }

    let model = new RecipeModel(req.body)
    model.save()
    .then(doc => {
        if(!doc || doc.length === 0) {
            return res.status(500).send(doc)
        }
        res.status(201).send(doc) 
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Get a recipe => /recipe?recipe=<recipe name>
router.get('/recipe', (req, res) => {
    if(!req.query.recipe) {
        return res.status(400).send('Missing URL parameter: recipe')
    }

    RecipeModel.findOne({
        name: req.query.recipe
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Get all recipes
router.get('/recipes', (req, res) => {
    RecipeModel.find({})
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Update a recipe => /recipe?recipe=<recipe name>
router.put('/recipe', (req, res) => {
    if(!req.query.recipe) {
        return res.status(400).send('Missing URL parameter: recipe')
    }

    RecipeModel.findOneAndUpdate({
        name: req.query.recipe
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Delete a recipe => /recipe?recipe=<recipe name>
router.delete('/recipe', (req, res) => {
    if(!req.query.recipe) {
        return res.status(400).send('Missing URL parameter: recipe')
    }

    RecipeModel.findOneAndRemove({
        name: req.query.recipe
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router

/*
Recipe JSON:
{
    "name": "Buffalo Wings",
    "servings": "6",
    "prep": "30 minutes",
    "cook": "2 hours", 
    "ingredients": [
        {
            "measurement": "1 lb",
            "name": "Chicken wings"
        },
        {
            "measurement": "3 cups",
            "name": "Hot sauce"
        }
    ],
    "instructions": "bake wings in oven at 300 degrees. Stir the pot, cover the wings",
    "image": ""
}
*/