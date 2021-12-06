import Header from "./Header";
import UseStateComponent from "./components/UseState";
import UseEffectComponent from "./components/UseEffect";
import UseContextComponent from "./components/UseContext";
import UseReducerComponent from "./components/UseReducer";
import UseRefComponent from "./components/UseRef";
import CustomHookComponent from "./components/CustomHooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="React Hooks Examples" color="blue" />
      <hr />
      <h3>useState</h3>
      <UseStateComponent />
      <hr />
      <h3>useEffect</h3>
      <UseEffectComponent />
      <hr />
      <h3>useContext</h3>
      <UseContextComponent />
      <hr />
      <h3>useReducer</h3>
      <UseReducerComponent />
      <hr />
      <h3>useRef</h3>
      <UseRefComponent />
      <hr />
      <h3>Custom Hook(useFetch)</h3>
      <CustomHookComponent />
      <hr />
    </div>
  );
}

export default App;
