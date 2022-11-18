import React from "react";
import Item from "./Item";

import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={classes.ListItem}>
      <ul>
        {props.items?.map((item) => (
          <Item id={item.id} key={item.id} title={item.title} onDelete={props.onDeleteItem}>
            <div className={classes.ListItem_title}>{item.title}</div>
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
