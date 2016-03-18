import './scss/application.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav_bar';
import BodyAbout from './components/body_about';
import BodyAboutRoll from './components/body_about_roll';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BodyAbout />
        <BodyAboutRoll />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
