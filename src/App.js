import React from 'react';
import './App.css';

import {Switch, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Listings from './pages/Listings';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/listings" component={Listings} />
      </Switch>
    </div>
  );
}

export default App;
