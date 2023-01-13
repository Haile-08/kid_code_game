import "./App.css";
import Animation_page from "./Components/Animation_page/Animation_page";
import Code_page from "./Components/Code_Page/Code_page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Code_page />
        <Animation_page />
      </header>
    </div>
  );
}

export default App;
