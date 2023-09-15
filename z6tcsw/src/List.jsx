import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
function List(props) {
  const f = props.dum;
  return (
    //  style={{ textDecoration: isClicked ? 'line-through' : 'none' }}
    <li>{f}</li>
  );
}
export default List;
