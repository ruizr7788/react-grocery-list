import "../styling/ListItems.css";

const ListItems = (props) => {
  const handleRemove = (e) => {
    // console.log(props.removeFromList);
    props.removeFromList(e.nativeEvent.path[1].firstChild.textContent);
    // console.log(e.nativeEvent.path[1].firstChild.textContent);
  };

  return (
    <ul className="list-items-ul">
      {props.list.map((item, i) => {
        return (
          <div className="list-item-div">
            <li className="list-item" key={i}>
              {item}
            </li>
            <button className="delete-button" onClick={handleRemove}>
              X
            </button>
          </div>
        );
      })}
    </ul>
  );
};
export default ListItems;
