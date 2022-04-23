import ListItems from "./ListItems";
import ListForm from "./ListForm";
import "../styling/ToDo.css";

const ToDo = (props) => {
  const saveListItem = (item) => {
    props.addToList(item);
  };

  return (
    <div className="to--do-container">
      <h1>Grocery List</h1>
      <ListForm onSave={saveListItem} />
      <div className="list-container">
        {props.list.length === 0 && <h4>Add to your list!</h4>}
        <ListItems list={props.list} removeFromList={props.removeFromList} />
      </div>
    </div>
  );
};

export default ToDo;
