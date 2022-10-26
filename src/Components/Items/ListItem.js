import React from "react";
import Item from "./Item";

import classes from './ListItem.module.css'

const ListItem = (props) => {
  return (
    <div className={classes.ListItem}>
        {props.items.map((item) => ( 
          <Item
            key={item.id}
            title={item.title}
          />
          ))}
    </div>
  );
};

export default ListItem;
