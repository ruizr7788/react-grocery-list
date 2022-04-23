import { useState } from "react";
import "../styling/ListForm.css";

const ListForm = (props) => {
  const [item, setItem] = useState("");

  const listChangeHandler = (e) => {
    e.preventDefault();
    if (e.target.value === "") return;
    setItem(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (item === "") return;
    const newItem = `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`;

    props.onSave(newItem);
    setItem("");
  };

  return (
    <form className="list-form" onSubmit={submitHandler}>
      <input
        onChange={listChangeHandler}
        type="text"
        value={item}
        placeholder="Add an item to your list"
      ></input>
      <button type="submit">Add to List</button>
    </form>
  );
};

export default ListForm;
