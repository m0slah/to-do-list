import { useState } from "react";
import "./App.css";
import AddItem from "./Components/AddItems/AddItem";
import ListItem from "./Components/Items/ListItem";

function App() {
  const [enteredItem, setEnteredItem] = useState([
    {
      id:1
      ,
      title:"Finish ACP Project"
    }
  ]);

  
  

  const addItemHandler = (Item) => {
    setEnteredItem((prevItems) => {
      return [...prevItems, Item];
    });
  };

  return (
    <div className="App">
      <AddItem onAddItems={addItemHandler} />
      <ListItem items={enteredItem}/>
    </div>
  );
}

export default App;
