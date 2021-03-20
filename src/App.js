import "./App.css";
import Parent from "./components/task1/parent/Parent";
import Father from "./components/task2/Father";
import {Task3} from "./components/task3/Task3"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Parent /> */}
        {/* <Father /> */}
        <Task3/>
      </header>
    </div>
  );
}

export default App;
