import React from 'react'

import classes from './Item.module.css'

const Item = (props) => {
  
  const deleteItem = () => {
    props.onDelete(props.id);
}

  return (
    <li className={classes.item} >
      {props.children}
      <button className={classes.deleteBtn} onClick={deleteItem} >Delete This one</button>
    </li>
  )
}

export default Item;