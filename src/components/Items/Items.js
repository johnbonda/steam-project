import React, { useState, useEffect } from "react";
import axios from "axios";

import Item from "../Item/Item";
import classes from "./Items.module.css";
import { STEAM_URL } from "../../constants";

const Items = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("[Items] on mounting");
    console.log("Calling steam url");
    axios
      .get(STEAM_URL)
      .then((response) => {
        const items = response.data.descriptions;
        const fetchedItems = items.map((item) => ({
          id: item.classid,
          name: item.name,
        }));
        setItems(fetchedItems);
      })
      .catch((err) => {
        console.log(err);
        alert("Error fetching inventory");
      });
  }, []);

  return (
    <div className={classes.Items}>
      <p>These are my items: </p>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
