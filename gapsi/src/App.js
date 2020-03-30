import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import data from './data/data.json';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home version={data.info.name}/>
          </Route>
          <Route exact path="/productos">
            <Products data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
