import logo from "./logo.svg";
import "./App.css";
import HelpForm from "./components/Form/helpForm.jsx";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <HelpForm />
    </div>
  );
}

export default App;
