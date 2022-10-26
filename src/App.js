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

  return (
    <div className="App">
      <AddItems onAddItems={addItemHandler} />
      <ListItem items={enteredItem} />
    </div>
  );
};

export default App;
