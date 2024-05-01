import './index.css'
import React, { useEffect, useState } from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'

function App() {
    //default value for the stateful recipe 
    const initialRecipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
            { name: 'Sugar', prepared: true },
        ]
    };

    // TODO:Create recipe state
    //recipe is the stateful object
    //setRecipe is the function that
    // will be used to replace recipe with any new versions
    const [ recipe, setRecipe ] = useState(initialRecipe);
    // TODO: Add new state property related to the effect hook
    const [ prepared, setPrepared ] = useState(false);
    // TODO: Create ingredientClick event listener
    function ingredientClick(index) {
        //creating a copy of recipe
        const updatedRecipe = { ... recipe };
        //if the prepared is false, it becomes true vice versa
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        //function to update the state of the recipe with the modified one
        setRecipe(updatedRecipe);
    }
    // TODO: Add the effect hook
    useEffect(() => {
        //this returns a boolean value based on every item that matches the criteria
        setPrepared(recipe.ingredients.every(i => i.prepared));
        //runs only when the recipe object changes
    }, [recipe]);

    return (
        <article>
            <h1>Recipe Manager</h1>

            {/* TODO: Pass recipe metadata/props to RecipeTitle */}
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />

            {/* TODO: Pass ingredients and event listener to IngredientList */}
            <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick } />

            {/* TODO: Add the prep work display */}
            {/*looking intos the prepared object and checks if it is true or not */}
            { prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping.</h2>}
        </article>
    )
}

export default App;
