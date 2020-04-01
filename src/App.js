import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/MainNavbar/MainNavbar';
import HomePage from './templates/HomePage/HomePage';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <section className="pages">
          <header className="pages-mainNav">
            <MainNavbar />
          </header>
          <Switch>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </section>
        <aside className="App-blank" />
      </div>
    </Router>
  );
}

export default App;
