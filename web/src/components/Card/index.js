import React from "react";

import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <div id="props">
        <h1>Project {props.title}</h1>
        <h3>Created by: {props.owner}</h3>
      </div>

      <div id="buttons">
        <button onClick={props.remove}>Remove</button>
        {/* <button onClick={props.edit}>Edit</button> */}
      </div>
    </div>
  );
}
