import logo from './logo.svg';
import './App.css';
import {Context} from "./pages/context"
import React, {useState, useMemo} from "react";
import Body from "./components/body"
import Sibling from "./components/sibling"


function App() {

  const [color, setColor] = useState ({
    color: ""
  })

  const memo = useMemo(() => ({color, setColor}), [color, setColor])
  return (
    <div className="App">
      <Context.Provider value={memo}>
        <Body/>
        <Sibling/>

      </Context.Provider>
      
    </div>
  );
}

export default App;
