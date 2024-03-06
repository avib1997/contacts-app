import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Contacts from "./components/Contacts";
// import AddContact from "./components/AddContact";
// import { Provider } from "./context";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
// import Test from "./components/Test";
// import EditContact from "./components/EditContact";
// import contact from "./contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <contact />
      </header>
    </div>
  );
}

export default App;
