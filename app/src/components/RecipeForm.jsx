import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.addRecipe = this.addRecipe.bind(this);
    }
    
    addRecipe(e) {
        this.props.toggleModal();
        e.preventDefault()
        let formData = {
            "name": this.refs.name.value,
            "servings": this.refs.servings.value,
            "prep": this.refs.prep.value,
            "cook": this.refs.cook.value,
            "instructions": this.refs.instructions.value
        }
        this.refs.name.value = "";
        this.refs.servings.value = "";
        this.refs.prep.value = "";
        this.refs.cook.value = "";
        this.refs.instructions.value = "";
        console.log(formData);
    }

    render() {
        let { toggleModal } = this.props;
        
        return (
            <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="recipeModalLabel">New Recipe</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="newRecipeForm" onSubmit={this.addRecipe}>
                                <input ref="name" type="text" className="form-control form-group" placeholder="Name" required />
                                <input ref="servings" type="text" className="form-control form-group" placeholder="Servings" required />
                                <input ref="prep" type="text" className="form-control form-group" placeholder="Prep Time" />
                                <input ref="cook" type="text" className="form-control form-group" placeholder="Cook Time" />
                                <textarea ref="instructions" name="directions" id="directionsForm" cols="30" rows="10" className="form-control form-group" placeholder="Directions" required></textarea>
                                {/* <input ref="image" type="file" className="form-control-file form-group" placeholder="Image link" /> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={toggleModal}>Close</button>
                            <button type="submit" form="newRecipeForm" className="btn btn-primary" data-toggle="modal"
            data-target="#recipeModal">Add Recipe</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeForm;