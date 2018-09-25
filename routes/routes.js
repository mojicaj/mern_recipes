let RecipeModel = require("../model/recipes.model");
let express = require("express");
let router = express.Router();

// Create a new recipe
router.post("/api/recipe", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }

  let model = new RecipeModel(req.body);
  model
    .save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get a recipe => /api/recipe?recipe=<recipe name>
router.get("/api/recipe", (req, res) => {
  if (!req.query.recipe) {
    return res.status(400).send("Missing URL parameter: recipe");
  }

  RecipeModel.findOne({
    name: req.query.recipe
  })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get all recipes
router.get("/api/recipes", (req, res) => {
  RecipeModel.find({})
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Update a recipe => /api/recipe?recipe=<recipe name>
router.put("/api/recipe", (req, res) => {
  if (!req.query.recipe) {
    return res.status(400).send("Missing URL parameter: recipe");
  }

  RecipeModel.findOneAndUpdate(
    {
      name: req.query.recipe
    },
    req.body,
    {
      new: true
    }
  )
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Delete a recipe => /api/recipe?recipe=<recipe name>
router.delete("/api/recipe", (req, res) => {
  if (!req.query.recipe) {
    return res.status(400).send("Missing URL parameter: recipe");
  }

  RecipeModel.findOneAndRemove({
    name: req.query.recipe
  })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
