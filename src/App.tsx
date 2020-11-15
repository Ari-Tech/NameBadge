import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NameBadgeCreator} from "./NameBadgeCreator";

function App() {
  return (
    <div className="App">
        <div style={{marginTop: "20px"}}>
            Actual Name: Albert Einstein
            <NameBadgeCreator fullName={'Albert Einstein'}/>
        </div>
        <div style={{marginTop: "20px"}}>
            Actual Name: John Fitzgerald Kennedy
            <NameBadgeCreator fullName={'John Fitzgerald Kennedy'}/>
        </div>
        <div style={{marginTop: "20px"}}>
            Actual Name: One Two Three Four
            <NameBadgeCreator fullName={'One Two Three Four'}/>
        </div>
    </div>
  );
}

export default App;
