import React, { Component } from 'react';
import axios from "axios";

import Ingredient from "./Ingredient";

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ingredients: [] }
    this.addRecipe = this.addRecipe.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  addIngredient(e) {
    e.preventDefault();

    // prepare form values as object conforming to ingredients model
    if (this.refs.measurement.value !== "" && this.refs.ingredient.value !== "") {
      let formData = {
        "measurement": this.refs.measurement.value,
        "name": this.refs.ingredient.value
      }

      // save ingredients as user adds them
      this.setState({ ingredients: [...this.state.ingredients, formData] });
    }
  }
  
  addRecipe(e) {
    e.preventDefault();
    document.getElementById('close').click();
    this.props.toggleModal();

    let ingredients = this.state.ingredients;

    if (this.state.ingredients.length === 0 ) {
      ingredients = [{
        "measurement": this.refs.measurement.value,
        "name": this.refs.ingredient.value
      }]
    }
    // prepare form values as json conforming to recipes model
    let formData = {
      "name": this.refs.name.value,
      "servings": this.refs.servings.value,
      "prep": this.refs.prep.value,
      "cook": this.refs.cook.value,
      "ingredients": ingredients,
      "instructions": this.refs.instructions.value,
      "image": this.refs.image.value
    }

    // add new recipe to DB and update Recipes
    axios.post("/recipe", formData).then(() => {
      this.props.updateRecipes();
      document.getElementById('home').click();
    }).catch(err => {throw err});

    // clear form values
    this.refs.name.value = "";
    this.refs.servings.value = "";
    this.refs.prep.value = "";
    this.refs.cook.value = "";
    this.setState({ ingredients: [] });
    this.refs.ingredient.value = "";
    this.refs.measurement.value = "";
    this.refs.instructions.value = "";
    this.refs.image.value = "";
  }

  render() {
    let { toggleModal } = this.props;
    
    return (
      <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="recipeModalLabel">New Recipe</h5>
              <button type="button" id="close" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="newRecipeForm" onSubmit={this.addRecipe}>
                <input ref="name" type="text" className="form-control form-group" placeholder="Name" required />
                <input ref="servings" type="text" className="form-control form-group" placeholder="Servings" required />
                <input ref="prep" type="text" className="form-control form-group" placeholder="Prep Time" />
                <input ref="cook" type="text" className="form-control form-group" placeholder="Cook Time" />
                <p>Ingredients: </p>
                <div className="d-flex" id="ingredientsList">
                  {this.state.ingredients.map(ingredient => {
                    return <Ingredient key={ingredient.name} ingredient={ingredient} /> 
                  })}
                </div>
                <div className="form-group form-inline" id="ingredientForm">
                  <input ref="ingredient" type="text" className="form-control w-40" placeholder="Ingredient" required />
                  <input ref="measurement" type="text" className="form-control w-40" placeholder="Measurement" required />
                  <button type="button" className="btn btn-success btn-sm" onClick={this.addIngredient}>&#43;</button>
                </div>
                <textarea ref="instructions" name="directions" id="directionsForm" cols="30" rows="5" className="form-control form-group" placeholder="Directions" required></textarea>
                <input ref="image" type="text" className="form-control form-group" placeholder="Image link" />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={toggleModal}>Close</button>
              <button type="submit" form="newRecipeForm" className="btn btn-primary">Add Recipe</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeForm;