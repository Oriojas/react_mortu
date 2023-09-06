import logo from "./logo.svg";
import Wellcome from "./components/Wellcome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wellcome message="Hola React" name="Oscar"></Wellcome>
      </header>
    </div>
  );
}

export default App;
