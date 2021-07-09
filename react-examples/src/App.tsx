import "./App.css";
import { ClassComponent } from "./components/1_ClassComponent";
import FunctionalComponent from "./components/2_FunctionalComponent";
import UseContextComponent from "./components/3_UseContextComponent";
import UseRefComponent from "./components/4_UseRefComponent";
import CustomHookComponent from "./components/5_CustomHookComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassComponent /> */}
        {/* <FunctionalComponent /> */}
        {/* <UseContextComponent /> */}
        {/* <UseRefComponent /> */}
        <CustomHookComponent />
      </header>
    </div>
  );
}

export default App;
