import './scss/application.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav_bar';
import BodyAbout from './components/body_about';
import BodyAboutRollAlt2 from './components/body_about_roll_alt2';
import BodyTour from './components/body_tour';
import BodyTourRoll from './components/body_tour_roll';
import BodyDiscs from './components/body_discs';
import BodyDiscsRoll from './components/body_discs_roll';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BodyAbout />
        <BodyAboutRollAlt2 />
        <BodyTour />
        <BodyTourRoll />
        <BodyDiscs />
        <BodyDiscsRoll />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
