import Display from "./components/Display";
import ButtonGrid from "./components/ButtonGrid";

import { useState } from "react";
import "./App.css";

function App() {
  const [currentInput, setCurrentInput] = useState("0");
  const [previousInput, setPreviousInput] = useState(null);
  const [operator, setOperator] = useState(null);

  const buttons = [
    "A/C",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  function handleClick(label) {
    if (label === "A/C") {
      setCurrentInput("0");
      setOperator(null);
      setPreviousInput(null);
    } else if (
      label === "+" ||
      label === "-" ||
      label === "x" ||
      label === "÷"
    ) {
      setPreviousInput(currentInput);
      setOperator(label);
      setCurrentInput("0");
    } else if (label === "=") {
      let result;
      switch (operator) {
        case "+":
          result = parseFloat(previousInput) + parseFloat(currentInput);
          break;
        case "-":
          result = parseFloat(previousInput) - parseFloat(currentInput);
          break;
        case "x":
          result = parseFloat(previousInput) * parseFloat(currentInput);
          break;
        case "÷":
          result = parseFloat(previousInput) / parseFloat(currentInput);
          break;
      }

      setCurrentInput(String(result));
    } else {
      if (currentInput === "0") {
        setCurrentInput(label);
      } else {
        setCurrentInput(currentInput + label);
      }
    }
  }

  return (
    <div className="calculator">
      <Display value={currentInput} />
      <ButtonGrid buttons={buttons} onClick={handleClick} />
    </div>
  );
}

export default App;
