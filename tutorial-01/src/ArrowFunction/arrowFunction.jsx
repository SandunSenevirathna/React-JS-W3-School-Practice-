import React from "react";

const arrowFunction = () => {

  let num1 = 10;
  let num2 = 30;

  const addNumber = () => {
    let result = num1 + num2;
    return result;
  };

  let sum = addNumber();

  return (
    <div>
      <h1 id="addNumber">Total of {num1} & {num2} is {sum}</h1>
      <h3>| {num1} + {num2} = {sum} |</h3>
    </div>
  );
};

export default arrowFunction;
