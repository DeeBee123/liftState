import "./textarea.css"
export const Textarea = (props) => {
  const handleChange = (event) => {
      const target = event.target.value
    props.action(target);
  };
  return <textarea className="textarea" onChange={handleChange} value={props.value}></textarea>;
};
