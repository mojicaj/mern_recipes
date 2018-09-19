import React, { Component } from "react";
import axios from "axios";
import "./styles/App.css";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    this.getRecipes = this.getRecipes.bind(this);
  }

  getRecipes() {
    axios.get("http://localhost:3001/recipes").then(res => {
      this.setState({ data: res.data });
    });
  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    return (
      <div className="container-fluid">
        <RecipeList data={this.state.data} />
        <RecipeForm
          updateData={this.getRecipes}
          toggleModal={this.props.toggleModal}
        />
      </div>
    );
  }
}

export default Recipes;
