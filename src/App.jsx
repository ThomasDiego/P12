import TopBar from "./components/topBar";
import "./App.css";
import LeftBar from "./components/leftBar";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <TopBar />
      <div className="page">
        <LeftBar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
