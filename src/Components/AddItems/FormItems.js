import React, { useState } from "react";

// import classes from "./FormItems.module.css";
import "./FormItems.css";

const FormItems = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

  const enteredTitleHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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
    <div className=" formItems">
      <form className=" formItems__form" onSubmit={submithandler}>
        <label className=" formItems__header">Create Your List</label>
        <br />
        <div className={`formControl ${isValid && "invalid"}`}>
          <input
            className="formItems__input"
            type="text"
            placeholder="Write Your List"
            value={enteredTitle}
            onChange={enteredTitleHandler}
          />
          <br />
          {error ? (
            <label className=" error">Please Write Some Thing</label>
          ) : (
            ""
          )}
          <div>
            <button className="formItems__button">Add List</button>
          </div> 
        </div>
      </form>
    </div>
  );
};

export default FormItems;
