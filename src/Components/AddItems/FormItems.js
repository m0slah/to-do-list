import React, { useState } from "react";

import classes from "./FormItems.module.css";

const FormItems = (props) => {
  const [enteredTitle, setEnteredTitle] = useState();
  const [error, setError] = useState(false);

  const changeHandlerTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();

    if (enteredTitle.length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    const ItemData = {
      title: enteredTitle,
    };

    props.onSaveItemsDataHandler(ItemData);
    setEnteredTitle("");
  };

  return (
    <div className={classes.formItems}>
      <form className={classes.formItems__form} onSubmit={submithandler}>
        <label className={classes.formItems__header}>Create Your List</label>
        <br />
        <div>
          <input
            className={classes.formItems__input}
            type="text"
            placeholder="Write Your List"
            onChange={changeHandlerTitle}
            value={enteredTitle}
          />
          <br />
          {error ? <label className={classes.error}>Please Write Some Thing</label> : ""} 
        </div>
        <button className={classes.formItems__button}>Add List</button>
      </form>
    </div>
  );
};

export default FormItems;
