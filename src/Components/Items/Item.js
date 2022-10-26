import React from 'react'

import classes from './Item.module.css'

const Item=(props)=> {
  return (
    <div className={classes.item}> 
        <h2 className={classes.item__header}>{props.title}</h2>
    </div>
  )
}

export default Item;