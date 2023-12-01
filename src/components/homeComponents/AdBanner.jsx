import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

import classes from "./AdBanner.module.css";

const AdBanner = ({ recipe }) => {
  return (
    <div
      className={classes.image}
      style={{
        backgroundImage: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(https://hips.hearstapps.com/hmg-prod/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={classes["description-container"]}>
        <h3>New Recipe</h3>
        <h1>Pineapple Salmon</h1>
        <h3 className={classes["recipe-desc"]}>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          {/* <br /> */}
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and
          {/* <br /> */}
          garnished in butter, garlic, and chives. You won’t want to miss it!
          {/* <br /> */}
        </h3>
        <Link to="/recipe/3">
          <button className={classes["blue-btn"]}>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
