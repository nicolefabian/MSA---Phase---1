import React from 'react';

function RecipeSteps({ steps }) {
    return (
        <div>
            <h2>Steps</h2>
            <ol>
                {/* Map through the steps array and render each step as a list item */}
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}
export default RecipeSteps;
