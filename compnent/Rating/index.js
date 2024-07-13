import ReactStars from "react-stars";
import React from "react";
// import { render } from "react-dom";
import style from "./index.module.css";
const Rating = ({ rating }) => {
  const ratingChanged = ({}) => {};
  return (
    <div className={style.container}>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={16}
        color2={"#056050"}
        value={rating}
      />
    </div>
  );
};

export default Rating;
