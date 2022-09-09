import "./App.css";
import Main from "./components/Main";
import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Main />
    </div>
  );
}

export default App;
