import "./buttons.css";

export const Button = (props) => {
  const buttonTriggered = () => {
    props.action();
  };
  return (
    <button className="array-button" onClick={buttonTriggered}>
      {props.text}
    </button>
  );
};
