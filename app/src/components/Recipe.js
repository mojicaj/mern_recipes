import React, { Component } from 'react';
import Ingredient from './Ingredient';

class Recipe extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.recipe.name}</h3>
                <p>Servings: {this.props.recipe.servings}</p>
                <p>Prep time: {this.props.recipe.prep}</p>
                <p>Cook time: {this.props.recipe.cook}</p>
                <h5>Ingredients:</h5>
                <ul>
                {this.props.recipe.ingredients.map(ingredient => {
                    return (
                        <li><Ingredient ingredient={ingredient} key={ ingredient['_id']} /></li>
                    )
                })}
                </ul>
                <h5>Directions:</h5>
                <p>{this.props.recipe.instructions}</p>
            </div>
        )
    }
}

export default Recipe;

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