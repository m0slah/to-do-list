import React, { useState } from "react";

import classes from './FormItems.module.css'

const FormItems = (props) => {
  const [enteredTitle, setEnteredTitle] = useState();

  const changeHandlerTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();

    const ItemData = {
      title: enteredTitle,
    };
    props.onSaveItemsDataHandler(ItemData);
    setEnteredTitle("");
  };

  return (
    <div className={classes.formItems}>
      <form className={classes.formItems__form} onSubmit={submithandler}>
        <label className={classes.formItems__header}>create Your to do list</label>
        <br />
        <input
          className={classes.formItems__input}
          type="text"
          placeholder="Write Your List"
          onChange={changeHandlerTitle}
          value={enteredTitle}
        />
        <br />
        <button className={classes.formItems__button}>Add List</button>
      </form>
    </div>
  );
};

export default FormItems;
