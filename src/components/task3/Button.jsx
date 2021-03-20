import "./button.css"
export const Button = (props) => {
    const handleClick = ()=> {
        props.action()
    }
return (
    <button className="button" onClick={handleClick}>{props.buttonName}</button>
)
}