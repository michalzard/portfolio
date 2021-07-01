import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import "./components/styles/App.scss";
import WorkDisplay from "./components/WorkDisplay";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <WorkDisplay/>
      <Contact/>
    </div>
  );
}

export default App;
