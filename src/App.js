import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import "./components/styles/App.scss";
import WorkDisplay from "./components/WorkDisplay";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <WorkDisplay/>
      
    </div>
  );
}

export default App;
