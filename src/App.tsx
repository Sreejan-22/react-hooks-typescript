import Header from "./Header";
import UseStateComponent from "./components/UseState";
import UseEffectComponent from "./components/UseEffect";
import UseContextComponent from "./components/UseContext";
import UseReducerComponent from "./components/UseReducer";
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
    </div>
  );
}

export default App;
