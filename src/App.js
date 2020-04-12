import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/MainNavbar/MainNavbar';
import ExperiencePage from './templates/ExperiencePage/ExperiencePage';
import HomePage from './templates/HomePage/HomePage';
import AboutPage from './templates/AboutPage/AboutPage';
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
  let experiencePageRef = useRef(null);
  return (
    <Router>
      <div className="App">
        <header className="App__mainNav">
          <MainNavbar scrollToRef={scrollToRef} pagesRef={{ homePageRef, aboutPageRef, projectPageRef, experiencePageRef }} />
        </header>
        <Switch>
          <Route path='/' >
            <section ref={homePageRef} className='App__page'>
              <HomePage />
            </section>
            <section ref={aboutPageRef} className='App__page'>
              <AboutPage />
            </section>
            <section ref={experiencePageRef} className='App__page'>
              <ExperiencePage />
            </section>
            <section ref={projectPageRef} className='App__page'>
              <ProjectsPage />
            </section>

          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
