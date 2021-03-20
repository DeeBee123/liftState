
import "./list.css"

export const List = (props) => {
  let list = props.array;
  
  return (
    <ul className="list">
      {list.map((kid) => (
        <li key={kid.id}>{kid.name} ({kid.id})</li>
      ))}
    </ul>
  );
};
