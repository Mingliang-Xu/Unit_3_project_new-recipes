import React, { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import { RecipeCard } from "../newRecipeComponents/RecipeCard";

import classes from "./HomeScreen.module.css";

// import Header from "../Header";
// import Footer from "../Footer";
import axios from "axios";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((response) => {
        // console.log(response.data);
        setRecipes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(recipes);

  const displayRecipe = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchValues = search.toLowerCase();
      return title.includes(searchValues);
    })
    .map((recipe, index) => {
      return <RecipeCard key={recipe.id} recipe={recipe} />;
    });

  return (
    <div className={classes.container}>
      <AdBanner />
      {/* <Header /> */}
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      {/* <span> */}
      <input
        className={classes.search}
        type="text"
        placeholder=" 🔍 Search for a recipe"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* </span> */}
      <div className={classes.display}>{displayRecipe}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomeScreen;
