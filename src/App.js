import "./App.css";
import ToDo from "./components/ToDo";
import { useState } from "react";

function App() {
  const [listArray, setListArray] = useState([]);

  const updateList = (newItem) => {
    setListArray((prevList) => [newItem, ...prevList]);
  };

  const removeItem = (removeItem) => {
    if (!listArray.includes(removeItem)) return;
    listArray.splice(listArray.indexOf(removeItem), 1);
    setListArray((prevList) => [...prevList]);
  };
  console.log(listArray);

  return (
    <div className="App">
      <ToDo
        list={listArray}
        addToList={updateList}
        removeFromList={removeItem}
      />
    </div>
  );
}

export default App;
