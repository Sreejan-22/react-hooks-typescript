import Header from "./Header";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseContextComponent from "./components/UseContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="React Hooks Examples" color="blue" />
      <hr />
      <h3>useState</h3>
      <UseState />
      <hr />
      <h3>useEffect</h3>
      <UseEffect />
      <hr />
      <h3>useContext</h3>
      <UseContextComponent />
      <hr />
    </div>
  );
}

export default App;
