import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Navbar />
        </header>
      </div>
      <div>
        <Home />
      </div>  
    </div>
  );
}

export default App;
