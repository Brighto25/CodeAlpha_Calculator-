import Display from "./components/Display";
import ButtonGrid from "./components/ButtonGrid";

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentInput, setCurrentInput] = useState("0");
  const [previousInput, setPreviousInput] = useState(null);
  const [operator, setOperator] = useState(null);

  const buttons = [
    "A/C",
    "÷",
    "x",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "=",
    "1",
    "2",
    "3",
    "0",
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
      setPreviousInput(null);
      setOperator(null);
    } else {
      if (currentInput === "0") {
        setCurrentInput(label);
      } else {
        setCurrentInput(currentInput + label);
      }
    }
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key >= "0" && e.key <= "9") handleClick(e.key);
      else if (e.key === "+") handleClick("+");
      else if (e.key === "-") handleClick("-");
      else if (e.key === "*") handleClick("x");
      else if (e.key === "/") handleClick("÷");
      else if (e.key === "Enter") handleClick("=");
      else if (e.key === "Escape") handleClick("A/C");
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentInput, previousInput, operator]);

  return (
    <div className="calculator">
      <Display
        value={
          operator
            ? `${previousInput} ${operator} ${currentInput}`
            : currentInput
        }
      />
      <ButtonGrid buttons={buttons} onClick={handleClick} />
    </div>
  );
}

export default App;
