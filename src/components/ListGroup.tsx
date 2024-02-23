import { useState } from "react";
import { MouseEvent } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}
function ListGroup(props: ListGroupProps) {
  //   let items = ["Cairo", "Mosco", "Alex"];

  const getMessage = () => {
    return props.items.length == 0 ? <p>No items found</p> : null;
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {/* {props.items.length == 0 ? <p>No items found</p> : null} */}
      {/* {props.items.length == 0 && <p>No items found</p>} */}
      {getMessage()}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
