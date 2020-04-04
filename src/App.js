import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/MainNavbar/MainNavbar';
import HomePage from './templates/HomePage/HomePage';

import './App.scss';

function App() {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  let homePageRef = useRef(null);
  let aboutPageRef = useRef(null);
  let stackPageRef = useRef(null);
  let projectPageRef = useRef(null);
  // handleScrollToElement(event) {
  //   const tesNode = ReactDOM.findDOMNode(this.refs.test)
  //   if (some_logic){
  //     window.scrollTo(0, tesNode.offsetTop);
  //   }
  // }

  // render() {

  //   return (
  //     <div>
  //       <div ref="test"></div>
  //     </div>)
  // }

  return (
    <Router>
      <div className="App">
        <section className="pages">
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
        </section>
        <aside className="App-blank" />
      </div>
    </Router>
  );
}

export default App;
