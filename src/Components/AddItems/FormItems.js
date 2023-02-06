import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {db} from '../../Firebase'
// import classes from "./FormItems.module.css";
import "./FormItems.css";

const FormItems = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

  const submithandler = async (event) => {
    event.preventDefault();

    if (enteredTitle !== "") {
      await addDoc(collection(db, "todos"), {
        enteredTitle,
        completed:false,
      })
      setEnteredTitle("")
    }

    if (enteredTitle.length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }
  };

  const enteredTitleHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEnteredTitle(event.target.value);
  };



  return (
    <div className=" formItems">
      <form className=" formItems__form" onSubmit={submithandler}>
        <label className=" formItems__header">Create Your Todos</label>
        <br />
        <div className={`formControl ${isValid && "invalid"}`}>
          <input
            className="formItems__input"
            type="text"
            placeholder="Entered to do..."
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
