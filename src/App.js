import logo from "./logo.svg";
import "./App.css";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useState } from "react";

function App() {

  return (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
  )
}

export default App;
