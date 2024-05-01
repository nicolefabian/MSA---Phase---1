import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle'
// TODO: Import IngredientList
import IngredientList from './IngredientList'
import RecipeSteps from './RecipeSteps';

function App() {
    // TODO: Add recipe object
    const recipe = {
        //properties
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
        ],
        steps: [
            "Add cut potatoes to a pot of heavily salted water.",
            "Bring pot to a boil.",
            "Boil the potatoes until fork tender, about 15-20 minutes.",
            "Strain the potatoes.",
            "Return potatoes to pot.",
            "Add butter, cream, salt, and pepper to taste.",
            "Mash potatoes.",
            "Reseason and add butter and cream as desired."
        ]
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            {/*the title/feedback is the prop parameter in the RecipeTitle function and is getting assigned to returned the title of each recipe object*/}
            <RecipeTitle title={recipe.title} feedback={ recipe.feedback } />
            
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            
            {/*accessing the steps by navigating through recipe object*/}
            <RecipeSteps steps={recipe.steps} />
        </article>
    )
}

export default App;
