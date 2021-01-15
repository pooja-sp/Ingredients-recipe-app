import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {
    let cal = calories.toFixed(2);
    return (
        <div className="single-recipe">
            <h1>{title} </h1>
            <p> <span className="title">Calories - </span>  {cal} </p>
            <p className="title"> Ingredients - </p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;