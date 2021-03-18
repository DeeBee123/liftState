import "./box.css";

export const Box = (props) => {
return (
    <div className="box" style={{borderColor: props.color, backgroundColor: props.otherProp}}>{props.children}</div>
)
}