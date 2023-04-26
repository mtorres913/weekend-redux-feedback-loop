import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PageOne from '../Pages/PageOne';
import PageTwo from '../Pages/PageTwo';
import PageThree from '../Pages/PageThree';
import PageFour from '../Pages/PageFour';
import PageFive from '../Pages/PageFive';

function App() {

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route exact path="/">
        <PageOne />
      </Route>
      <Route exact path="/page-2">
        <PageTwo />
      </Route>
      <Route exact path="/page-3">
        <PageThree />
      </Route>
      <Route exact path="/page-4">
        <PageFour />
      </Route>
      <Route exact path="/page-5">
        <PageFive />
      </Route>

 
      </Router>
    </div>
  );
}

export default App;
