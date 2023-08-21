import { House } from "phosphor-react";
import "./App.css";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <House size={32} />
    </div>
  );
}

export default App;
