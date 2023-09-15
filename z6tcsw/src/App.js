import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

import List from "./List";

function APP(props) {
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");

  function fun(event) {
    setName(event.target.value);
  }
  function add() {
    setItem((pre) => [...pre, name]);
    setName("");
  }

  function gettingindex(index) {
    //const f=item.filter((item,i)=>{ i!=index})
    const updatedItems = item.filter((items, i) => i !== index);
    setItem(updatedItems);
  }

  return (
    <div className="background-container">
      <h1>To-do-list in React</h1>
      <p>{name}</p>
      <input type="text" onChange={fun} value={name} />

      <button onClick={add}>Add</button>
      {item.map((items, index) => {
        return (
          <li
            onClick={() => {
              gettingindex(index);
            }} id="li"
          >
            {items}
          </li>
        );
      })}
    </div>
  );
}
export default APP;
