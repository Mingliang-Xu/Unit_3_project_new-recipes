import React from "react";

import { Link } from "react-router-dom";

import classes from "./Recipe.module.css";

export const RecipeCard = ({ recipe }) => {
  return (
    <div className={classes["recipe-card"]}>
      <img
        className={classes["recipe-img"]}
        src={recipe.image_url}
        alt="a recipe"
      />
      <h1 className={classes["recipe-name"]}>{recipe.recipe_name}</h1>
      <Link to={`recipe/${recipe.recipe_id}`}>
        <button className={classes["recipe-btn"]}>See More</button>
      </Link>
    </div>
  );
};
