import { useState } from "react";
import "./App.css";

import AddItems from "./Components/AddItems/AddItems";
import ListItem from "./Components/Items/ListItem";

const Dummy_List = [];

const App = () => {
  const [enteredItem, setEnteredItem] = useState(Dummy_List);

  const addItemHandler = (title) => {
    setEnteredItem((prevItems) => {
      return [...prevItems, title];
    });
  };

  const deleteItemHandler = (itemId) => {
    setEnteredItem((prevItems) => {
      const updatedGoals = prevItems.filter((item) => item.id !== itemId);
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <section className="container">
         <AddItems onAddItems={addItemHandler} />
      <ListItem items={enteredItem} onDeleteItem={deleteItemHandler} />
      </section>
     
    </div>
  );
};

export default App;
