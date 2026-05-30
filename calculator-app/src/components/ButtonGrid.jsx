import Button from "./Button";
function ButtonGrid({ buttons, onClick }) {
  return (
    <div className="button-grid">
      {buttons.map((label) => (
        <Button key={label} label={label} onClick={() => onClick(label)} />
      ))}
    </div>
  );
}

export default ButtonGrid;
