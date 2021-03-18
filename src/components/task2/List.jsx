import { classroom } from "../../shared/data";
import "./list.css"

export const List = (props) => {
  let sequence = props.sequence;
  let copyClassroom = classroom;

  function sortByAbc() {
    copyClassroom.sort((a, b) => a.name.localeCompare(b.name));
  }

  function sortByInitial() {
   copyClassroom.sort((a,b) => a.id - b.id)
  }

  function sortByRandom() {
    for (var i = copyClassroom.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copyClassroom[i];
      copyClassroom[i] = copyClassroom[j];
      copyClassroom[j] = temp;
    }
  }

  switch (sequence) {
    case "abc":
      sortByAbc();
      break
    case "random":
      sortByRandom();
      break
    default:
      sortByInitial();
  }

  return (
    <ul className="list">
      {copyClassroom.map((kid) => (
        <li key={kid.id}>{kid.name}({kid.id})</li>
      ))}
    </ul>
  );
};
