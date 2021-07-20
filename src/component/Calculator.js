
import React, { useState, useEffect } from "react";
import CalculatorKey from "./CalculatorKey";
import "./Calculator.css";

function Calculator() {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const clearData = () => {
    setNextValue("0");
    // setPrevValue(0);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <div className="calculator">
      <h1 className =" heading">Calculator </h1>
      <div className = "calculator_wrapper">
      <div className="calculator-input">
        <div className="result">{nextValue} </div>
      </div>
      <div className="calculator-keypad">
        <div className="1st-row">
          <CalculatorKey className="keys-function clear" keyValue={"c"} onClick={handleOperation} />
          <CalculatorKey className="keys-function" keyValue={"<-"} onClick={handleOperation} />
          <CalculatorKey className="keys-function" keyValue={"%"} onClick={handleOperation} />
          <CalculatorKey className="keys-operators" keyValue={"/"} onClick={handleOperation} />
        </div>
        <div>
          <CalculatorKey className="keys-numbers" keyValue={7} onClick={handleOperation} />
          <CalculatorKey className="keys-numbers" keyValue={8} onClick={handleOperation} />
          <CalculatorKey className="keys-numbers" keyValue={9} onClick={handleOperation} />
          <CalculatorKey className="keys-operators" keyValue={"*"} onClick={handleOperation} />
        </div>
        <div>
          <CalculatorKey className="keys-numbers" keyValue={4} onClick={handleOperation} />
          <CalculatorKey className="keys-numbers" keyValue={5} onClick={handleOperation} />
          <CalculatorKey className="keys-numbers" keyValue={6} onClick={handleOperation} />
          <CalculatorKey className="keys-operators" keyValue={"-"} onClick={handleOperation} />
        </div>
        <div>
          <CalculatorKey className="keys-numbers" keyValue={1} onClick={handleOperation} />
          <CalculatorKey className="keys-numbers" keyValue={2} onClick={handleOperation} />
          <CalculatorKey className="keys-numbers" keyValue={3} onClick={handleOperation} />
          <CalculatorKey className="keys-operators" keyValue={"+"} onClick={handleOperation} />
        </div>
        <div>
        <CalculatorKey
            className="key-zero"
            keyValue={0}
            onClick={handleOperation}
          />
          <CalculatorKey
            className="keys-numbers key-dot"
            keyValue={"."}
            onClick={handleOperation}
          />
          <CalculatorKey className="keys-operators equals" keyValue={"="} onClick={handleOperation} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Calculator;