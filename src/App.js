import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/MainNavbar/MainNavbar';
import HomePage from './templates/HomePage/HomePage';
import AboutPage from './templates/AboutPage/AboutPage';
import StackPage from './templates/StackPage/StackPage';
import ProjectsPage from './templates/ProjectsPage/ProjectsPage';

import ScrollAnimation from 'react-animate-on-scroll';

import './App.scss';
//npm install react-animate-on-scroll --save

function App() {

  const scrollToRef = (ref) => {
    for (let i = 1; i <= ref.current.offsetTop; i++) {
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
              <AboutPage />
            </section>
            <ScrollAnimation animateIn="fadeIn">
              <section ref={stackPageRef}>
                <StackPage />
              </section>
            </ScrollAnimation>
            <section ref={projectPageRef}>
              <ProjectsPage />
            </section>

          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
