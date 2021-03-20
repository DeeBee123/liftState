import "./box.css";

export const Box = (props) => {
  return (
    <div
      className="boxy"
      style={{
        backgroundColor: props.backgroundColor,
        height: props.height,
        borderTopLeftRadius: props.topLRadius,
        borderTopRightRadius: props.topRRadius,
        borderBottomRightRadius: props.bottomRRadius,
        borderBottomLeftRadius: props.bottomLRadius
      }}
    >
      {props.children}
    </div>
  );
};
