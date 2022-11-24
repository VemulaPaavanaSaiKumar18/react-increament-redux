import "./App.css";
import Addtodo from "./components/Addtodo";
import { Addcontact } from "./components/contactApp/Addcontact";
import { Displaycontact } from "./components/contactApp/Displaycontact";
import Increament from "./components/Increament";

function App() {
  return (
    <div className="App">
      <Increament />
      <Addtodo />
      <Addcontact />
      <Displaycontact />
    </div>
  );
}

export default App;
