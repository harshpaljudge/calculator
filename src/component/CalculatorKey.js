import React from "react";
import "./Calculator.css";

function CalculatorKey(props){
    return(
    <button className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
    {props.keyValue}{" "}
  </button>
);
}

export default CalculatorKey;
  