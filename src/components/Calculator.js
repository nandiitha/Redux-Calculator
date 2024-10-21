import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "../styles/calculator.css";
import { add, subtract, multiply, divide, clear } from "../redux/action";

function Calculator() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.result);

  const handleAdd = () => {
    dispatch(add(Number(value1), Number(value2)));
    setValue1("");
    setValue2("");
  };
  const handleSubtract = () => {
    dispatch(subtract(Number(value1), Number(value2)));
    setValue1("");
    setValue2("");
  };
  const handleMultiply = () => {
    dispatch(multiply(Number(value1), Number(value2)));
    setValue1("");
    setValue2("");
  };
  const handleDivide = () => {
    dispatch(divide(Number(value1), Number(value2)));
    setValue1("");
    setValue2("");
  };
  const handleClear = () => {
    dispatch(clear());
    setValue1("");
    setValue2("");
  };
  return (
    <>
      <div className="container-fluid p-5"></div>
      <h1>Redux Calculator</h1>
      <div className="calculator">
        <input
          type="number"
          placeholder="Enter Number 1"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Number 2"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
        <div className="buttons">
          <button onClick={handleAdd}>+</button>
          <button onClick={handleSubtract}>-</button>
          <button onClick={handleMultiply}>x</button>
          <button onClick={handleDivide}>/</button>
          <button onClick={handleClear}>clear</button>
        </div>
        <h2>Result : {result}</h2>
      </div>
    </>
  );
}

export default Calculator;
