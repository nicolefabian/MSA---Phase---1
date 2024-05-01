import './IngredientList.css'
import React from 'react';

function IngredientList(props) {
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} 
                className={ ingredient.prepared ? 'prepared' : '' }
                // TODO: Add onClick event
                onClick={ () => props.onClick(index) } //index is passed to indicate which ingredent was clicked. allows the parent componebt to know which ingredient needs to be updated
            >
                { ingredient.name }
            </li>
        );
    });

    return (
        <ul>
            { ingredientListItems }
        </ul>
    );
}

export default IngredientList;