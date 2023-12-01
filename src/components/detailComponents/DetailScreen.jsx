import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import Header from "../Header";
// import Footer from "../Footer";
// import { useParams } from "react-router-dom";
import classes from "./DetailScreen.module.css";
import styles from "../homeComponents/AdBanner.module.css";

const DetailScreen = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className={styles.image}
        style={{
          backgroundImage: `linear-gradient(
           190deg,
           rgba(0, 0, 0, 0.8),
           rgba(0, 0, 0, 0.8)),
           url(${recipe.image_url})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className={styles["description-container"]}>
          <h1>{recipe.recipe_name}</h1>
        </div>
      </div>
      <section className={classes.details}>
        {/* <Header /> */}
        {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
        <div className={classes["recipe-container"]}>
          <h2>{recipe.recipe_name}</h2>
          <ul>
            <li>Prep Time:{recipe.prep_time}</li>
            <li>Cook Time: {recipe.cook_time}</li>
            <li>Serves: {recipe.serves}</li>
          </ul>
          {/* {console.log("------------------", recipe.ingredients)} */}
          <h2>Ingredients</h2>

          <ul>
            {recipe.ingredients?.map((ing, index) => {
              return (
                <li key={index}>
                  {ing.quantity} {ing.ingredient}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes["instruction-container"]}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && recipe.instructions}
          </p>
        </div>
        {/* <Footer /> */}
      </section>
    </>
  );
};

export default DetailScreen;
