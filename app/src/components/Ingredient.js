import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
            <div>
                <p>{this.props.ingredient.name} - {this.props.ingredient.measurement}</p>
            </div>
        )
    }
}

export default Ingredient;

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