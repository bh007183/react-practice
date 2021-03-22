import logo from "./logo.svg";
import "./App.css";
import { Context } from "./contexts";
import React, { useState, useMemo } from "react";
import Body from "./components/body";
import Sibling from "./components/sibling";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [color, setColor] = useState({
    color: "",
  });

  const memo = useMemo(() => ({ color, setColor }), [color, setColor]);
  return (
    <div className="App">
      
      <p>Home Page</p>
      <Router>
      <Link to="/Body">
        <button>Dark</button>
      </Link>
      <Link to="/Sibling">
        <button>light</button>
      </Link>
        <Context.Provider value={memo}>
          <Switch>
          <Route exact path="/Body">
            <Body />
          </Route>
          <Route exact path="/Sibling">
            <Sibling />
          </Route>
          </Switch>
        </Context.Provider>
      </Router>
    </div>
  );
}

export default App;
