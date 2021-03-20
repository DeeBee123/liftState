import "./mirror.css"

export const Mirror = (props) => {
   
  return (
    <div className="mirror" style={{ color: props.color }}>
      {props.text}
    </div>
  );
};
