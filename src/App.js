import "./App.css";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Parent isEditable />
      <Parent />
      <Parent isEditable />
    </div>
  );
}

export default App;
