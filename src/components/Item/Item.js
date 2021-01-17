import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={classes.Item}>
      <p>Name: {props.item.name}</p>
      <p>Id: {props.item.id}</p>
    </div>
  );
};

export default Item;
