import logo from "./logo.svg";
import "./App.css";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Parent isEditable/>
      <Parent />
    </div>
  );
}

export default App;
