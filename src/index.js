import './scss/application.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav_bar';
import BodyAbout from './components/body_about';
import BodyAboutRoll from './components/body_about_roll';
import BodyAboutRollAlt from './components/body_about_roll_alt';
import BodyTour from './components/body_tour';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BodyAbout />
        <BodyAboutRollAlt />
        <BodyTour />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
