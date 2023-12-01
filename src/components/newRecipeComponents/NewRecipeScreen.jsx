import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Header from "../Header";
// import Footer from "../Footer";
import { Formik } from "formik";
import axios from "axios";

import classes from "./NewRecipe.module.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import "react-toastify/dist/ReactToastify.min.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const showIngredients = ingredients.map((ing, index) => {
    return (
      <span className={classes["inputs-container__span-type"]}>
        <ul>
          <li key={index}>{`${ing.quantity} of ${ing.name}`}</li>
        </ul>
      </span>
    );
  });
  const addIngredients = (e) => {
    e.preventDefault();

    setIngredients(() => [...ingredients, { name, quantity }]);

    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };
  const onSubmit = (values, funcs) => {
    const { resetForm } = funcs;
    values.ingredients = ingredients;
    console.log(values);
    axios
      .post("https://recipes.devmountain.com/recipes", values)
      .then((response) => {
        // alert("You have added a new recipe!");
        toast("You added a new recipe !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
    resetForm();
  };

  return (
    <section className={classes["form-container"]}>
      {/* <Header /> */}
      <h1>Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      {/* <Footer /> */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={classes["inputs-container"]}>
            <div className={classes["inputs-container__title"]}>
              <input
                type="text"
                placeholder="Recipe Name"
                name="recipeName"
                value={values.recipeName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="ImageURL"
                name="imageURL"
                value={values.imageURL}
                onChange={handleChange}
              />
            </div>
            <span className={classes["inputs-container__span-type"]}>
              <input
                type="radio"
                name="type"
                value="cook"
                onChange={handleChange}
              />
              <label htmlFor="cook">Cook</label>
              <input
                type="radio"
                name="type"
                value="bake"
                onChange={handleChange}
              />
              <label htmlFor="bake">Bake</label>
              <input
                type="radio"
                name="type"
                value="drink"
                onChange={handleChange}
              />
              <label htmlFor="drink">Drink</label>
            </span>
            <div className={classes["inputs-container__prep"]}>
              <input
                type="text"
                placeholder="Prep Time"
                name="prepTime"
                value={values.prepTime}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Cook Time"
                name="cookTime"
                value={values.cookTime}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Serves"
                name="serves"
                value={values.serves}
                onChange={handleChange}
              />
            </div>
            <div className={classes["inputs-container__ing"]}>
              <input
                type="text"
                placeholder="Ingredient name"
                // name="ingredients"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Quantity"
                // name="ingredients"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <div>{showIngredients}</div>

              <button onClick={addIngredients}>Add Another</button>
            </div>
            <textarea
              cols="30"
              rows="10"
              placeholder="Instructions"
              name="instructions"
              value={values.instructions}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className={classes["form-container__button"]}>
              Save
            </button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
