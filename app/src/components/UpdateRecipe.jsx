import React, { Component } from 'react';
import axios from "axios";

import Ingredient from "./Ingredient";

class UpdateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = { ingredients: props.recipe.ingredients }
    this.updateRecipe = this.updateRecipe.bind(this);
    this.updateIngredient = this.updateIngredient.bind(this);
  }

  updateIngredient(e) {
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
  
  updateRecipe(e) {
    e.preventDefault();
    document.getElementById('closeUpdate').click();
    this.props.toggleUpdateModal();

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
    
    // update recipe in the DB and update Recipe
    axios.put(`http://localhost:3001/recipe?recipe=${this.props.recipe.name}`, formData).then(() => {
      this.props.updateRecipes()
      this.props.history.push("/");
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

  componentDidMount() {
    let lastIngredient = this.props.recipe.ingredients.length - 1;

    this.refs.name.value = this.props.recipe.name;
    this.refs.servings.value = this.props.recipe.servings;
    this.refs.prep.value = this.props.recipe.prep;
    this.refs.cook.value = this.props.recipe.cook;
    this.refs.ingredient.value = this.props.recipe.ingredients[lastIngredient].name;
    this.refs.measurement.value = this.props.recipe.ingredients[lastIngredient].measurement;
    this.refs.instructions.value = this.props.recipe.instructions;
    this.refs.image.value = this.props.recipe.image;
  }

  render() {
    let { toggleUpdateModal} = this.props;

    return (
      <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateModalLabel">Update Recipe</h5>
              <button type="button" id="closeUpdate" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleUpdateModal}>
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="updateRecipeForm" onSubmit={this.updateRecipe}>
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
                  <button type="button" className="btn btn-success btn-sm" onClick={this.updateIngredient}>&#43;</button>
                </div>
                <textarea ref="instructions" name="directions" id="directionsForm" cols="30" rows="5" className="form-control form-group" placeholder="Directions" required></textarea>
                <input ref="image" type="text" className="form-control form-group" placeholder="Image link" />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={toggleUpdateModal}>Close</button>
              <button type="submit" form="updateRecipeForm" className="btn btn-primary">Update Recipe</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateRecipe;