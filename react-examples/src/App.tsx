import "./App.css";
import { HelloClass } from "./1_class_hierarki";
import HelloFunctional from "./2_functional_component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloClass />
        {/* <HelloFunctional /> */}
      </header>
    </div>
  );
}

export default App;
