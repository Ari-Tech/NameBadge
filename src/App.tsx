import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NameBadgeCreator} from "./NameBadgeCreator";

function App() {
  return (
    <div className="App">
      <NameBadgeCreator fullName={'Arindam Lahiri'}/>
    </div>
  );
}

export default App;
