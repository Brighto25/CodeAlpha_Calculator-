import Button from "./Button";
function ButtonGrid({ buttons, onClick }) {
  function getButtonClass(label) {
    if (label === "A/C") return "btn-clear";
    if (label === "=") return "btn-equals";
    if (label === "÷" || label === "x" || label === "-" || label === "+")
      return "btn-operator";
    return "btn-number";
  }
  return (
    <div className="button-grid">
      {buttons.map((label) => (
        <Button
          key={label}
          label={label}
          onClick={() => onClick(label)}
          className={getButtonClass(label)}
        />
      ))}
    </div>
  );
}

export default ButtonGrid;
