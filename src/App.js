import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import All from './components/allPlaces';
import Place from './components/onePlace';


function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Route exact path='/' component={All}/>
          <Route  path='/place' component={Place}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
