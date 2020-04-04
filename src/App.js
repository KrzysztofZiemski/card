import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/MainNavbar/MainNavbar';
import HomePage from './templates/HomePage/HomePage';
import ScrollAnimation from 'react-animate-on-scroll';

import './App.scss';
//npm install react-animate-on-scroll --save

function App() {

  const scrollBack = (ref, back) => {

  }

  const scrollToRef = (ref) => {
    for (let i = 1; i <= ref.current.offsetTop + 500; i++) {
      setTimeout(() => {
        window.scrollTo(0, i)
      }, (i + 5) * .2);

    }
  };
  let homePageRef = useRef(null);
  let aboutPageRef = useRef(null);
  let stackPageRef = useRef(null);
  let projectPageRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <header className="pages-mainNav">
          <MainNavbar scrollToRef={scrollToRef} pagesRef={{ homePageRef, aboutPageRef, stackPageRef, projectPageRef }} />
        </header>
        <Switch>
          <Route path='/' >
            <section ref={homePageRef}>
              <HomePage />
            </section>
            <section ref={aboutPageRef}>

              <p>sekcja 2</p>
              <p>sekcja 2</p>

              <p>sekcja 2</p>
              <p>sekcja 2</p>

              <p>sekcja 2</p>

              <p>sekcja 2</p>
              <p>sekcja 2</p>

              <p>sekcja 2</p>

              <p>sekcja 2</p>

              <var> <p>sekcja 2</p></var>

              <p>sekcja 2</p>
              <p>sekcja 2</p>

              <p>sekcja 2</p>
              <p>sekcja 2</p>
              <p>sekcja 2</p>
              <p>sekcja 2</p>

              <p>sekcja 2</p>
              <p>sekcja 2</p>

              <p>sekcja 2</p>

              <p>sekcja 2</p>
              <p>sekcja 2</p>

              <p>sekcja 2</p>

              <p>sekcja 2</p>

              <var> <p>sekcja 2</p></var>

              <p>sekcja 2</p>
              <p>sekcja 2</p>

              <p>sekcja 2</p>
              <p>sekcja 2</p>

            </section>
            <ScrollAnimation animateIn="fadeIn">
              <section ref={stackPageRef}>

                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>

                <p>sekcja 3</p>
                <p>sekcja 3</p>
              </section>
            </ScrollAnimation>
            <section ref={projectPageRef}>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
              <p>sekcja 4</p>
            </section>

          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
