import './IngredientList.css' //importing the css
import React from 'react';

function IngredientList(props) {
    // Create the list items using map
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            // Return the desired HTML for each ingredient
            //recipe is an object, ingredient is an array of objects containing key value pairss
            <li key={index} className={ ingredient.prepared ? 'prepared' : '' }>
                { ingredient.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ul>
            { ingredientListItems }
        </ul>
    );
}

export default IngredientList;