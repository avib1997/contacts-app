import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactContainer from "./components/ContactContainer";
import AddContact from "./components/AddContact";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/" component={ContactContainer} />
            <Route exact path="/contacts/new" component={AddContact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
