import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav_bar';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        Body
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
