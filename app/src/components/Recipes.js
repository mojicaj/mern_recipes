import React, { Component } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.getRecipes = this.getRecipes.bind(this);
    }

    getRecipes() {
        axios.get("http://localhost:3000/recipes")
        .then (res => {
            this.setState({ data: res.data});
        })
        
    }

    componentDidMount() {
        this.getRecipes();
    }

    render() {
        return (
            <div className="App">
               <RecipeList data={ this.state.data }/> 
            </div>
        )
    }
}

export default Recipes;
