import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/MainNavbar/MainNavbar';
import ExperiencePage from './templates/ExperiencePage/ExperiencePage';
import HomePage from './templates/HomePage/HomePage';
import AboutPage from './templates/AboutPage/AboutPage';
import ProjectsPage from './templates/ProjectsPage/ProjectsPage';
import CoursesPage from './templates/CoursesPage/CoursesPage';
import ScrollAnimation from 'react-animate-on-scroll';
import { langAvaible } from './content.json';

import './App.scss';
//npm install react-animate-on-scroll --save

function App() {
  let [lang, setLang] = useState(langAvaible.pl);
  const scrollToRef = (ref) => {
    for (let i = 1; i <= ref.current.offsetTop; i++) {
      setTimeout(() => {
        window.scrollTo(0, i)
      }, (i + 5) * .2);

    }
  };
  let homePageRef = useRef(null);
  let aboutPageRef = useRef(null);
  let coursesPage = useRef(null);
  let projectPageRef = useRef(null);
  let experiencePageRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <header className="App__mainNav">
          <MainNavbar scrollToRef={scrollToRef} lang={lang} pagesRef={{ homePageRef, aboutPageRef, projectPageRef, experiencePageRef, coursesPage }} setLang={setLang} />
        </header>
        <Switch>
          <Route path='/' >
            <section ref={homePageRef} className='App__page'>
              <HomePage lang={lang} />
            </section>
            <section ref={aboutPageRef} className='App__page'>
              <AboutPage lang={lang} />
            </section>
            <section ref={coursesPage} className='App__page'>
              <CoursesPage lang={lang} />
            </section>
            <section ref={experiencePageRef} className='App__page'>
              <ExperiencePage lang={lang} />
            </section>
            <section ref={projectPageRef} className='App__page'>
              <ProjectsPage lang={lang} />
            </section>

          </Route>
        </Switch>

      </div>
    </Router >
  );
}

export default App;
